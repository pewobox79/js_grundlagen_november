//Arten von Consolen:

/**name: 
 * das ist ein mehrzeiliger-
 * Kommentar
 */
console.log("basic js")
console.warn("das ist ein warn")
console.error("das ist ein fehler")
//alert("hallo")

//Datentypen
//1. Primitive
/**
 * boolean, number, float, string, undefined, null, bigNumber
 */

//2. nonPrimitive
/**
 * array, object, function
 */

//Bsp: non-primitive

const obj1 = {
    name:"Peter",
    age: "47",
    height: 180
}

const obj2 = {
    name: "Peter",
    age: 47,
    height: 180
}

const obj3 = obj2

console.log("vergleich inhalt mit TYPE", obj1.name === obj2.name)

const num1 = 9 + 1
const num2 = 10
let num3 = 10
console.log("vergleich obj", obj3 == obj2)
console.log("vergleich number", num1 == num3)


//vergleichoperatoren 

//ohne Type
console.log("vergleich age property", obj1.age == obj2.age)

//mit Type
console.log("vergleich age property", obj1.age === obj2.age)


//mathematik operatoren

const age1 = Number(obj1.age)
const result = age1 + obj2.age
console.log("result", result)

const newNumber = Number(obj1.name)
console.log("isNaN", isNaN(obj1.height))
console.log("newNumber", newNumber)

const numberAsString = String(10)
console.log("numberasstring", numberAsString)