import PhobiaCard from "./PhobiaCard";

const PhobiaShowcase = () => {
  const sampleCards = [
    {
      name: "Паучок-Обнимашка",
      type: "дружелюбный",
      power: 3,
      health: 5,
      description:
        "Этот милый паучок просто хочет дружить! Его объятия дают дополнительную защиту союзникам.",
      emoji: "🕷️",
      rarity: "common" as const,
    },
    {
      name: "Призрак-Шутник",
      type: "весёлый",
      power: 4,
      health: 3,
      description:
        "Любит подшучивать, но никого не пугает! Может стать невидимым на один ход.",
      emoji: "👻",
      rarity: "rare" as const,
    },
    {
      name: "Змейка-Танцор",
      type: "артистичный",
      power: 5,
      health: 4,
      description:
        "Грациозная змейка, которая завораживает врагов своим танцем и лечит союзников.",
      emoji: "🐍",
      rarity: "epic" as const,
    },
    {
      name: "Королева Темноты",
      type: "мудрая",
      power: 8,
      health: 7,
      description:
        "Мудрая правительница, которая защищает всех от настоящих страхов и дарит храбрость.",
      emoji: "🌙",
      rarity: "legendary" as const,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Познакомься с Фобиями
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Каждое существо в нашем мире — это добрая душа, которая поможет тебе
            стать храбрее! 💫
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleCards.map((card, index) => (
            <PhobiaCard key={index} {...card} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="fantasy-button text-lg px-8 py-4">
            Собрать свою колоду
          </button>
        </div>
      </div>
    </section>
  );
};

export default PhobiaShowcase;
