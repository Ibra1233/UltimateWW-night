// =======================
// MODAL
// =======================
const modal = document.getElementById("modal"); /* Selve modal */
const openBtns = document.querySelectorAll(".openForm"); /* Knapperne der åbner modal */
const closeBtn = document.querySelector(".close"); /* Krydset i modalen */
const overlay = document.querySelector(".modal-overlay"); /* Baggrund bag modal /*
/* Alle ovenstående henter elementer fra HTML*/

if (modal)                                      /* Hvis modalen findes, så JS ikke laver fejl på siden */ {
    openBtns.forEach(btn => {   /* Går igennem alle knapper med klasse .openForm (alle knapper åbner samme modal */
        btn.addEventListener("click", (e) => { /* Ved klik åbner modal */
            e.preventDefault(); /* Stopepr browserens standardhandling, eksempelvis at tryk på knappen vil reloade siden */
            modal.style.display = "block"; /* Viser popup */
        });
    });

    closeBtn.addEventListener("click", () => {      /* Lukker modalen når der klikkes på kryds */
        modal.style.display = "none";           /* Modalen skjules */
    });

    overlay.addEventListener("click", () => { /*Lukker modalen når der klikkes udenfor modal vinduet
        modal.style.display = "none"; /* Modalen skjules */
    });
}

// =======================
// BURGER MENU
// =======================
const burger = document.querySelector(".burger"); /* Finder HTML-elementet med klassen .burger */
const navLinks = document.querySelector(".nav-links"); /* Finder menuen med links */

if (burger && navLinks) { /* Tjekker hvis begge elementer findes, og forhindrer JavaScript-fejl, hvis noget mangler */
    burger.addEventListener("click", () => { /* JavaScript registrerer klikket */
        navLinks.classList.toggle("active"); /* Koden går videre til menuen */
        burger.classList.toggle("toggle"); /* Forberedt til visuel ændring/animation af burgerikonet via CSS */
    });
}