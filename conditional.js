let nilai = null

// 0, null, NaN, undefined, false, [] -> falsy

if(nilai){
    console.log(nilai +"ada")
}

function tuFa(a){
    if(a) {
        return "benar"
    }
    return "salah"
}

console.log(tuFa(0))