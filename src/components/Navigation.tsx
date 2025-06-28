import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm border-b border-blue-400/20">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <Icon name="Stethoscope" size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
          МедСимулятор
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className="text-blue-200 hover:text-white transition-colors duration-300 font-medium"
        >
          Главная
        </Link>
        <Link
          to="/patients"
          className="text-blue-200 hover:text-white transition-colors duration-300 font-medium"
        >
          Пациенты
        </Link>
        <Link
          to="/hospital"
          className="text-blue-200 hover:text-white transition-colors duration-300 font-medium"
        >
          Больница
        </Link>
        <button className="medical-button">Начать смену</button>
      </div>
    </nav>
  );
};

export default Navigation;
