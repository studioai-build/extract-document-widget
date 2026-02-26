interface DataFieldProps {
  label: string;
  value: string;
}

export default function DataField({ label, value }: DataFieldProps) {
  const isEmpty = !value || value.trim() === '';

  return (
    <div className="space-y-1">
      <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#7a8494]">
        {label}
      </label>
      <div className={`min-h-5 text-sm ${isEmpty ? 'text-[#8b95a7]' : 'font-semibold text-[#3f4652]'}`}>
        {isEmpty ? ' ' : value}
      </div>
    </div>
  );
}
