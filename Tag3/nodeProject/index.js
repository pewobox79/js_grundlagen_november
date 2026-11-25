console.log("hallo aus der index.js")
import express from "express"
import utilsUser from "./src/utils/generateUserList.js"
import checkToken from "./src/middleware/checkToken.js"

const PORT = process.env.PORT || 3000

const app = express()

app.get("/", (_req, res)=>{

    res.send("<h1>Homepage</h1>")

})

app.use(checkToken)
app.get("/users", async (_req, res)=>{
    // jsonplaceholder users quelle
    // 1. API mit async Fetch ansprechen und daten holen
    // 2. json() in jsobj umwandeln
    // 3. forEach schleife laufen lassen über object
    // 4. HTML elemente erzeugen 
    // 5. Response an Client / Browser!

    const data = await utilsUser.generateUserList()
    const html = utilsUser.provideHtmlUserElements(data)
    const page = utilsUser.generatePageTemplate(html)
    res.send(page);
})

app.get("/users/:userId", async (req, res) => {
    const {userId} = req.params
    const data = await utilsUser.getSingleUser(userId)
    console.log("data in singleuser", data)
    const html = utilsUser.provideHtmlUserElements(data)
    const page = utilsUser.generatePageTemplate(html, "Einzelner Mitarbeiter")
    res.send(page);
})


app.get("/api/users", (_req, res)=>{

    const userData =[{id:1, name: "Peter"}, {id: 2, name: "Heinz"}]

    res.json(userData)

})

app.listen(PORT, ()=>console.log(`Server started on Port ${PORT}`))

