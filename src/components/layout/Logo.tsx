export function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div style={{ width: size, height: size }} className="grid place-items-center rounded-lg bg-brand">
        <span className="flex items-end gap-[3px]"><i className="h-2.5 w-[3px] rounded bg-white" /><i className="h-4 w-[3px] rounded bg-white" /><i className="h-3 w-[3px] rounded bg-white" /></span>
      </div>
      <span className="text-xl font-semibold text-white">BizVision</span>
      <span className="rounded bg-navy-soft px-1.5 py-0.5 text-[10px] font-medium text-indigo-200">AI</span>
    </div>
  );
}
