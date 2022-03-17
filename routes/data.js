// Data Fetch API


const { getDailyCovidData, updateDailyData, bookAppointment, receiveAppointments, cancelAppointment, getRegionData, getHealthCentreInfo } = require('../models/db');

const router = require('express').Router();


// Fetch Daily Covid Data
router.get('/get-covid-data', (req, res) => {
    
    try{

        const data = getDailyCovidData();
        if(data != null){
            res.status(200).json(data);
        }
        else {
            throw new Error('Data Fetch Error')
        }
    }

    catch(e){
        res.json(e);

    }
});



// Update Daily Covid Data
router.put('/update-daily-covid-data', async (req, res) => {

    try{

        const { dataToUpdate }= req.body;

        const updatedData = await updateDailyData(dataToUpdate);

        if(updatedData != null){
            res.json({ updatedData })
        } else {
            throw new Error('Data Updating Failed');
        }


    } catch(e){
        console.error(e);
        res.json(e);
    }   

})







// Fetch Appointments
router.get('/appointments', (req, res) => {

    try{

        const userId = localStorage.getItem('auth-token');

        const appointments = receiveAppointments(userId);

        if(appointmentBooked){
            res.json({
                success: true,
                appointments
            })
        } 

        else {
            throw new Error('Internal Server Error')
        }


    } catch(e){
        console.error(e);
        res.json(e);
    }   

})




// Book Appointments
router.post('/appointments/new', async (req, res) => {

    try{

        const userId = localStorage.getItem('auth-token');
        const data = req.body;

        const appointmentBooked = await bookAppointment(data, userId);

        if(appointmentBooked){
            res.json({success: true})
        } 

        else {
            throw new Error('Internal Server Error')
        }


    } catch(e){
        console.error(e);
        res.json(e);
    }   

})



// Cancel Appointment
router.delete('/appointments/cancel/:id', async (req, res) => {

    try{

        const appointmentId = req.params.id;
        
        const isAppointmentCancelled = await cancelAppointment(appointmentId);

        res.json({success: isAppointmentCancelled });


    } catch(err){
        console.error(err);
        res.json(err);
    }
})




// Get Regions Data
router.get('/regions', (req, res) => {
    
    try{

        const data = getRegionData();

        if(data != null){
            res.json(data);
        } else{
            throw new Error('Data Fetch failed');
        }


    } catch(error){

        console.error(error);
        res.json(error);

    }
})





// Fetch Health Centers 
router.get('/health-centers', (req, res) => {

    try{

        const data = getHealthCentreInfo();
        if(data != null){
            res.json(data);
        } else{
            throw new Error('Data Fetch failed');
        }

    } catch(err){
        console.error(error);
        res.json(error);

    }

})




module.exports = router;