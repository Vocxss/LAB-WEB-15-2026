export const Navbar = ({totalMenu, setShowCart}) => {
    return (
      <nav className="flex justify-between items-center w-full py-4 px-8 border-b border-primary">
        <p className="text-4xl font-bold">KopiAbal</p>  
          <button
            className="cursor-pointer px-4 py-3 text-sm border border-primary hover:bg-primary font-bold hover:text-white text-primary rounded-md transition-colors"
            onClick={() => setShowCart(true)}
          >
            Jumlah Pesanan: {totalMenu}
          </button>
      </nav>
    );
}