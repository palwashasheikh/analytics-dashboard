interface FilterBarProps {
  selected: string;
  onChange: (value: string) => void;
}

const filters = ["All", "Active", "Inactive", "Pending"];


const FilterBar = ({ selected, onChange }: FilterBarProps) => {
  return (
    <div className="flex space-x-4 mb-6">
        {filters.map((filter) => (  
            <button key={filter}                                            
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selected === filter ? "bg-green-500 text-white" : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                }`}         
                onClick={() => onChange(filter)}
            >
                {filter}
            </button>
        ))}
    </div>
  );
}

export default FilterBar;