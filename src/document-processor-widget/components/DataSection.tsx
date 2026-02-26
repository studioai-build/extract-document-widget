import { ReactNode } from 'react';
import DataField from './DataField';

interface Field {
  label: string;
  value: string;
}

interface DataSectionProps {
  title: string;
  icon: ReactNode;
  fields: Field[];
  tone?: 'blue' | 'green';
}

const toneStyles = {
  blue: 'border-[#c7d7f7] bg-[#e9effb] text-[#2b4a9a]',
  green: 'border-[#b8e2ca] bg-[#e9f5ee] text-[#2b6f4a]',
};

export default function DataSection({ title, icon, fields, tone = 'blue' }: DataSectionProps) {
  return (
    <div className={`space-y-4 rounded-xl border p-5 ${toneStyles[tone]}`}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
      </div>
      <div className="space-y-5">
        {fields.map((field, index) => (
          <DataField
            key={index}
            label={field.label}
            value={field.value}
          />
        ))}
      </div>
    </div>
  );
}
