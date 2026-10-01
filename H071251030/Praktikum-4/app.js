let namePerson = prompt("Masukkan nama anda", "Siapa");

const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] },
];

let hasil = [];

dataPraktikan.forEach((item) => {
  totalNilai = item.nilaiTugas.reduce((a, b) => a + b);
  average = totalNilai / item.nilaiTugas.length;
  let statusAkhir = "";
  if (average < 75) statusAkhir = "Tidak lulus";
  else statusAkhir = "Lulus";
  hasil.push({
    nama: item.nama,
    rerata: average,
    status: statusAkhir,
  });
});

console.log(hasil);

document.open();

document.write(
  `<h1 class="font-sans font-bold text-blue-600 text-2xl">Laporan Praktikum</h1>`,
);

if (namePerson.length === 0) {
  document.write(
    `<p class="font-sans text-red-600 font-bold">Akses ditolak</p>`,
  );
}

document.write(
  `<p class="font-bold text-blue-600 mb-8">Hola! ${namePerson}</p>`,
);

hasil.forEach((item) => {
  document.write(
    `<div class="py-2 px-4 flex flex-col gap-4"><p>${item.nama}</p><p class>${item.rerata}</p></div>`,
  );
  if (item.status == "Lulus")
    document.write(`<p class="text-green-600 font-bold">${item.status}</p>`);
  else document.write(`<p class="text-red-600 font-bold">${item.status}</p>`);
});
