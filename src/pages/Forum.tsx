import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Forum = () => {
  const navigate = useNavigate();

  const governmentCategories = [
    {
      title: "МВД",
      description: "Министерство внутренних дел - обсуждения и объявления",
      posts: 87,
      lastPost: "1 час назад",
      icon: "Shield",
      color: "blue",
    },
    {
      title: "ФСБ",
      description: "Федеральная служба безопасности - секретные материалы",
      posts: 34,
      lastPost: "4 часа назад",
      icon: "Eye",
      color: "red",
    },
    {
      title: "Министерство Обороны",
      description: "Военные операции и стратегические планы",
      posts: 156,
      lastPost: "30 минут назад",
      icon: "Sword",
      color: "green",
    },
    {
      title: "Правительство",
      description: "Официальные указы и государственные решения",
      posts: 203,
      lastPost: "2 часа назад",
      icon: "Building2",
      color: "yellow",
    },
  ];

  const categories = [
    {
      title: "Общее обсуждение",
      description: "Общие вопросы и обсуждения",
      posts: 245,
      lastPost: "2 часа назад",
    },
    {
      title: "Предложения",
      description: "Ваши идеи по улучшению сервера",
      posts: 89,
      lastPost: "5 часов назад",
    },
    {
      title: "Жалобы",
      description: "Жалобы на игроков и администрацию",
      posts: 156,
      lastPost: "1 день назад",
    },
  ];

  const recentPosts = [
    {
      title: "Новый ивент на сервере!",
      author: "AdminSteve",
      replies: 12,
      time: "3 часа назад",
    },
    {
      title: "Баг с транспортом",
      author: "Player123",
      replies: 5,
      time: "6 часов назад",
    },
    {
      title: "Предложение по фракциям",
      author: "RPMaster",
      replies: 23,
      time: "1 день назад",
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
              Форум сообщества
            </h1>
            <p className="text-gray-400 mt-2">
              Обсуждения, предложения и новости
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Государственные организации */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
                <Icon name="Crown" size={24} />
                Государственные организации
              </h2>
              <div className="space-y-4">
                {governmentCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 border-gray-600 hover:border-red-500 transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle
                            className={`text-${category.color}-400 flex items-center gap-2 text-lg`}
                          >
                            <Icon name={category.icon} size={20} />
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-gray-300">
                            {category.description}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className={`border-${category.color}-500 text-${category.color}-400 bg-${category.color}-900/20`}
                        >
                          {category.posts}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">
                        Последнее сообщение: {category.lastPost}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Общие категории */}
            <h2 className="text-2xl font-bold mb-6 text-purple-400">
              Общие категории
            </h2>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-colors cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-purple-400 flex items-center gap-2">
                          <Icon name="MessageSquare" size={20} />
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {category.description}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-purple-500 text-purple-400"
                      >
                        {category.posts}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Последнее сообщение: {category.lastPost}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-purple-400">
              Последние посты
            </h2>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-white mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs bg-purple-600">
                            {post.author[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MessageCircle" size={14} />
                        <span>{post.replies}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{post.time}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
              <Icon name="Plus" size={16} />
              Создать тему
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
