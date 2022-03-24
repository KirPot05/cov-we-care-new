const { signInUser } = require('../authentication/auth');

const router = require('express').Router();



router.get('/', (req, res) => {
    res.render('index');
});




router.get('/dashboard', async (req, res) => {

    // try{
    //     const dashboardData = await fetch('/api/data/get-covid-data');

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

        if(user){

            // localStorage.setItem('auth-token', user.uid);
            res.setHeader('auth-token', user.uid);
            res.send('success auth')
            // res.status(200).redirect('/users');
        
        } else{
            throw new Error('Internal Server Error');
        }


    } catch(err){
        res.render('pages/signInPage', {
            error: err
        });
        console.error(err);
    }
});




module.exports = router;