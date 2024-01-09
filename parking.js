let carsList = [];
class ParkingLot {
  capacity = 0; // Kapasitas tempat parkir
  remaining = 0; // Sisa tempat parkir yang masih kosong
  cars = []; // Array dari object Car.
  constructor(capacity, remaining, cars) {
    (this.capacity = capacity),
      (this.remaining = remaining),
      (this.cars = cars);
  }

  createPark(capacity) {
    this.capacity = capacity;
    this.remaining = capacity;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `Tempat Parkir Berhasil dibuat dengan kapasitas ${capacity} kendaraan`
        );
      }, 5000);
    });
  }
  Park(car) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.remaining <= 0) {
          resolve(`Maaf Parkir sudah penuh`);
        } else {
          carsList.push(car);
          this.cars = carsList;
          this.remaining -= 1;
          resolve(
            `Mobil ${car.pemilik} dengan Nopol ${car.nopol} berhasil parkir`
          );
        }
      }, 3000);
    });
  }
  Leave(car) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = carsList.findIndex((c) => c.nopol === car.nopol);

        if (index !== -1) {
          carsList.splice(index, 1);
          this.cars = carsList;
          this.remaining += 1;
          resolve(
            `Mobil ${car.pemilik} dengan Nopol ${car.nopol} sudah Keluar`
          );
        } else {
          resolve(`Mobil ${car.pemilik} dengan Nopol ${car.nopol} tidak ada`);
        }
      }, 1500);
    });
  }
  Check() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const parkedCarsNopol = carsList.map((car) => car.nopol);
        console.log(
          `{capacity: ${this.capacity}, remaining: ${this.remaining}, parkedCars: [ ${parkedCarsNopol} ] }`
        );
      });
    }, 500);
  }
}

class Car {
  nopol; // Nomor Polisi
  pemilik; // Nama Pemilik

  constructor(nopol, pemilik) {
    (this.nopol = nopol), (this.pemilik = pemilik);
  }
  addCar(car) {
    carsList.push(car);
  }
}

async function parkingManajemen() {
  try {
    const car = new Car();
    const parking = new ParkingLot();
    const mobil1 = new Car(`B2021`, `Isna Ayu`);
    const mobil2 = new Car(`B2019`, `Refal`);
    const mobil3 = new Car(`B2020`, `Bayu`);
    const mobil4 = new Car(`B2023`, `Andi`);
    const mobil5 = new Car(`B2024`, `Rudi`);
    const mobil6 = new Car(`B2021`, `Tefany`);
    const mobil7 = new Car(`B2026`, `Agus`);
    const mobil8 = new Car(`BE2006`, `Doni`);

    const create = await parking.createPark(3);
    console.log(create);

    const parkCar1 = await parking.Park(mobil1);
    console.log(parkCar1);

    parking.Check();

    const parkCar2 = await parking.Park(mobil2);
    console.log(parkCar2);

    const carLeave1 = await parking.Leave(mobil1);
    console.log(carLeave1);

    const parkCar3 = await parking.Park(mobil3);
    console.log(parkCar3);

    const parkCar4 = await parking.Park(mobil4);
    console.log(parkCar4);

    const carLeave2 = await parking.Leave(mobil2);
    console.log(carLeave2);

    const parkCar5 = await parking.Park(mobil5);
    console.log(parkCar5);

    const parkCar6 = await parking.Park(mobil6);
    console.log(parkCar6);
    const carLeave3 = await parking.Leave(mobil7);
    console.log(carLeave3);
    const carLeave4 = await parking.Leave(mobil8);
    console.log(carLeave4);

    parking.Check();
    const carLeave5 = await parking.Leave(mobil5);
    console.log(carLeave5);

    parking.Check();
  } catch (e) {
    console.log(e);
  }
}

parkingManajemen();
