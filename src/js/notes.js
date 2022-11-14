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
