import firebase from "firebase";

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXtnVrn9ZKOmaStyNmWZJcachIXPzHlOE",
    authDomain: "lucky-cart.firebaseapp.com",
    projectId: "lucky-cart",
    storageBucket: "lucky-cart.appspot.com",
    messagingSenderId: "931305297642",
    appId: "1:931305297642:web:01783aa16563f37cf56993",
    measurementId: "G-CF1Y5RZ0WZ"
})

export const db = firebaseApp.firestore()