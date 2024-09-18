import React from 'react';

const PieChart = () => {
  const timelineData = [
    { year: 2018, tech: 'HTML', color: '#4bc0c0' },
    { year: 2019, tech: 'CSS', color: '#ff9f40' },
    { year: 2020, tech: 'JavaScript', color: '#ffcd56' },
    { year: 2021, tech: 'PHP', color: '#36a2eb' },
  ];

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="relative w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-white font-bold">{item.year}</span>
              </div>
              <div className="mt-2 text-center">
                <span className="text-lg font-semibold">{item.tech}</span>
              </div>
              {/* Horizontal line connecting the items */}
              {index < timelineData.length - 1 && (
                <div className="w-16 h-1 bg-gray-300 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
