export interface Check {
  data: CheckData;
}

export interface CheckData {
  ipAddress: string;
  isPublic: boolean;
  ipVersion: number;
  isWhitelisted: boolean;
  abuseConfidenceScore: number;
  countryCode: string;
  countryName: string;
  usageType: string;
  isp: string;
  domain: string;
  totalReports: number;
  lastReportedAt: string;
  reports: ReportData[];
}

export interface ReportData {
  reportedAt: string;
  comment: string;
  categories: number[];
  reportedId: number;
  reporterCountryCode: string;
  reporterCountryName: string;
}
