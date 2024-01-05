// console.log("start")
// setTimeout(()=> {
//     console.log("Process")
// }, 1000)
// console.log("Finish")

const sayHello = () => {
    console.log("Halo Enigmanians")
    setTimeout(()=> {
        return "Halo Refactorians"
    }, 3000)
}

console.log("start")
console.log(sayHello())
console.log("Finish")