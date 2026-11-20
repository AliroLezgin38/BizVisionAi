import { ArrowDown, ArrowUp, ChevronDown, Search } from "lucide-react";
import { Badge, Button, Card, PageHeader, Pager, StatCard, Table, TextLink } from "../components/ui";
import { AZN } from "../lib/utils";

const rows = [
  ["#SL-0248", "Araz Market MMC", "20 Noy 2026, 10:32", "1,250", "POS", "Ödənilib", "green"],
  ["#SL-0247", "Nərgiz Əliyeva", "20 Noy 2026, 10:18", "89", "Əl ilə", "Ödənilib", "green"],
  ["#SL-0246", "Caspian Trade", "19 Noy 2026, 16:45", "420", "Excel", "Gözləyir", "amber"],
  ["#SL-0245", "Rauf Həsənov", "19 Noy 2026, 15:12", "235", "POS", "Ödənilib", "green"],
] as const;

export default function SalesImport() {
  return (
    <>
      <PageHeader title="Satışlar və məlumat idxalı" subtitle="Satışlarınızı bir yerdə toplayın, nəticələri anında görün."
        actions={<><Button variant="secondary" className="h-12"><ArrowDown size={16} /> İxrac et</Button><Button arrow className="h-12">Satış əlavə et</Button></>} />

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="flex flex-col gap-4 rounded-2xl border border-brand/30 bg-white p-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand"><ArrowUp size={26} /></div>
            <div>
              <div className="text-xl font-semibold">Məlumatlarınızı bir neçə saniyəyə idxal edin</div>
              <div className="mt-1 text-sm text-muted">Excel və ya CSV faylını bura sürükləyin.</div>
              <div className="mt-6 text-sm text-muted">XLSX, CSV · maksimum 10 MB</div>
            </div>
          </div>
          <Button variant="secondary">Fayl seç</Button>
        </div>
        <Card>
          <div className="flex items-center gap-3"><h3 className="text-xl font-semibold">POS inteqrasiyası</h3><Badge tone="green">Qoşulub</Badge></div>
          <p className="mt-4 text-sm text-muted">Satışlar avtomatik sinxronizasiya olunur.</p>
          <p className="mt-3 text-sm text-muted">Son yenilənmə: bu gün, 10:42</p>
          <div className="mt-3"><TextLink>İnteqrasiyanı idarə et</TextLink></div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard label="Satış məbləği" value={`${AZN} 48,250`} strong="↗ 10.7%" note="bu ay" />
        <StatCard label="Əməliyyat sayı" value="248" strong="↗ 24 satış" note="bu ay" />
        <StatCard label="Orta çek" value={`${AZN} 194.56`} strong="↗ 3.1%" note="bu ay" />
        <StatCard label="İdxal edilmiş sətir" value="1,284" strong="✓ Tamamlandı" note="son idxal üzrə" />
      </div>

      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-xl font-semibold">Bütün satışlar</h2>
          <div className="flex flex-wrap gap-3">
            <div className="flex h-12 items-center gap-2 rounded-xl border border-line px-4 text-sm"><Search size={14} /> Müştəri və ya məhsul</div>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-line px-4 text-sm">Noyabr 2026 <ChevronDown size={12} /></div>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-line px-4 text-sm">Filtrlər <ChevronDown size={12} /></div>
          </div>
        </div>
        <div className="mt-5">
          <Table head={["Əməliyyat", "Müştəri", "Tarix", "Məbləğ", "Mənbə", "Status"]}>
            {rows.map(([id, c, d, a, s, st, t]) => (
              <tr key={id}><td className="font-medium">{id}</td><td className="text-muted">{c}</td><td className="text-muted">{d}</td><td>{AZN} {a}</td><td className="text-muted">{s}</td><td><Badge tone={t}>{st}</Badge></td></tr>
            ))}
          </Table>
        </div>
        <Pager info="248 nəticədən 1–4 göstərilir" pages={["1", "2", "3", "...", "62"]} />
      </Card>
    </>
  );
}