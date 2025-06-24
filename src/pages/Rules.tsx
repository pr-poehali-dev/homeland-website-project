import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const navigate = useNavigate();

  const rules = [
    {
      category: "Общие правила",
      items: [
        "Уважительное отношение к другим игрокам",
        "Запрет на использование читов и багов",
        "Соблюдение игровой атмосферы",
      ],
    },
    {
      category: "Правила РП",
      items: [
        "Отыгрыш персонажа должен быть реалистичным",
        "Запрет на MG (Metagaming) и PG (Powergaming)",
        "Соблюдение игровых ситуаций",
      ],
    },
    {
      category: "Наказания",
      items: [
        "Предупреждение → Кик → Бан на час → Бан на день",
        "За серьёзные нарушения - перманентный бан",
        "Апелляции рассматриваются администрацией",
      ],
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
              Правила сервера
            </h1>
            <p className="text-gray-400 mt-2">
              Обязательно к прочтению всем игрокам
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {rules.map((section, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Icon name="Shield" size={20} />
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="flex items-start gap-3">
                      <Badge
                        variant="outline"
                        className="mt-1 border-purple-500 text-purple-400"
                      >
                        {ruleIndex + 1}
                      </Badge>
                      <p className="text-gray-300">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-red-900/20 border-red-500">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center gap-2">
              <Icon name="AlertTriangle" size={20} />
              Важно помнить
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Незнание правил не освобождает от ответственности. Администрация
              имеет право изменять правила без предварительного уведомления.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rules;
