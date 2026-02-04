function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-sm w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} MyShop</p>

        <div className="flex gap-4 mt-2 sm:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
