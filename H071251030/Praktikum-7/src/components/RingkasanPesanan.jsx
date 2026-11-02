import { FormPesanan } from "./FormPesanan";

export const RingkasanPesanan = ({totalProducts, setTotalProducts, setShowCart}) => { 

  const totalPrice = totalProducts.reduce((total, product) => total + (product.quantity * product.price), 0);

    return (
      <div
        className="relative w-full max-h-screen overflow-y-hidden h-full"
      >
        <div className="fixed inset-0 bg-black/50 z-1" onClick={() => setShowCart(false)}></div>
        <div className="flex justify-center items-center h-full">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md w-full max-w-xl overflow-y-auto max-h-[90vh] z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Ringkasan Pesanan</h2>
              <button
                className="cursor-pointer text-primary font-bold text-lg"
                onClick={() => setShowCart(false)}
              >
                X
              </button>
            </div>
            {totalProducts.length === 0 ? (
              <p className="text-gray-500">Your belanja is kosong.</p>
            ) : (
              <div>
                <ul className="grid grid-rows-auto gap-2">
                  {totalProducts.map((product, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>
                        {product.name} - {product.quantity}
                      </span>
                      <span>
                        Rp{(product.price * product.quantity).toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between items-center border-t py-4 border-foreground">
                  <p className="font-bold">
                    Total Harga: Rp{totalPrice.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <FormPesanan
                    totalProducts={totalProducts}
                    setTotalProducts={setTotalProducts}
                    setShowCart={setShowCart}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}