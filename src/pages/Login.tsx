import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Eye, EyeOff, Sparkles } from "lucide-react";
import { LineArea } from "../components/charts";

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sol panel */}
      <section className="hidden w-[44%] flex-col justify-between bg-navy p-12 lg:flex xl:p-14">
        <div className="flex items-center gap-3">
          <div className="grid h-[34px] w-[34px] place-items-center rounded-lg bg-brand">
            <span className="flex items-end gap-[3px]"><i className="h-2.5 w-[3px] rounded bg-white" /><i className="h-4 w-[3px] rounded bg-white" /><i className="h-3 w-[3px] rounded bg-white" /></span>
          </div>
          <span className="text-[26px] font-semibold text-white">BizVision</span>
          <span className="rounded-md bg-navy-soft px-2 py-1 text-xs text-indigo-200">AI</span>
        </div>

        <div>
          <span className="inline-block rounded-md bg-navy-soft px-3 py-1.5 text-xs font-medium tracking-wide text-indigo-200">BİZNESİNİZİN YENİ BAXIŞ BUCAĞI</span>
          <h2 className="mt-6 text-[44px] font-semibold leading-[1.15] tracking-tight text-white xl:text-[52px]">Rəqəmləri anlayın.<br />İnamla böyüyün.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">Maliyyə, satış və süni intellekt —<br />biznesinizin bütün gücü bir platformada.</p>
        </div>

        <div>
          <div className="mb-10 rounded-3xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold">Biznesiniz bir baxışda</div>
                <div className="mt-1 text-sm text-muted">Noyabr 2026</div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"><ArrowUpRight size={12} /> 10.7%</span>
            </div>
            <div className="mt-4 flex items-baseline gap-3"><span className="text-4xl font-semibold">₼ 48,250</span><span className="text-sm text-muted">bu ayın satışı</span></div>
            <LineArea className="mt-4" series={[26, 28, 25, 34, 31, 40, 36, 44, 41, 48, 45, 51]} min={20} max={52} ticks={["", "", ""]} labels={["İyn", "İyl", "Avq", "Sen", "Okt", "Noy"]} />
            <div className="mt-5 flex items-start gap-3">
              <Sparkles size={22} className="mt-0.5 text-ai-text" />
              <div><div className="text-sm font-medium">Daha çox məlumat. Daha ağıllı qərarlar.</div><div className="text-sm text-muted">BizVision AI ilə növbəti addımı görün.</div></div>
            </div>
          </div>
          <div className="flex gap-3 text-sm text-slate-400"><span>Azərbaycan bizneslər üçün hazırlanıb</span><span>•</span><span>AZN dəstəyi</span></div>
        </div>
      </section>

      {/* Sağ panel */}
      <section className="flex flex-1 flex-col px-6 py-8 sm:px-12 lg:px-16">
        <div className="flex justify-end"><button className="flex items-center gap-2 text-sm font-medium">AZ <ChevronDown size={12} className="text-muted" /></button></div>
        <div className="mx-auto flex w-full max-w-[540px] flex-1 flex-col justify-center py-10">
          <span className="w-fit rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-medium tracking-wide text-brand">BİZVISION AI</span>
          <h1 className="mt-6 text-[34px] font-semibold leading-tight tracking-tight sm:text-[40px]">BizVision AI platformasına xoş gəlmisiniz</h1>
          <p className="mt-4 text-muted">Biznesinizin növbəti uğuru buradan başlayır.</p>

          <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <label className="block"><span className="mb-2 block text-sm font-medium">E-poçt ünvanı</span>
              <input defaultValue="elvin@caspianretail.az" className="h-14 w-full rounded-xl border border-line px-4 text-base outline-none focus:border-brand" /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium">Şifrə</span>
              <div className="relative">
                <input type={show ? "text" : "password"} defaultValue="••••••••••" className="h-14 w-full rounded-xl border border-line px-4 pr-12 text-base outline-none focus:border-brand" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted">{show ? <EyeOff size={20} /> : <Eye size={20} />}</button>
              </div></label>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 text-muted"><input type="checkbox" defaultChecked className="h-5 w-5 rounded accent-brand" /> Məni yadda saxla</label>
              <a href="#" className="font-medium text-brand">Şifrəni unutmusunuz?</a>
            </div>
            <button className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand font-medium text-white hover:bg-[#3752d8]">Daxil ol <ArrowRight size={18} /></button>
            <div className="flex items-center gap-4 text-sm text-muted"><i className="h-px flex-1 bg-line" /> və ya <i className="h-px flex-1 bg-line" /></div>
            <button type="button" className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-line font-medium"><span className="text-xl font-bold text-brand">G</span> Google ilə davam et</button>
          </form>
          <p className="mt-8 text-center text-sm text-muted">Hələ hesabınız yoxdur? <a href="#" className="font-semibold text-brand">Pulsuz qeydiyyat</a></p>
          <p className="mt-8 text-xs text-muted">Daxil olmaqla İstifadə şərtləri və Məxfilik siyasəti ilə razılaşırsınız.</p>
        </div>
        <div className="flex justify-between text-sm text-muted"><span>© 2026 BizVision AI</span><a href="#" className="inline-flex items-center gap-1">Dəstək mərkəzi <ArrowUpRight size={14} /></a></div>
      </section>
    </div>
  );
}