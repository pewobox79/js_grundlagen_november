console.log("create.js")

const listItemsData = [
    {
        task: "Bananen kaufen",
        amount: "10"
    },
    {
        task: "Äpfel kaufen",
        amount: "5"
    },
    {
        task: "Birnen kaufen",
        amount: "15"
    }
]
// 1. Anker nach JS holen!
const app = document.getElementById("app")

// 2. Elemente erstellen
const section1 = document.createElement("section")
const innerSectionDiv = document.createElement("div")
const h2Aufgaben = document.createElement("h2")
const listWrapperDiv = document.createElement("div")
const ulSection1 = document.createElement("ul")
//const liItem1 = document.createElement("li")
//const liItem2 = document.createElement("li")

function removeItem(item, btn) {
    item.remove()
    btn.remove()
}



listItemsData.forEach(listItem =>{
    const liItem = document.createElement("li") // => bekommt internen Key von DOM
    const liItemBtn = document.createElement("button") // => bekommt internen Key von DOM
    const doneBtn = document.createElement("button")
    doneBtn.innerText = "Erledigt"
    
    liItemBtn.innerText = "Löschen"
    liItem.className = "listItemStyle"
    liItem.innerText = `${listItem.task} / ${listItem.amount} Stück`

    liItem.append(liItemBtn,doneBtn)

    liItemBtn.addEventListener("click", ()=>removeItem(liItem, liItemBtn) )  
    ulSection1.append(liItem)
})



//3. Attribute hinzufügen
section1.setAttribute("id", "section1")
innerSectionDiv.setAttribute("class", "innerSection")
listWrapperDiv.className = "listWrapper"
//liItem1.className ="listItemStyle"
//liItem2.className = "listItemStyle"

// 4. Kontent füllen
h2Aufgaben.innerText = "Aufgaben:"
//liItem1.innerText = "Bananen kaufen"
//liItem2.innerText = "Äpfel kaufen"

// 5. Elemente verbinden
//ulSection1.append(liItem1, liItem2)
listWrapperDiv.append(ulSection1)
innerSectionDiv.append(h2Aufgaben,listWrapperDiv)
section1.append(innerSectionDiv)

// 6. DOM neues Element hinzufügen
app.append(section1)