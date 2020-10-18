const greeting = document.querySelector(".greeting"),
yourNameForm = document.querySelector(".your-name-form"),
yourNameInput = document.querySelector(".your-name-input");
nameEditBtn = document.querySelector(".greeting-edit")

const handleNameEdit = () => {
    nameEditBtn.style.display = "none";
    yourNameInput.style.display = "block";
}

const saveYourName = (name) => {
    localStorage.setItem("yourName", name)
}

const handleYourNameSubmit = (event) => {
    event.preventDefault();
    saveYourName(yourNameInput.value);
    loadYourName();
    nameEditBtn.style.display = "block";

}

const removeInput = () => {
    yourNameInput.style.display = "none";
}

const paintYourName = (yourName) => {
    greeting.innerHTML = `Hello! ${yourName}`
}

const loadYourName = () => {
    let yourName = localStorage.getItem("yourName");
    if (yourName) {
        paintYourName(yourName);
        removeInput();
    }
}

const greetingInit =  () => {
    loadYourName();
    yourNameForm.addEventListener('submit', handleYourNameSubmit);
    nameEditBtn.addEventListener("click", handleNameEdit);
}

greetingInit();
