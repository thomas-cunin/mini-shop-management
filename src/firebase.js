import App from 'firebase/app';

const config = {
    apiKey: "AIzaSyDGkuI_2GFyzgrxOpM70xlHzZqt6t8lm8o",
    authDomain: "shop-management-cbe1d.firebaseapp.com",
    databaseURL: "https://shop-management-cbe1d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shop-management-cbe1d",
    storageBucket: "shop-management-cbe1d.appspot.com",
    messagingSenderId: "624525720871",
    appId: "1:624525720871:web:5e741f66195c614d283d02"
}

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;