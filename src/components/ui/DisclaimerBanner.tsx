export function DisclaimerBanner({ className = "" }: { className?: string }) {
  return (
    <p className={`disclaimer ${className}`}>
      BrickWelt / BrickNova verkauft ausschließlich Spielzeug unter eigener Marke.
      Es werden keine Lizenzen oder Autorisierungen Dritter beansprucht.
    </p>
  );
}
