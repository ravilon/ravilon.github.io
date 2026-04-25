const SUPPORTED_LANGUAGES = ["pt-BR", "en-US"];
const DEFAULT_LANGUAGE = "pt-BR";

const translations = {
    "pt-BR": {
        seo: {
            title: "Ravilon Aguiar | Desenvolvedor Backend e Solution Engineer",
            description: "Portfólio de Ravilon Aguiar dos Santos, Sr. Solution Engineer com foco em LIMS, LabVantage, Java, SQL, NoSQL, backend, APIs e sistemas orientados a dados."
        },
        language: {
            selectionLabel: "Seleção de idioma",
            groupLabel: "Escolher idioma"
        },
        hero: {
            subtitle: "Hey, Listen!",
            title: "Bem-vindo, aventureiro!",
            description: "Aqui vive <strong>um desenvolvedor e aventureiro</strong>, sempre ganhando XP, aprendendo novas habilidades e criando missões paralelas em código.",
            quote: "\"É perigoso ir sozinho... leve alguns projetos!\"",
            imageAlt: "Link em pixel art"
        },
        profile: {
            kicker: "Sobre o desenvolvedor",
            lead: "Sr. Solution Engineer com foco em soluções LIMS, desenvolvimento backend e sistemas orientados a dados.",
            body1: "Trabalho com Java, SQL e NoSQL para customizar e sustentar sistemas de informação laboratorial, especialmente em ambientes LabVantage. Meu foco é transformar fluxos de negócio e laboratório em software confiável, integrações limpas e ferramentas que tornam a informação mais fácil de gerenciar.",
            body2: "Fora da missão principal, desenvolvo serviços backend, aplicações full-stack e experimentos que conectam resolução prática de problemas com curiosidade por novas tecnologias.",
            actionsLabel: "Links profissionais",
            githubRepos: "Repositórios GitHub",
            skillsLabel: "Principais habilidades",
            lifeTitle: "Life Bar",
            lifeAlt: "Barra de vida",
            lifeText: "Energia para novos builds, refactors e missões em sistemas laboratoriais.",
            stackTitle: "Core Stack"
        },
        inventory: {
            title: "Inventário",
            imageAlt: "Mochila do inventário",
            open: "Abrir inventário de projetos",
            close: "Fechar inventário de projetos",
            description: "Explore o inventário completo de projetos, de missões backend a aventuras full-stack."
        },
        projects: {
            kicker: "Inventário de projetos",
            title: "Projetos",
            closeLabel: "Fechar inventário de projetos",
            description: "Escolha uma missão do inventário. Cada projeto abre o código em uma nova aba.",
            viewCode: "Ver código",
            iconAltSuffix: "ícone"
        },
        footerHero: {
            imageAlt: "Heroi caminhando",
            text: "Novas dungeons e refactors sempre aparecem no caminho. Vamos continuar a aventura."
        },
        footer: {
            createdBy: "Criado por Ravilon Aguiar",
            rights: "&copy; 2024 Todos os direitos reservados."
        }
    },
    "en-US": {
        seo: {
            title: "Ravilon Aguiar | Backend Developer and Solution Engineer",
            description: "Portfolio of Ravilon Aguiar dos Santos, Sr. Solution Engineer focused on LIMS, LabVantage, Java, SQL, NoSQL, backend development, APIs and data-driven systems."
        },
        language: {
            selectionLabel: "Language selection",
            groupLabel: "Choose language"
        },
        hero: {
            subtitle: "Hey, Listen!",
            title: "Welcome, Adventurer!",
            description: "Here lives <strong>a developer and adventurer</strong>, always grinding XP, learning new skills and crafting side quests in code.",
            quote: "\"It's dangerous to go alone... take some projects!\"",
            imageAlt: "Link pixel art"
        },
        profile: {
            kicker: "About the developer",
            lead: "Sr. Solution Engineer focused on LIMS solutions, backend development and data-driven systems.",
            body1: "I work with Java, SQL and NoSQL to customize and support laboratory information systems, especially in LabVantage environments. My focus is turning business and laboratory workflows into reliable software, clean integrations and tools that make information easier to manage.",
            body2: "Outside the main quest, I build backend services, full-stack applications and experiments that connect practical problem solving with curiosity for new technologies.",
            actionsLabel: "Professional links",
            githubRepos: "GitHub Repos",
            skillsLabel: "Core skills",
            lifeTitle: "Life Bar",
            lifeAlt: "Life bar",
            lifeText: "Energy for new builds, refactors and laboratory system quests.",
            stackTitle: "Core Stack"
        },
        inventory: {
            title: "Inventory",
            imageAlt: "Inventory backpack",
            open: "Open Project Inventory",
            close: "Hide Project Inventory",
            description: "Browse the complete project inventory, from backend quests to full-stack adventures."
        },
        projects: {
            kicker: "Project inventory",
            title: "Projects",
            closeLabel: "Close project inventory",
            description: "Pick a quest from the inventory. Each project opens the code in a new tab.",
            viewCode: "View Code",
            iconAltSuffix: "icon"
        },
        footerHero: {
            imageAlt: "Hero walking",
            text: "New dungeons and refactors are always ahead. Let's keep adventuring."
        },
        footer: {
            createdBy: "Created by Ravilon Aguiar",
            rights: "&copy; 2024 All rights reserved."
        }
    }
};

