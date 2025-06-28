import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-cyan-900/30 to-slate-900/50"></div>

      {/* Floating medical elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-15 animate-pulse"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-8">
          <Icon
            name="Heart"
            size={80}
            className="text-blue-400 mx-auto mb-4 animate-pulse"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300 bg-clip-text text-transparent leading-tight">
          МедСимулятор
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Стань лучшим врачом в больнице! Диагностируй пациентов, проводи
          операции и спасай жизни в реалистичном медицинском симуляторе! 🏥⚕️
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="medical-button text-lg px-8 py-4 flex items-center gap-2">
            <Icon name="Play" size={24} />
            Начать игру
          </button>
          <button className="bg-transparent border-2 border-blue-400 text-blue-200 hover:bg-blue-400/20 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
