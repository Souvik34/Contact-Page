var nameError = document.getElementById('name-error');
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var countryError = document.getElementById("countryError");
var cityError = document.getElementById("city-error");
var submitButton = document.getElementById("submit-error");

function validateName() {

    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        nameError.style.color = "red";
        document.getElementById('contact-name').style.borderColor = "red"; // Reset to default
        return false;
    }
    if (!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
        nameError.innerHTML = "Name must contain only alphabets";
        nameError.style.color = "red";
        document.getElementById('contact-name').style.borderColor = "red"; // Reset to default
        return false;
    }
    nameError.innerHTML = '';
     nameError.style.color = "rgb(8, 234, 8)"
    document.getElementById('contact-name').style.borderColor = "rgb(8, 234, 8)"; // Change to rgb(8, 234, 8)
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!regex.test(email)) {
      emailError.innerHTML = "Please enter a valid email address.";
      emailError.style.color = "red";
      document.getElementById('email').style.borderColor = "red";
      return false;
    } 
      emailError.innerHTML = "";
      emailError.style.color = "rgb(8, 234, 8)";
      document.getElementById('email').style.borderColor = "rgb(8, 234, 8)";
      return true;
}

// Phone Number Validation
    function validatePhone() {
    const phone = document.getElementById('phone-number').value.trim();
   
    const regex = /^\d{10}$/;
  
    if (!regex.test(phone)) {
      phoneError.textContent = "Please enter a valid 10-digit phone number.";
      phoneError.style.color = "red";
      document.getElementById('phone-number').style.borderColor = "red";
      return false;
    } else {
      phoneError.textContent = "";
      phoneError.style.color = "rgb(8, 234, 8)";
      document.getElementById('phone-number').style.borderColor = "rgb(8, 234, 8)";
      return true;
    }
  }


  function validateCountry() {
    const country = document.getElementById('country').value;
  
    if (country === "Country" || country === "") {
      countryError.textContent = "Please select your country.";
      countryError.style.color = "red";
      document.getElementById('country').style.borderColor = "red";
      return false;
    } 
      countryError.textContent = "";
      document.getElementById('country').style.borderColor = "rgb(8, 234, 8)";
      return true;
    
  }


  function validateCity() {
      const city = document.getElementById('city').value;
  
      if (city.length == 0) {
          cityError.innerHTML = "City is required";
          document.getElementById('city').style.borderColor = "red"; // Reset to default
          return false;
      }
      cityError.innerHTML = '';
      cityError.style.color = "rgb(8, 234, 8)"; // Change valid text to rgb(8, 234, 8)
      document.getElementById('city').style.borderColor = "rgb(8, 234, 8)"; // Change input box to rgb(8, 234, 8)
      return true;
  }
  // Overall Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isCountryValid = validateCountry();
    const isCityValid = validateCity();
  
    if (isNameValid && isEmailValid && isPhoneValid && isCountryValid && isCityValid) {
      document.getElementById('submit-error').textContent = "Form submitted successfully!";
      document.getElementById('submit-error').classList.remove('text-red-500');
      document.getElementById('submit-error').classList.add('text-rgb(8, 234, 8)-500');
    } else {
      document.getElementById('submit-error').textContent = "Please fix the errors before submitting.";
    }
  }
  
  // Event Listeners
  document.getElementById('submit-button').addEventListener('click', validateForm);