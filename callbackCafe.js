const listPesanan = ["teh", "kiranti", "Americano", "Susu"]
function cekMinuman(error, output){
    if(error){
        console.error(`Yahhhh... ${error}`)
    }else{
        console.log(`Thankyou.... silahkan menikmati ${output}`)
    }
}

function pesanMinuman(pesanan, kirimPesan){
    console.log(`Menunggu Pesanan ${pesanan} sedang diproses....`)
    setTimeout(()=> {
        if(pesanan == "teh"){
            kirimPesan(`Pesanan ${pesanan} tidak ada`)
        }else {
            kirimPesan(null, pesanan)
        }
    }, 3000)
}

// pesanMinuman("Kiranti", cekMinuman)

pesanMinuman(listPesanan[0], (error, pesanan) => {
    cekMinuman(error, pesanan)
    pesanMinuman(listPesanan[1], (error, pesanan) => {
        cekMinuman(error, pesanan)
        pesanMinuman(listPesanan[2], (error, pesanan) => {
            cekMinuman(error, pesanan)
            pesanMinuman(listPesanan[3], (error, pesanan) => {
                cekMinuman(error, pesanan)
            })
        })
    })
})