import { MapPin, Phone, Mail } from "lucide-react";
import { addressMultiline, siteContact } from "@/data/contact";

type Props = {
  /** denser layout for footer / checkout sidebars */
  compact?: boolean;
  className?: string;
  showEmail?: boolean;
};

export function ContactDetails({
  compact = false,
  className = "",
  showEmail = true,
}: Props) {
  const lines = addressMultiline();

  return (
    <address
      className={`not-italic text-brick-black/70 ${compact ? "text-sm" : "text-sm leading-relaxed"} ${className}`}
    >
      <p className={`font-semibold text-brick-black ${compact ? "mb-2" : "mb-3"}`}>
        {siteContact.company}
      </p>
      <ul className={compact ? "space-y-2" : "space-y-3"}>
        <li className="flex gap-2.5">
          <MapPin
            className="mt-0.5 h-4 w-4 shrink-0 text-brick-red"
            aria-hidden
          />
          <span>
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </li>
        <li className="flex items-center gap-2.5">
          <Phone className="h-4 w-4 shrink-0 text-brick-red" aria-hidden />
          <a
            href={siteContact.phoneHref}
            className="font-medium text-brick-black hover:text-brick-red"
          >
            {siteContact.phoneDisplay}
          </a>
        </li>
        {showEmail && (
          <li className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 shrink-0 text-brick-red" aria-hidden />
            <a
              href={`mailto:${siteContact.email}`}
              className="hover:text-brick-red"
            >
              {siteContact.email}
            </a>
          </li>
        )}
      </ul>
    </address>
  );
}
