"use client";

import { useEffect, useId, useRef, useState } from "react";

type PestKind = "cockroach" | "mosquito";
type Lane = "left" | "right";

type Agent = {
  kind: PestKind;
  lane: Lane;
  x: number;
  y: number;
  angle: number;
  speed: number;
  width: number;
  height: number;
  opacity: number;
  wanderIn: number;
  /** Fareye kaçış / hızlanma */
  fleeUntil: number;
  /** Hamamböceği ani koşu */
  dashUntil: number;
  /** Sivrisinek zigzag */
  wobblePhase: number;
  isAlpha?: boolean;
};

type LaneBounds = { minX: number; maxX: number };
type MovementBounds = {
  leftLane: LaneBounds;
  rightLane: LaneBounds;
  minY: number;
  maxY: number;
};

const CONTENT_MAX_PX = 1152;
const LANE_GAP = 28;
const EDGE_MARGIN = 12;

const COCKROACH_SIZES = [
  { width: 128, height: 77, opacity: 0.96, isAlpha: true },
  { width: 112, height: 67, opacity: 0.94 },
  { width: 96, height: 58, opacity: 0.9 },
] as const;

const MOSQUITO_SIZES = [
  { width: 52, height: 52, opacity: 0.92 },
  { width: 44, height: 44, opacity: 0.88 },
  { width: 38, height: 38, opacity: 0.85 },
] as const;

const RENDER_LIST: {
  kind: PestKind;
  width: number;
  height: number;
  opacity: number;
  isAlpha?: boolean;
}[] = [
  ...COCKROACH_SIZES.map((s) => ({ kind: "cockroach" as const, ...s })),
  ...MOSQUITO_SIZES.map((s) => ({ kind: "mosquito" as const, ...s })),
];

function randomAngle() {
  return Math.random() * Math.PI * 2;
}

function getMovementBounds(width: number, height: number): MovementBounds {
  const contentW = Math.min(CONTENT_MAX_PX, width - 32);
  const contentLeft = (width - contentW) / 2;
  const contentRight = contentLeft + contentW;

  const leftMax = Math.max(EDGE_MARGIN, contentLeft - LANE_GAP);
  const rightMin = Math.min(width - EDGE_MARGIN, contentRight + LANE_GAP);

  return {
    leftLane: { minX: EDGE_MARGIN, maxX: leftMax },
    rightLane: { minX: rightMin, maxX: width - EDGE_MARGIN },
    minY: EDGE_MARGIN,
    maxY: height - EDGE_MARGIN,
  };
}

function laneForIndex(i: number): Lane {
  return i % 2 === 0 ? "left" : "right";
}

function spawnAgent(
  kind: PestKind,
  size: { width: number; height: number; opacity: number; isAlpha?: boolean },
  bounds: MovementBounds,
  lane: Lane,
  fromEdge = false
): Agent | null {
  const laneBounds = lane === "left" ? bounds.leftLane : bounds.rightLane;
  const laneWidth = laneBounds.maxX - laneBounds.minX - size.width;
  const laneHeight = bounds.maxY - bounds.minY - size.height;

  if (laneWidth < 72 || laneHeight < 72) return null;

  const midY = bounds.minY + laneHeight * 0.5;
  let x: number;
  let y: number;
  let angle: number;

  if (fromEdge) {
    const enterFromTop = Math.random() > 0.5;
    x = laneBounds.minX + Math.random() * laneWidth;
    if (enterFromTop) {
      y = bounds.minY - size.height - 16;
      angle = Math.PI / 2 + (Math.random() - 0.5) * 0.7;
    } else {
      y = bounds.maxY + 16;
      angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.7;
    }
    if (kind === "cockroach" && lane === "left") {
      x = laneBounds.minX - size.width - 24;
      y = midY + (Math.random() - 0.5) * laneHeight * 0.6;
      angle = (Math.random() - 0.5) * 0.5;
    } else if (kind === "cockroach" && lane === "right") {
      x = laneBounds.maxX + 24;
      y = midY + (Math.random() - 0.5) * laneHeight * 0.6;
      angle = Math.PI + (Math.random() - 0.5) * 0.5;
    }
  } else {
    x = laneBounds.minX + Math.random() * laneWidth;
    y = bounds.minY + Math.random() * laneHeight;
    angle = randomAngle();
  }

  return {
    kind,
    lane,
    x,
    y,
    angle,
    speed:
      kind === "cockroach"
        ? (size.isAlpha ? 28 : 22) + Math.random() * 14
        : 42 + Math.random() * 32,
    width: size.width,
    height: size.height,
    opacity: size.opacity,
    wanderIn: 0.5 + Math.random() * 2,
    fleeUntil: 0,
    dashUntil: 0,
    wobblePhase: Math.random() * Math.PI * 2,
    isAlpha: size.isAlpha,
  };
}

