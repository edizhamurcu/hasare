import { site } from "@/lib/site";

type Props = {
  className?: string;
  linkClassName?: string;
  separator?: string;
  layout?: "inline" | "stack";
};

export function PhoneNumbers({
  className = "",
  linkClassName = "hover:underline",
  separator = " · ",
  layout = "inline",
}: Props) {
  if (layout === "stack") {
    return (
      <span className={`flex flex-col gap-1 ${className}`}>
        {site.phones.map((phone) => (
          <a
            key={phone.e164}
            href={`tel:${phone.e164.replace(/\s/g, "")}`}
            className={linkClassName}
          >
            {phone.display}
          </a>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {site.phones.map((phone, index) => (
        <span key={phone.e164}>
          {index > 0 && separator}
          <a
            href={`tel:${phone.e164.replace(/\s/g, "")}`}
            className={linkClassName}
          >
            {phone.display}
          </a>
        </span>
      ))}
    </span>
  );
}
