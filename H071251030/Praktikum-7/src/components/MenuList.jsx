import MenuCard from "./MenuCard";

export const MenuList = ({menus, addToCart, removeFromCart}) => {
    return (
      <section className="grid grid-cols-4 divide-foreground min-h-screen">
        {menus.map((menu) => (
          <MenuCard
            key={menu.name}
            title={menu.name}
            category={menu.category}
            price={menu.price}
            isAvailable={menu.isAvailable}
            description={menu.description}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </section>
    );
}