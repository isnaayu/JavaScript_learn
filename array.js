const numbers = [1,2,3,4,5,6]

numbers.push(7) //add element in the end
numbers.pop() //remove last element
numbers.shift() //remove first element
numbers.unshift(3) // add element in first element
numbers.splice(2,3) // remove from index 2 to 3
numbers.splice(2,3,10) //remove from index 2 to index 3 and add element 10
numbers.splice(2) //remove from index 2

numbers.slice(1,3) //remove from index 1 to 3 (but not include index 3)
console.log(numbers)