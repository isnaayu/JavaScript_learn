const user = {
    idUser: 1,
    nameUser: "John",
    address: {
        city: "Jakarta",
        district: "Pasar Minggu"
    }
}

function getInfo(gaji){
    console.log(`This ${this.idUser} have a name ${this.nameUser} ${gaji}`)
    console.log(this)
    console.log(this.address.city)
}

getInfo.call(user, 3000000)

