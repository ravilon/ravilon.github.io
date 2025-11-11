// CONFIG DOS PROJETOS
const projects = [
    {
        title: "FIMS",
        icon: "images/zeldabean.webp",
        url: "https://github.com/ravilon/FIMS",
        description: "A quest to manage information like a true guild master.",
        tags: ["Java", "Backend", "LIMS"]
    },
    {
        title: "Alumnus",
        icon: "images/zeldamap.png",
        url: "https://github.com/ravilon/Alumnus",
        description: "Map of academic adventures and alumni quests.",
        tags: ["Web", "Education"]
    },
    {
        title: "Z808-Feijoada",
        icon: "images/dekuzelda.png",
        url: "https://github.com/RaideNnigth/Z808-Feijoada",
        description: "Low-level magic with a Brazilian flavor.",
        tags: ["Assembly", "Low-level"]
    },
    {
        title: "Lemon Block",
        icon: "images/dustzelda.png",
        url: "https://github.com/RaideNnigth/LemonJuiceBlockChain",
        description: "Blockchain experiments powered by citrus.",
        tags: ["Blockchain", "Experiments"]
    }

    // Exemplo de site local:
    // {
    //     title: "Retro Portfolio",
    //     icon: "images/retro-sword.png",
    //     url: "sites/retro-portfolio/index.html",
    //     description: "Pixel-art portfolio hosted right here.",
    //     tags: ["HTML", "CSS", "Pixel"]
    // }
];

// Helpers visuais
function createTagPill(tag) {
    const span = document.createElement("span");
    span.className = "tag-pill";
    span.textContent = tag;
    return span;
}

/* ======================
   GRID PRINCIPAL DE PROJETOS
   ====================== */

function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";

    const header = document.createElement("div");
    header.className = "project-header";

    const img = document.createElement("img");
    img.className = "project-icon";
    img.src = project.icon;
    img.alt = `${project.title} icon`;

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    header.appendChild(img);
    header.appendChild(title);

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = project.description;

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
    link.textContent = "Equip";

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

    projects.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });
}

/* ======================
   INVENTORY OVERLAY
   ====================== */

function createInventoryItem(project) {
    const item = document.createElement("div");
    item.className = "inventory-item";

    const left = document.createElement("div");
    left.className = "inventory-item-left";

    const icon = document.createElement("img");
    icon.className = "inventory-item-icon";
    icon.src = project.icon;
    icon.alt = `${project.title} icon`;

    const textWrap = document.createElement("div");
    textWrap.className = "inventory-item-text";

    const title = document.createElement("div");
    title.className = "inventory-item-title";
    title.textContent = project.title;

    const desc = document.createElement("div");
    desc.className = "inventory-item-desc";
    desc.textContent = project.description;

    const tagsRow = document.createElement("div");
    tagsRow.className = "inventory-item-tags";

    if (Array.isArray(project.tags)) {
        project.tags
            .map(createTagPill)
            .forEach(pill => tagsRow.appendChild(pill));
    }

    textWrap.appendChild(title);
    textWrap.appendChild(desc);
    if (project.tags && project.tags.length) {
        textWrap.appendChild(tagsRow);
    }

    left.appendChild(icon);
    left.appendChild(textWrap);

    const actions = document.createElement("div");

    const equipLink = document.createElement("a");
    equipLink.className = "btn-equip";
    equipLink.href = project.url;
    equipLink.target = "_blank";
    equipLink.rel = "noopener noreferrer";
    equipLink.textContent = "Equip";

    actions.appendChild(equipLink);

    item.appendChild(left);
    item.appendChild(actions);

    return item;
}

function renderInventoryList() {
    const list = document.getElementById("inventory-list");
    if (!list) return;

    list.innerHTML = "";
    projects.forEach(project => {
        const item = createInventoryItem(project);
        list.appendChild(item);
    });
}

function openInventory() {
    const overlay = document.getElementById("inventory-overlay");
    if (!overlay) return;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
}

function closeInventory() {
    const overlay = document.getElementById("inventory-overlay");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
}

function setupInventory() {
    const button = document.getElementById("inventory-button");
    const overlay = document.getElementById("inventory-overlay");
    const closeBtn = document.querySelector(".inventory-close-btn");

    if (!button || !overlay) return;

    // Abre inventário ao clicar na mochila
    button.addEventListener("click", () => {
        renderInventoryList();
        openInventory();
    });

    // Fecha pelo botão X
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeInventory();
        });
    }

    // Fecha clicando fora do painel
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            closeInventory();
        }
    });

    // Fecha com Esc
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeInventory();
        }
    });
}

/* ======================
   INIT
   ====================== */

document.addEventListener("DOMContentLoaded", () => {
    renderProjectsGrid();
    setupInventory();
});
