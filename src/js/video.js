const buttons = document.querySelectorAll("button.bttn")
let activeBttnIdx = 0 

for (let [idx, button] of buttons.entries()){
    button.addEventListener("click", (e) => {
        buttons[activeBttnIdx].classList.toggle("active")
        activeBttnIdx = idx
        e.target.classList.toggle("active")
    })
}