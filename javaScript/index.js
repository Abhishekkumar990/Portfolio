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