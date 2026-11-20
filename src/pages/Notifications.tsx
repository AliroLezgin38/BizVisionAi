import { AlertCircle, ArrowDown, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Badge, Button, Card, PageHeader, Tabs, TextLink, Toggle } from "../components/ui";
import type { ReactNode } from "react";
import { AZN , cx} from "../lib/utils";

type Item = { icon: ReactNode; bg: string; title: string; text: string; meta: string; unread?: boolean };
const items: Item[] = [
  { icon: <AlertCircle size={20} />, bg: "bg-amber-50 text-amber-700", title: "Vergi ödəliyinizin son tarixi bu gündür", text: `ƏDV bəyannaməsi · Oktyabr 2026 · ${AZN} 1,940. Öhdəliyə bax və ödənişi mühasibinizlə dəqiqləşdirin.`, meta: "10 dəqiqə əvvəl · Vergi", unread: true },
  { icon: <ArrowDown size={20} />, bg: "bg-amber-50 text-amber-700", title: "3 məhsulda stok azalır", text: "Simsiz qulaqcıq, USB-C Hub və SSD üçün təchizatı planlayın.", meta: "35 dəqiqə əvvəl · Stok", unread: true },
  { icon: <Sparkles size={20} />, bg: "bg-ai text-ai-text", title: "AI biznesiniz üçün 3 yeni fürsət tapdı", text: "Yeni trend siqnallarına baxın və növbəti addımınızı seçin.", meta: "1 saat əvvəl · AI siqnalları", unread: true },
  { icon: <Check size={20} />, bg: "bg-emerald-50 text-emerald-700", title: "Satış məlumatları uğurla idxal edildi", text: "sales_november.xlsx · 1,284 sətir · Xəta aşkarlanmadı.", meta: "Dünən, 16:45 · Sistem" },
  { icon: <ArrowUpRight size={20} />, bg: "bg-brand-50 text-brand", title: "Müqavilə imzalandı", text: "Araz Market MMC satış müqaviləsini imzaladı.", meta: "Dünən, 14:20 · Müqavilələr" },
];

export default function Notifications() {
  return (
    <>
      <PageHeader title="Bildirişlər" subtitle="Biznesiniz üçün vacib olan heç nəyi qaçırmayın." actions={<Button variant="secondary" className="h-12">✓ Hamısını oxunmuş et</Button>} />
      <Tabs items={["Hamısı", "Oxunmamış · 3", "Vergi", "AI siqnalları", "Sistem"]} />

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card className="sm:p-6">
          <div className="flex items-center justify-between"><h2 className="text-xl font-semibold">Son yeniliklər</h2><Badge tone="blue" className="px-3 py-1.5 text-sm">3 oxunmamış</Badge></div>
          <div className="mt-5 space-y-3">
            {items.map((n) => (
              <div key={n.title} className={cx("flex items-start gap-4 rounded-2xl p-4 sm:p-5", n.unread ? "bg-surface" : "")}>
                <div className={cx("grid h-12 w-12 shrink-0 place-items-center rounded-xl", n.bg)}>{n.icon}</div>
                <div className="min-w-0 flex-1"><div className="font-semibold">{n.title}</div><p className="mt-2 text-sm leading-relaxed text-muted">{n.text}</p><div className="mt-3 text-xs text-muted">{n.meta}</div></div>
                {n.unread && <i className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />}
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6 self-start">
          <Card>
            <h3 className="text-xl font-semibold">Bildiriş seçimləri</h3>
            <p className="mt-3 text-sm text-muted">Sizin üçün vacib olanı seçin.</p>
            <div className="mt-6 space-y-7">
              {[["Vergi xatırlatmaları", true], ["AI tövsiyələri", true], ["Stok xəbərdarlıqları", true], ["Marketinq yenilikləri", false]].map(([l, on]) => (
                <div key={String(l)} className="flex items-center justify-between"><span className="font-medium">{l}</span><Toggle defaultOn={Boolean(on)} /></div>
              ))}
            </div>
            <div className="mt-8"><TextLink>Bütün seçimləri idarə et</TextLink></div>
          </Card>
          <div className="rounded-2xl border border-ai-line bg-ai p-6">
            <h3 className="text-xl font-semibold">Həmişə xəbərdar olun</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">Vacib bildirişlər e-poçtunuza da göndərilir. Vergi xatırlatmaları son tarixdən 3 gün və 1 gün əvvəl çatdırılır.</p>
            <Badge tone="green" className="mt-5"><Check size={14} /> E-poçt təsdiqlənib</Badge>
          </div>
        </div>
      </div>
    </>
  );
}
