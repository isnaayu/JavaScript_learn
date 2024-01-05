// fulfilled
// pending
// rejected

let username = 'alwan'
let password = 'fabian'

const janji = new Promise((resolve, reject)=>{
    let id = 123
    setTimeout(()=>{
        if(username === 'alwan' && password === 'fabian'){
            resolve(id)
        }else(
            reject("Password atau Username Salah")
        )
    },3000)
})

function onFulFilled(resolveValue){
    console.log(resolveValue)
}

function onRejected (rejectedValue){
    console.log(rejectedValue)
}

janji.then(onFulFilled)
    .catch(onRejected)
    .finally(()=>{
        console.log("Selesai")
    })

// janji.then(onFulFilled, onRejected)
// console.log(janji)