import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCvgZVswjddPdk_KNqySco-G5dJuaH0LA",
  authDomain: "glowing-stitches.firebaseapp.com",
  projectId: "glowing-stitches",
  storageBucket: "glowing-stitches.firebasestorage.app",
  messagingSenderId: "768752796406",
  appId: "1:768752796406:web:1fc2738fe40eb503a262d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)