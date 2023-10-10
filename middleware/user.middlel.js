const check = (req , res , next) => {
    console.log(req.body);

    let {username , number , email , password} = req.body;

    if(username && number && email && password){
        next();
    }
    else {
        res.status(400).json({message: "Please provide all the fields"});
    }
}

module.exports = check;


