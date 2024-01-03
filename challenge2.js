/*
Soal 1

Perulangan Sederhana

Problem
Pada tugas ini kamu diminta untuk mencari total bilangan yang habis di bagi 3

Kriteria
const number = [1, 3, 4, 5, 6, 9, 12, 15, 25, 125, 225, 300];

Output
570
*/

console.log("--------- Challenge 1 -------")
const number = [1, 3, 4, 5, 6, 9, 12, 15, 25, 125, 225, 300];
let result = 0;
for(i=0; i<number.length; i++){
    if(number[i]%3 == 0){
        result += number[i]
    }
}

console.log(result)

/*
Soal 2
Penjumlahan Ganjil Genap

Problem
Pada tugas ini kamu diminta untuk membuat aplikasi berbasis console base.
Tugas kamu adalah mencari penjumlahan ganjil serta genap penjumlahan dari angka yang di input.
Misalkan angka yang di sediakan adalah 5 maka hasilnya adalah ganjil : 1 + 3 = 4 karena angka 1 dan 3 adalah ganjil dan kurang dari 5
sedangkan untuk genap : 2 + 4 + 6 + 8 + 10 = 30 karena angka 2, 4, 6, 8, 10 adalah angka genap 5 pertama.

Kriteria
- gunakan modulus untuk menghitung ganjil & genap
- gunakan perulangan untuk mengecek angkanya
Input
const number = 5;

Output
"ganjil : 1 + 3 = 4"
"genap : 2 + 4 + 6 + 8 + 10 = 30"
*/

console.log("\n--------- Challenge 2 -------")
let ganjil = []
let genap = []

function ganjilGenap(value){
    for(i=1; i<=value*2; i++){
        if(i%2 == 0){
            genap.push(i)
        }else {
            if(ganjil < value){
                ganjil.push(i)
            }
        }
    }
    let resultGanjil = 0
    let resultStringGanjil = ganjil.join(" + ")

    for(i=0; i<ganjil.length ; i++){
        resultGanjil += ganjil[i]
    }

    let resultGenap = 0
    let resultStringGenap = genap.join(" + ")
    console.log("Ganjil : "+resultStringGanjil +" = "+resultGanjil)
    


    for(i=0; i<genap.length ; i++){
        resultGenap += genap[i]
    }
    console.log("Genap : "+resultStringGenap +" = "+resultGenap)
}
ganjilGenap(5)


/*
Soal 3

Faktor Bilangan

Problem
Pada tugas ini kamu diminta untuk mencetak faktor sebuah bilangan.

Faktor suatu bilangan adalah suatu bilangan yang dapat habis dibagi bilangan tersebut.

Misalkan angka = 20 akan menghasilkan 1,2,4,5,10,20.

Kriteria
gunakan perulangan
variabel bisa diisi angka berapa saja

Output
// input 20
1
2
4
5
10
20
*/
console.log("\n--------- Challenge 3 -------")

function faktorBilangan(nilai){
    for(i=0; i<=nilai; i++){
        if(nilai%i == 0){
            console.log(i)
        }
    }
}

faktorBilangan(20)
