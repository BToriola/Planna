import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



var firebaseConfig = {
    apiKey: "AIzaSyCY2aa5N5bxg-DjhsMmNGs_-AGdAgcqNJ8",
    authDomain: "react-redux-planna.firebaseapp.com",
    databaseURL: "https://react-redux-planna.firebaseio.com",
    projectId: "react-redux-planna",
    storageBucket: "",
    messagingSenderId: "203782854298",
    appId: "1:203782854298:web:ef532cb7205e12bb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase