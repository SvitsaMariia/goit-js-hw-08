import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const messageInput = form.querySelector('textarea[name="message"]');
const emailInput = form.querySelector('input[name="email"]');

let formData = {
  email: "",
  message: ""
};

returnSavedFormState();

form.addEventListener('submit', onFormSubmit);
messageInput.addEventListener('input', throttle(onTextAreaInput, 500));
emailInput.addEventListener('input', throttle(onEmailInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
   if (!formData.email || !formData.message) {
  alert("Fill all the forms!");
  return;
}
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(formData); 
    formData = {
    email: "",
    message: ""
  };
}

function onTextAreaInput(event) {
  formData.message = event.target.value;
  saveFormStateToLocalStorage();
}

function onEmailInput(event) {
  formData.email = event.target.value;
  saveFormStateToLocalStorage();
}

function saveFormStateToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function returnSavedFormState() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    messageInput.value = formData.message;
    emailInput.value = formData.email;
  }
}