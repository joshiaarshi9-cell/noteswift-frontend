



const StatsCards = ({stats = []}) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`bg-white rounded-2xl border ${item.border} p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2
                  className={`text-4xl font-bold mt-2 ${item.valueColor}`}
                >
                  {item.value}
                </h2>

                <p className={`mt-2 text-sm ${item.subColor}`}>
                  {item.subtitle}
                </p>
              </div>

              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${item.iconBg}`}
              >
                <Icon
                  size={34}
                  className={item.iconColor}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;