const { getDailyCovidData } = require('../models/db');
const { signInUser } = require('../authentication/auth');
const isUserAuthenticated = require('../authentication/authState');

const router = require('express').Router();



router.get('/', (req, res) => {
    res.render('index');
});




router.get('/dashboard', (req, res) => {

    // try{
    //     const dashboardData = getDailyCovidData();

    //     res.status(200).render('pages/dashboard', {
    //         data: dashboardData,
    //         err: null
    //     })

    // } catch(error) {
    //     res.status(500).render('pages/ServerError', {
    //         err: error
    //     })

    // }

    res.render('pages/Dashboard');

});




router.get('/signIn', (req, res) => {
    res.render('pages/signInPage');
})





router.post('/signIn', async (req, res) => {

    try{    

        const {email, password} = req.body;

        const user = await signInUser(email, password);

        res.status(200).render('pages/user', {
            user: user
        });

    } catch(err){
        res.render('pages/signInPage', {
            error: err
        });
    }
});


router.get('/user', isUserAuthenticated, (req, res) => {
    
    try{
        

    } 

    catch(e){


    }

})


module.exports = router;