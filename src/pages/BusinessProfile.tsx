import { Check, ExternalLink } from "lucide-react";
import { Button, Card, Field, PageHeader, Tabs, TextLink, Badge } from "../components/ui";


export default function BusinessProfile() {
  return (
    <>
      <PageHeader title="Biznes profili" subtitle="Düzgün məlumatlar daha dəqiq analitika deməkdir." actions={<Badge tone="green" className="px-3.5 py-2"><Check size={14} /> Təsdiqlənmiş biznes</Badge>} />
      <Tabs items={["Ümumi məlumatlar", "Vergi məlumatları", "Bank rekvizitləri", "Komanda"]} />

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card className="sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="grid h-[72px] w-[72px] place-items-center rounded-2xl bg-brand-50 text-2xl font-semibold text-brand">CR</div>
              <div><div className="text-2xl font-semibold">Caspian Retail MMC</div><div className="mt-1 text-sm text-muted">Pərakəndə satış · Bakı, Azərbaycan</div></div>
            </div>
            <Button variant="secondary">Loqonu dəyiş</Button>
          </div>

          <h3 className="mb-5 mt-8 text-xl font-semibold">Əsas məlumatlar</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Biznesin adı" value="Caspian Retail MMC" />
            <Field label="Hüquqi forma" value="Məhdud Məsuliyyətli Cəmiyyət" select />
            <Field label="VÖEN" value="1301234561" />
            <Field label="Fəaliyyət sahəsi" value="Pərakəndə satış" select />
            <Field label="E-poçt ünvanı" value="info@caspianretail.az" />
            <Field label="Telefon nömrəsi" value="+994 50 123 45 67" />
            <Field className="sm:col-span-2" label="Hüquqi ünvan" value="Azərbaycan, Bakı şəhəri, Nizami küçəsi 42" />
            <Field label="Əsas valyuta" value="AZN — Azərbaycan manatı" select />
            <Field label="Vergi statusu" value="ƏDV ödəyicisi" select />
          </div>
          <p className="mt-6 text-sm text-muted">Son yenilənmə: 18 Noyabr 2026</p>
        </Card>

        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-3"><h3 className="text-xl font-semibold">Profilin tamamlanması</h3><span className="font-semibold text-brand">85%</span></div>
            <div className="mt-5 h-1.5 rounded-full bg-brand-50"><div className="h-full w-[85%] rounded-full bg-brand" /></div>
            <div className="mt-5 font-medium">Yalnız bir addım qalıb.</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">Bank rekvizitlərini əlavə edərək müqavilələri avtomatik doldurun.</p>
            <div className="mt-4"><TextLink>Bank məlumatlarını əlavə et</TextLink></div>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Qoşulmuş xidmətlər</h3>
            <div className="mt-5 flex items-start justify-between"><div><div className="font-medium">POS sistemi</div><div className="mt-1 text-sm text-muted">Son sinxronizasiya: 10:42</div></div><Badge tone="green">Aktiv</Badge></div>
            <div className="mt-5 flex items-start justify-between"><div><div className="font-medium">Mühasibə giriş</div><div className="mt-1 text-sm text-muted">muhasib@caspianretail.az</div></div><ExternalLink size={16} className="text-brand" /></div>
            <div className="mt-5"><TextLink>İnteqrasiyaları idarə et</TextLink></div>
          </Card>
          <div className="rounded-2xl border border-brand/10 bg-brand-50 p-6"><div className="text-lg font-semibold">Məlumatlarınız qorunur</div><p className="mt-3 text-sm leading-relaxed text-muted">Biznes məlumatlarınız şifrələnir və yalnız icazə verdiyiniz şəxslərlə paylaşılır.</p></div>
        </div>
      </div>

      <div className="flex justify-end gap-3"><Button variant="secondary" className="h-12">Ləğv et</Button><Button arrow className="h-12">Dəyişiklikləri saxla</Button></div>
    </>
  );
}