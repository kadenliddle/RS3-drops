(function () {
  "use strict";

  const bosses = window.RS3_DROPS || [];

  const bossSelect = document.getElementById("boss-select");
  const itemSelect = document.getElementById("item-select");
  const bossNotes = document.getElementById("boss-notes");
  const itemNotes = document.getElementById("item-notes");
  const avgKillsEl = document.getElementById("avg-kills");
  const rateFractionEl = document.getElementById("rate-fraction");
  const ratePercentEl = document.getElementById("rate-percent");
  const rateDecimalEl = document.getElementById("rate-decimal");
  const killsInput = document.getElementById("kills-input");
  const chancePercentEl = document.getElementById("chance-percent");
  const chanceBar = document.getElementById("chance-bar");

  function gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function getProbability(item) {
    if (typeof item.probability === "number") return item.probability;
    return item.rateNumerator / item.rateDenominator;
  }

  function formatFraction(item) {
    const p = getProbability(item);
    if (item.rateNumerator && item.rateDenominator) {
      const g = gcd(item.rateNumerator, item.rateDenominator);
      const n = item.rateNumerator / g;
      const d = item.rateDenominator / g;
      if (n === 1) return "1 / " + Math.round(d).toLocaleString("en-US");
      const approx = 1 / p;
      if (Math.abs(approx - Math.round(approx)) < 0.05) {
        return "1 / " + Math.round(approx).toLocaleString("en-US");
      }
      return (
        n +
        " / " +
        Math.round(d).toLocaleString("en-US") +
        " ≈ 1 / " +
        approx.toLocaleString("en-US", { maximumFractionDigits: 1 })
      );
    }
    const approx = 1 / p;
    return "1 / " + approx.toLocaleString("en-US", { maximumFractionDigits: 1 });
  }

  function formatNumber(n, digits) {
    if (!Number.isFinite(n)) return "—";
    return n.toLocaleString("en-US", {
      maximumFractionDigits: digits,
      minimumFractionDigits: digits > 0 ? Math.min(digits, 1) : 0
    });
  }

  function populateBosses() {
    bossSelect.innerHTML = "";
    bosses.forEach(function (boss, index) {
      const opt = document.createElement("option");
      opt.value = boss.id;
      opt.textContent = boss.name;
      if (index === 0) opt.selected = true;
      bossSelect.appendChild(opt);
    });
  }

  function getSelectedBoss() {
    return bosses.find(function (b) {
      return b.id === bossSelect.value;
    }) || bosses[0];
  }

  function getSelectedItem() {
    const boss = getSelectedBoss();
    if (!boss) return null;
    return (
      boss.items.find(function (i) {
        return i.id === itemSelect.value;
      }) || boss.items[0]
    );
  }

  function populateItems() {
    const boss = getSelectedBoss();
    itemSelect.innerHTML = "";
    if (!boss) return;

    boss.items.forEach(function (item, index) {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = item.name;
      if (index === 0) opt.selected = true;
      itemSelect.appendChild(opt);
    });

    if (boss.notes) {
      bossNotes.hidden = false;
      bossNotes.textContent = boss.notes;
    } else {
      bossNotes.hidden = true;
      bossNotes.textContent = "";
    }
  }

  function updateChance(p) {
    const n = Math.max(1, Math.floor(Number(killsInput.value) || 1));
    killsInput.value = String(n);

    var chance;
    if (p >= 1) {
      chance = 1;
    } else if (p <= 0) {
      chance = 0;
    } else {
      chance = 1 - Math.pow(1 - p, n);
    }

    const pct = chance * 100;
    chancePercentEl.textContent =
      formatNumber(pct, pct >= 10 ? 1 : 2) + "%";
    chanceBar.style.width = Math.min(100, pct) + "%";
  }

  function updateResults() {
    const item = getSelectedItem();
    if (!item) return;

    const p = getProbability(item);
    const avg = p > 0 ? 1 / p : Infinity;

    avgKillsEl.textContent = Number.isFinite(avg)
      ? formatNumber(avg, avg >= 100 ? 0 : 1)
      : "—";

    rateFractionEl.textContent = formatFraction(item);
    ratePercentEl.textContent =
      formatNumber(p * 100, p * 100 >= 1 ? 2 : 4) + "%";
    rateDecimalEl.textContent = p.toExponential(4);

    if (item.notes) {
      itemNotes.hidden = false;
      itemNotes.textContent = item.notes;
    } else {
      itemNotes.hidden = true;
      itemNotes.textContent = "";
    }

    updateChance(p);
  }

  bossSelect.addEventListener("change", function () {
    populateItems();
    updateResults();
  });

  itemSelect.addEventListener("change", updateResults);
  killsInput.addEventListener("input", function () {
    const item = getSelectedItem();
    if (item) updateChance(getProbability(item));
  });

  if (!bosses.length) {
    avgKillsEl.textContent = "No data";
    return;
  }

  populateBosses();
  populateItems();
  updateResults();
})();
