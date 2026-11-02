export default function MenuCard({title, price, category, description, isAvailable, addToCart, removeFromCart}) {
    return (
      <div className="border border-foreground flex flex-col gap-4 px-4 py-8">
        <img
          src="/americano.webp"
          className="rounded-3xl w-full h-3/4 object-cover"
          alt={title}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-between items-start">
            <div className="flex justify-between items-center w-full">
              <p
                className={
                  "bg-primary/30 px-2 py-1 rounded-sm text-xs text-primary"
                }
              >
                {isAvailable ? "Available" : "Not Available"}
              </p>
              <p
                className={
                  "bg-primary/30 px-2 py-1 rounded-sm text-xs text-primary"
                }
              >
                {category}
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-medium">{title}</p>
              <p className="font-medium">{description}</p>
              <p className="text-lg font-mono font-bold">
                Rp{price.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex flex-col px-2"></div>
          <div className="flex gap-2 justify-end items-center">
            <button
              className={`border ${!isAvailable ? 'text-gray-400 border-gray-400' : 'border-primary text-primary hover:bg-primary hover:text-white'} w-8 aspect-square rounded-sm py-1.5 px-2 text-sm cursor-pointer font-mono font-bold`}
              onClick={() => {
                if (isAvailable) addToCart(title, price);
              }}
            >
              +
            </button>
            <button
              className={`border ${!isAvailable ? 'text-gray-400 border-gray-400' : 'border-primary text-primary hover:bg-primary hover:text-white'} w-8 aspect-square rounded-sm py-1.5 px-2 text-sm cursor-pointer font-mono font-bold`}
              onClick={() => {
                if (isAvailable) removeFromCart(title, quantity);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
}