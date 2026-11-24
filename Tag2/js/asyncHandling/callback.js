const posts = [
    { title: "first post", body: "first post body" },
    { title: "second post", body: "second post body" }
];

function getPosts(){

    function generatePosts(){
        let output = ""
        posts.forEach((post)=>{
            output = output + `<p>${post.title}</p></br>` 
        })
        console.log("output", output)
        document.body.innerHTML = output
    };

    setTimeout(generatePosts, 1000)

}

//callback zum managen von asynchronität
function createPost(post, callback){

    setTimeout(()=>{
        posts.push(post);
        callback()
    }, 2000)
}
const newPost = { title: "dritter post", body: "body dritter post" }
createPost(newPost, getPosts)