import HeroSection from "../components/HeroSection";
import RecipeCard from "../components/RecipeCard";
import data from "../data.json";

function HomePage() {
  return (
    <div className="space-y-16 bg-amber-50 min-h-screen">
      <HeroSection />

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">
          🍳 Trending Recipes
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-orange-100">
        © 2025 <span className="text-orange-500 font-semibold">RecipeShare</span>. Crafted with ❤️ by David.
      </footer>
    </div>
  );
}

export default HomePage;
