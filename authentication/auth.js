const { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } = require("firebase/auth");
const { auth } = require("../models/firebase");


const registerUser = async (email, password) => {

    try{

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        if(userCredentials.user != null){
            return true;
        }
        

    } catch(e) {
        return {errorCode: e.code, message: e.message}
    }

}

const signInUser = async (email, password) => {

    try{

        const userAuth = await signInWithEmailAndPassword(auth, email, password);

        if(userAuth.user != null){
            return userAuth.user;
        }
        

    } catch(e) {
        return {errorCode: e.code, message: e.message}
    }

}




const getUser = () => {

    try{

        onAuthStateChanged(auth, (user) => {
            if(user){
                return user;
            }
        })

    } catch {
        return null;

    }
}


module.exports = {
    getUser,
    signInUser, 
    registerUser
}