function createAgents(width: number, height: number): Agent[] {
  const bounds = getMovementBounds(width, height);
  const agents: Agent[] = [];

  RENDER_LIST.forEach((meta, i) => {
    const agent = spawnAgent(meta.kind, meta, bounds, laneForIndex(i), true);
    if (agent) agents.push(agent);
  });

  return agents;
}

function clampAgent(agent: Agent, bounds: MovementBounds) {
  const lane = agent.lane === "left" ? bounds.leftLane : bounds.rightLane;
  const minX = lane.minX;
  const maxX = lane.maxX - agent.width;
  const minY = bounds.minY;
  const maxY = bounds.maxY - agent.height;

  let hit = false;

  if (agent.x < minX) {
    agent.x = minX;
    hit = true;
  } else if (agent.x > maxX) {
    agent.x = maxX;
    hit = true;
  }
  if (agent.y < minY) {
    agent.y = minY;
    hit = true;
  } else if (agent.y > maxY) {
    agent.y = maxY;
    hit = true;
  }

  if (hit) agent.angle = randomAngle();
}

function agentClassName(agent: Agent, fleeing: boolean, dashing: boolean) {
  if (agent.kind === "cockroach") {
    let c = "pest-animation__agent pest-animation__crawler";
    if (dashing) c += " pest-animation__crawler--dash";
    if (fleeing) c += " pest-animation__crawler--flee";
    if (agent.isAlpha) c += " pest-animation__crawler--alpha";
    return c;
  }
  let c = "pest-animation__agent pest-animation__flyer";
  if (fleeing) c += " pest-animation__flyer--flee";
  return c;
}

