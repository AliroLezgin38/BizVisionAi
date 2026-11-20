import { ChevronDown, Search, Sparkles } from "lucide-react";
import { AICard, Badge, Button, Card, PageHeader, Pager, StatCard, Table, Tabs } from "../components/ui";
import { AZN } from "../lib/utils";

const rows = [
  ["Satış müqaviləsi", "Araz Market MMC", "12,500", "İmzalanıb", "green"],
  ["Xidmət müqaviləsi", "Caspian Trade", "4,200", "Gözləyir", "amber"],
  ["Təchizat müqaviləsi", "Baku Electronics", "8,600", "İmzalanıb", "green"],
  ["Satış müqaviləsi", "Orion MMC", "2,750", "Qaralama", "amber"],
  ["Xidmət müqaviləsi", "Green Office", "1,800", "İmzalanıb", "green"],
] as const;

export default function Contracts() {
  return (
    <>
      <PageHeader title="Müqavilələr" subtitle="Peşəkar müqavilələri AI ilə hazırlayın və idarə edin." actions={<Button arrow className="h-12">Yeni müqavilə</Button>} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard label="Bütün müqavilələr" value="24" strong="+3 yeni" note="bu ay" />
        <StatCard label="İmzalanmış" value="18" strong="75%" note="ümumi müqavilələrdən" />
        <StatCard label="İmza gözləyir" value="4" strong="2 xatırlatma" note="göndərilməyə hazırdır" />
        <StatCard label="Qaralamalar" value="2" strong="✓ Avtomatik" note="yadda saxlanılıb" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <Card>
          <div className="flex items-center justify-between"><h2 className="text-xl font-semibold">Son müqavilələr</h2><button className="flex h-11 items-center gap-2 rounded-xl border border-line px-4 text-sm"><Search size={14} /> Axtar</button></div>
          <div className="mt-5"><Tabs items={["Hamısı", "İmzalanmış", "Gözləyən", "Qaralama"]} /></div>
          <div className="mt-5">
            <Table head={["Müqavilə", "Qarşı tərəf", "Məbləğ", "Status"]}>
              {rows.map(([n, p, a, s, t], i) => (
                <tr key={i}><td className="font-medium">{n}</td><td className="text-muted">{p}</td><td>{AZN} {a}</td><td><Badge tone={t}>{s}</Badge></td></tr>
              ))}
            </Table>
          </div>
          <Pager info="24 müqavilədən 5-i göstərilir" pages={["1", "2", "3"]} />
        </Card>

        <AICard className="self-start">
          <Badge tone="purple" className="uppercase"><Sparkles size={14} /> AI ilə hazırla</Badge>
          <h3 className="mt-6 text-[28px] font-semibold leading-tight">Sıfırdan deyil,<br />ağıllı başlayın.</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted">Biznes məlumatlarınız əsasında bir neçə addımda müqavilə layihəsi hazırlayın.</p>
          <div className="mt-6 space-y-5">
            <div><div className="mb-2 text-sm font-medium">Müqavilə növü</div><div className="flex h-12 items-center justify-between rounded-xl border border-line bg-white px-4 text-sm">Satış müqaviləsi <ChevronDown size={12} /></div></div>
            <div><div className="mb-2 text-sm font-medium">Qarşı tərəf</div><div className="flex h-12 items-center justify-between rounded-xl border border-line bg-white px-4 text-sm text-muted">Şirkəti seçin <ChevronDown size={12} /></div></div>
          </div>
          <Button arrow className="mt-6 h-14 w-full">AI ilə müqavilə yarat</Button>
          <p className="mt-6 text-xs leading-relaxed text-muted">AI layihəsi hüquqi məsləhət deyil.<br />İmzalamazdan əvvəl mütəxəssislə yoxlayın.</p>
        </AICard>
      </div>
    </>
  );
}