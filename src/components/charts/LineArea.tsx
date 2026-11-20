type Props = {
  series: number[];
  min: number;
  max: number;
  ticks: string[]; // yuxarıdan aşağı
  labels: string[];
  forecast?: number[]; // series-in son nöqtəsindən başlayır
  band?: { upper: number[]; lower: number[] };
  className?: string;
};

export function LineArea({ series, min, max, ticks, labels, forecast, band, className }: Props) {
  const n = series.length + (forecast ? forecast.length - 1 : 0);
  const x = (i: number) => (i / (n - 1)) * 100;
  const y = (v: number) => 100 - ((v - min) / (max - min)) * 100;
  const last = series.length - 1;
  const line = "M" + series.map((v, i) => `${x(i)},${y(v)}`).join("L");
  const fc = (arr: number[]) => arr.map((v, i) => `${x(last + i)},${y(v)}`);

  return (
    <div className={className}>
      <div className="flex gap-4">
        <div className="flex h-[220px] flex-col justify-between text-xs text-muted">
          {ticks.map((t, i) => <span key={i}>{t}</span>)}
        </div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-[220px] flex-1 overflow-visible">
          {ticks.map((_, i) => (
            <line key={i} x1="0" x2="100" y1={(i / (ticks.length - 1)) * 100} y2={(i / (ticks.length - 1)) * 100} stroke="#E8EAF2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
          ))}
          {!forecast && <path d={`${line}L${x(last)},100L0,100Z`} fill="#4361EE" fillOpacity=".06" />}
          {band && <polygon fill="#6D4AE0" fillOpacity=".12" points={[...fc(band.upper), ...fc(band.lower).reverse()].join(" ")} />}
          {forecast && <line x1={x(last)} x2={x(last)} y1="0" y2="100" stroke="#CBD0E0" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />}
          <path d={line} fill="none" stroke="#4361EE" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          {forecast && <path d={"M" + fc(forecast).join("L")} fill="none" stroke="#6D4AE0" strokeWidth="2.5" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />}
        </svg>
      </div>
      <div className="mt-3 flex justify-between pl-10 text-xs text-muted sm:pl-12">
        {labels.map((l) => <span key={l}>{l}</span>)}
      </div>
    </div>
  );
}
