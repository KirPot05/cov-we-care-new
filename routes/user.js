const { registerUser } = require('../authentication/auth');
const { saveUser } = require('../models/db');

const router = require('express').Router();


router.get('/', (req, res) => {

    try{
        
        const authToken = req.header('auth-token');
        // const authToken = localStorage.getItem('auth-token');
        
        if(authToken){
            res.send('User Index Page');
            // res.render('pages/UserPage');
        }

        else{
            res.redirect('/signIn');
        }



    } catch(e) {
        console.log("error");
        // res.redirect('/signIn');
        res.send('Error')
    }

});





router.get('/new', (req, res) => {
    res.render('pages/signupPage');
});



router.post('/new', async (req, res) => {

    try{

        const { name, email, password } = req.body;

        const newUser = await registerUser(email, password);

        if(newUser.success){
            newUser.user.displayName = name;
            await saveUser(newUser.user);
            localStorage.setItem('auth-token', newUser.user.uid);
        }

        res.redirect('/users');
        // res.send("User Created");

    } catch(e) {
        console.error(e);
        res.redirect('/')
    }

})



module.exports = router;