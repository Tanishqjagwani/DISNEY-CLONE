import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBToXSfmgQua0TUMjX_bdI4FUtIQ9obdtg",
  authDomain: "disney-clone-b8472.firebaseapp.com",
  projectId: "disney-clone-b8472",
  storageBucket: "disney-clone-b8472.appspot.com",
  messagingSenderId: "733648924293",
  appId: "1:733648924293:web:21bc6d32c7063af82303ec",
  measurementId: "G-14KK4RS2D7",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
