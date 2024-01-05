const stock = {
    air: 1000,
    bijiKopi: 200
}

function pesanKopi(pesanan){
    console.log(`Memesan ${pesanan}`)
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(pesanan == 'teh'){
                reject(`Pesanan ${pesanan} tidak tersedia`)
            }else {
                resolve(`Pesanan ${pesanan} tersedia`)
            }
        }, 1000)
    })
}

function cekStok(){
    console.log(`Sedang mengecek stock yang ada...`)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(stock.air > 0 && stock.bijiKopi > 0){
                resolve(`Stock kopi tersedia`)
            }else{
                console.log(`Stock tidak tersedia`)
            }
        }, 2000)
    })
}

function seduhKopi(pesanan){
    console.log(`${pesanan} sedang diseduh....`)
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(`${pesanan} telah siap`)
        }, 3000)
    })
}

async function memesanKopi(pesanan){
    try {
        const order = await pesanKopi(pesanan)
        console.log(order)
        const cek = await cekStok()
        console.log(cek)
        const seduh = await seduhKopi(pesanan)
        console.log(seduh)
    }catch(e){
        console.log(e)
    }finally{
        console.log("Terimakasih sudah memesan")
    }
}

memesanKopi("Americano")