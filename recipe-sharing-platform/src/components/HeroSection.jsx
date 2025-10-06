function HeroSection() {
  return (
    <section className="relative text-center py-24 px-4 bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 shadow-md rounded-b-3xl">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white drop-shadow-lg mb-4">
          Discover & Share Tasty Recipes
        </h1>
        <p className="text-lg text-white/90 mb-8">
          Explore new dishes or share your kitchen creativity with the world.
        </p>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="🔍 Search for recipes..."
            className="w-80 md:w-96 px-5 py-3 rounded-full shadow-md text-gray-700 focus:outline-none focus:ring-4 focus:ring-amber-200"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
