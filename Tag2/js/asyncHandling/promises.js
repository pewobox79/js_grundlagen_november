const posts = [
    { title: "first post", body: "first post body" },
    { title: "second post", body: "second post body" }
];

function getPosts() {

    function generatePosts() {
        let output = ""
        posts.forEach((post) => {
            output = output + `<p>${post.title}</p></br>`
        })
        console.log("output", output)
        document.body.innerHTML = output
    };

    setTimeout(generatePosts, 1000)

}

function createPost(post){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            posts.push(post)

            const isError = true // mein eigner error als test

            if(isError){
                reject("error: something went wrong!")
            }

            resolve()


        }, 2000)


    })

}
const newPost = { title: "dritter post", body: "body dritter post" }

createPost(newPost)
    .then(getPosts)
    .catch(err => console.log(err))