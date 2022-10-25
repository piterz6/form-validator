const user = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

//putting all elements as array of items
const input = [user, password, password2, email];
//clear inputs function using forEach loop - input array as argument
clearBtn.addEventListener("click", (e) => {
  //prevent default see MDN docs
  e.preventDefault();
  input.forEach((el) => {
    el.value = "";
  });
});
//showing error - element from checkForm fumnction if first condition is true
const showError = (element, msg) => {
  //geting element of parent component and error.text pharagraph inside
  const errorElement = element.parentElement;
  const errorMessage = errorElement.querySelector(".error-text");
  //setting value of pharagraph to element placeholder
  errorElement.classList.add("error");
  errorMessage.textContent = msg;
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
    }
  });
};
//putting addEventListener on send button
sendBtn.addEventListener("click", (e) => {
  //prevent default see MDN docs
  e.preventDefault();
  //function responsible for checking EMPTY input fields
  checkForm(input);
});
