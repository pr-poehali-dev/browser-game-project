import Icon from "@/components/ui/icon";

const MedicalFeatures = () => {
  const features = [
    {
      icon: "User",
      title: "Диагностика",
      description:
        "Осматривай пациентов, анализируй симптомы и ставь точные диагнозы. Используй современное медицинское оборудование!",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Building",
      title: "Управление Больницей",
      description:
        "Развивай свою больницу: покупай новое оборудование, нанимай персонал и улучшай отделения!",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: "Activity",
      title: "Хирургические Операции",
      description:
        "Проводи сложные операции с помощью мини-игр. Спасай жизни и становись лучшим хирургом!",
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
            Особенности Игры
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="medical-card text-center group">
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
              <p className="text-blue-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalFeatures;
