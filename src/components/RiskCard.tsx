import React from "react";

const ContextualRisk = () => {
  const risks = [
    { label: "Critical", count: 2, color: "bg-red-600" },
    { label: "High", count: 0, color: "bg-red-400" },
    { label: "Medium", count: 0, color: "bg-yellow-400" },
    { label: "Low", count: 0, color: "bg-green-500" },
  ];

  return (
    <div className="flex flex-1 flex-col rounded-15 border bg-white px-4 pb-5 pt-4 shadow-md sm:px-8">
      <h2 className="mb-4 text-base font-semibold text-gray-soft-500 sm:text-lg">
        Contextual Risk
      </h2>
      <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <ul className="w-full text-[#383874] sm:w-auto">
          {risks.map((risk, index) => (
            <li
              key={index}
              className="mt-3 flex items-center gap-2 text-xs sm:mt-5 sm:text-sm"
            >
              <span className="flex items-center text-15 font-bold">
                <span
                  className={`mr-2 rounded-full md:h-[7px] md:w-[7px] ${risk.color}`}
                />
                {risk.count}
              </span>
              <span className="font-normal">{risk.label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex w-full items-center justify-center sm:mt-0 sm:w-auto">
          <div className="relative">
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-4 border-red-600 sm:h-[150px] sm:w-[150px] sm:border-8">
              <span className="text-xl font-bold text-gray-7 sm:text-4xl">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualRisk;
