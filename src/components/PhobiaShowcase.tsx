import PatientCard from "./PatientCard";

const PatientShowcase = () => {
  const samplePatients = [
    {
      name: "Анна Петрова",
      condition: "грипп",
      severity: 3,
      recovery: 7,
      symptoms:
        "Повышенная температура, кашель и общая слабость. Требует симптоматического лечения.",
      emoji: "🤒",
      priority: "routine" as const,
    },
    {
      name: "Михаил Сидоров",
      condition: "перелом",
      severity: 6,
      recovery: 4,
      symptoms:
        "Закрытый перелом левой руки после падения. Необходима срочная иммобилизация.",
      emoji: "🩹",
      priority: "urgent" as const,
    },
    {
      name: "Елена Кузнецова",
      condition: "аппендицит",
      severity: 8,
      recovery: 6,
      symptoms:
        "Острые боли в правом боку, тошнота и рвота. Подозрение на острый аппендицит.",
      emoji: "🏥",
      priority: "critical" as const,
    },
    {
      name: "Дмитрий Волков",
      condition: "инфаркт",
      severity: 10,
      recovery: 3,
      symptoms:
        "Острая боль в груди, одышка и потливость. Требует немедленной госпитализации!",
      emoji: "🚨",
      priority: "emergency" as const,
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Твои Пациенты
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Каждый пациент нуждается в твоей помощи. Поставь диагноз и назначь
            правильное лечение! 🩺
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {samplePatients.map((patient, index) => (
            <PatientCard key={index} {...patient} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="medical-button text-lg px-8 py-4">
            Принять пациентов
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientShowcase;
