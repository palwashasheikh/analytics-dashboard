import type { TableRow } from "../types";

interface DataTableProps {
  data: TableRow[];
  title?: string;
}

const statusColors: Record<string, string> = {
  Active: "bg-green-500/20 text-green-400",
  Inactive: "bg-red-500/20 text-red-400",
  Pending: "bg-yellow-500/20 text-yellow-400",
};

const DataTable = ({ data, title }: DataTableProps) => {
  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
          {title && <h3 className="text-white font-semibold mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-800">
              <th className="text-left py-3 px-4">Title</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Views</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
              >
                <td className="py-3 px-4 text-white">{row.title}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusColors[row.status] || "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-300">{row.views.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;