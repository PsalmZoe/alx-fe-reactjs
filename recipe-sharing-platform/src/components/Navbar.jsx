import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold text-orange-500">
          RecipeShare 🍴
        </Link>

        <div className="space-x-6 hidden md:flex">
          {[
            { name: "Home", path: "/" },
            { name: "Add Recipe", path: "/add-recipe" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
