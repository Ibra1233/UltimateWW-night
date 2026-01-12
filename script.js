// =======================
// MODAL
// =======================
const modal = document.getElementById("modal"); /* Selve modal */
const openBtns = document.querySelectorAll(".openForm"); /* Knapperne der åbner modal */
const closeBtn = document.querySelector(".close"); /* Krydset i modalen */
const overlay = document.querySelector(".modal-overlay"); /* Baggrund bag modal /*
/* Alle ovenstående henter elementer fra HTML*/

if (modal)                                      /* Hvis modalen findes, vil koden køre indeni, men hvis ikke springes den over */ {
    openBtns.forEach(btn => {   /* Går igennem alle knapper med klasse .openForm (alle knapper åbner samme modal */
        btn.addEventListener("click", (e) => { /* Ved klik åbner modal */
            e.preventDefault(); /* Stopper browserens standardhandling, eksempelvis at tryk på knappen vil reloade siden */
            modal.style.display = "block"; /* Gør modalen synlig på siden */
        });
    });

    closeBtn.addEventListener("click", () => {      /* Når der klikkes på luk knappen */
        modal.style.display = "none";           /* Modalen skjules */
    });

    overlay.addEventListener("click", () => { /*Når der klikkes udenfor vinduet med åben modal */
        modal.style.display = "none"; /* Modalen lukker */
    });
}

// =======================
// BURGER MENU
// =======================
const burger = document.querySelector(".burger"); /* Finder HTML-elementet med klassen .burger */
const navLinks = document.querySelector(".nav-links"); /* Finder menuen med links */

if (burger && navLinks) { /* Tjekker hvis begge elementer findes, og forhindrer JavaScript-fejl, hvis noget mangler */
    burger.addEventListener("click", () => { /* JavaScript registrerer klikket */
        navLinks.classList.toggle("active"); /* Koden går videre til menuen eller lukker menuen */
        burger.classList.toggle("toggle"); /* Forberedt til visuel ændring/animation af burgerikonet via CSS */
    });
}