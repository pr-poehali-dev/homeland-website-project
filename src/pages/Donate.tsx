import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Donate = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "VIP Bronze",
      price: "299₽",
      duration: "30 дней",
      features: [
        "Приоритетный вход на сервер",
        "Уникальный цвет ника",
        "Доступ к VIP транспорту",
        "Бонус к зарплате +25%",
      ],
      color: "from-amber-600 to-amber-800",
      popular: false,
    },
    {
      name: "VIP Silver",
      price: "599₽",
      duration: "30 дней",
      features: [
        "Все привилегии Bronze",
        "Личная парковка",
        "Команда /tp к друзьям",
        "Бонус к зарплате +50%",
        "Уникальные эмоции",
      ],
      color: "from-gray-400 to-gray-600",
      popular: true,
    },
    {
      name: "VIP Gold",
      price: "999₽",
      duration: "30 дней",
      features: [
        "Все привилегии Silver",
        "Личный дом в центре",
        "Доступ к админ-транспорту",
        "Бонус к зарплате +100%",
        "Возможность создавать ивенты",
      ],
      color: "from-yellow-400 to-yellow-600",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Поддержать проект
            </h1>
            <p className="text-gray-400 mt-2">
              Получите VIP-статус и уникальные возможности
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 ${
                pkg.popular ? "ring-2 ring-purple-500 transform scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-purple-700">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle
                  className={`text-2xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}
                >
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {pkg.duration}
                </CardDescription>
                <div className="text-4xl font-bold text-white mt-4">
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity`}
                >
                  <Icon name="CreditCard" size={16} />
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-purple-400 flex items-center gap-2">
              <Icon name="Info" size={20} />
              Способы оплаты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">
                  Доступные методы:
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Icon
                      name="CreditCard"
                      size={16}
                      className="text-blue-500"
                    />
                    Банковская карта
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon
                      name="Smartphone"
                      size={16}
                      className="text-green-500"
                    />
                    СБП (Система быстрых платежей)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Wallet" size={16} className="text-yellow-500" />
                    Электронные кошельки
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">
                  Важная информация:
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• VIP-статус активируется автоматически</li>
                  <li>• Возврат средств не предусмотрен</li>
                  <li>• Поддержка: support@server.ru</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;
