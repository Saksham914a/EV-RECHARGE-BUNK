
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "ev-recharge-bunk-e3050.firebaseapp.com",
  projectId: "ev-recharge-bunk-e3050",
  storageBucket: "ev-recharge-bunk-e3050.firebasestorage.app",
  messagingSenderId: "616036559747",
  appId: "1:616036559747:web:c2df42c56904306f23a4b6",
  measurementId: "G-BW398VN6SX"
};

firebase.initializeApp(firebaseConfig);

// Setup Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
