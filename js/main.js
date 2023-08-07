
var elBody = document.querySelector("body");
var elModeBtn = document.querySelector(".mode");
var elHeader = document.querySelector(".header")

elModeBtn.addEventListener("click", function () {
    elBody.classList.toggle("dark");
    elHeader.classList.toggle("dark")
});