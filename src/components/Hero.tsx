import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Бонусный
          </span>
          <span className="text-white block mt-2">RP</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Погрузись в мир безграничных возможностей. Создай свою историю в
          лучшем RP сервере.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">1,247</div>
            <div className="text-gray-400">Игроков онлайн</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-400">Работает сервер</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">150+</div>
            <div className="text-gray-400">Уникальных работ</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            <Icon name="Play" size={20} className="inline mr-2" />
            Начать играть
          </button>
          <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            <Icon name="Users" size={20} className="inline mr-2" />
            Наше сообщество
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
