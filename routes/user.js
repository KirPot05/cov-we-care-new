const { registerUser } = require('../authentication/auth');
const { saveUser } = require('../models/db');

const router = require('express').Router();

router.get('/', (req, res) => {

    try{
        
        res.render('pages/UserPage');



    } catch(e) {
        console.log("Error Logging In");
        res.redirect('/signIn');
        // res.send('Error')
    }

});





router.get('/new', (req, res) => {
    res.render('pages/Register');
});



router.post('/new', async (req, res) => {

    try{

        const { name, email, password } = req.body;

        const newUser = await registerUser(email, password);

        if(newUser.success){
            newUser.user.displayName = name;
            await saveUser(newUser.user);
            // localStorage.setItem('auth_token', newUser.user.uid);
            res.json({token: newUser.user.accessToken});
        }

        // res.redirect('/users');
        // res.send("User Created");
        else{
            throw new Error('Error Creating User');
        }

    } catch(e) {
        console.error(e);
        res.redirect('/')
    }

})





module.exports = router;