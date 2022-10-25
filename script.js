const user = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");

//putting all elements as array of items
const input = [user, password, password2, email];
//clear inputs function using forEach loop - input array as argument
clearBtn.addEventListener("click", (e) => {
  //prevent default see MDN docs
  e.preventDefault();
  //clear form is simple putting empty string as value
  input.forEach((el) => {
    el.value = "";
  });
});
//showing error - element from checkForm fumnction if first condition is true
const showError = (element, msg) => {
  //geting element of parent component and error.text pharagraph inside
  const errorElement = element.parentElement;
  //geting <p class='.error-text'></p> with error message
  const errorMessage = errorElement.querySelector(".error-text");
  //setting value of pharagraph to element placeholder and showing it
  errorElement.classList.add("error");
  errorMessage.textContent = msg;
};
//clear error after putting required data:
const clearError = (element) => {
  //geting element from forEach loop which is not an empty string and removing error class from it:
  //Also parrent is needed
  const errorElement = element.parentElement;
  errorElement.classList.remove("error");
};
const checkLength = (element, longSet) => {
  if (element.value.length < longSet) {
    showError(
      //previouElemenetibling - pierwszy potomek rodzeństwa - sibling - rodzeństwo!!
      //template string -- see documentation MDN
      element,
      //slice method - removing last element slice(0,-1):
      `${element.previousElementSibling.innerText.slice(
        0,
        -1
      )} składa się z min.${longSet} znaków`
    );
  }
};
//chacking if first password is identical as second
// error appears on second input
const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Hasła nie są identyczne");
  }
};
//putting input array as argument
const checkForm = (input) => {
  //for each loop to check elements
  input.forEach((el) => {
    //if putted data is empty start showError function with element
    //form forEach loop and placeholder of this elemenet to display.
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      //clear error after putting required data:
      clearError(el);
    }
  });
};
//using RegEx - see documentation
const checkEmail = (email) => {
  //condition from generator - which signs are allowed (RegEx generator) and test() function
  const ex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
  //if all signs are allowed clearError all is ok
  if (ex.test(email.value)) {
    clearError(email);
    // if its not --> show error function appears
  } else {
    showError(email, "Email jest niepoprawny");
  }
};
//putting addEventListener on send button
sendBtn.addEventListener("click", (e) => {
  //prevent default see MDN docs
  e.preventDefault();
  //function responsible for checking EMPTY input fields
  checkForm(input);
  //checking if length is correct
  checkLength(username, 3);
  checkLength(password, 8);
  //checking in passwords are indetical
  checkPassword(password, password2);
  //function using RegEx() to validate email:
  checkEmail(email);
});
