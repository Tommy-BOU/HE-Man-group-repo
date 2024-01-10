// - Créez une fonction qui est appelée chaque fois qu'un joueur clique sur un des boutons (Pierre, Feuille, Ciseaux).
// - À l'intérieur de cette fonction, générez un choix aléatoire pour le robot en utilisant Math.random().
// - Comparez le choix du joueur avec celui du robot pour déterminer le gagnant de la manche.
// - Mettez à jour le score en fonction du gagnant.
// - Affichez les résultats de la manche, le score global, et changez la couleur du texte en fonction du résultat (vert pour gagner, rouge pour perdre, gris pour match nul).

// - Gestion de la Fin du Jeu : Vérifiez si l'un des joueurs a atteint 5 points.
// Si oui, affichez un message final avec une image de l'arbitre, et indiquez le gagnant du jeu.
// Empêchez tout jeu supplémentaire une fois qu'un joueur atteint 5 points en utilisant une variable de contrôle (par exemple, i).

let scoreJoueur = 0;
let scoreOrdi = 0;

let finDePartie = false;

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', response);
});

document.querySelector('button').addEventListener('click', reset);

function response(e) {
    if (!finDePartie) {
        let PFC = ["pierre", "feuille", "ciseaux"];

        let ChoixJoueur = e.target.id;

        let ChoixOrdi_temp = Math.floor(Math.random() * PFC.length);
        let ChoixOrdi = PFC[ChoixOrdi_temp];

        document.querySelector('#retour1').innerHTML = "Vous avez choisi <b>"+ChoixJoueur+"</b> et l'ordi a choisi <b>"+ChoixOrdi+"</b>";

        if (ChoixJoueur === ChoixOrdi) {
            document.querySelector('#retour2').style.color = "grey";
            document.querySelector('#retour2').innerHTML = "<strong>Match nul</strong> pour cette manche";
        }
        else if ((ChoixJoueur === 'pierre' && ChoixOrdi === 'ciseaux') || (ChoixJoueur === 'feuille' && ChoixOrdi === 'pierre') ||
        (ChoixJoueur === 'ciseaux' && ChoixOrdi === 'feuille')) {
            document.querySelector('#retour2').style.color = "green";
            document.querySelector('#retour2').innerHTML = "Vous avez <strong>gagné</strong> cette manche";
            scoreJoueur++;
        }
        else {
            document.querySelector('#retour2').style.color = "red";
            document.querySelector('#retour2').innerHTML = "Vous avez <strong>perdu</strong> cette manche";
            scoreOrdi++;
        }

        document.querySelector('#retour3').innerHTML = "Le score est de "+scoreJoueur+" (vous) à "+scoreOrdi+" (le robot)";

        if (scoreJoueur === 5 || scoreOrdi === 5) {
            document.querySelector('#retour4').innerHTML = '<img src="img/arbitre.jfif" alt="arbitre"><br>C\'est finiiiiiii !<br><br>';
            document.querySelector('#retour4').innerHTML += (scoreJoueur === 5)?"<font color='green'>Vous avez gagné</font>":"<font color='red'>Vous avez perdu</font>";
            finDePartie = true;

            document.querySelector('button').style.display = "block";
        }
    }
}

function reset() {
    scoreJoueur = 0;
    scoreOrdi = 0;

    finDePartie = false;

    document.querySelector('#retour1').innerHTML = "";
    document.querySelector('#retour2').innerHTML = "";
    document.querySelector('#retour3').innerHTML = "";
    document.querySelector('#retour4').innerHTML = "";

    document.querySelector('button').style.display = "none";
}