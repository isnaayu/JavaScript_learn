class MyClass{
    #privateField 
    // untuk membuat private maka gunakan # diawal

    constructor(value){
        this.#privateField = value
    }

    getPrivateField(){
        return this.#privateField
    }

    setPrivateField(value){
        this.#privateField = value
    }
}

const obj = new MyClass("Secret")
obj.setPrivateField("Tidak Secret")
console.log(obj.getPrivateField())