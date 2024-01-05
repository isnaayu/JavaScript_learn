// function Car(){
//     this.brand = "BMW",
//     this.series ="E36",
//     this.run = function(){
//         console.log("Brum Brum Brum")
//     }
// }

function Car(brand, series) {
  (this.brand = brand),
    (this.series = series),
    (this.run = function () {
      console.log("Brum Brum Brum", this.brand);
    });
}

const bmw = new Car("BMW", "E36");
const tesla = new Car("Tesla", "Model X1");

// console.log(bmw)
bmw.run();
tesla.run();

class Animal {
  constructor(species, race, suara) {
    (this.species = species), (this.race = race), (this.suara = suara);
  }

  //   sound() {
  //     console.log(this.suara);
  //   }
  static sound() {
    console.log("this.suara");
  }
}

const kucing = new Animal("Kucing", "Anggora", "Meow");
// kucing.sound();
Animal.sound()
