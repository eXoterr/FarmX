const wateringCountElement = document.getElementById("watering_count");
const SUFFIX = "Литров";

const wateringCountInput = document.getElementById("watering");

wateringCountInput.addEventListener("change", (event) => {
  wateringCountElement.innerText = event.target.value + " " + SUFFIX
  console.log(event.target.value)
})



const noteField = document.querySelector(".notes__content textarea")
const noteBttns = document.querySelectorAll(".notes__tab")

let notes = ["починить полив", "измерить уровень ph", "Ещё что нибудь"];

let activeNote = 0;

for (let [idx, note] of noteBttns.entries()){
    note.addEventListener("click", (e) => {
        noteBttns[activeBttnIdx].classList.toggle("active")
        noteField.value = notes[idx]
        activeBttnIdx = idx
        e.target.classList.toggle("active")
    })
}

const buttons = document.querySelectorAll("button.bttn")
let activeBttnIdx = 0 

for (let [idx, button] of buttons.entries()){
    button.addEventListener("click", (e) => {
        buttons[activeBttnIdx].classList.toggle("active")
        activeBttnIdx = idx
        e.target.classList.toggle("active")
    })
}