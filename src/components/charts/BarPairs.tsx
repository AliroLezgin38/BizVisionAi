type Props = { data: [number, number][]; labels: string[]; ticks: string[]; max: number };

export function BarPairs({ data, labels, ticks, max }: Props) {
  return (
    <div>
      <div className="flex gap-4">
        <div className="flex h-[240px] flex-col justify-between text-xs text-muted">{ticks.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="relative flex h-[240px] flex-1 items-end justify-between">
          <div className="absolute inset-0 flex flex-col justify-between">
            {ticks.map((t) => <div key={t} className="border-t border-dashed border-line" />)}
          </div>
          {data.map(([s, c], i) => (
            <div key={i} className="relative flex flex-1 items-end justify-center gap-1.5">
              <div className="w-[9%] min-w-[10px] max-w-[38px] rounded-t-md bg-brand" style={{ height: `${(s / max) * 100}%` }} />
              <div className="w-[9%] min-w-[10px] max-w-[38px] rounded-t-md bg-[#CDC7F8]" style={{ height: `${(c / max) * 100}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex justify-between pl-10 text-xs text-muted sm:pl-12">
        {labels.map((l) => <span key={l} className="flex-1 text-center">{l}</span>)}
      </div>
    </div>
  );
}
