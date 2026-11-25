const URL = "https://jsonplaceholder.typicode.com/users"
async function generateUserList() {

    try {
        const res = await fetch(URL)
        return await res.json()
    } catch (err) {
        console.log("error", err)
    }

}

async function getSingleUser(userId) {
    const singleUrl = `${URL}/${userId}`
    try {
        const res = await fetch(singleUrl)
        return await res.json()
    } catch (err) {
        console.log("error", err)
    }

}

function createUserHtmlItem(user) {

    const { name, company, phone } = user
    return `<div>
        <div>
            <h2>${name}</h2>
            <p>Telefon: ${phone}</p>
            <p>Company: ${company.name}</p>
        </div>
    </div>
    `


}

function provideHtmlUserElements(data) {

    if (Array.isArray(data)) {
        let html = ""
        data.forEach((user) => {
            const htmlUser = createUserHtmlItem(user)
            html += htmlUser
        })
        return html
    }

    return createUserHtmlItem(data)

}

function generatePageTemplate(html, title ="Mitarbeiter") {

    return `
        <!DOCTYPE html>
        <html lang="de">
            <head>
                <title>${title}</title>
            </head>
            <body>
                <h1>${title}</h1>
                ${html}
                </div>
            </body>
        </html>
    `
}
export default {
    createUserHtmlItem,
    generateUserList,
    provideHtmlUserElements,
    generatePageTemplate,
    getSingleUser
}