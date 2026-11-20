import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { AICard, Badge, Button, Card, StatCard, Table, TextLink, PageHeader } from "../components/ui";
import { LineArea } from "../components/charts";
import { AZN } from "../lib/utils";

const sales = [
  ["Araz Market MMC", "POS avadanlığı", "1,250", "Ödənilib", "green"],
  ["Nərgiz Əliyeva", "Simsiz qulaqcıq", "89", "Ödənilib", "green"],
  ["Caspian Trade", "Ofis aksesuarları", "420", "Gözləyir", "amber"],
] as const;

export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Sabahınız xeyir, Elvin"
        subtitle="Biznesinizdə baş verənlərə birlikdə baxaq."
        actions={<>
          <button className="flex h-12 items-center gap-2 rounded-xl border border-line bg-white px-5 text-sm font-medium">1–20 Noyabr 2026 <ChevronDown size={12} /></button>
          <Button arrow className="h-12">Hesabatı yüklə</Button>
        </>}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard label="Ümumi satış" value={`${AZN} 48,250`} strong="↗ 10.7%" note="əvvəlki aya nəzərən" />
        <StatCard label="Ümumi xərclər" value={`${AZN} 30,430`} strong="↗ 4.2%" note="əvvəlki aya nəzərən" />
        <StatCard label="Xalis mənfəət" value={`${AZN} 15,880`} strong="↗ 18.6%" note="əvvəlki aya nəzərən" />
        <StatCard label="Mənfəət marjası" value="32.9%" strong="↗ 2.2 b.p." note="əvvəlki aya nəzərən" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <Card>
            <div className="flex items-start justify-between gap-3">
              <div><h2 className="text-xl font-semibold">Satış dinamikası</h2><p className="mt-1 text-sm text-muted">Son 6 ay üzrə biznes dinamikası</p></div>
              <div className="flex items-center gap-3"><Badge tone="blue" className="px-3 py-2">Satış</Badge><button className="flex h-10 items-center gap-2 rounded-xl border border-line px-4 text-sm">Aylıq <ChevronDown size={12} /></button></div>
            </div>
            <LineArea className="mt-6" series={[28, 29, 27, 34, 32, 38, 36, 42, 40, 45, 43, 48]} min={20} max={50} ticks={["50k", "40k", "30k", "20k"]} labels={["İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr"]} />
          </Card>

          <Card>
            <div className="flex items-center justify-between"><h2 className="text-xl font-semibold">Son satışlar</h2><TextLink>Hamısına bax</TextLink></div>
            <div className="mt-4">
              <Table head={["Müştəri", "Məhsul", "Məbləğ", "Status"]}>
                {sales.map(([c, p, a, s, t]) => (
                  <tr key={c}><td className="font-medium">{c}</td><td className="text-muted">{p}</td><td>{AZN} {a}</td><td><Badge tone={t}>{s}</Badge></td></tr>
                ))}
              </Table>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <AICard>
            <div className="flex items-center gap-3"><Sparkles size={22} className="text-ai-text" /><span className="font-semibold">AI biznes köməkçisi</span><Badge tone="purple">YENİ</Badge></div>
            <h3 className="mt-6 text-2xl font-semibold">Satışlarınız yüksəlişdədir.</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">Satışlar əvvəlki aya görə 10.7% artıb.<br />Ən güclü kateqoriya: elektronika.</p>
            <div className="mt-6 flex items-start gap-3"><ArrowUpRight size={22} className="text-emerald-700" /><div><div className="font-medium">Stokunuzu öncədən planlayın</div><div className="mt-1 text-sm text-muted">3 məhsulda stok azalır.</div></div></div>
            <div className="mt-6"><TextLink>Tövsiyələrə bax</TextLink></div>
          </AICard>

          <Card>
            <div className="flex items-center gap-3"><h2 className="text-xl font-semibold">Yaxınlaşan öhdəlik</h2><Badge tone="amber">BU GÜN</Badge></div>
            <div className="mt-5 font-medium">ƏDV bəyannaməsi</div>
            <div className="mt-2 text-sm text-muted">20 Noyabr 2026 · Oktyabr hesabatı</div>
            <div className="mt-4 flex items-baseline gap-3"><span className="text-4xl font-semibold">{AZN} 1,940</span><span className="text-sm text-muted">ödəniləcək</span></div>
            <div className="mt-5"><TextLink>Vergi təqviminə keç</TextLink></div>
          </Card>
        </div>
      </div>
    </>
  );
}