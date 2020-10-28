import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoBWtH5ZEc32-7ROER_2-3aTFlGJ3Yfs0",
    authDomain: "inmobiliaria-app-liliu.firebaseapp.com",
    databaseURL: "https://inmobiliaria-app-liliu.firebaseio.com",
    projectId: "inmobiliaria-app-liliu",
    storageBucket: "inmobiliaria-app-liliu.appspot.com",
    messagingSenderId: "457493100409",
    appId: "1:457493100409:web:3c7134c6bdd7b10194a1a8",
    measurementId: "G-PEC5TKRFH2"
  };

class Firebase {

    constructor(){
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
    }
    initiated() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
}

export default Firebase;