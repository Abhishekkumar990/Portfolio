// script.js

// Dynamically load projects
const projects = [
    { name: "Project 1", description: "A cool project I worked on." },
    { name: "Project 2", description: "Another exciting project." },
    { name: "Project 3", description: "A project showcasing my skills." }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(projectCard);
});

// Contact form submission handler
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});