const projects = [
    {
        title: "FIMS",
        icon: "images/zeldabean.webp",
        url: "https://github.com/ravilon/FIMS",
        description: {
            "pt-BR": "Farm Information Management System desenvolvido com Flask e PostgreSQL, incluindo scripts relacionais de banco, gestão de departamentos/workareas e runner PowerShell para setup local.",
            "en-US": "Farm Information Management System built with Flask and PostgreSQL, including relational database scripts, department/workarea management and a PowerShell runner for local setup."
        },
        tags: ["Python", "Flask", "PostgreSQL", "SQL"]
    },
    {
        title: "Alumnus",
        icon: "images/zeldamap.png",
        url: "https://github.com/ravilon/Alumnus",
        description: {
            "pt-BR": "Aplicação web Flask para fluxos universitários de economia de energia, com tabelas PostgreSQL para usuários, salas, aulas e check-ins de estudantes em views de admin, professor e aluno.",
            "en-US": "Flask web app for university energy-awareness workflows, with PostgreSQL tables for users, rooms, lessons and student check-ins across admin, teacher and student views."
        },
        tags: ["Python", "Flask", "PostgreSQL", "Education"]
    },
    {
        title: "Z808-Feijoada",
        icon: "images/dekuzelda.png",
        url: "https://github.com/RaideNnigth/Z808-Feijoada",
        description: {
            "pt-BR": "Simulador desktop Java/Gradle para uma arquitetura hipotética inspirada no 8086, com editor Feijoada Assembly, macro processor, assembler, linker, máquina virtual e UI de registradores.",
            "en-US": "Java/Gradle desktop simulator for a hypothetical 8086-inspired architecture, with Feijoada Assembly editor, macro processor, assembler, linker, virtual machine and register UI."
        },
        tags: ["Java", "Gradle", "Assembly", "VM"]
    },
    {
        title: "Lemon Block",
        icon: "images/dustzelda.png",
        url: "https://github.com/RaideNnigth/LemonJuiceBlockChain",
        description: {
            "pt-BR": "Protótipo educacional de blockchain pública em Python/Flask, com criação de wallet, validação de chaves RSA, processamento de transações e criptografia com PyCryptodome.",
            "en-US": "Educational public blockchain prototype in Python/Flask, with wallet creation, RSA key validation, transaction processing and PyCryptodome-based cryptography."
        },
        tags: ["Python", "Flask", "Blockchain", "Crypto"]
    },
    {
        title: "PROCEL Back-End",
        icon: "images/zeldabean.webp",
        url: "https://github.com/ravilon/PROCEL-Back-End",
        description: {
            "pt-BR": "Backend Spring Boot para ingestão de sensores do PROCEL, autenticação JWT, controle de presença, sincronização de salas/sensores, regras de qualificação de parâmetros e modelagem analítica em PostgreSQL.",
            "en-US": "Spring Boot backend for PROCEL sensor ingestion, JWT authentication, presence tracking, room/sensor sync, parameter qualification rules and PostgreSQL analytical modeling."
        },
        tags: ["Java 21", "Spring Boot", "JPA", "PostgreSQL"]
    },
    {
        title: "Fuerza Seguros",
        icon: "images/zeldamap.png",
        url: "https://github.com/RaideNnigth/fuerza-seguros-project",
        description: {
            "pt-BR": "Plataforma full-stack de seguros com frontend React/Vite, API Express/Mongoose, autenticação JWT, fluxos de e-mail, processamento de imagens, persistência MongoDB e deploy com Docker/Coolify.",
            "en-US": "Full-stack insurance platform with React/Vite frontend, Express/Mongoose API, JWT auth, email flows, image processing, MongoDB persistence and Docker/Coolify deployment support."
        },
        tags: ["React", "Express", "MongoDB", "Docker"]
    }
];

let currentLanguage = DEFAULT_LANGUAGE;

function normalizeLanguage(language) {
    if (!language) return DEFAULT_LANGUAGE;
    if (SUPPORTED_LANGUAGES.includes(language)) return language;

    const lowerLanguage = language.toLowerCase();

    if (lowerLanguage.startsWith("pt")) return "pt-BR";
    if (lowerLanguage.startsWith("en")) return "en-US";

    return DEFAULT_LANGUAGE;
}

