const obj1 = new Object(); //object Struktural syntac
const obj2 = {}; //object literal syntax

console.log(obj2);

const user = {
  firstName: "Adam",
  lastName: "Dalton",
  age: 27,
  address: "Malang",
  gaji: 12000000,
  mengajar: function() {
    console.log("Merem Melek "+ this.gaji);
  },
};

user["gaji"] -= 200000;
user["hobby"] = "Memasak";

console.log("Gaji Kamu cuma ", user.gaji);
console.log("Hobi kamu adalah ", user["hobby"]);
user.mengajar();

let adam = user

user.firstName = "Madam"
console.log(adam.firstName)