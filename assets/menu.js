document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("menu-placeholder");
    if (!placeholder) return;

    fetch("menu.html")
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar o menu.");
            return response.text();
        })
        .then(html => {
            placeholder.innerHTML = html;

            // Destaca automaticamente o link da página atual (ex: agenda.html)
            const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
            const links = placeholder.querySelectorAll(".nav-links a");

            links.forEach(link => {
                const href = link.getAttribute("href");
                if (href === paginaAtual) {
                    link.style.fontWeight = "700";
                    link.style.textDecoration = "underline";
                }
            });
        })
        .catch(error => console.error(error));
});