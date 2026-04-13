/**
 * app.js — Data Science Notes App
 * Handles search, filtering, rendering, and modal.
 */

(function () {
  "use strict";

  /* ---- State ---- */
  const state = {
    query: "",
    activeCategory: "all",
    activeTags: new Set(),
    sortBy: "default",
  };

  /* ---- DOM Refs (resolved after DOMContentLoaded) ---- */
  let searchInput,
    notesGrid,
    resultsInfo,
    activeFiltersEl,
    modalOverlay,
    modalContent,
    categoryNav,
    tagCloud;

  /* ============================================================
     INIT
     ============================================================ */
  document.addEventListener("DOMContentLoaded", () => {
    searchInput = document.getElementById("search-input");
    notesGrid = document.getElementById("notes-grid");
    resultsInfo = document.getElementById("results-info");
    activeFiltersEl = document.getElementById("active-filters");
    modalOverlay = document.getElementById("modal-overlay");
    modalContent = document.getElementById("modal-content");
    categoryNav = document.getElementById("category-nav");
    tagCloud = document.getElementById("tag-cloud");

    buildCategoryNav();
    buildTagCloud();
    buildStats();
    renderNotes();
    bindEvents();
  });

  /* ============================================================
     BUILD UI COMPONENTS
     ============================================================ */
  function buildCategoryNav() {
    const counts = buildCategoryCounts();
    categoryNav.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className =
        "cat-btn" + (cat.id === state.activeCategory ? " active" : "");
      btn.dataset.category = cat.id;
      btn.innerHTML = `
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-label">${cat.label}</span>
        <span class="cat-count">${counts[cat.id] || 0}</span>
      `;
      btn.addEventListener("click", () => selectCategory(cat.id));
      categoryNav.appendChild(btn);
    });
  }

  function buildTagCloud() {
    const counts = buildTagCounts();
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    tagCloud.innerHTML = "";
    sorted.forEach(([tag, count]) => {
      const pill = document.createElement("button");
      pill.className = "tag-pill" + (state.activeTags.has(tag) ? " active" : "");
      pill.dataset.tag = tag;
      pill.innerHTML = `${tag} <span class="tag-count">${count}</span>`;
      pill.addEventListener("click", () => toggleTag(tag));
      tagCloud.appendChild(pill);
    });
  }

  function buildStats() {
    const tagCount = Object.keys(buildTagCounts()).length;
    const catCount = CATEGORIES.length - 1; // exclude "all"
    document.getElementById("stat-notes").textContent = NOTES.length;
    document.getElementById("stat-tags").textContent = tagCount;
    document.getElementById("stat-cats").textContent = catCount;
    document.getElementById("stat-topics").textContent = NOTES.filter(
      (n) => n.difficulty === "advanced"
    ).length;
  }

  /* ============================================================
     SEARCH & FILTER
     ============================================================ */
  function getFilteredNotes() {
    let notes = [...NOTES];

    // Category filter
    if (state.activeCategory !== "all") {
      notes = notes.filter((n) => n.category === state.activeCategory);
    }

    // Tag filter
    if (state.activeTags.size > 0) {
      notes = notes.filter((n) =>
        [...state.activeTags].every((t) => n.tags.includes(t))
      );
    }

    // Search query
    if (state.query.trim()) {
      const q = state.query.trim().toLowerCase();
      notes = notes.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.excerpt.toLowerCase().includes(q) ||
          n.tags.some((t) => t.toLowerCase().includes(q)) ||
          n.category.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q)
      );
    }

    // Sort
    if (state.sortBy === "az") {
      notes.sort((a, b) => a.title.localeCompare(b.title));
    } else if (state.sortBy === "difficulty") {
      const order = { beginner: 0, intermediate: 1, advanced: 2 };
      notes.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
    } else if (state.sortBy === "category") {
      notes.sort((a, b) => a.category.localeCompare(b.category));
    }

    return notes;
  }

  /* ============================================================
     RENDER
     ============================================================ */
  function renderNotes() {
    const notes = getFilteredNotes();
    notesGrid.innerHTML = "";

    // Results info
    resultsInfo.innerHTML = `Showing <strong>${notes.length}</strong> of ${NOTES.length} notes`;

    // Active filters chips
    renderActiveFilters();

    if (notes.length === 0) {
      notesGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No notes found</h3>
          <p>Try adjusting your search or clearing the filters.</p>
        </div>`;
      return;
    }

    const q = state.query.trim().toLowerCase();
    notes.forEach((note) => {
      const cat = CATEGORIES.find((c) => c.id === note.category) || {};
      const card = document.createElement("div");
      card.className = `note-card ${cat.cssClass || ""}`;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Open note: ${note.title}`);

      const highlightedTitle = q ? highlight(note.title, q) : note.title;
      const highlightedExcerpt = q ? highlight(note.excerpt, q) : note.excerpt;

      card.innerHTML = `
        <div class="card-header">
          <div class="card-icon">${note.icon}</div>
          <div class="card-meta">
            <div class="card-title">${highlightedTitle}</div>
            <div class="card-category">${cat.label || note.category}</div>
          </div>
        </div>
        <div class="card-excerpt">${highlightedExcerpt}</div>
        <div class="card-tags">
          ${note.tags
            .slice(0, 5)
            .map((t) => `<span class="card-tag">#${t}</span>`)
            .join("")}
          ${note.tags.length > 5 ? `<span class="card-tag">+${note.tags.length - 5}</span>` : ""}
        </div>
        <div class="card-footer">
          <span class="card-difficulty difficulty-${note.difficulty}">${capitalize(note.difficulty)}</span>
          <span class="card-updated">${cat.icon || ""} ${cat.label || ""}</span>
        </div>
      `;

      card.addEventListener("click", () => openModal(note));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(note);
        }
      });

      notesGrid.appendChild(card);
    });
  }

  function renderActiveFilters() {
    activeFiltersEl.innerHTML = "";

    if (state.activeCategory !== "all") {
      const cat = CATEGORIES.find((c) => c.id === state.activeCategory);
      activeFiltersEl.appendChild(createFilterChip(cat.label, () => selectCategory("all")));
    }

    state.activeTags.forEach((tag) => {
      activeFiltersEl.appendChild(createFilterChip(`#${tag}`, () => toggleTag(tag)));
    });

    if (state.activeCategory !== "all" || state.activeTags.size > 0) {
      const clearBtn = document.createElement("button");
      clearBtn.className = "btn-clear-all";
      clearBtn.textContent = "Clear all";
      clearBtn.addEventListener("click", clearAllFilters);
      activeFiltersEl.appendChild(clearBtn);
    }
  }

  function createFilterChip(label, onRemove) {
    const chip = document.createElement("div");
    chip.className = "active-filter-chip";
    chip.innerHTML = `${label} <button aria-label="Remove filter ${label}">×</button>`;
    chip.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      onRemove();
    });
    return chip;
  }

  /* ============================================================
     MODAL
     ============================================================ */
  function openModal(note) {
    const cat = CATEGORIES.find((c) => c.id === note.category) || {};
    document.getElementById("modal-icon").textContent = note.icon;
    document.getElementById("modal-title").textContent = note.title;
    const catEl = document.getElementById("modal-category");
    catEl.textContent = cat.label || note.category;
    catEl.className = `modal-category ${cat.cssClass || ""}`;

    // Note body
    const bodyEl = document.getElementById("modal-note-body");
    bodyEl.innerHTML = `<div class="note-content">${note.content}</div>`;

    // Footer tags
    const footerEl = document.getElementById("modal-footer-tags");
    footerEl.innerHTML = note.tags
      .map(
        (t) =>
          `<button class="tag-pill${state.activeTags.has(t) ? " active" : ""}" data-tag="${t}">#${t}</button>`
      )
      .join("");
    footerEl.querySelectorAll(".tag-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        toggleTag(pill.dataset.tag);
        closeModal();
      });
    });

    // Difficulty badge
    document.getElementById(
      "modal-difficulty"
    ).className = `card-difficulty difficulty-${note.difficulty}`;
    document.getElementById("modal-difficulty").textContent = capitalize(
      note.difficulty
    );

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("modal-close").focus();
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ============================================================
     FILTER ACTIONS
     ============================================================ */
  function selectCategory(id) {
    state.activeCategory = id;
    document.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.category === id);
    });
    renderNotes();
  }

  function toggleTag(tag) {
    if (state.activeTags.has(tag)) {
      state.activeTags.delete(tag);
    } else {
      state.activeTags.add(tag);
    }
    // Update sidebar tag pills
    document.querySelectorAll(".tag-pill[data-tag]").forEach((pill) => {
      pill.classList.toggle("active", state.activeTags.has(pill.dataset.tag));
    });
    renderNotes();
  }

  function clearAllFilters() {
    state.activeCategory = "all";
    state.activeTags.clear();
    state.query = "";
    searchInput.value = "";
    document.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.category === "all");
    });
    document.querySelectorAll(".tag-pill").forEach((p) => p.classList.remove("active"));
    renderNotes();
  }

  /* ============================================================
     EVENTS
     ============================================================ */
  function bindEvents() {
    // Search
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value;
      renderNotes();
    });

    // Keyboard shortcut: / to focus search
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      if (e.key === "Escape") {
        if (modalOverlay.classList.contains("open")) {
          closeModal();
        } else if (state.query) {
          state.query = "";
          searchInput.value = "";
          renderNotes();
        }
      }
    });

    // Sort
    document.getElementById("sort-select").addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderNotes();
    });

    // Modal close
    document.getElementById("modal-close").addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    // Copy code blocks inside modal
    document.addEventListener("click", (e) => {
      if (e.target.closest(".note-content pre")) {
        const code = e.target.closest("pre").querySelector("code");
        if (code) {
          navigator.clipboard
            .writeText(code.textContent)
            .then(() => showToast("Code copied to clipboard!"))
            .catch(() => showToast("Failed to copy — please select manually."));
        }
      }
    });

    // Sidebar toggle on mobile
    const sidebarToggle = document.getElementById("sidebar-toggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        document.querySelector(".app-sidebar").classList.toggle("sidebar-open");
      });
    }
  }

  /* ============================================================
     UTILITIES
     ============================================================ */
  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function showToast(msg) {
    const container =
      document.querySelector(".toast-container") ||
      (() => {
        const el = document.createElement("div");
        el.className = "toast-container";
        document.body.appendChild(el);
        return el;
      })();
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
})();
