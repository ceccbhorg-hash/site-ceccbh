(function () {
    const placeholder = document.getElementById("menu-placeholder");
    if (!placeholder) return;

    placeholder.innerHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <ul class="nav-links">
                <li><a href="index.html#topo">Home</a></li>
                <li><a href="index.html#quem-somos">Quem Somos</a></li>
                <li><a href="index.html#contribuir">Contribuir</a></li>
                <li><a href="index.html#transmissoes">Transmissões</a></li>
                <li><a href="index.html#atividades">Atividades</a></li>
                <li><a href="index.html#cursos">Cursos</a></li>
                <li><a href="agenda.html">Agenda</a></li>
                <li><a href="index.html#institucional">Institucional</a></li>
            </ul>
        </div>
    </nav>
    `;

    // Destaca automaticamente o item da página atual (ex: agenda.html)
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
    const links = placeholder.querySelectorAll(".nav-links a");

    links.forEach(link => {
        if (link.getAttribute("href") === paginaAtual) {
            link.style.fontWeight = "700";
            link.style.textDecoration = "underline";
        }
    });
})();