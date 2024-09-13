//no 1
function umur(nilai){
  if (nilai >= 18) {
    console.log("Anda Dewasa");
  } else {
    console.log("Anda belum dewasa");
  }
}
umur(18);
umur(17);

//no 2
for (let a = 1; a <= 100; a++) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("FizzBuzz");
  } else if (a % 3 === 0) {
    console.log("Fizz");
  } else if (a % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
}

// no 3
function potongan(h, d) {
    if ( d <= 100){
      let rumus = h * (d / 100);
      let kurang = h - rumus;
      return kurang;
    } else {
      return"Persentase diskon tidak valid";
    }
}
let HargaAsli= 500000;
let Diskon = 20;
let HargaAkhir = potongan(HargaAsli, Diskon);
console.log("harga setelah diskon = Rp" + HargaAkhir);
