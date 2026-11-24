console.log("fetch...")
const URL = "https://jsonplaceholder.typicode.com/posts";

const app = document.getElementById("app")
function createBlogPost(blogData){

    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    div.className = "article"
    h2.innerText = blogData.title
    p.innerText = blogData.body

    div.append(h2, p)

    app.append(div)
    


}
function responseHandling(res){
    console.log("res", res)
    if(!res.ok){
        throw Error("Fetch failed")
    }
    const resData = res.json()
    console.log("response data", resData)
    return resData
}

function returnData(data) {
    console.log("data", data)
    data.forEach(blogItem => {
        createBlogPost(blogItem)
    });

}

function catchError(err) {
    console.log(err)
}

function getPosts(){

    fetch(URL)
        .then(responseHandling)
        .then(returnData)
        .catch(catchError)
        .finally(()=>{
            console.log("finally")
        })


}

getPosts()


