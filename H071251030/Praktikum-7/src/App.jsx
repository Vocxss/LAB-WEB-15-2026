import { useEffect, useState } from "react";
import Card from "./components/MenuCard";
import { MenuList } from "./components/MenuList";
import { RingkasanPesanan } from "./components/RingkasanPesanan";
import { Navbar } from "./components/Navbar";

const menuItems = [
  {
    name: "Kopi Susu",
    category: "Coffee",
    price: 18000,
    isAvailable: true,
    description: "Espresso dengan susu segar dan gula aren"
  },
  {
    name: "Americano",
    category: "Coffee",
    price: 15000,
    isAvailable: true,
    description: "Espresso dengan air panas, rasa kuat dan bersih"
  },
  {
    name: "Cappuccino",
    category: "Coffee",
    price: 22000,
    isAvailable: true,
    description: "Espresso, susu panas, dan busa susu tebal"
  },
  {
    name: "Matcha Latte",
    category: "Non-Coffee",
    price: 24000,
    isAvailable: true,
    description: "Teh hijau matcha dengan susu."
  },
  {
    name: "Teh Tarik",
    category: "Non-Coffee",
    price: 14000,
    isAvailable: false,
    description: "Teh tarik yang ditarik hingga berbusa"
  },
]

function App() {
  const [totalProducts, setTotalProducts] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [menus, setMenus] = useState(menuItems)

  useEffect(() => {
    console.log("Total Products:", totalProducts);
  }, [totalProducts])

  const isExisted = (title) => {
    return totalProducts.some((product) => product.name === title);
  }

  const addToCart = (title, price) => {
    if (isExisted(title)) {
      const updatedProducts = totalProducts.map((product) => {
        if (product.name === title) {
          return { ...product, quantity : product.quantity + 1 };
        }
        return product;
      });
      return setTotalProducts(updatedProducts);
    } else {
      const newProducts = { name: title, price: price, quantity: 1 };
      return setTotalProducts((prevProducts) => [...prevProducts, newProducts]);
    }
  }

  const removeFromCart = (title, quantity) => {
    if (totalProducts.length === 0) {
      return 
    } else {
      if (quantity > 1) {
        const updatedProducts = totalProducts.map((product) => {
          if (product.name === title) {
            return { ...product, quantity: quantity - 1 };
          }
          return product;
        });
        return setTotalProducts(updatedProducts);
      } else {
        setTotalProducts((prevProducts) => {
          return prevProducts.filter(
            (index) =>
              index !== prevProducts.findIndex((p) => p.name === title),
          );
        });
      }
    }
  }

  const handleMenuCategory = (category) => {
    if (category === "All") {
      setMenus(menuItems);
    } else {
      const filteredMenus = menuItems.filter((menu) => menu.category === category);
      setMenus(filteredMenus);
    }
  }

  const totalItems = totalProducts.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="relative bg-background min-h-dvh font-serif text-foreground">
      <Navbar totalMenu={totalItems} setShowCart={setShowCart}/>
      <div className="flex flex-col py-4 px-8 gap-8">
        <div className="flex gap-4">
          <button className="hover:bg-primary hover:text-white border border-primary text-primary rounded-sm py-1.5 px-2 text-sm cursor-pointer font-mono font-bold" onClick={() => handleMenuCategory("All")}>All</button>
          <button className="hover:bg-primary hover:text-white border border-primary text-primary rounded-sm py-1.5 px-2 text-sm cursor-pointer font-mono font-bold" onClick={() => handleMenuCategory("Coffee")}>Coffee</button>
          <button className="hover:bg-primary hover:text-white border border-primary text-primary rounded-sm py-1.5 px-2 text-sm cursor-pointer font-mono font-bold" onClick={() => handleMenuCategory("Non-Coffee")}>Non-Coffee</button>
        </div>
        <MenuList menus={menus} addToCart={addToCart} removeFromCart={removeFromCart}/>
      </div>

      {showCart && 
        <RingkasanPesanan totalProducts={totalProducts} setTotalProducts={setTotalProducts} setShowCart={setShowCart}/>
      }
    </div>
  );
}

export default App;
