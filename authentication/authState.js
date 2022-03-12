const { getUser } = require("./auth");


const isUserAuthenticated = (req, res, next) => {

    let isAuthenticated = false;
    
    try{

        const user = getUser();

        if(user != null){
            localStorage.setItem('auth-token', user.uid);
            isAuthenticated = true;
        }

        req.isAuthenticated = isAuthenticated;
        next(req, res, null);


    } catch(error){
        next(req, res, error);
    }

}


module.exports = isUserAuthenticated;

