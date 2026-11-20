export function Avatar({ size = 44, initials = "EM", src }: { size?: number; initials?: string; src?: string }) {
  if (src) return <img src={src} alt="" style={{ width: size, height: size }} className="shrink-0 rounded-full object-cover" />;
  return (
    <div style={{ width: size, height: size }} className="grid shrink-0 place-items-center rounded-full bg-slate-300 text-sm font-semibold text-navy">
      {initials}
    </div>
  );
}
