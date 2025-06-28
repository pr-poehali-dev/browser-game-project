import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm border-b border-purple-400/20">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Icon name="Sparkles" size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          ФобиКарты
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-purple-200 hover:text-white transition-colors duration-300 font-medium"
        >
          Главная
        </Link>
        <Link
          to="/characters"
          className="text-purple-200 hover:text-white transition-colors duration-300 font-medium"
        >
          Персонажи
        </Link>
        <Link
          to="/game"
          className="text-purple-200 hover:text-white transition-colors duration-300 font-medium"
        >
          Игровой мир
        </Link>
        <button className="fantasy-button">Играть сейчас</button>
      </div>
    </nav>
  );
};

export default Navigation;
