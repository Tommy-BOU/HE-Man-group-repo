//   Votre mission est de coder un générateur de dégradés.
//   Vous allez manipuler des inputs de couleurs afin de créer des "linear-gradient" à la volée !

// A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc...
// Rajoutez un peu de style si besoin est. 

// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérez l'implémentation de base des couleurs, il faut qu'il y est un dégradé lorsqu'on arrive sur le site (input, orientation, body...).
// 2. Gérez le changement de couleur, on doit pouvoir manipuler les inputs et provoquer le changement de couleur du site.
// 3. Occupez-vous de l'inclinaison avec l'input type "range".
// 4. Mettez en place la copie du dégradé en cliquant su le bouton "Copier le gradient".
// 5. Faites-en sorte de créer des dégradés au hasard en cliquant sur le bouton "random".
// 6. Bonne chance ! 

// C. Ajoutez du style à l'interface afin de terminer le projet.

let inputColor1 = document.querySelector('#inputColor1');
let inputColor2 = document.querySelector('#inputColor2');

let color_hexa1 = document.querySelector('#colorHexa1');
let color_hexa2 = document.querySelector('#colorHexa2');

let inputRange = document.querySelector('#inputRange');

let copy = document.querySelector('#copy');

let random = document.querySelector('#random');

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};

function colorIsDarkOrLight(color) {
    let red = parseInt(color.substring(1, 3), 16);
    let green = parseInt(color.substring(3, 5), 16);
    let blue = parseInt(color.substring(5, 7), 16);

    let lum = (red + green + blue) / 3;

    if (lum >= 128) {
        return "darkColor";
    }
    else {
        return "lightColor";
    }
}

inputColor1.addEventListener("change", (event) => {
    color_hexa1.innerHTML = inputColor1.value;

    document.querySelector('body').style.background = 'linear-gradient('+inputRange.value+'deg, '+inputColor1.value+', '+inputColor2.value+')';

    if (colorIsDarkOrLight(inputColor1.value) === "darkColor") {
        color_hexa1.style.color = "black";
    }
    else {
        color_hexa1.style.color = "white";
    }
});

inputColor2.addEventListener("change", (event) => {
    color_hexa2.innerHTML = inputColor2.value;

    document.querySelector('body').style.background = 'linear-gradient('+inputRange.value+'deg, '+inputColor1.value+', '+inputColor2.value+')';

    if (colorIsDarkOrLight(inputColor2.value) === "darkColor") {
        color_hexa2.style.color = "black";
    }
    else {
        color_hexa2.style.color = "white";
    }
});

inputRange.addEventListener("input", () => {
    document.querySelector('#valueRange').innerHTML = inputRange.value+'°';

    document.querySelector('body').style.background = 'linear-gradient('+inputRange.value+'deg, '+inputColor1.value+', '+inputColor2.value+')';
});

window.addEventListener('load', function() {
    let color1 = generateRandomColor();
    let color2 = generateRandomColor();

    document.querySelector('body').style.background = 'linear-gradient('+color1+', '+color2+')';

    inputColor1.value = color1;
    inputColor2.value = color2;

    color_hexa1.innerHTML = color1;
    color_hexa2.innerHTML = color2;
});

copy.addEventListener('click', (event) => {
    let code = 'linear-gradient('+inputRange.value+'deg, '+inputColor1.value+', '+inputColor2.value+')';

    navigator.clipboard.writeText(code);
    copy.innerText = "Copié !";

    setTimeout(function() {
        copy.innerText = "Copier";
    }, 1000);
});

random.addEventListener("click", (event) => {
    let newColor1 = generateRandomColor();
    let newColor2 = generateRandomColor();

    inputColor1.value = newColor1;
    color_hexa1.innerHTML = newColor1;

    if (colorIsDarkOrLight(newColor1) === "darkColor") {
        color_hexa1.style.color = "black";
    }
    else {
        color_hexa1.style.color = "white";
    }

    inputColor2.value = newColor2;
    color_hexa2.innerHTML = newColor2;

    if (colorIsDarkOrLight(newColor2) === "darkColor") {
        color_hexa2.style.color = "black";
    }
    else {
        color_hexa2.style.color = "white";
    }

    document.querySelector('body').style.background = 'linear-gradient('+inputRange.value+'deg, '+newColor1+', '+newColor2+')';
});