function CockroachSvg({ idPrefix }: { idPrefix: string }) {
  return (
    <svg viewBox="0 0 120 72" className="pest-animation__cockroach-svg" role="presentation" focusable="false">
      <defs>
        <linearGradient id={`${idPrefix}-body`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="45%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-shine`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#333" stopOpacity="0" />
          <stop offset="40%" stopColor="#666" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#222" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M8 36 L2 32 M8 38 L2 42" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
      <g className="pest-animation__legs pest-animation__legs--a">
        <path d="M28 50 L14 66 M38 52 L26 68 M48 50 L38 66 M58 48 L50 64" stroke="#0a0a0a" strokeWidth="2.8" strokeLinecap="round" />
      </g>
      <ellipse cx="42" cy="38" rx="34" ry="18" fill={`url(#${idPrefix}-body)`} />
      <ellipse cx="42" cy="36" rx="30" ry="14" fill={`url(#${idPrefix}-shine)`} />
      <g className="pest-animation__legs pest-animation__legs--b">
        <path d="M28 26 L14 10 M38 24 L26 8 M48 26 L38 10 M58 28 L50 12" stroke="#0a0a0a" strokeWidth="2.8" strokeLinecap="round" />
      </g>
      <ellipse cx="68" cy="38" rx="14" ry="16" fill="#050505" />
      <ellipse cx="82" cy="38" rx="12" ry="11" fill="#000000" />
      <g className="pest-animation__antenna pest-animation__antenna--a">
        <path d="M88 32 C96 22, 106 14, 116 6" fill="none" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="116" cy="6" r="2.2" fill="#1a1a1a" />
      </g>
      <g className="pest-animation__antenna pest-animation__antenna--b">
        <path d="M88 36 C98 28, 108 20, 118 12" fill="none" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="118" cy="12" r="2.2" fill="#1a1a1a" />
      </g>
      <circle cx="90" cy="33" r="2.2" fill="#111" />
    </svg>
  );
}

function MosquitoSvg() {
  return (
    <svg viewBox="0 0 64 64" className="pest-animation__mosquito-svg" role="presentation" focusable="false">
      <g className="pest-animation__wings pest-animation__wings--a">
        <ellipse cx="22" cy="28" rx="14" ry="6" fill="#dce7ef" opacity="0.65" />
      </g>
      <g className="pest-animation__wings pest-animation__wings--b">
        <ellipse cx="42" cy="28" rx="14" ry="6" fill="#c5d4e0" opacity="0.55" />
      </g>
      <ellipse cx="32" cy="34" rx="4" ry="14" fill="#2d3748" />
      <ellipse cx="32" cy="22" rx="5" ry="5" fill="#1a202c" />
      <g stroke="#1a202c" strokeWidth="1.2" strokeLinecap="round" fill="none">
        <path d="M28 30 L18 22 M36 30 L46 22" />
        <path d="M32 38 L32 48" />
      </g>
    </svg>
  );
}

/** Hero kenar şeritlerinde dekoratif haşere — fareye kaçış, koşu patlaması, zigzag uçuş */
export function WalkingCockroach() {
  const baseId = useId();
  const [enabled, setEnabled] = useState(false);
  const [agents, setAgents] = useState<Agent[]>([]);
  const agentsRef = useRef<Agent[]>([]);
  const boundsRef = useRef<MovementBounds | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const surpriseRef = useRef(8 + Math.random() * 6);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px) and (prefers-reduced-motion: no-preference)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const section = document.querySelector<HTMLElement>("[data-hero-pests]");
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        mouseRef.current.active = false;
        return;
      }
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const syncBounds = () => {
      const w = section.clientWidth;
      const h = section.clientHeight;
      boundsRef.current = getMovementBounds(w, h);
      agentsRef.current = createAgents(w, h);
      setAgents([...agentsRef.current]);
    };

    syncBounds();
    const ro = new ResizeObserver(syncBounds);
    ro.observe(section);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const bounds = boundsRef.current;
      if (!bounds) {
        raf = requestAnimationFrame(tick);
        return;
      }

      surpriseRef.current -= dt;
      if (surpriseRef.current <= 0) {
        surpriseRef.current = 22 + Math.random() * 18;
        const roaches = agentsRef.current.filter((a) => a.kind === "cockroach");
        if (roaches.length > 0) {
          const pick = roaches[Math.floor(Math.random() * roaches.length)];
          pick.dashUntil = 0.9 + Math.random() * 0.5;
          pick.angle = randomAngle();
        }
      }

      for (let i = 0; i < agentsRef.current.length; i++) {
        const agent = agentsRef.current[i];
        let speedMul = 1;

        if (agent.dashUntil > 0) {
          agent.dashUntil -= dt;
          speedMul = agent.isAlpha ? 3.4 : 2.9;
        }

        if (agent.fleeUntil > 0) {
          agent.fleeUntil -= dt;
        }

        if (mouseRef.current.active) {
          const cx = agent.x + agent.width / 2;
          const cy = agent.y + agent.height / 2;
          const dx = cx - mouseRef.current.x;
          const dy = cy - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          const fleeR =
            agent.kind === "cockroach" ? (agent.isAlpha ? 160 : 130) : 110;

          if (dist < fleeR && dist > 6) {
            const strength = 1 - dist / fleeR;
            const fleeAngle = Math.atan2(dy, dx);
            const turn = agent.kind === "cockroach" ? 0.22 : 0.28;
            agent.angle += (fleeAngle - agent.angle) * turn * strength;
            agent.fleeUntil = 0.2;
            speedMul = Math.max(
              speedMul,
              agent.kind === "cockroach"
                ? 2.4 + strength * (agent.isAlpha ? 2.2 : 1.8)
                : 2 + strength * 2.2
            );
          }
        }

        const jitter =
          agent.kind === "mosquito"
            ? (Math.random() - 0.5) * (agent.fleeUntil > 0 ? 0.14 : 0.07)
            : (Math.random() - 0.5) * 0.025;

        agent.wanderIn -= dt;
        if (agent.wanderIn <= 0 && agent.dashUntil <= 0) {
          agent.angle += (Math.random() - 0.5) * (agent.kind === "mosquito" ? 2.4 : 1.2);
          agent.wanderIn =
            agent.kind === "mosquito" ? 0.35 + Math.random() * 1 : 1.2 + Math.random() * 2.8;

          if (agent.kind === "cockroach" && Math.random() < 0.012) {
            agent.dashUntil = 0.28 + Math.random() * 0.35;
          }
        }

        agent.angle += jitter;

        const wobbleAmp =
          agent.kind === "mosquito" ? (agent.fleeUntil > 0 ? 38 : 22) : 0;
        agent.wobblePhase += dt * (agent.fleeUntil > 0 ? 16 : 10);
        const wobble = Math.sin(agent.wobblePhase) * wobbleAmp;
        const perp = agent.angle + Math.PI / 2;

        const step = agent.speed * speedMul * dt;
        agent.x += Math.cos(agent.angle) * step + Math.cos(perp) * wobble * dt;
        agent.y += Math.sin(agent.angle) * step + Math.sin(perp) * wobble * dt;

        clampAgent(agent, bounds);

        const node = nodeRefs.current[i];
        if (node) {
          const deg = (agent.angle * 180) / Math.PI;
          const fleeing = agent.fleeUntil > 0;
          const dashing = agent.dashUntil > 0;
          node.className = agentClassName(agent, fleeing, dashing);
          node.style.transform = `translate3d(${agent.x}px, ${agent.y}px, 0) rotate(${deg}deg)`;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled || agents.length === 0) return null;

  return (
    <div className="pest-animation" aria-hidden="true" data-nosnippet>
      {agents.map((agent, i) => (
        <div
          key={i}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          className={agentClassName(agent, false, false)}
          style={{
            width: agent.width,
            height: agent.height,
            opacity: agent.opacity,
            animationDelay: `${i * 0.18}s`,
            ["--pest-opacity" as string]: String(agent.opacity),
          }}
        >
          {agent.kind === "cockroach" ? (
            <CockroachSvg idPrefix={`${baseId}-${i}`} />
          ) : (
            <MosquitoSvg />
          )}
        </div>
      ))}
    </div>
  );
}
