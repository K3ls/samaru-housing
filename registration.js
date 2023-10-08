// import {auth, db} from './firebase.js'


// const signupForm = document.querySelector('#signup-form');

// signupForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const email = document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
//   const firstName = document.querySelector('#firstName').value;
//   const lastName = document.querySelector('#lastName').value;
//   const dateOfBirth = document.querySelector('#dateOfBirth').value;
//   const phone =  document.querySelector('#phone').value;

//   try {
//     // Create a new user with the provided email and password
//     const userCredential = await auth.createUserWithEmailAndPassword(email, password);

//     // Get the user's UID (unique identifier)
//     const userUID = userCredential.user.uid;

//     // Store additional user details in Firestore
//     await db.collection('users').doc(userUID).set({
//       firstName,
//       lastName,
//       dateOfBirth,
//       phone
//     });

//     // User successfully signed up
//     alert('Signup and registration successful!');
    
//     // You can redirect the user to a different page here if needed.
//   } catch (error) {
//     // Handle errors here
//     console.error(error.message);
//     alert('Signup and registration failed. Please try again.');
//   }
// });
