let button = document.querySelector(`.button`);
let p = document.querySelector(`.p`);
let number = document.querySelector(`.number`);
let essaie = document.querySelector(".essaie");
let affichageTemps = document.getElementById("temps");

let compteur = 0;
let tempsRestant = 60;
let nombreMystere = Math.floor(Math.random() * 250) + 1;
console.log("Nombre mystère :", nombreMystere);

let intervalle = null;
let timerDemarre = false;

function demarrerTimer() {
    intervalle = setInterval(function() {
        tempsRestant--;
        affichageTemps.innerText = tempsRestant;

        if (tempsRestant <= 0) {
            clearInterval(intervalle);
            p.innerText = "⏰ Temps écoulé ! Le nombre mystère était " + nombreMystere;
            button.disabled = true;
            number.disabled = true;
        }
    }, 1000);
}

button.addEventListener(`click`, function () {
    let valeur1 = Number(number.value);

    // 🔒 Vérification si ce n'est pas un nombre
    if (isNaN(valeur1)) {
        alert("🚫 Veuillez entrer un nombre valide.");
        number.value = "";
        return;
    }

    // 🚫 Nombre hors des limites autorisées
    if (valeur1 < 1 || valeur1 > 100) {
        alert("🚫 Tu dois entrer un nombre entre 1 et 100 !");
        number.value = "";
        return;
    }
    
    if (!timerDemarre) {
        demarrerTimer();
        timerDemarre = true;
    }

    compteur++;
    essaie.innerText = "Nombre d'essais : " + compteur;

    let valeur = Number(number.value);
    number.value = "";

    if (valeur < 1 || valeur > 250) {
        p.innerText = "Choisis un nombre entre 1 et 250 !";
    } else if (isNaN(valeur)) {
        p.innerText = "Veuillez entrer un nombre valide.";
    } else if (valeur > nombreMystere) {
        p.innerText = "Trop haut, essaye encore !";
    } else if (valeur < nombreMystere) {
        p.innerText = "Trop bas, essaye encore !";
    } else if (valeur === nombreMystere) {
        p.innerText = "Bravo, tu as trouvé le nombre mystère 🎉";
        clearInterval(intervalle);
        button.disabled = true;
        number.disabled = true;
    }
});

number.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});

let retry = document.querySelector(".retry_btn");

retry.addEventListener("click", function () {
    compteur = 0;
    essaie.innerText = "Nombre d'essais : " + compteur;

    nombreMystere = Math.floor(Math.random() * 250) + 1;
    console.log("Nouveau nombre mystère :", nombreMystere);

    p.innerText = "";
    number.disabled = false;
    button.disabled = false;
    number.value = "";

    clearInterval(intervalle);
    tempsRestant = 60;
    affichageTemps.innerText = tempsRestant;
    timerDemarre = false;
});
