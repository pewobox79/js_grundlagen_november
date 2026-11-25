console.log("hallo aus der index.js")
import express from "express"

const PORT = process.env.PORT || 3000

const app = express()

app.get("/", (_req, res)=>{

    res.send("<h1>Homepage</h1>")

})

app.get("/users", (_req, res)=>{
    // jsonplaceholder users quelle
    // 1. API mit async Fetch ansprechen und daten holen
    // 2. json() in jsobj umwandeln
    // 3. forEach schleife laufen lassen über object
    // 4. HTML elemente erzeugen 
    // 5. Response an Client / Browser!

    res.send("<h1>Mitarbeiter</h1>")
})

app.get("/api/users", (_req, res)=>{

    const userData =[{id:1, name: "Peter"}, {id: 2, name: "Heinz"}]

    res.json(userData)

})

app.listen(PORT, ()=>console.log(`Server started on Port ${PORT}`))

