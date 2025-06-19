let button = document.querySelector(`.button`);
let p = document.querySelector(`.p`);
let number = document.querySelector(`.number`);
let essaie = document.querySelector(".essaie");
let compteur = 0;
let nombreMystere = Math.floor(Math.random() * 100) + 1;
let retry = document.querySelector(".retry_btn");

retry.addEventListener("click", function () {
    compteur = 0;
    nombreMystere = Math.floor(Math.random() * 100) + 1;
    p.innerText = "Fais une tentative !";
    essaie.innerText = "Nombre d'essais : " + compteur;
    number.value = "";
});

button.addEventListener("click", function () {
    let valeur = Number(number.value);

    // 🔒 Vérification si ce n'est pas un nombre
    if (isNaN(valeur)) {
        alert("🚫 Veuillez entrer un nombre valide.");
        number.value = "";
        return;
    }

    // 🚫 Nombre hors des limites autorisées
    if (valeur < 1 || valeur > 100) {
        alert("🚫 Tu dois entrer un nombre entre 1 et 100 !");
        number.value = "";
        return;
    }

    compteur++;
    essaie.innerText = "Nombre d'essais : " + compteur;
    number.value = "";

    if (valeur > nombreMystere) {
        p.innerText = "Trop haut, essaye encore !";
    } else if (valeur < nombreMystere) {
        p.innerText = "Trop bas, essaye encore !";
    } else {
        p.innerText = "🎉 Bravo, tu as trouvé le nombre mystère !";
    }
});

// Permet d'appuyer sur Enter au lieu de cliquer
number.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});
