import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-purple-400">Бонусный</span>
              <span className="text-blue-400 ml-2">RP</span>
            </div>
            <p className="text-gray-400 mb-4">
              Лучший RP сервер с уникальными возможностями и активным
              сообществом.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0960V13.0956Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="/rules"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Правила
                </a>
              </li>
              <li>
                <a
                  href="/forum"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Форум
                </a>
              </li>
              <li>
                <a
                  href="/donate"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Донат
                </a>
              </li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Подключение</h3>
            <div className="space-y-2">
              <div className="text-gray-400">
                <span className="text-white">IP:</span> play.bonusrp.ru
              </div>
              <div className="text-gray-400">
                <span className="text-white">Порт:</span> 7777
              </div>
              <div className="text-gray-400">
                <span className="text-white">Версия:</span> SA-MP 0.3.7
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Бонусный RP. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
