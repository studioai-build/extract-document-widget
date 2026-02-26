import { Check, AlertCircle } from 'lucide-react';
import DataSection from './DataSection';
import { ExtractedData } from '../types/extractedData';

interface ExtractedDataPanelProps {
  data: ExtractedData;
}

export default function ExtractedDataPanel({ data }: ExtractedDataPanelProps) {
  return (
    <div className="h-full overflow-auto">
      <div className="space-y-4 p-4">
        {/* Service Request Section */}
        <DataSection
          title="Service Request"
          icon={<Check className="h-4 w-4 text-[#2b4a9a]" />}
          tone="blue"
          fields={[
            { label: 'REQUEST ID', value: data.serviceRequest.requestId },
            { label: 'CONFIDENCE', value: data.serviceRequest.confidence },
            { label: 'DEALER', value: data.serviceRequest.dealer },
            { label: 'DATE OF POSSESSION/INSTALL', value: data.serviceRequest.dateOfPossession },
            { label: 'SERIAL NUMBER', value: data.serviceRequest.serialNumber },
            { label: 'PART NUMBER', value: data.serviceRequest.partNumber },
            { label: 'SKU NUMBER', value: data.serviceRequest.skuNumber },
            { label: 'HULL (HIN)', value: data.serviceRequest.hull },
            { label: 'LENGTH', value: data.serviceRequest.length },
            { label: 'NAME', value: data.serviceRequest.name },
            { label: 'VESSEL MANUFACTURED BY', value: data.serviceRequest.vesselManufacturedBy },
            { label: 'SUMMARY OF PROBLEM', value: data.serviceRequest.summaryOfProblem },
            { label: 'SKU FROM QUANTITY', value: data.serviceRequest.skuFromQuantity },
          ]}
        />

        {/* Warranty Claim Section */}
        <DataSection
          title="Warranty Claim"
          icon={<AlertCircle className="h-4 w-4 text-[#2b6f4a]" />}
          tone="green"
          fields={[
            { label: 'CLAIM ID', value: data.warrantyClaim.claimId },
            { label: 'CONFIDENCE', value: data.warrantyClaim.confidence },
          ]}
        />
      </div>
    </div>
  );
}
