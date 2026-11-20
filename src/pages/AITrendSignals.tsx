import { AlertCircle, ArrowUpRight, Check, Clock, Sparkles } from "lucide-react";
import { AICard, Badge, Button, Card, PageHeader, TextLink } from "../components/ui";
import { LineArea } from "../components/charts";

const signals = [
  { tag: "Tələb yüksəlir", title: "Elektronikada artım", text: "Elektronika satışları son 30 gündə 18% artıb. Qulaqcıq və aksesuar stokunu artırmağı nəzərdən keçirin.", conf: "92% etibar", tone: "green", icon: <ArrowUpRight size={20} /> },
  { tag: "Mövsümi fürsət", title: "Dekabr satışlarına hazır olun", text: "Son 6 aylıq dinamikaya əsasən dekabrda satışlarınızda 13.6% artım ehtimalı gözlənilir.", conf: "87% etibar", tone: "purple", icon: <Clock size={20} /> },
  { tag: "Diqqət tələb edir", title: "3 məhsulda stok riski", text: "Mövcud satış tempi ilə 3 məhsul növbəti 7 gündə tükənə bilər. Təchizatı öncədən planlayın.", conf: "95% etibar", tone: "amber", icon: <AlertCircle size={20} /> },
] as const;
const iconBg = { green: "bg-emerald-50 text-emerald-700", purple: "bg-ai text-ai-text", amber: "bg-amber-50 text-amber-700" };

export default function AITrendSignals() {
  return (
    <>
      <PageHeader title="AI trend siqnalları" subtitle="Məlumatlardan bir addım öndə olan qərarlara."
        actions={<><button className="h-12 rounded-xl border border-line bg-white px-5 text-sm font-medium">Son 30 gün ⌄</button><Button arrow className="h-12">Təhlili yenilə</Button></>} />

      <AICard className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#E9E2FB] text-ai-text"><Sparkles size={26} /></div>
          <div><div className="text-xl font-semibold">Biznesiniz üçün 3 yeni fürsət tapıldı</div><div className="mt-1 text-sm text-muted">1,284 satış qeydi təhlil edildi · Son yenilənmə: bu gün, 10:42</div></div>
        </div>
        <Badge tone="green" className="w-fit"><Check size={14} /> Təhlil tamamlandı</Badge>
      </AICard>

      <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
        {signals.map((s) => (
          <Card key={s.title} className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3"><div className={`grid h-10 w-10 place-items-center rounded-xl ${iconBg[s.tone]}`}>{s.icon}</div><span className={`text-sm font-medium ${s.tone === "green" ? "text-emerald-700" : s.tone === "purple" ? "text-ai-text" : "text-amber-700"}`}>{s.tag}</span></div>
              <ArrowUpRight size={18} className="text-muted" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
            <div className="mt-6 flex items-center justify-between"><Badge tone={s.tone} className="px-3 py-2 text-sm">{s.conf}</Badge><TextLink>Ətraflı bax</TextLink></div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <div className="flex items-start justify-between gap-3">
            <div><h2 className="text-xl font-semibold">Satış proqnozu</h2><p className="mt-1 text-sm text-muted">Növbəti 14 gün · mövcud dinamika əsasında</p></div>
            <div className="flex gap-2"><Badge tone="blue" className="px-3 py-2">● Faktiki</Badge><Badge tone="purple" className="px-3 py-2">Proqnoz</Badge></div>
          </div>
          <LineArea className="mt-6" min={30} max={60} ticks={["60k", "50k", "40k", "30k"]} labels={["01 Noy", "08 Noy", "15 Noy", "20 Noy · Bu gün", "04 Dek"]}
            series={[32, 35, 34, 39, 38, 43, 42, 46, 45]} forecast={[45, 47, 49, 51.5]}
            band={{ upper: [45, 49, 53, 57.5], lower: [45, 46, 47, 46] }} />
        </Card>
        <Card className="self-start">
          <h2 className="text-xl font-semibold">Niyə bu proqnoz?</h2>
          {[["↑ 10.7% satış artımı", "Son dövrün müsbət dinamikası"], ["248 əməliyyat", "Müştəri davranışının təhlili"], ["Mövsümi dəyişkənlik", "Son 6 ayın satış nümunələri"]].map(([t, s]) => (
            <div key={t} className="mt-5"><div className="font-medium">{t}</div><div className="mt-1 text-sm text-muted">{s}</div></div>
          ))}
          <p className="mt-6 text-xs leading-relaxed text-muted">Proqnozlar ehtimal xarakterlidir.<br />Maliyyə qərarlarında tək mənbə kimi istifadə etməyin.</p>
        </Card>
      </div>
    </>
  );
}
