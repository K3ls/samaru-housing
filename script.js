$(".carousel").carousel({
  interval: 3000,
});

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
  
  if (!isValid) {
    // The email is valid, you can perform actions accordingly
    // Step 1: Create a new element
    newElement.style.display="block"

    console.log('Valid email address:', emailValue);
  } 
  
  else{
    newElement.style.display="none"
  }
});

