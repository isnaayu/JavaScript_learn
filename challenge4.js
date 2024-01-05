/*
Problem

Pada tugas ini kamu diminta untuk membuat rambu lalu lintas, dan akan tercetak keterangan di console kuning, hijau, merah

Kriteria
Gunakan metode callback dan setTimeout
Posisi dan value tidak boleh terbalik atau di ubah

Skeleton Code
const merah = “Berhenti”
const kuning = “Hati-hati"
const hijau = “Jalan”

function Kuning(callback){
            setTimeout(
       callback()
   )
}

Output
//input
Merah()
Kuning(Hijau)

Berhenti    //detik ke 1
Hati-hati    //detik ke 2
Jalan         //detik ke 3

repo: challenge-callback
*/

const merah = "Berhenti"
const kuning = "Hati-hati"
const hijau = "Jalan"

function Merah(){
    setTimeout(()=>{
        console.log(merah)
    }, 1000)
}

function Kuning(callback){
    setTimeout(()=>{
        console.log(kuning)
        callback()
    }, 2000)
}

function Hijau(){
    setTimeout(()=>{
        console.log(hijau)
    }, 3000)
}

Merah()
Kuning(Hijau)