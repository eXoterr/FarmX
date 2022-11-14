const wateringCountElement = document.getElementById("watering_count");
const SUFFIX = "Литров";

const wateringCountInput = document.getElementById("watering");

wateringCountInput.addEventListener("change", (event) => {
  wateringCountElement.innerText = event.target.value + " " + SUFFIX
  console.log(event.target.value)
})


