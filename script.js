// Var declare
const hargaAwalInput = document.getElementById("hargaAwal");
const diskonInput = document.getElementById("diskonInput");
const outputDiv = document.getElementById("output");

// hitung jumlah diskon
function hitung() {
  const hargaAwal = parseFloat(hargaAwalInput.value);
  const persentaseDiskon = parseFloat(diskonInput.value);

  // validasi
  if (isNaN(hargaAwal) || isNaN(persentaseDiskon)) {
    outputDiv.textContent = "Harap isi formnya";
    return;
  }

  if (persentaseDiskon > 100) {
    outputDiv.textContent = "Diskon tidak boleh di atas 100%";
    return;
  }

  if (persentaseDiskon < 0) {
    outputDiv.textContent = "Diskon tidak boleh negatif";
    return;
  }

  // proses perhitungan
  const diskon = hargaAwal * (persentaseDiskon / 100);
  const hargaSetelahDiskon = hargaAwal - diskon;

  // tampilkan output (pindah ke sini)
  outputDiv.textContent = `Diskon = Rp${diskon.toLocaleString("id-ID")} \n
Harga Akhir = Rp${hargaSetelahDiskon.toLocaleString("id-ID")}`;
}

// event listener
hargaAwalInput.addEventListener("input", hitung);
diskonInput.addEventListener("input", hitung);
