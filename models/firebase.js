const {initializeApp} = require("firebase/app");
const {getFirestore} = require('firebase/firestore');
const { getAuth } = require('firebase/auth');


if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}


const firebaseConfig = {
    apiKey: "AIzaSyDNbEubr_WyD3DzdisyoHoSfHnNNJjEcvA",
    authDomain: "cov-we-care.firebaseapp.com",
    databaseURL: "https://cov-we-care-default-rtdb.firebaseio.com",
    projectId: "cov-we-care",
    storageBucket: "cov-we-care.appspot.com",
    messagingSenderId: "542879205288",
    appId: "1:542879205288:web:d4fe10c582cab9c20e7f9d"
};
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);


module.exports = {db, auth};

