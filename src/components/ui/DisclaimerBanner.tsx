export function DisclaimerBanner({ className = "" }: { className?: string }) {
  return (
    <p className={`disclaimer ${className}`}>
      BrickNova verkauft ausschließlich Spielzeug unter eigener Marke.
      Es werden keine Lizenzen oder Autorisierungen Dritter beansprucht.
    </p>
  );
}
