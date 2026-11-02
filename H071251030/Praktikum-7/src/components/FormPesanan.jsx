import { useState } from "react";

export const FormPesanan = ({totalProducts, setTotalProducts, setShowCart}) => {
    const [name, setName] = useState("");
    const [nomorMeja, setNomorMeja] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Pesanan berhasil dikirim!\nNama: ${name}\nNomor Meja: ${nomorMeja}\nTotal Produk: ${totalProducts.length}`);
        setName("");
        setNomorMeja("");
        setShowCart(false);
        setTotalProducts([]);
    }
    
    return (
      <div className="flex flex-col gap-8 p-4 rounded-md border border-primary w-full">
        <h2 className="text-2xl font-bold">Form Pesanan</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Nama</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-4 py-2 rounded-sm border border-primary/50 focus:border-primary focus:outline-primary text-sm"
              placeholder="Asep Buna"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nomorMeja">Nomor Meja</label>
            <input
              value={nomorMeja}
              onChange={(e) => setNomorMeja(e.target.value)}
              className="pl-4 py-2 rounded-sm border border-primary/50 focus:border-primary focus:outline-primary text-sm"
              placeholder="1"
              type="number"
              id="nomorMeja"
              name="nomorMeja"
            />
          </div>
          <div className="mt-4 flex justify-end">
            
            <button
              className="cursor-pointer px-4 py-2 bg-primary text-white rounded-md"
              type="submit"
            >
              Pesan
            </button>
          </div>
        </form>
      </div>
    );
}