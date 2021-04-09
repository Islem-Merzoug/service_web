import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDT1MXneh-nIIRLtr9kbkSVlKO25fcr7sE",
    authDomain: "service-web-28c1e.firebaseapp.com",
    projectId: "service-web-28c1e",
    storageBucket: "service-web-28c1e.appspot.com",
    messagingSenderId: "892270555467",
    appId: "1:892270555467:web:8ef5c65df7a673f96c78ce",
    measurementId: "G-E3LPHXN3L2"
};
firebase.initializeApp(firebaseConfig);

export default firebase;