// JS – smooth navigation ready
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple interaction placeholder
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully");
});
