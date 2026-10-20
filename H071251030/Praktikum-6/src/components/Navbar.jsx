const menus = ["Home", "About", "Skills", "Gallery"];

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 md:px-12 px-4">
      <h2 className="text-4xl font-bold">Taskif</h2>
      <li className="md:px-6 md:py-4 px-4 py-2 bg-white rounded-full flex items-center gap-8">
        <div className="md:block hidden">
          {menus.map((menu) => (
            <a 
              href={`#${menu.toLowerCase()}`}
              key={menu}
              className="font-medium text-foreground-darker px-4 py-2 hover:bg-foreground hover:text-background rounded-full transition-colors"
              onClick={() => console.log(menu)}
            >
              {menu}
            </a>
          ))}
        </div>
        <div className="block md:hidden">
          <button
            className="font-medium text-foreground-darker px-4 py-2 text-2xl font-bold hover:bg-foreground hover:text-background rounded-full transition-colors"
            onClick={() => console.log("hamburger")}
          >
            =
          </button>
        </div>
      </li>
    </nav>
  );
}

export default Navbar;
