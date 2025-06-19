let tempsRestant = 10; // secondes
let button_clique = document.querySelector(".button");
let compteur = 0;
let compteurElement = document.querySelector(".score");
let timerElement = document.querySelector('.temps');
let retry = document.querySelector(".retry_button");

let jeuCommence = false;
let interval = null;

retry.addEventListener("click", function () {
    compteur = 0;
    tempsRestant = 10;
    jeuCommence = false;
    clearInterval(interval);
    timerElement.textContent = "Temps restant : " + tempsRestant + "s";
    compteurElement.textContent = "Clics : " + compteur;

    button_clique.disabled = false;
});

button_clique.addEventListener("click", function () {
    if (!jeuCommence) {
        jeuCommence = true;
        interval = setInterval(() => {
            tempsRestant--;
            timerElement.innerText = `Temps restant : ${tempsRestant}s`;

            if (tempsRestant <= 0) {
                clearInterval(interval);
                timerElement.textContent = "⏰ Temps écoulé !";
                button_clique.disabled = true;
            }
        }, 1000);
    }

    compteur++;
    compteurElement.innerText = "Clics : " + compteur;
});