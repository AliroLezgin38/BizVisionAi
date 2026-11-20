export function Pager({ info, pages }: { info: string; pages: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
      <span>{info}</span>
      <div className="flex items-center gap-4 font-medium text-brand">
        <span>‹</span>
        {pages.map((p) => <span key={p}>{p}</span>)}
        <span>›</span>
      </div>
    </div>
  );
}
