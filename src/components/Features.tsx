import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Анти-чит система",
      description: "Надежная защита от читеров и нарушителей правил",
    },
    {
      icon: "Users",
      title: "Активное сообщество",
      description: "Более 5000 участников в нашем Discord сервере",
    },
    {
      icon: "Car",
      title: "Уникальный транспорт",
      description: "Более 200 эксклюзивных автомобилей и мотоциклов",
    },
    {
      icon: "Home",
      title: "Система недвижимости",
      description: "Покупай дома, квартиры и бизнесы по всему городу",
    },
    {
      icon: "Briefcase",
      title: "150+ профессий",
      description: "От водителя такси до главы крупной корпорации",
    },
    {
      icon: "Crown",
      title: "Уникальные события",
      description: "Еженедельные ивенты с ценными призами",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Почему выбирают <span className="text-purple-400">нас</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Мы создали идеальную среду для ролевых игр с уникальными
            возможностями
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg mr-4">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Присоединиться к серверу
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
