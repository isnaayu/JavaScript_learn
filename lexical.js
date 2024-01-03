let a = 10
const foo = () => {
    console.log(`get variable outer a ${a}`)
    let b = 10
    const bar = () => {
        console.log(`get variable b inner ${b}`)
    }

    bar()
}

foo()
// bar() -> Error (not global function)

let counter = 1
const increment = () => {
    let angka = 4
    angka++
    return angka
    // return counter += 1
}

console.log(increment())
console.log(increment())

function tampilkanNama(name, func){
    if(typeof func === 'function'){
        name = func.call(this, name)
    }
    return name
}

function capitalization(name){
    return name.toUpperCase()
}

console.log(tampilkanNama("Andi"))
console.log(tampilkanNama("Adam", capitalization))
