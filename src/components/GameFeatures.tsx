import Icon from "@/components/ui/icon";

const GameFeatures = () => {
  const features = [
    {
      icon: "Users",
      title: "Выбор Персонажа",
      description:
        "Стань храбрым искателем приключений или мудрым магом. Каждый герой имеет уникальные способности!",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "Map",
      title: "Игровой Мир",
      description:
        "Исследуй волшебные локации: Лес Шёпотов, Замок Храбрости, Долину Дружбы и многое другое!",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: "Zap",
      title: "Магические Битвы",
      description:
        "Сражайся с картами фобий в пошаговых дуэлях. Используй заклинания и стратегию для победы!",
      color: "from-pink-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Особенности Игры
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="fantasy-card text-center group">
              <div
                className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-purple-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
