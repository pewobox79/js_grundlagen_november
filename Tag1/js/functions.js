console.log("functions")
//Funktionen

//1. Deklarationen

mySecondFunction()
//variante A: function as constant
const myFunction = ()=>{
    console.log("my function called")
}
myFunction() //called function mit ()

const objTest ={
    name: `Peter`,
    meinHaus: "doppelhaus",
    age: 25,
    weight: 100,
    calculator: () => {
        return this.age + this.weight
    },
    greeting: () => console.log(`Hello ${this.name}`)
}

objTest.calculator()
//varianteB: function declaration keyword
function mySecondFunction (){
    console.log("my second function called")
}
//=> mySecondFunktion kann VOR initialisierung aufgerufen werden HOISTING


//Functionen mit parameter

function addTwoNumbers(num1, num2){
    const result = num1 + num2 // result ist im BLOCK SCOPE
    console.log("result", result)
}
const result = 100
console.log("result aus global", result)
addTwoNumbers(Number("10"), 10)

function multiplyWith20(value){
    const result2 = value * 20
    console.log("multiply result", result2)
}

multiplyWith20(result)


//return values

function subTwoNumbers(num1, num2){

    if(isNaN(num1) || isNaN(num2)) return "NoNumber" // early return oder guard clause

    return num1 - num2 
    
}

const returnedValue = subTwoNumbers("peter", 90)
console.log("returnedValue", returnedValue)
