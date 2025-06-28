import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-blue-900/50"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-15 animate-pulse"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-8">
          <Icon
            name="Sparkles"
            size={80}
            className="text-purple-400 mx-auto mb-4 animate-pulse"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent leading-tight">
          ФобиКарты
        </h1>

        <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Магический мир добрых существ-фобий ждёт тебя! Собирай карты, сражайся
          с милыми монстрами и покори фэнтези-вселенную! 🐛✨
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="fantasy-button text-lg px-8 py-4 flex items-center gap-2">
            <Icon name="Play" size={24} />
            Начать игру
          </button>
          <button className="bg-transparent border-2 border-purple-400 text-purple-200 hover:bg-purple-400/20 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
