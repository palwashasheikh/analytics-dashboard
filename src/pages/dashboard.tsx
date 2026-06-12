import SummaryCard from "../components/summaryCard";
import LineChartWidget from "../components/LineChartWidget";
import type { SummaryMetric, ChartDataPoint, TableRow } from "../types";
import BarChartWidget from "../components/BarChartWidget";
import DataTable from "../components/DataTable";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

const userGrowthData: ChartDataPoint[] = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 600 },
  { name: "Mar", value: 550 },
  { name: "Apr", value: 900 },
  { name: "May", value: 1200 },
  { name: "Jun", value: 1100 },
  { name: "Jul", value: 1500 },
];
const revenueData: ChartDataPoint[] = [
  { name: "Jan", value: 8000 },
  { name: "Feb", value: 12000 },
  { name: "Mar", value: 9500 },
  { name: "Apr", value: 15000 },
  { name: "May", value: 18000 },
  { name: "Jun", value: 14000 },
  { name: "Jul", value: 22000 },
];

const tableData: TableRow[] = [
  { id: 1, title: "Dashboard Redesign", status: "Active", views: 4200 },
  { id: 2, title: "API Integration", status: "Pending", views: 1800 },
  { id: 3, title: "User Auth Module", status: "Active", views: 3100 },
  { id: 4, title: "Analytics Pipeline", status: "Inactive", views: 970 },
  { id: 5, title: "Mobile Responsive", status: "Active", views: 5400 },
];

const metrics: SummaryMetric[] = [
  {
    title: "Total Users",
    value: "24,521",
    change: "+12% this month",
    positive: true,
  },
  {
    title: "Revenue",
    value: "$84,200",
    change: "+8% this month",
    positive: true,
  },
  {
    title: "Bounce Rate",
    value: "42%",
    change: "-3% this month",
    positive: false,
  },
  {
    title: "Active Sessions",
    value: "1,340",
    change: "+5% this month",
    positive: true,
  },
];

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const filteredData: TableRow[] =
    selectedFilter === "All"
      ? tableData
      : tableData.filter((row) => row.status === selectedFilter);
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="border-b border-gray-800 px-6 py-4 mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Analytics Dashboard</h1>
        <span className="text-sm text-gray-400">Palwasha Sheikh</span>
      </div>
      <div className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <SummaryCard key={index} metric={metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <LineChartWidget data={userGrowthData} title="User Growth" />
          <BarChartWidget data={revenueData} title="Monthly Revenue" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {/* <DataTable data={tableData} title="Project Overview" /> */}
          {/* <FilterBar
            selected={selectedFilter}
            onChange={setSelectedFilter}
          />
                  <DataTable data={filteredData} title="" /> */}

          <div className="grid grid-cols-1 gap-4 pb-6">
            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h3 className="text-white font-semibold mb-4">
                Project Overview
              </h3>
              <FilterBar
                selected={selectedFilter}
                onChange={setSelectedFilter}
              />
              <DataTable data={filteredData} title="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
