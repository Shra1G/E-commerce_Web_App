import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyBpaPDfZfIfXdyz0QtnYZhT7fksL921-S4",
        authDomain: "clone-8da93.firebaseapp.com",
        projectId: "clone-8da93",
        storageBucket: "clone-8da93.appspot.com",
        messagingSenderId: "918993046362",
        appId: "1:918993046362:web:7b614555d468d2843f4163",
        measurementId: "G-4GLFLTLW38"
});

const auth = firebase.auth();

export { auth };