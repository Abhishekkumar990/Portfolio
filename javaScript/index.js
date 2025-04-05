// Here is my protfoilo js.
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
let inactivityTime = function() {
    let timer;

    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            location.reload(); // refresh the page
        }, 100000); // 2 minutes = 120000 milliseconds
    }

    // Events that reset the timer
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onscroll = resetTimer;
    document.onclick = resetTimer;
};

inactivityTime();
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop(); // gets current filename

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage || (linkPage === "" && currentPage === "")) {
            link.classList.add("active");
        }
    });
});