// Valider les données côté Front permet de soulager le travail du serveur tout en créant une bonne expérience pour l'utilisateur.
//   Plongez dans la doc MDN et amusez-vous avec les inputs d'un formulaire.

// A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... 
// Rajoutez un peu de style si besoin est. 

// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérer l'input "utilisateur", faites-en sorte qu'il passe la validation lorsque le pseudo fait plus de 3 caractères.
// 2. Paramètrez le second input afin qu'il reçoive un email, et qu'il montre un message d'alerte si la chaîne rentrée n'est pas au bon format, le tout à l'aide d'un regex.
// 3. Le mot de passe doit contenir au moins un symbole, une lettre minuscule et un chiffre.
// 4. Montrez la "force" du mot de passe en fonction de ce que l'on rentre dans l'input.
// - Si la longueur du mot de passe est entre 0 et 5 affichez : faible.
// - Si la longueur est supérieure ou égale à 6 et inférieure à 9 et qu'elle contient au moins un symbole ou  un chiffre, affichez : moyen
// - Si la longueur est supérieur ou égale à 9 et quelle contient au moins un symbole et un chiffre affichez : fort
// - Gérez la confirmation de mot de passe.
// - Enfin envoyez un .alert("données envoyées") si on appuie sur le bouton "Création du compte" en ayant passé tous les tets.
  
//  C. Ajoutez du style à l'interface afin de terminer le projet.

// Selection / creation des elements dynamiques
let usernameCheck = document.createElement('div');
let emailCheck = document.createElement(`div`);
let passwordCheck = document.createElement(`div`);
let confirmPWCheck = document.createElement(`div`);
let warningTextUsername = document.createElement('p');
let warningTextEmail = document.createElement('p');
let faible = document.createElement('p');
let moyen = document.createElement('p');
let fort = document.createElement('p');
let passwordStrength = document.createElement(`div`);

let formContainer = document.querySelector(`.form-container`);
let usernameField = document.querySelector('#username');
let usernameContainer = document.querySelector('.username-container');
let usernameSection = document.querySelector(`.username-section`);
let emailContainer = document.querySelector(`.email-container`);
let emailSection = document.querySelector(`.email-section`);
let passwordContainer = document.querySelector(`.password-container`);
let passwordSection = document.querySelector(`.password-section`);
let confirmPWContainer = document.querySelector(`.confirmPW-container`);
let createAccount = document.querySelector(`#createAccount`);

// Appending les elements dynamiques
usernameContainer.appendChild(usernameCheck);
usernameSection.appendChild(warningTextUsername);
emailContainer.appendChild(emailCheck);
emailSection.appendChild(warningTextEmail);
passwordContainer.appendChild(passwordCheck);
confirmPWContainer.appendChild(confirmPWCheck);

