import firebase from "firebase/app";
import "firebase/firestore";

// Přihlášovací údaje
const firebaseConfig = {
    apiKey: "AIzaSyD2sr9xn8MByJJdGS6xWXhzukNzHpYtBt0",
    authDomain: "main-web-arevyhs.firebaseapp.com",
    projectId: "main-web-arevyhs",
    storageBucket: "main-web-arevyhs.appspot.com",
    messagingSenderId: "290927307572",
    appId: "1:290927307572:web:93f439f2b3170b06779361"
  };

// Inicializace Firebase aplikace
// Přihlášení s daty do firebase
const app = firebase.initializeApp(firebaseConfig);

// Počáteční nastavení služby Firestore
// Přihlášení do databáze + uložení do proměnné, kterou pak exportujeme
const projectFirestore = app.firestore();

export { projectFirestore };