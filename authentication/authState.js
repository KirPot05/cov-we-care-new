const { getUser } = require("./auth");


const isUserAuthenticated = (req, res, next) => {

    let isAuthenticated = false;
    
    try{

        const user = getUser();

        if(user != null){
            // localStorage.setItem('auth-token', user.uid);
            isAuthenticated = true;
        }

        req.isAuthenticated = isAuthenticated;
        req.user = user;
        next(null, req, res);


    } catch(error){
        next(error, req, res);
    }

}


module.exports = isUserAuthenticated;

