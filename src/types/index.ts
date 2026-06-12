export interface SummaryMetric {
  title: string;
  value: number | string;
  change: string;
  positive: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface TableRow {
  id: number;
  title: string;
  status: string;
  views: number;
}