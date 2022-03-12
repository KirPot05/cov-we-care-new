const {initializeApp} = require("firebase/app");
const {getFirestore} = require('firebase/firestore');
const { getAuth } = require('firebase/auth');


if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}


const firebaseConfig = {
    apiKey: "AIzaSyBBodOcjv0Pg3y45kjtVigZJnA87nIU0k0",
    authDomain: "cov-we-care-7c2fe.firebaseapp.com",
    projectId: "cov-we-care-7c2fe",
    storageBucket: "cov-we-care-7c2fe.appspot.com",
    messagingSenderId: "274522260662",
    appId: "1:274522260662:web:18678f07dc2eaed3045217"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);


module.exports = {db, auth};

