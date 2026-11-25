console.log("input")

// 1. Elemente in JS ziehen

const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const submitBtn = document.getElementById("submitBtn");
const app = document.getElementById("app")
// 2. Funktionalität der elemente

let dataToSubmit = ""
function handleInput(event){
    const {value, name} = event.target

    //validierung
    console.log("input handeled", value, name)
    dataToSubmit = value
}


function createElement(value){
    const h1 = document.createElement("h1")
    h1.innerText = value
    app.append(h1)
}
function handleSubmit(event){
    event.preventDefault() //unterdrückt browser reload

    createElement(dataToSubmit)
    console.log("data submitted", nameInput.value)


}


// 3. functionen an element binden

nameInput.addEventListener("change", handleInput)
//lastnameInput.addEventListener("change", handleInput)
submitBtn.addEventListener("click", handleSubmit)