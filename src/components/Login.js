import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleLoginButton } from "react-social-login-buttons";
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import {  doc, getDoc, setDoc } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyBZJVJfkGuaK5hQnbL8T3EZ4oKH0_O6vCM",
    authDomain: "domowa-apteczka-51a76.firebaseapp.com",
    projectId: "domowa-apteczka-51a76",
    storageBucket: "domowa-apteczka-51a76.appspot.com",
    messagingSenderId: "501398646617",
    appId: "1:501398646617:web:844bac8f4c894d7e976648",
    measurementId: "G-338WGSF4T2"
};
const firebaseApp = initializeApp(config);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();


const Login=()=>{
console.log("entering Login")

    const loginToGoogle = () =>{
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("user exists:");
                } else {
                    // doc.data() will be undefined in this case
                    console.log("user not exists");
                    await setDoc(doc(db, "users", user.uid), {
                        name: user.displayName,
                        uid: user.uid,
                        email: user.email,
                        provider: user.providerId
                    });
                    await setDoc(doc(db, "drugs", user.uid),{});

                }

                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("error in login")
        });
    }

    return(
        <div>
            <GoogleLoginButton onClick={() => loginToGoogle()} />
        </div>
    )
}
export default Login;