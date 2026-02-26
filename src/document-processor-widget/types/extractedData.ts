export interface ServiceRequest {
  requestId: string;
  confidence: string;
  dealer: string;
  dateOfPossession: string;
  serialNumber: string;
  partNumber: string;
  skuNumber: string;
  hull: string;
  length: string;
  name: string;
  vesselManufacturedBy: string;
  summaryOfProblem: string;
  skuFromQuantity: string;
}

export interface WarrantyClaim {
  claimId: string;
  confidence: string;
}

export interface ExtractedData {
  serviceRequest: ServiceRequest;
  warrantyClaim: WarrantyClaim;
}