interface PhobiaCardProps {
  name: string;
  type: string;
  power: number;
  health: number;
  description: string;
  emoji: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

const PhobiaCard = ({
  name,
  type,
  power,
  health,
  description,
  emoji,
  rarity,
}: PhobiaCardProps) => {
  const rarityColors = {
    common: "from-gray-500 to-gray-600",
    rare: "from-blue-500 to-blue-600",
    epic: "from-purple-500 to-purple-600",
    legendary: "from-yellow-500 to-orange-500",
  };

  const rarityBorders = {
    common: "border-gray-400/50",
    rare: "border-blue-400/50",
    epic: "border-purple-400/50",
    legendary: "border-yellow-400/50",
  };

  return (
    <div
      className={`fantasy-card relative overflow-hidden group cursor-pointer ${rarityBorders[rarity]}`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${rarityColors[rarity]}`}
      ></div>

      <div className="text-center mb-4">
        <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <span className="text-sm text-purple-300 capitalize">{type}</span>
      </div>

      <p className="text-sm text-purple-200 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-red-500/20 px-2 py-1 rounded text-red-300 text-sm font-semibold">
            ⚔️ {power}
          </div>
          <div className="bg-green-500/20 px-2 py-1 rounded text-green-300 text-sm font-semibold">
            💚 {health}
          </div>
        </div>
        <div
          className={`text-xs uppercase font-bold px-2 py-1 rounded bg-gradient-to-r ${rarityColors[rarity]} text-white`}
        >
          {rarity}
        </div>
      </div>
    </div>
  );
};

export default PhobiaCard;
