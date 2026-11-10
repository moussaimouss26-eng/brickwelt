export function DisclaimerBanner({ className = "" }: { className?: string }) {
  return (
    <p className={`disclaimer ${className}`}>
      BrickWelt ist ein unabhängiger Demo-Shop und steht in keiner Verbindung zur LEGO
      Group. Wir sind weder autorisiert noch lizenziert von der LEGO Group. LEGO® ist
      eine Marke der LEGO Group.
    </p>
  );
}
