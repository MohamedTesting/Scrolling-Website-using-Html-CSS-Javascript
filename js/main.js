let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river5")
let boat6 = document.getElementById("boat6")
let nouvil = document.querySelector(".nouvil")

window.onscroll = function () {
    // Move Starts
    let value = scrollY
    stars.style.left = value + "px"
    // Move Moon
    moon.style.top = value * 3 + "px"
    // Move Mountain3
    mountains3.style.top = value * 2 + "px"
    // Move Mountain4
    mountains4.style.top = value * 1.5 + "px"
    // Move river5
    river.style.top = value * 2 + "px"
    // Move boat6
    boat6.style.left = value * 3 + "px"
    boat6.style.top = value + "px"
    // Light 
    if (value >= "145") {
        document.querySelector(".main").style.background = "Linear-gradient(#376281,#10001f)"
    } else {
        document.querySelector(".main").style.background = "linear-gradient(#200016, #10001f)";
    }
    // Text Nouvil
    nouvil.style.fontSize = value + "px"
    if (value >= "60" && value <= "426") {
        nouvil.style.fontSize = 60 + "px";
        nouvil.style.position = "fixed"
        nouvil.style.display = "block"
    }
    else if (value >= "426") {
        nouvil.style.display = "none"
    }
}