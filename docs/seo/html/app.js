// Cliff's Towing — SEO Execution Plan client-side state
// Persists checkbox state per-phase in localStorage and updates progress bars.

(function () {
  const STORAGE_PREFIX = "cliffs-seo:";
  const phaseId = document.body.dataset.phase || "index";
  const storageKey = STORAGE_PREFIX + phaseId;

  // ---- Persistence ----

  function loadState() {
    try { return JSON.parse(localStorage.getItem(storageKey) || "{}"); }
    catch { return {}; }
  }
  function saveState(state) {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  // ---- Progress ----

  function updateProgress() {
    const boxes = document.querySelectorAll('input[type="checkbox"][data-task]');
    const total = boxes.length;
    const done = Array.from(boxes).filter((b) => b.checked).length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    const bar = document.querySelector(".progress-bar > div");
    if (bar) bar.style.width = pct + "%";

    const countEl = document.querySelector(".progress-count");
    if (countEl) countEl.textContent = `${done} / ${total} complete · ${pct}%`;

    // Exit criteria specifically
    const exitBoxes = document.querySelectorAll('.exit-criteria input[type="checkbox"][data-task]');
    const exitTotal = exitBoxes.length;
    const exitDone = Array.from(exitBoxes).filter((b) => b.checked).length;
    const nextLink = document.querySelector(".next-phase a");
    if (nextLink && exitTotal > 0) {
      if (exitDone === exitTotal) {
        nextLink.classList.remove("locked");
        nextLink.removeAttribute("aria-disabled");
      } else {
        nextLink.classList.add("locked");
        nextLink.setAttribute("aria-disabled", "true");
        nextLink.addEventListener("click", (e) => {
          if (nextLink.classList.contains("locked")) {
            e.preventDefault();
            alert(`Complete exit criteria first (${exitDone}/${exitTotal} done).`);
          }
        }, { once: true });
      }
    }
  }

  // ---- Wire up ----

  function init() {
    const state = loadState();
    document.querySelectorAll('input[type="checkbox"][data-task]').forEach((cb) => {
      const id = cb.dataset.task;
      if (state[id]) cb.checked = true;
      cb.addEventListener("change", () => {
        const s = loadState();
        if (cb.checked) s[id] = true; else delete s[id];
        saveState(s);
        updateProgress();
      });
    });
    updateProgress();

    const reset = document.querySelector(".progress-panel .reset");
    if (reset) {
      reset.addEventListener("click", () => {
        if (!confirm("Reset all checkboxes on this page?")) return;
        localStorage.removeItem(storageKey);
        document.querySelectorAll('input[type="checkbox"][data-task]').forEach((cb) => { cb.checked = false; });
        updateProgress();
      });
    }
  }

  // ---- Index page: aggregate progress across phases ----
  function initIndex() {
    document.querySelectorAll("[data-phase-progress]").forEach((card) => {
      const ph = card.dataset.phaseProgress;
      const total = parseInt(card.dataset.phaseTotal || "0", 10);
      let done = 0;
      try {
        const s = JSON.parse(localStorage.getItem(STORAGE_PREFIX + ph) || "{}");
        done = Object.keys(s).length;
      } catch {}
      const pct = total === 0 ? 0 : Math.round((done / total) * 100);
      const bar = card.querySelector(".progress-bar > div");
      if (bar) bar.style.width = pct + "%";
      const count = card.querySelector(".ph-count");
      if (count) count.textContent = `${done} / ${total} · ${pct}%`;
    });

    // overall
    let totalAll = 0, doneAll = 0;
    document.querySelectorAll("[data-phase-progress]").forEach((card) => {
      const ph = card.dataset.phaseProgress;
      const total = parseInt(card.dataset.phaseTotal || "0", 10);
      totalAll += total;
      try {
        const s = JSON.parse(localStorage.getItem(STORAGE_PREFIX + ph) || "{}");
        doneAll += Object.keys(s).length;
      } catch {}
    });
    const pctAll = totalAll === 0 ? 0 : Math.round((doneAll / totalAll) * 100);
    const overallBar = document.querySelector(".overall-progress .progress-bar > div");
    if (overallBar) overallBar.style.width = pctAll + "%";
    const overallCount = document.querySelector(".overall-progress .progress-count");
    if (overallCount) overallCount.textContent = `${doneAll} / ${totalAll} complete · ${pctAll}%`;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (phaseId === "index") initIndex(); else init();
    });
  } else {
    if (phaseId === "index") initIndex(); else init();
  }
})();
