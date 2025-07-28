// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your config from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCU-ZFxdLMokoRNZf3UJPSbvbaxlK6Vh-Y",
  authDomain: "fitzone-auth.firebaseapp.com",
  projectId: "fitzone-auth",
  storageBucket: "fitzone-auth.firebasestorage.app",
  messagingSenderId: "308677183369",
  appId: "1:308677183369:web:a960ecf3a9673e08528358",
  measurementId: "G-1LZQXB5SXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login button
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      // Redirect or do something after login
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
