console.log("loops")

const string = 300
const array = ["Audi", "Mercedes", "Porsche", "Renault"]

const array2 = [
    {
        name: "Peter",
        age: 47,
        address: {
            street: "",
            number: ""
        }
    },
    {
        name: "Peter",
        age: 23,
        address: {
            street: "Meine Strasse",
            number: "15"
        }
    }, 
    {
        name: "Klaus",
        age: 23,
        address: {
            street: "Meine Strasse",
            number: "15"
        }
    }
]
const obj = {
    name: "Peter",
    age: 47,
    height: 180
}

//Loop in Array

//FOR - LOOP
for (let i = 0; i < string.length; i++) {

    console.log("forloop", string[i]) // => verweis auf den Index innerhalb von array

}
function callBack(item){
    console.log("forEach callback", item)
}

array.forEach(callBack) // => forEach hat kein return

const newArray = array.map(item => {
    return item + "A"
})

//Spread Operator ... => Shallow Copy von dem original datensatz
const newArray3 = array2.map(item => {
    return {
        ...item,
        name: "Heinz",
        weight: 50,
        age: 100,
        address: {
            ...item.address,
            street: "neue strasse",
            zipCode: 8888
        }
    }
})
console.log("new array 3", newArray3)
const filteredArray = array.filter((item) => item != "Mercedes")
const findInArray = array.find(item => item == "Audi")

console.log("find", findInArray)
console.log("filtered Array", filteredArray)
console.log("new array", newArray)
console.log("typeOf", typeof array)
console.log("is array", Array.isArray(array)) // Array prüfen



//array mit objekten
const filteredArray2 = array2.find(item => item.name == "Peter")
console.log("filteredarray2", filteredArray2)


//object methods

 const objectKeys = Object.keys(obj)
 console.log("object keys", objectKeys)

 const objectValues = Object.values(obj)
 console.log("obj values", objectValues)

 const objectEntries = Object.entries(obj)
 console.log("obj entries", objectEntries)

Object.freeze(obj) // ab hier ist das object nicht veränderbar
 obj.eyeColor = "blue"
 console.log("obj nach update", obj)


 // update array
 array.push("BMW")
 console.log("array after update", array)

 array.pop() // => letzter eintrag im array
 console.log("array after pop", array)

 const newArray2 = array.slice(1, 3)
 console.log("array mit slice 2", newArray2)

 //slug

const slugArray = ["aboutme", "peterwolf"]
const dbSlug = "aboutme/peterwolf"

const mySlug = `${slugArray[0]}/${slugArray[1]}`
const mySlug2 = slugArray.join("/")
console.log("myslug", mySlug2, mySlug)

if(dbSlug == mySlug2) {
    console.log("passt")
}