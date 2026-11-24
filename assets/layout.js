document.addEventListener("DOMContentLoaded", function () {
    // 1. INJETA O MENU SUPERIOR
    const menuEl = document.getElementById("site-menu");
    if (menuEl) {
        menuEl.innerHTML = `
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
        </nav>`;

        // Destaca automaticamente a página atual no menu
        const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
        menuEl.querySelectorAll(".nav-links a").forEach(link => {
            if (link.getAttribute("href") === paginaAtual) {
                link.style.fontWeight = "700";
                link.style.textDecoration = "underline";
            }
        });
    }

    // 2. INJETA O CABEÇALHO (LOGO E TÍTULO)
    const headerEl = document.getElementById("site-header");
    if (headerEl) {
        headerEl.innerHTML = `
        <header id="topo">
            <div class="header-content">
                <div class="logo-container">
                    <img src="img/logo.jpg" alt="Centro Espírita Casimiro Cunha">
                </div>
                <h1>Centro Espírita<br>Casimiro Cunha</h1>
            </div>
        </header>`;
    }

    // 3. INJETA O RODAPÉ INSTITUCIONAL
    const footerEl = document.getElementById("site-footer");
    if (footerEl) {
        footerEl.innerHTML = `
        <footer>
            <p><strong>Centro Espírita Casimiro Cunha</strong></p>
            <p>Organização religiosa sem fins lucrativos, fundada em 21/11/1949</p>
            <p>Rua Nova Ponte, 46 - Salgado Filho - Belo Horizonte / Minas Gerais</p>
            <div class="cnpj">CNPJ: 20.112.579/0001-91</div>
        </footer>`;
    }
});