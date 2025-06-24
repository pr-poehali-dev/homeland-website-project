import Icon from "@/components/ui/icon";

const ServerStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "1,247",
      label: "Онлайн сейчас",
      color: "text-green-400",
    },
    {
      icon: "Clock",
      value: "99.9%",
      label: "Аптайм сервера",
      color: "text-blue-400",
    },
    {
      icon: "Zap",
      value: "< 15ms",
      label: "Средний пинг",
      color: "text-yellow-400",
    },
    {
      icon: "Award",
      value: "15,847",
      label: "Всего игроков",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Статистика сервера
          </h2>
          <p className="text-gray-400 text-lg">
            Актуальные данные в реальном времени
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Icon name={stat.icon} size={24} className={stat.color} />
                </div>
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerStats;
