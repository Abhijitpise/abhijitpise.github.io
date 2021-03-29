// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyCD5avPjKR0jZRsNBN6TuAzjezP-INosIE",
    authDomain: "abhijit-a6e0d.firebaseapp.com",
    projectId: "abhijit-a6e0d",
    storageBucket: "abhijit-a6e0d.appspot.com",
    messagingSenderId: "312461793602",
    appId: "1:312461793602:web:da973bde82055f9e0990db",
    measurementId: "G-J9SS6VCMV1"
  };
  firebase.initializeApp(firebaseConfig);
  



// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var First = getInputVal('First');
  var Last = getInputVal('Last');
  var Gender = getInputVal('Gender');
  var Age = getInputVal('Age');
  var phone = getInputVal('phone');
  var Address = getInputVal('Address');

  // Save message
  saveMessage(First, Last, Gender, Age, phone, Address);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(First,Last, Gender, Age, phone, Address){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    First: First,
    Last: Last,
    Gender:Gender,
    Age:Age,
    phone:phone,
    Address:Address
  });
}