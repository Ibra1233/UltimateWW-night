// =======================
// MODAL
// =======================
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll(".openForm");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".modal-overlay");

if (modal) {
    openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// =======================
// BURGER MENU
// =======================
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

if (burger && navLinks) {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
}