// Styles pour les elements dynamiques
passwordStrength.classList.add(`password-container`);
faible.classList.add(`faible`);
moyen.classList.add(`moyen`);
fort.classList.add(`fort`);
passwordStrength.classList.add(`password-strength`);
    
    function validateForm() {
        // Message de confirmation quand l'utilisateur crée son compte
        if (
            usernameCheck.classList.contains(`check-mark`) && 
            emailCheck.classList.contains(`check-mark`) && 
            passwordCheck.classList.contains(`check-mark`) && 
            confirmPWCheck.classList.contains(`check-mark`)) {
            alert("Données envoyées avec succès.");
        } else {
            formContainer.classList.add('invalid-animation');
            setTimeout(() => {
            formContainer.classList.remove('invalid-animation');
            }, 200);
        }
    }

    // Add event listeners to input fields for blinking cursor effect
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('active');
        });

        input.addEventListener('blur', () => {
            input.classList.remove('active');
        });
    });

    // eventListeners
    usernameContainer.addEventListener('input', checkUsername);
    emailContainer.addEventListener('input', checkEmail);
    passwordContainer.addEventListener('input', checkPassword);
    confirmPWContainer.addEventListener('input', confirmPW);
    createAccount.addEventListener('click', validateForm);

    // Vérifier username
    function checkUsername(event) {
        let value = event.target.value;
        if (value.length >= 3) {
            usernameCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>`;
            usernameCheck.classList.add(`check-mark`);
            warningTextUsername.innerHTML = ``;
            warningTextUsername.classList.remove(`redWarning`);
        } else if (value.length > 0 && value.length < 3) {
            usernameCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
          </svg>`;
            usernameCheck.classList.add(`warning-mark`);
            usernameCheck.classList.remove(`check-mark`);
            warningTextUsername.innerHTML = `Choisissez un pseudo contenant au moins 3 caractères.`;
            warningTextUsername.classList.add(`redWarning`);
        } else {
            usernameCheck.innerHTML = ``;
            usernameCheck.classList.remove(`check-mark`);
            usernameCheck.classList.remove(`warning-mark`);
            warningTextUsername.innerHTML = ``;
            warningTextUsername.classList.remove(`redWarning`);
        }
    }

    // Vérifier email
    function checkEmail(event) {
        let value = event.target.value;
    
        if (value.length > 0) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    
            if (emailRegex.test(value)) {
                emailCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>`;
                emailCheck.classList.remove('warning-mark');
                emailCheck.classList.add('check-mark');
                warningTextEmail.innerHTML = '';
                warningTextEmail.classList.remove('redWarning');
            } else {
                emailCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>`;
                emailCheck.classList.remove('check-mark');
                emailCheck.classList.add('warning-mark');
                warningTextEmail.innerHTML = 'Entrez une adresse e-mail valide.';
                warningTextEmail.classList.add('redWarning');
            }
        } else {
            emailCheck.innerHTML = '';
            emailCheck.classList.remove('check-mark', 'warning-mark');
            warningTextEmail.innerHTML = '';
            warningTextEmail.classList.remove('redWarning');
        }
    }

    // Vérifier password
    function checkPassword(event) {
        let value = event.target.value;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        passwordSection.appendChild(passwordStrength);
    
        if (value.length === 0) {
            passwordCheck.innerHTML = '';
            passwordCheck.classList.remove('check-mark', 'warning-mark');
            passwordStrength.innerHTML = '';
            confirmPWCheck.innerHTML = '';
            confirmPWCheck.classList.remove('check-mark', 'warning-mark');
        } else if (passwordRegex.test(value)) {
            if (value.length < 9) {
                passwordCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>`;
                passwordCheck.classList.remove('warning-mark');
                passwordCheck.classList.add('check-mark');
                passwordStrength.innerHTML = '';
                passwordStrength.appendChild(faible);
                passwordStrength.appendChild(moyen);
                fort.innerHTML = '';
                faible.innerHTML = `faible`;
                moyen.innerHTML = `moyen`;
            } else {
                passwordCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>`;
                passwordCheck.classList.remove('warning-mark');
                passwordCheck.classList.add('check-mark');
                passwordStrength.innerHTML = '';
                passwordStrength.appendChild(faible);
                passwordStrength.appendChild(moyen);
                passwordStrength.appendChild(fort);
                faible.innerHTML = `faible`;
                moyen.innerHTML = `moyen`;
                fort.innerHTML = `fort`;
                confirmPWCheck.innerHTML = '';
                confirmPWCheck.classList.remove('check-mark', 'warning-mark');
            }
        } else {
            passwordCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
            </svg>`;
            passwordCheck.classList.add('warning-mark');
            passwordCheck.classList.remove('check-mark');
            passwordStrength.innerHTML = '';
            passwordStrength.appendChild(faible);
            moyen.innerHTML = '';
            fort.innerHTML = '';
            faible.innerHTML = `faible`;
        }
    }
    
    // Vérifier confirm password
    function confirmPW() {
        let password = document.querySelector(`#password`).value;
        let confirmPassword = document.querySelector(`#confirmPassword`).value;
        if (confirmPassword === '') {
            confirmPWCheck.innerHTML = '';
            confirmPWCheck.classList.remove('check-mark', 'warning-mark');
        } else if (password === confirmPassword && password !== '') {
            confirmPWCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>`;
            confirmPWCheck.classList.add('check-mark');
            confirmPWCheck.classList.remove('warning-mark');
        } else {
            confirmPWCheck.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
            </svg>`;
            confirmPWCheck.classList.add('warning-mark');
            confirmPWCheck.classList.remove('check-mark');
        }
    }


    
    
        