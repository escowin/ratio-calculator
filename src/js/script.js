// const { calculator } = require("./lib/Calculator")

// dom elements
const num1El = document.getElementById("num-1");
const num2El = document.getElementById("num-2");
const num3El = document.getElementById("num-3")
const num4El = document.getElementById("num-4")
const ratioForm = document.getElementById("ratio-form")

// functions
function displayAnswer(e) {
    e.preventDefault()
    console.log(num1El.value)
    console.log(num2El.value)
    console.log(num3El.value)
    console.log(num4El.value)
}

// calls
ratioForm.addEventListener("submit", (e) => displayAnswer(e))