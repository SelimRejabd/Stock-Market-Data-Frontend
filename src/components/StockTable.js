import React from 'react';

const StockTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Code</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">High</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Low</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Close</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((stock, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{stock.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.trade_code}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.high}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.low}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.open}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.close}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
