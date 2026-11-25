const contacts = [
    {
        name: "Peter",
        tel: "8787888"
    },
    {
        name: "Jens",
        tel: "80890890890"
    }, 
    {
        name: "Karl",
        tel: "9808079824787"
    }
]

function getContacts(){

    contacts.forEach((contact, idx)=>{
        const output = `${idx + 1}: ${contact.name} hat die Telefonnumer ${contact.tel}`
        console.log(output)

    })
}

export default {
    getContacts,
    contacts
}