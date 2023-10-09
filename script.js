$(".carousel").carousel({
  interval: 3000,
});
/**all global variables definition and initialization */
let users = [];

/**end of declaration */

function isValidEmail(email) {
  // Regular expression to match a valid email address
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Use the test method of the regular expression to check if the email is valid
  return emailPattern.test(email);
}
/* section for creatind the email warning tag */
var newElement = document.createElement('div');
newElement.textContent = 'Please enter a valid email'; // Set text content
newElement.style.marginLeft = '-30px'
newElement.style.color='red';
newElement.style.fontSize='10px'
newElement.style.display="none"
// Step 3: Get a reference to the parent element
var parentElement = document.getElementById('email_div'); // Replace 'parent' with the ID of the actual parent element

// Step 4: Append the new element to the parent
parentElement.appendChild(newElement);

/* end of section wrong email warning */

var emailInput = document.getElementById('email'); // Replace 'email' with your input element's ID
emailInput.addEventListener('keydown', function() {
  var emailValue = emailInput.value;
  var isValid = isValidEmail(emailValue);
  
  if (isValid) {
    // The email is valid, you can perform actions accordingly
    // Step 1: Create a new element
    newElement.style.display="block"

    console.log('Valid email address:', emailValue);
  } 
  
  else{
    newElement.style.display="none"
  }
});

/* code session for house image upload and preview */


/* end */

/*code section for page registration  */

function registration (){
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const dateOfBirth = document.querySelector('#dateOfBirth').value;
  const phone =  document.querySelector('#phone').value;
  const regNo =  document.querySelector('#regNo').value;
  const user = {
    email,
    password,
    firstName,
    lastName,
    dateOfBirth,
    phone,
    regNo
  }
// add the new user to the users array

  users?.push(user);
localStorage.setItem('user_data', JSON.stringify(users));
// Get the array from localStorage and parse it back to an object
const storedArray = JSON.parse(localStorage.getItem("user_data"));

// Find the item with id 2 and update its name
const updatedArray =[...storedArray]
// Update the array in localStorage with the modified version
localStorage.setItem("user_data", JSON.stringify(updatedArray));

  alert("Rrgistration Successful")
  // Redirect to a new URL
 window.location.href = "home.html";
console.log(users, "damian");


}
   


/*end of section for registration* */

/**code sectioon for loggging in */


function login(){
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
 if(email =="k3lvinkings@gmail.com" && password == "1234"){
  alert("login succussful");
  window.location.href="home.html";
  
 }
 else{
  alert("wrong email or password");
  window.location.href="login.html";
 }
}
/**end of section for logging in */