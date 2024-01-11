const body = document.querySelector("body");

const swicth = document.querySelector("#swicth");

swicth.addEventListener("click", switchTheme);

function switchTheme() {
    body.classList.toggle("darkModeBody");
    swicth.classList.toggle("darkModeButton");
    
    if (body.classList.contains("darkModeBody")) {
        localStorage.setItem("darkmode", true);
    }
    else {
        localStorage.setItem("darkmode", false);
		body.removeAttribute('class');
		swicth.removeAttribute('class');
    }
}

if (localStorage.getItem("darkmode") === "true") {
    body.classList.add("darkModeBody");
    swicth.classList.add("darkModeButton");
}