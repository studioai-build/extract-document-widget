import { useState } from 'react';
import { Activity, FileText } from 'lucide-react';
import DocumentViewer from './components/DocumentViewer';
import ExtractedDataPanel from './components/ExtractedDataPanel';
import { mockExtractedData } from './constants/mockData';

export function DocumentProcessorWidget() {
  const [extractedData] = useState(mockExtractedData);

  return (
    <div className="h-screen bg-[#f4f5f7] p-3">
      <div className="flex h-full flex-col gap-3 rounded-2xl border border-[#e4e7ec] bg-[#f7f8fa] p-3 lg:flex-row">
        {/* Left Panel - Original Document */}
        <section className="flex min-w-0 flex-[1.38] flex-col rounded-xl border border-[#e4e7ec] bg-white">
          <div className="border-b border-[#eaecf0] px-5 py-3">
            <div className="flex items-start gap-2">
              <FileText className="mt-0.5 h-4 w-4 text-[#528bff]" />
              <div>
                <h2 className="text-sm font-semibold leading-tight text-[#111827]">Original Document</h2>
                <p className="text-sm font-semibold leading-tight text-[#6b7280]">
                  Service Event Request & Claim Reimbursement Form
                </p>
              </div>
            </div>
          </div>
          <DocumentViewer />
        </section>

        {/* Right Panel - Extracted Data */}
        <section className="flex min-w-0 flex-1 flex-col rounded-xl border border-[#e4e7ec] bg-white">
          <div className="border-b border-[#eaecf0] px-5 py-3">
            <div className="flex items-start gap-2">
              <Activity className="mt-0.5 h-4 w-4 text-[#22c55e]" />
              <div>
                <h2 className="text-sm font-semibold leading-tight text-[#111827]">Extracted Data</h2>
                <p className="text-sm font-semibold leading-tight text-[#6b7280]">
                  AI-extracted information ready for validation
                </p>
              </div>
            </div>
          </div>
          <ExtractedDataPanel data={extractedData} />
        </section>
      </div>
    </div>
  );
}
