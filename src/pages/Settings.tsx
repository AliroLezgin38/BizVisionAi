import { Check } from "lucide-react";
import { Badge, Button, Card, Field, PageHeader, Tabs, TextLink, Toggle } from "../components/ui";

export default function Settings() {
  return (
    <>
      <PageHeader title="Tənzimləmələr" subtitle="Hesabınızı və iş mühitinizi özünüzə uyğunlaşdırın." actions={<Badge tone="purple" className="px-3.5 py-2 text-sm">BizVision Pro</Badge>} />
      <Tabs items={["Ümumi", "Təhlükəsizlik", "Plan və ödənişlər", "İnteqrasiyalar"]} />

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <Card className="sm:p-8">
            <h2 className="text-xl font-semibold">Şəxsi məlumatlar</h2>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid h-[72px] w-[72px] place-items-center rounded-full bg-slate-300 text-xl font-semibold text-navy">EM</div>
                <div><div className="font-semibold">Profil şəkli</div><div className="mt-1 text-sm text-muted">JPG və ya PNG · maksimum 2 MB</div></div>
              </div>
              <Button variant="secondary">Şəkli dəyiş</Button>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Ad" value="Elvin" /><Field label="Soyad" value="Məmmədov" />
              <Field label="E-poçt ünvanı" value="elvin@caspianretail.az" /><Field label="Telefon nömrəsi" value="+994 50 123 45 67" />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted"><Badge tone="green" className="px-3 py-1.5"><Check size={14} /> E-poçt təsdiqlənib</Badge> Hesab rolu: Biznes sahibi</div>
          </Card>

          <Card className="sm:p-8">
            <h2 className="text-xl font-semibold">Dil və region</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="İnterfeys dili" value="Azərbaycan dili" select /><Field label="Saat qurşağı" value="Bakı (UTC+04:00)" select />
              <Field label="Tarix formatı" value="GG.AA.İİİİ" select /><Field label="Əsas valyuta" value="AZN — Azərbaycan manatı" select />
            </div>
          </Card>
        </div>

        <div className="space-y-6 self-start">
          <Card>
            <h3 className="text-xl font-semibold">Hesab təhlükəsizliyi</h3>
            <Badge tone="green" className="mt-5 px-3 py-1.5"><Check size={14} /> Hesabınız qorunur</Badge>
            <div className="mt-6 flex items-center justify-between gap-4"><div><div className="font-medium">İki mərhələli doğrulama</div><div className="mt-1 text-sm text-muted">Girişdə əlavə qoruma</div></div><Toggle defaultOn /></div>
            <div className="mt-6 flex items-center justify-between gap-4"><div><div className="font-medium">Şifrə</div><div className="mt-1 text-sm text-muted">Son dəyişiklik: 30 gün əvvəl</div></div><TextLink>Dəyiş</TextLink></div>
            <div className="mt-6"><TextLink>Aktiv sessiyalara bax</TextLink></div>
          </Card>
          <div className="rounded-2xl border border-ai-line bg-ai p-6">
            <div className="flex items-center gap-3"><h3 className="text-xl font-semibold">Cari plan</h3><Badge tone="green">AKTİV</Badge></div>
            <div className="mt-5 text-3xl font-semibold">BizVision Pro</div>
            <div className="mt-4 flex items-baseline gap-2"><span className="text-4xl font-semibold">₼ 49</span><span className="text-sm text-muted">/ ay</span></div>
            <p className="mt-4 text-sm text-muted">Növbəti ödəniş: 01 Dekabr 2026</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">{["Limitsiz satış qeydləri", "AI analitika və tövsiyələr", "Avtomatik müqavilələr"].map((t) => <li key={t} className="flex gap-3"><Check size={16} /> {t}</li>)}</ul>
            <Button variant="secondary" className="mt-6">Planı idarə et</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">Dəyişikliklər yalnız saxladıqdan sonra tətbiq olunur.</p>
        <div className="flex gap-3"><Button variant="secondary" className="h-12">Ləğv et</Button><Button arrow className="h-12">Dəyişiklikləri saxla</Button></div>
      </div>
    </>
  );
}
