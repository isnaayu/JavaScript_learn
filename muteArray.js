const kumpulanAngka = [1,2,3,4,5]

// kumpulanAngka[0] = 7

// const angkaBaru = [..kumpulanAngka]

kumpulanAngka.forEach((e) => {
    console.log(e*2)
})

let ma = kumpulanAngka.map((e) => {
    return e*2
})

console.log(ma)

const [satu, dua, tiga, ...sisa] = kumpulanAngka

console.log(kumpulanAngka)
console.log(sisa)
