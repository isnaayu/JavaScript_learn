// function greet(name, callback){
//     console.log("hello "+name)
//     callback()
// }

// function cb(){
//     console.log("Good Bye ")
// }

// greet("Alwan", cb)

function greet(callback){
    console.log("Hello dari ini greet")

    let nama = ""
    setTimeout(()=> {
        nama = "Alwan"
        callback(nama)
    },3000)
}

function cb(nama){
    console.log(nama)
}

console.log("Start")
greet(cb)
console.log("Finish")