export interface BlackList {
  meta: BlackListMeta;
  data: BlackListItem[];
}

export interface BlackListMeta {
  generatedAt: string;
}

export interface BlackListItem {
  ipAddress: string;
  totalReports: number;
  abuseConfidenceScore: number;
}
