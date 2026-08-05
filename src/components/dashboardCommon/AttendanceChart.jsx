

const AttendanceChart = ({ overview }) => {

  // console.log(overview); 

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">
          Attendance Overview
        </h2>

        <select className="border rounded-lg px-3 py-2">
          <option>This Month</option>
        </select>
      </div>

      <div className="h-72 flex items-end justify-between gap-4">
        {
        overview.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1"
          >
            <div
              className="w-full bg-blue-500 rounded-t-xl hover:bg-blue-600 duration-300"
              style={{ height: `${value.present * 20}px` }}
            ></div>

            <p className="mt-3 text-sm text-gray-500">
              {index + 1} May
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceChart;