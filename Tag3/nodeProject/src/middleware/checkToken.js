export default function checkToken(_req,res, next){

    const isValid = true

    if(!isValid){
        console.log("token nicht valide")
        res.send("<h1>not allowed</h1>")
    }
    console.log("allowed")
    return next()
}