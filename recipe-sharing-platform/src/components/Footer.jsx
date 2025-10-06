function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-6 mt-8">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} RecipeShare. Crafted with ❤️ by David.
      </div>
    </footer>
  );
}

export default Footer;
