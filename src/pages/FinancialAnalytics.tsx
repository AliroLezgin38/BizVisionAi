import { Sparkles } from "lucide-react";
import { AICard, Badge, Button, Card, PageHeader, StatCard, TextLink } from "../components/ui";
import { BarPairs, Donut } from "../components/charts";
import { AZN } from "../lib/utils";

const costs = [
  { n: "Məhsul alışları", v: 18500, c: "#4361EE" },
  { n: "Əməkhaqqı", v: 6200, c: "#7C4DDB" },
  { n: "İcarə", v: 3400, c: "#A998EE" },
  { n: "Digər xərclər", v: 2330, c: "#D9DCF0" },
];

export default function FinancialAnalytics() {
  return (
    <>
      <PageHeader title="Maliyyə analitikası" subtitle="Gəlirinizi anlayın, xərcləri optimallaşdırın, mənfəəti artırın."
        actions={<><button className="h-12 rounded-xl border border-line bg-white px-5 text-sm font-medium">1–20 Noyabr 2026 ⌄</button><Button arrow className="h-12">Hesabatı yüklə</Button></>} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard label="Ümumi satış" value={`${AZN} 48,250`} strong="↗ 10.7%" note="əvvəlki aya nəzərən" />
        <StatCard label="Əməliyyat xərcləri" value={`${AZN} 30,430`} strong="↗ 4.2%" note="əvvəlki aya nəzərən" />
        <StatCard label="Vergi ehtiyatı" value={`${AZN} 1,940`} strong="4.0%" note="satış məbləğindən" />
        <StatCard label="Xalis mənfəət" value={`${AZN} 15,880`} strong="↗ 18.6%" note="əvvəlki aya nəzərən" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <div className="flex items-start justify-between gap-3">
            <div><h2 className="text-xl font-semibold">Gəlir və xərclərin müqayisəsi</h2><p className="mt-1 text-sm text-muted">Son 6 ay · AZN</p></div>
            <div className="flex gap-2"><Badge tone="blue" className="px-3 py-2">● Satış</Badge><Badge tone="purple" className="px-3 py-2">● Xərc</Badge></div>
          </div>
          <div className="mt-6">
            <BarPairs max={50} ticks={["50k", "35k", "20k", "0"]} labels={["İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr"]}
              data={[[28, 17], [32, 20], [31, 19], [36, 21], [39, 25], [44, 27]]} />
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Xərclərin bölgüsü</h2>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Donut parts={costs.map((c) => ({ v: c.v, color: c.c }))} size={160} />
            <div><div className="text-sm text-muted">Cəmi xərc</div><div className="mt-1 text-3xl font-semibold">{AZN} 30,430</div></div>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {costs.map((c) => (
              <li key={c.n} className="flex items-center justify-between"><span className="flex items-center gap-3 text-muted"><i className="h-2.5 w-2.5 rounded-full" style={{ background: c.c }} />{c.n}</span><span className="font-medium">{AZN}{c.v}</span></li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <div className="flex items-center justify-between"><h2 className="text-xl font-semibold">Xalis mənfəət necə hesablanır?</h2><span className="hidden text-sm text-muted sm:block">Noyabr 2026</span></div>
          <div className="mt-8 grid grid-cols-2 items-end gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {[["Ümumi satış", "48,250"], ["Xərclər", "30,430"], ["Vergi ehtiyatı", "1,940"], ["Xalis mənfəət", "15,880"]].map(([l, v], i) => (
              <div key={l} className="contents">
                <div><div className={`text-sm ${i === 3 ? "text-emerald-700" : "text-muted"}`}>{l}</div><div className={`mt-2 text-2xl font-semibold sm:text-[28px] ${i === 3 ? "text-emerald-700" : ""}`}>{AZN} {v}</div></div>
                {i < 3 && <div className="hidden pb-1 text-2xl text-muted sm:block">{i === 2 ? "=" : "−"}</div>}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4"><Badge tone="green" className="px-3.5 py-2 text-sm">32.9% mənfəət marjası</Badge><span className="text-sm text-muted">Hesablamalar daxil edilmiş məlumatlara əsaslanır.</span></div>
        </Card>
        <AICard>
          <div className="flex items-center gap-3"><Sparkles size={20} className="text-ai-text" /><span className="font-semibold">AI maliyyə təhlili</span></div>
          <h3 className="mt-5 text-2xl font-semibold">Xərclər nəzarət altındadır.</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">Satış artımı xərc artımını üstələyir.<br />Alış xərclərini 5% azaltmaqla əlavə {AZN} 925 mənfəət əldə edə bilərsiniz.</p>
          <div className="mt-5"><TextLink>Təfərrüatlı tövsiyəyə bax</TextLink></div>
        </AICard>
      </div>
    </>
  );
}
