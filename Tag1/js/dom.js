//DOM Manipulation

//Von DOM zu JavaScript
const heading = document.querySelector("h1")
console.log("heading", heading)

const idSelect = document.querySelectorAll("#first")
console.log("idSelect", idSelect)

const idSelectH1 = document.querySelectorAll("h1#first")
console.log("idSelectH1", idSelectH1)

const classSelect = document.querySelectorAll(".second")
console.log("classSelect", classSelect)


idSelect.forEach((element, idx)=>{

    const isFullNumber = idx % 2
    if(isFullNumber){
        element.style.color = "red"
        element.classList.add("meineKlasse") 
    }else{
        element.style.color = "green"
    }
})

// Von JS nach DOM
const app = document.getElementById("app")

const h2Element = document.createElement("h2")
h2Element.innerText = "Ich bin eine h2 aus dem JS"
h2Element.className = "drittesElement"
h2Element.id = "h2Id"

app.append(h2Element)