function getInitialLanguage() {
    const urlLanguage = new URLSearchParams(window.location.search).get("lang");
    const storedLanguage = getStoredLanguage();

    return normalizeLanguage(urlLanguage || storedLanguage || navigator.language);
}

function getStoredLanguage() {
    try {
        return localStorage.getItem("portfolio-language");
    } catch {
        return null;
    }
}

function storeLanguage(language) {
    try {
        localStorage.setItem("portfolio-language", language);
    } catch {
        // Browsers may block storage in restricted contexts.
    }
}

function t(key) {
    return key.split(".").reduce((value, part) => value && value[part], translations[currentLanguage]) || "";
}

function getLocalized(value) {
    if (typeof value === "string") return value;
    return value[currentLanguage] || value[DEFAULT_LANGUAGE] || "";
}

function createTagPill(tag) {
    const span = document.createElement("span");
    span.className = "tag-pill";
    span.textContent = tag;
    return span;
}

function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";

    const header = document.createElement("div");
    header.className = "project-header";

    const img = document.createElement("img");
    img.className = "project-icon";
    img.src = project.icon;
    img.alt = `${project.title} ${t("projects.iconAltSuffix")}`;

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    header.appendChild(img);
    header.appendChild(title);

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = getLocalized(project.description);

    const tagsContainer = document.createElement("div");
    tagsContainer.className = "project-tags";

    if (Array.isArray(project.tags)) {
        project.tags
            .map(createTagPill)
            .forEach(pill => tagsContainer.appendChild(pill));
    }

    const actions = document.createElement("div");
    actions.className = "project-actions";

    const link = document.createElement("a");
    link.className = "btn-equip";
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = t("projects.viewCode");

    actions.appendChild(link);

    card.appendChild(header);
    card.appendChild(description);
    if (project.tags && project.tags.length) {
        card.appendChild(tagsContainer);
    }
    card.appendChild(actions);

    return card;
}

function renderProjectsGrid() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = "";
    projects.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });
}

function updateSeo() {
    const seo = translations[currentLanguage].seo;
    document.title = seo.title;
    document.documentElement.lang = currentLanguage.toLowerCase();

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (metaDescription) metaDescription.setAttribute("content", seo.description);
    if (ogTitle) ogTitle.setAttribute("content", seo.title);
    if (ogDescription) ogDescription.setAttribute("content", seo.description);
    if (twitterTitle) twitterTitle.setAttribute("content", seo.title);
    if (twitterDescription) twitterDescription.setAttribute("content", seo.description);
}

function updateLanguageButtons() {
    document.querySelectorAll("[data-language]").forEach(button => {
        const isActive = button.dataset.language === currentLanguage;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function applyLanguage(language, shouldPersist = true) {
    currentLanguage = normalizeLanguage(language);

    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(element => {
        element.innerHTML = t(element.dataset.i18nHtml);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
        element.setAttribute("alt", t(element.dataset.i18nAlt));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });

    updateSeo();
    updateLanguageButtons();
    renderProjectsGrid();

    const panel = document.getElementById("projects-panel");
    const label = document.querySelector("#inventory-button .inventory-label");
    if (label && panel) {
        label.textContent = panel.classList.contains("is-open") ? t("inventory.close") : t("inventory.open");
    }

    if (shouldPersist) {
        storeLanguage(currentLanguage);
        const url = new URL(window.location.href);
        url.searchParams.set("lang", currentLanguage);
        window.history.replaceState({}, "", url);
    }
}

function openInventory() {
    const button = document.getElementById("inventory-button");
    const panel = document.getElementById("projects-panel");
    if (!button || !panel) return;

    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    button.setAttribute("aria-expanded", "true");

    const label = button.querySelector(".inventory-label");
    if (label) {
        label.textContent = t("inventory.close");
    }

    panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeInventory() {
    const button = document.getElementById("inventory-button");
    const panel = document.getElementById("projects-panel");
    if (!button || !panel) return;

    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-expanded", "false");

    const label = button.querySelector(".inventory-label");
    if (label) {
        label.textContent = t("inventory.open");
    }
}

function setupInventory() {
    const button = document.getElementById("inventory-button");
    const panel = document.getElementById("projects-panel");
    const closeBtn = document.getElementById("projects-close-button");

    if (!button || !panel) return;

    button.addEventListener("click", () => {
        if (panel.classList.contains("is-open")) {
            closeInventory();
            return;
        }

        openInventory();
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeInventory();
        });
    }
}

function setupLanguageSwitch() {
    document.querySelectorAll("[data-language]").forEach(button => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.language);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getInitialLanguage(), false);
    setupLanguageSwitch();
    setupInventory();
});
