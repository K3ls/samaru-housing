

import { initializeApp} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js"
 
 const firebaseConfig = {
  apiKey: "AIzaSyCUK_80ayE6Uy5FfpjXOxEY73MS_v4_4Bc",
  authDomain: "samaru-housing-f76de.firebaseapp.com",
  projectId: "samaru-housing-f76de",
  storageBucket: "samaru-housing-f76de.appspot.com",
  messagingSenderId: "1075038345248",
  appId: "1:1075038345248:web:0790287ff9af4ad0268445",
  measurementId: "G-L7L0D066V0"
 };

 // Initialize Firebase
  const app= initializeApp(firebaseConfig);
 const auth = getAuth()
//initialise variables
const regButton  = document.getElementById("regButton");


// setup register function
regButton.addEventListener('click',register)

async function register() {
  alert("damian");
  // get all form inputs 
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const dateOfBirth = document.querySelector('#dateOfBirth').value;
  const phone =  document.querySelector('#phone').value;
  const regNo = document.querySelector('#regNo')
  console.log(email)
 createUserWithEmailAndPassword(auth,email, password).then(function(user){
  console.log("user created successfully")
 }).catch(function(err){console.log("error creating user")})


}