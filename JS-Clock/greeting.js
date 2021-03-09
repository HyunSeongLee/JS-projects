const form = document.querySelector(".js-form"),
      input = form.querySelector("form"),
      greeting = document.querySelector(".js-greetings"); 

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName() {

}

function handleSubmit(event) {
    event.preventDefault(); 
    const currentValue = input.value; 
    gre
}

function askForName() {
    form.classList.add(SHOWING_CN);    
    form.addEventListener("submit", handleSubmit); 
    
}

function showGreeting() {
    const currentUser = localStorage.getItem(USER_LS); 
    if (currentUser === null) {
        askForName(); 

    } else {
        greeting.classList.add(SHOWING_CN); 
        greeting.innerText = `Hello ${currentUser}`
    }
}

function init() {
    showGreeting(); 
}

init(); 