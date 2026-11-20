import { ArrowRight, ChevronDown, Search, Sparkles } from "lucide-react";
import { Badge, Button, Card, PageHeader, Pager, StatCard, Table } from "../components/ui";
import { AZN } from "../lib/utils";

const rows = [
  ["Simsiz qulaqcıq", "Aşağı", "8 / 12 ədəd", 89, 95, "6.7%", "Təchizat yarat"],
  ["USB-C Hub 7-in-1", "Aşağı", "16 / 20 ədəd", 59, 62, "5.1%", "Təchizat yarat"],
  ["SSD 512 GB", "Aşağı", "11 / 15 ədəd", 129, 139, "7.8%", "Təchizat yarat"],
  ["Bluetooth dinamik", "Kifayət", "42 / 15 ədəd", 75, 79, "5.3%", "Ətraflı bax"],
  ["Simsiz siçan", "Kifayət", "65 / 20 ədəd", 29, 32, "10.3%", "Ətraflı bax"],
] as const;

export default function StockPricing() {
  return (
    <>
      <PageHeader title="Stok və qiymət tövsiyələri" subtitle="Doğru məhsul, doğru stok, daha güclü mənfəət."
        actions={<><Button variant="secondary" className="h-12">↓ İxrac et</Button><Button arrow className="h-12">Məhsul əlavə et</Button></>} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard label="Aktiv məhsullar" value="148" strong="12 kateqoriya" note="stokda izlənilir" />
        <StatCard label="Aşağı stok" value="3" strong="7 gün ərzində" note="tükənmə riski" />
        <StatCard label="Qiymət fürsəti" value="5" strong="AI tövsiyəsi" note="baxışınızı gözləyir" />
        <StatCard label="Potensial əlavə mənfəət" value={`${AZN} 1,240`} strong="aylıq təxmin" note="proqnoz zəmanət deyil" />
      </div>

      <div className="flex flex-col gap-6 rounded-2xl border border-ai-line bg-ai p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <Badge tone="purple" className="bg-[#E9E2FB] uppercase"><Sparkles size={14} /> Ən yüksək fürsət</Badge>
          <h2 className="mt-4 text-2xl font-semibold">Simsiz qulaqcıq üçün daha ağıllı qiymət</h2>
          <p className="mt-3 text-sm text-muted">Tələb artımı və satış tarixçəsinə əsasən qiyməti yeniləməyi nəzərdən keçirin.</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <div className="text-sm text-muted">Mövcud → Tövsiyə</div>
            <div className="mt-2 flex items-center gap-4 text-4xl font-semibold"><span className="text-muted">{AZN} 89</span><ArrowRight size={24} className="text-muted" /><span className="text-brand">{AZN} 95</span></div>
            <Badge tone="green" className="mt-3">+6.7% qiymət artımı</Badge>
          </div>
          <Button arrow className="h-14 px-7">Tövsiyəyə bax</Button>
        </div>
      </div>

      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-xl font-semibold">Məhsullar və tövsiyələr</h2>
          <div className="flex flex-wrap gap-3">
            <div className="flex h-12 items-center gap-2 rounded-xl border border-line px-4 text-sm"><Search size={14} /> Məhsul axtar</div>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-line px-4 text-sm">Bütün kateqoriyalar <ChevronDown size={12} /></div>
          </div>
        </div>
        <div className="mt-5">
          <Table head={["Məhsul", "Stok", "Qalıq / Min.", "Qiymət", "AI tövsiyəsi", "Fəaliyyət"]}>
            {rows.map(([n, st, q, p, r, d, a]) => (
              <tr key={n}>
                <td className="font-medium">{n}</td>
                <td><Badge tone={st === "Aşağı" ? "amber" : "green"}>{st}</Badge></td>
                <td className="text-muted">{q}</td>
                <td className="text-muted">{AZN} {p}</td>
                <td className="font-medium text-brand">{AZN} {r} <span className="ml-1 text-xs">↗ {d}</span></td>
                <td className="whitespace-nowrap text-muted">{a} →</td>
              </tr>
            ))}
          </Table>
        </div>
        <Pager info="148 məhsuldan 5-i göstərilir" pages={["1", "2", "3", "...", "30"]} />
      </Card>
    </>
  );
}
