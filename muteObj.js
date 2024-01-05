// Mutable bisa dirubah
// Immutable tidak bisa dirubah

let nama = "Jonny"
nama[0] = "B"


const user = {
    name: "Adam",
    umur: 27,
    alamat: {
        kota: "Jakarta",
        kecamatan: "Pasar Minggu"
    }
}

// const madam = {...user}
const madam = {...user, alamat:{...user.alamat}}

user.name = "Madam"


user.umur = 30
console.log(madam)
// user.alamat.kecamatan = "Semarang"

// DISTRACTERING
const {name, umur, alamat} = user
user.alamat.kecamatan = "Semarang"
console.log(name)
// console.log(madam)