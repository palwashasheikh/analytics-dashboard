import type { SummaryMetric } from "../types";

interface SummaryCardProps {
  metric: SummaryMetric;
}

const SummaryCard = ({ metric }: SummaryCardProps) => {
  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
      <p className="text-gray-400 text-sm mb-1">{metric.title}</p>
      <h2 className="text-3xl font-bold text-white mb-2">{metric.value}</h2>
      <span
        className={`text-sm font-medium ${
          metric.positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {metric.change}
      </span>
    </div>
  );
};

export default SummaryCard;