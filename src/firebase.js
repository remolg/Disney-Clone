import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDy1F3DAnfE8JBED2EjU6RMfzyAAQuwUjA",
    authDomain: "disneyplus-clone-fa619.firebaseapp.com",
    projectId: "disneyplus-clone-fa619",
    storageBucket: "disneyplus-clone-fa619.appspot.com",
    messagingSenderId: "1060216033774",
    appId: "1:1060216033774:web:2e8b9d697f8a4d2d37beff",
    measurementId: "G-4YGHNMVLE4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider } 