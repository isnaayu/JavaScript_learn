const listPesanan = ["teh", "kiranti", "Americano", "susu"];

function pesanKopi(pesanan) {
  console.log(`Memesan ${pesanan}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pesanan == "teh") {
        reject(`Pesanan ${pesanan} tidak tersedia`);
      } else {
        resolve(`Pesanan ${pesanan} tersedia`);
      }
    }, 1000);
  });
}

function seduhKopi(pesanan) {
  console.log(`${pesanan} sedang diseduh....`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${pesanan} telah siap`);
    }, 3000);
  });
}

async function memesanKopi(pesanan) {
  try {
    const order1 = await pesanKopi(pesanan[0]);
    console.log(order1);
    const seduh1 = await seduhKopi(pesanan[0]);
    console.log(seduh1);

    const order2 = await pesanKopi(pesanan[1]);
    console.log(order2);
    const seduh2 = await seduhKopi(pesanan[1]);
    console.log(seduh2);

    const order3 = await pesanKopi(pesanan[2]);
    console.log(order3);
    const seduh3 = await seduhKopi(pesanan[2]);
    console.log(seduh3);

    const order4 = await pesanKopi(pesanan[3]);
    console.log(order4);
    const seduh4 = await seduhKopi(pesanan[3]);
    console.log(seduh4);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Terimakasih sudah memesan");
  }
}

memesanKopi(listPesanan);
