import { Truck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-brick-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,209,0,0.15),transparent)] bg-[length:200%_100%] animate-shimmer" />
      <div className="container-bw relative flex items-center justify-center gap-2 py-2 text-center text-xs font-semibold sm:text-sm">
        <Truck className="hidden h-4 w-4 text-brick-yellow sm:block" aria-hidden />
        <span>
          Kostenloser Versand ab 49&nbsp;€ · BrickNova Kinderspielzeug · Versand DE
        </span>
      </div>
    </div>
  );
}
