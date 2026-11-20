import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge, Button, Card, PageHeader, StatCard } from "../components/ui";
import { AZN , cx} from "../lib/utils";

const days = ["B.e.", "Ç.a.", "Çər.", "C.a.", "Cüm.", "Şən.", "Baz."];
const done = [10, 15];
const TODAY = 20;

export default function TaxCalendar() {
  const cells: (number | null)[] = [...Array(6).fill(null), ...Array.from({ length: 30 }, (_, i) => i + 1)]; // 1 Noyabr 2026 = bazar
  return (
    <>
      <PageHeader title="Vergi təqvimi" subtitle="Öhdəliklərinizi vaxtında yerinə yetirin, rahat işləyin."
        actions={<><Button variant="secondary" className="h-12">↓ Təqvimə əlavə et</Button><Button arrow className="h-12">Xatırlatma yarat</Button></>} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard label="Vergi ehtiyatı" value={`${AZN} 1,940`} strong="Noyabr" note="hesablanmış ehtiyat" />
        <StatCard label="Bu ayın öhdəlikləri" value="3" strong="2 tamamlanıb" note="1 gözləyir" />
        <StatCard label="Növbəti son tarix" value="20 Noy" strong="Bu gün" note="ƏDV bəyannaməsi" />
        <StatCard label="Gecikmiş ödənişlər" value="0" strong="✓ Hər şey qaydasında" note="gecikmə yoxdur" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Noyabr 2026</h2>
            <div className="flex gap-2">
              <button className="grid h-11 w-11 place-items-center rounded-xl border border-line"><ChevronLeft size={16} /></button>
              <button className="h-11 rounded-xl border border-line px-5 text-sm font-medium">Bu gün</button>
              <button className="grid h-11 w-11 place-items-center rounded-xl border border-line"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-7 gap-1.5 sm:gap-2">
            {days.map((d) => <div key={d} className="py-2 text-center text-xs text-muted sm:text-sm">{d}</div>)}
            {cells.map((c, i) => c === null ? <div key={i} /> : (
              <div key={i} className={cx("flex aspect-square flex-col justify-between rounded-xl p-2 text-xs sm:aspect-auto sm:h-[84px] sm:p-3 sm:text-sm", c === TODAY ? "bg-brand text-white" : "bg-surface")}>
                <span>{c}</span>
                {(done.includes(c) || c === TODAY) && <i className={cx("h-1.5 w-1.5 rounded-full", c === TODAY ? "bg-white" : "bg-emerald-600")} />}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <Badge tone="green" className="px-3 py-2">● Tamamlanmış</Badge>
            <Badge tone="blue" className="px-3 py-2">● Gözləyən</Badge>
            <span className="text-muted">Son tarixlər biznes profilinizə əsaslanır.</span>
          </div>
        </Card>

        <div className="space-y-6 self-start">
          <Card>
            <div className="flex items-center gap-3"><Badge tone="amber">BU GÜN</Badge><span className="text-sm text-muted">20 Noyabr · Cümə</span></div>
            <h3 className="mt-5 text-2xl font-semibold">ƏDV bəyannaməsi</h3>
            <p className="mt-4 text-sm text-muted">Oktyabr 2026 hesabat dövrü</p>
            <div className="mt-4 text-4xl font-semibold">{AZN} 1,940</div>
            <p className="mt-5 text-sm leading-relaxed text-muted">Son təqdimetmə və ödəniş tarixi bu gündür. Dəqiq məbləği mühasibinizlə yoxlayın.</p>
            <Button arrow className="mt-6 h-14 w-full">Öhdəliyə bax</Button>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Bu ay tamamlanıb</h3>
            {[["Sosial sığorta ödənişi", `15 Noyabr · ${AZN} 680`], ["Əməkhaqqı hesablaması", "10 Noyabr · Tamamlanıb"]].map(([t, s]) => (
              <div key={t} className="mt-5 flex gap-4"><Check size={20} className="mt-0.5 text-emerald-700" /><div><div className="font-medium">{t}</div><div className="mt-1 text-sm text-muted">{s}</div></div></div>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}
