/*
Raport Nilai Sekolah

Requirement
Bu Mimin meminta dibuatkan sebuah program untuk membuat raport dengan hasil akhir adalah berupa sebuah A, B, C, D dan E dengan ketentuan sebagai berikut

A >= 80
B >= 70
C >= 55
D >= 40
E < 40

Rincian nilai yang ada adalah TUGAS (25%), UTS (30%) dan UAS(45%)

Input Program :
TUGAS = 85
UTS = 90
UAS = 100

Gunakan Variable Temporary

Output Program :
Nilai 93.25 dengan hasil akhir adalah A.
*/

A = 80
B = 70
C = 55
D = 40
E = 40

function tugas(tugas, uts, uas){
    hasil = ((25/ 100) * tugas) + ((30/100) * uts) + ((45/ 100) * uas)
    if(hasil >= A){
        console.log("nilai "+ hasil +" dengan hasil akhir adalah A")
    }else if(hasil >= B && hasil < A){
        console.log("nilai "+ hasil +" dengan hasil akhir adalah B")
    }else if(hasil >= C && hasil < B){
        console.log("nilai "+ hasil +" dengan hasil akhir adalah C")
    }else if(hasil >= D && hasil < C){
        console.log("nilai "+ hasil +" dengan hasil akhir adalah D")
    }else {
        console.log("nilai "+ hasil +" dengan hasil akhir adalah E")
    }
}

console.log("--------- Challenge 1 -------")

tugas(85,90,100)



/*
Jadwal harian

Requirement:
1. Bantulah Susi untuk menentukan jadwal sehari-harinya dengan sebuah program sederhana. Akan diberikan inputan jam berupa integer lalu tentukan kegiatan yang akan dilakukan pada jam tersebut sesuai dengan kondisi sebagai berikut : 
- Jika jam 4-5 akan mencetak “Bangun Pagi”
- Jika jam 6-7 akan mencetak “Mandi dan Sarapan”.
- Jika jam 8-11 akan mencetak “Berangkat Sekolah”.
- Jika jam 12 akan mencetak “Pulang Sekolah”.
- Jika jam 13-15 akan mencetak “Tidur Siang”.
- Jika Jam 16-17 akan mencetak “Waktu Main”
- Selain dari itu akan mencetak “Waktu Belajar dan Istirahat”
- Bila user menginput melebihi 24 jam maka akan mencetak “Hanya ada 24 jam dalam sehari”
*/

console.log("\n--------- Challenge 2 -------")

function jadwal(waktu){
    if(waktu >=4 && waktu <=5){
        console.log("Bangun Pagi")
    }else if(waktu >=6 && waktu <=7){
        console.log("Mandi dan Sarapan")
    }else if(waktu >=8 && waktu <=11){
        console.log("Berangkat Sekolah")
    }else if(waktu >=12 && waktu <=13){
        console.log("Pulang Sekolah")
    }else if(waktu >=13 && waktu <=15){
        console.log("Tidur Siang")
    }else if(waktu >=16 && waktu <=17){
        console.log("Waktu Main")
    }else if(waktu >24){
        console.log("Hanya ada 24 jam dalam sehari")
    }else{
        console.log("Waktu Belajar dan Istirahat")
    }
}

jadwal(20)