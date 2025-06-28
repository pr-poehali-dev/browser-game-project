interface PatientCardProps {
  name: string;
  condition: string;
  severity: number;
  recovery: number;
  symptoms: string;
  emoji: string;
  priority: "routine" | "urgent" | "critical" | "emergency";
}

const PatientCard = ({
  name,
  condition,
  severity,
  recovery,
  symptoms,
  emoji,
  priority,
}: PatientCardProps) => {
  const priorityColors = {
    routine: "from-green-500 to-green-600",
    urgent: "from-yellow-500 to-yellow-600",
    critical: "from-orange-500 to-orange-600",
    emergency: "from-red-500 to-red-600",
  };

  const priorityBorders = {
    routine: "border-green-400/50",
    urgent: "border-yellow-400/50",
    critical: "border-orange-400/50",
    emergency: "border-red-400/50",
  };

  const priorityLabels = {
    routine: "плановый",
    urgent: "срочный",
    critical: "критический",
    emergency: "экстренный",
  };

  return (
    <div
      className={`medical-card relative overflow-hidden group cursor-pointer ${priorityBorders[priority]}`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${priorityColors[priority]}`}
      ></div>

      <div className="text-center mb-4">
        <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <span className="text-sm text-blue-300 capitalize">{condition}</span>
      </div>

      <p className="text-sm text-blue-200 mb-4 leading-relaxed">{symptoms}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-red-500/20 px-2 py-1 rounded text-red-300 text-sm font-semibold">
            ⚠️ {severity}
          </div>
          <div className="bg-green-500/20 px-2 py-1 rounded text-green-300 text-sm font-semibold">
            💊 {recovery}
          </div>
        </div>
        <div
          className={`text-xs uppercase font-bold px-2 py-1 rounded bg-gradient-to-r ${priorityColors[priority]} text-white`}
        >
          {priorityLabels[priority]}
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
