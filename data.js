/**
 * RS3 boss drop data — rates from the RuneScape Wiki / official Jagex reveals.
 * probability = chance per kill (or as noted in `notes`).
 * rateNumerator / rateDenominator describe the familiar "1/N" form when applicable.
 * Never invent rates: if a rate could not be verified, the item was omitted.
 *
 * Sources (retrieved ~2026-09):
 * - https://runescape.wiki (boss pages)
 * - https://www.runescape.com/drop-rates
 * - Jagex Elder God Wars / Zamorak drop-rate news posts
 */

window.RS3_DROPS = [
  {
    id: "rasial",
    name: "Rasial, the First Necromancer",
    notes: "Base rates without Tier 4 luck. Weapons and armour roll on separate tables.",
    items: [
      {
        id: "omni-guard",
        name: "Omni guard",
        rateNumerator: 1,
        rateDenominator: 640,
        notes: "Weapon table. Improves to 1/632 with T4 luck."
      },
      {
        id: "soulbound-lantern",
        name: "Soulbound lantern",
        rateNumerator: 1,
        rateDenominator: 640,
        notes: "Weapon table. Improves to 1/632 with T4 luck."
      },
      {
        id: "crown-first-necro",
        name: "Crown of the First Necromancer",
        rateNumerator: 1,
        rateDenominator: 640,
        notes: "Armour table. Improves to 1/630 with T4 luck."
      },
      {
        id: "robe-top-first-necro",
        name: "Robe top of the First Necromancer",
        rateNumerator: 1,
        rateDenominator: 640,
        notes: "Armour table. Improves to 1/630 with T4 luck."
      },
      {
        id: "robe-bottom-first-necro",
        name: "Robe bottom of the First Necromancer",
        rateNumerator: 1,
        rateDenominator: 640,
        notes: "Armour table. Improves to 1/630 with T4 luck."
      },
      {
        id: "hand-wrap-first-necro",
        name: "Hand wrap of the First Necromancer",
        rateNumerator: 1,
        rateDenominator: 640,
        notes: "Armour table. Improves to 1/630 with T4 luck."
      },
      {
        id: "foot-wraps-first-necro",
        name: "Foot wraps of the First Necromancer",
        rateNumerator: 1,
        rateDenominator: 640,
        notes: "Armour table. Improves to 1/630 with T4 luck."
      },
      {
        id: "miso-collar",
        name: "Miso's collar (pet)",
        rateNumerator: 1,
        rateDenominator: 1500,
        notes: "Threshold of 300."
      }
    ]
  },
  {
    id: "solak",
    name: "Solak, Guardian of the Grove",
    notes: "Rates are per player and independent of team size.",
    items: [
      {
        id: "erethdors-grimoire",
        name: "Erethdor's grimoire",
        rateNumerator: 1,
        rateDenominator: 200,
        notes: "Improves to 1/198 with T4 luck."
      },
      {
        id: "blightbound-mh",
        name: "Blightbound crossbow",
        rateNumerator: 1,
        rateDenominator: 400,
        notes: "1/200 chance to hit crossbow table, then 50% main-hand."
      },
      {
        id: "blightbound-oh",
        name: "Off-hand Blightbound crossbow",
        rateNumerator: 1,
        rateDenominator: 400,
        notes: "1/200 chance to hit crossbow table, then 50% off-hand."
      },
      {
        id: "cinderbane-gloves",
        name: "Cinderbane gloves",
        rateNumerator: 1,
        rateDenominator: 1000
      },
      {
        id: "purple-mushroom",
        name: "Purple mushroom",
        rateNumerator: 1,
        rateDenominator: 500
      },
      {
        id: "merethiels-stave",
        name: "Merethiel's stave",
        rateNumerator: 1,
        rateDenominator: 500
      }
    ]
  },
  {
    id: "araxxi",
    name: "Araxxi (solo)",
    notes: "Solo rates from official reveal. Duo rates are worse (legs 1/70, any component 1/200).",
    items: [
      {
        id: "spider-leg",
        name: "Spider leg piece (path-specific)",
        rateNumerator: 1,
        rateDenominator: 40,
        notes: "Top / middle / bottom depends on path taken in phase 2."
      },
      {
        id: "araxxi-component-any",
        name: "Any Araxxi weapon component",
        rateNumerator: 1,
        rateDenominator: 120,
        notes: "Fang, web, or eye combined (solo)."
      },
      {
        id: "araxxi-fang-matching",
        name: "Matching-style weapon component",
        rateNumerator: 1,
        rateDenominator: 240,
        notes: "Component matching Araxxor's primary style (solo)."
      },
      {
        id: "araxyte-pheromone",
        name: "Araxyte pheromone (0% enrage)",
        rateNumerator: 1,
        rateDenominator: 50,
        notes: "Formula 1/(50 − enrage/20); improves with enrage (e.g. ~1/35 at 300%)."
      }
    ]
  },
  {
    id: "vorago",
    name: "Vorago (normal mode)",
    notes: "Vorago awards up to 5 drop piles per kill. Rates below are per pile unless noted.",
    items: [
      {
        id: "seismic-wand",
        name: "Seismic wand (per pile)",
        rateNumerator: 1,
        rateDenominator: 400,
        notes: "Hard mode: 1/200 per pile. Only one unique weapon per kill."
      },
      {
        id: "seismic-singularity",
        name: "Seismic singularity (per pile)",
        rateNumerator: 1,
        rateDenominator: 400,
        notes: "Hard mode: 1/200 per pile. Only one unique weapon per kill."
      },
      {
        id: "any-seismic-per-kill",
        name: "Any seismic weapon (per kill)",
        rateNumerator: 1,
        rateDenominator: 40,
        notes: "Wiki: ~1/40 per kill for any seismic in normal mode (1/20 hard mode)."
      },
      {
        id: "vitalis-stone",
        name: "Ancient summoning stone (per pile)",
        rateNumerator: 1,
        rateDenominator: 5000,
        notes: "Hard mode 1/2500 per pile. ~1/1000 per kill if receiving all 5 piles. Threshold 1000."
      }
    ]
  },
  {
    id: "kerapac",
    name: "Kerapac, the bound",
    notes: "Three loot piles per kill. Solo rates below assume all three piles.",
    items: [
      {
        id: "kerapac-unique-nm-solo",
        name: "Any unique (NM, solo kill)",
        rateNumerator: 1,
        rateDenominator: 85,
        notes: "Approx. from 1/256 per pile × 3 piles. Specific piece ~1/768 per pile."
      },
      {
        id: "wrist-wraps-nm",
        name: "Kerapac's wrist wraps (NM, per pile)",
        rateNumerator: 1,
        rateDenominator: 768,
        notes: "Equal share of the 1/256 unique table."
      },
      {
        id: "scripture-jas-nm",
        name: "Scripture of Jas (NM, per pile)",
        rateNumerator: 1,
        rateDenominator: 768
      },
      {
        id: "gcb-codex-nm",
        name: "Greater Concentrated blast codex (NM, per pile)",
        rateNumerator: 1,
        rateDenominator: 768
      },
      {
        id: "fsoa-piece-hm-solo",
        name: "Fractured Staff piece (HM, solo kill)",
        rateNumerator: 1,
        rateDenominator: 133,
        notes: "Approx. from 1/400 per pile × 3 piles. Pieces drop in sequence."
      },
      {
        id: "fsoa-piece-hm-pile",
        name: "Fractured Staff piece (HM, per pile)",
        rateNumerator: 1,
        rateDenominator: 400
      }
    ]
  },
  {
    id: "arch-glacor",
    name: "Arch-Glacor",
    notes: "Normal mode uniques require all 5 mechanics. Hard mode scales with enrage & streak.",
    items: [
      {
        id: "leng-artefact-nm",
        name: "Leng artefact (NM, 5 mechanics)",
        rateNumerator: 1,
        rateDenominator: 500,
        notes: "Official EGW drop-rate reveal. Rolled before Scripture of Wen."
      },
      {
        id: "scripture-wen-nm",
        name: "Scripture of Wen (NM, 5 mechanics)",
        rateNumerator: 1,
        rateDenominator: 500,
        notes: "Official EGW drop-rate reveal."
      },
      {
        id: "ag-unique-hm-100",
        name: "Any unique (HM, streak 1 @ 100% enrage)",
        rateNumerator: 1,
        rateDenominator: 333,
        notes: "Post–July 2025 formula: (1500 + 15e + 25s) / 1,000,000 → ~1/333.3. Older reveal listed 1/494 pre-buff."
      },
      {
        id: "frozen-core-hm-100",
        name: "Frozen core of Leng (HM, streak 1 @ 100%)",
        rateNumerator: 24,
        rateDenominator: 33333,
        notes: "24% of unique roll at streak 1 / 100% enrage (p ≈ 0.00072)."
      },
      {
        id: "dark-nilas-hm",
        name: "Dark nilas (HM)",
        rateNumerator: 1,
        rateDenominator: 100,
        notes: "Fixed 1/100 regardless of enrage or streak."
      }
    ]
  },
  {
    id: "zamorak",
    name: "Zamorak, Lord of Chaos",
    notes: "Signature table chance scales with enrage. Rates below exclude dungeon-complete bonus & bad-luck mitigation.",
    items: [
      {
        id: "zam-rare-0",
        name: "Any signature drop (0–19% enrage)",
        rateNumerator: 1,
        rateDenominator: 100,
        notes: "Base rare-table chance at low enrage."
      },
      {
        id: "zam-rare-100",
        name: "Any signature drop (100–149% enrage)",
        rateNumerator: 1,
        rateDenominator: 80
      },
      {
        id: "zam-bow-0",
        name: "Bow of the Last Guardian piece (0% enrage)",
        rateNumerator: 1,
        rateDenominator: 800,
        notes: "12.5% of rare table at 0–99% enrage → 0.125/100."
      },
      {
        id: "zam-bow-100",
        name: "Bow of the Last Guardian piece (100–149%)",
        rateNumerator: 3,
        rateDenominator: 1600,
        notes: "15% of 1/80 rare table → 0.15/80 = 3/1600."
      },
      {
        id: "vestments-hood-0",
        name: "Vestments of Havoc hood (0% enrage)",
        rateNumerator: 9,
        rateDenominator: 10000,
        notes: "9% of rare table at 0% → 0.09/100."
      },
      {
        id: "chaos-roar-0",
        name: "Chaos Roar ability codex (0% enrage)",
        rateNumerator: 33,
        rateDenominator: 20000,
        notes: "16.5% of rare table at 0% → 0.165/100."
      }
    ]
  },
  {
    id: "telos",
    name: "Telos, the Warden",
    notes: "Unique chance scales heavily with enrage & streak. Jagex has not published the full formula; examples below are from official reveals / wiki.",
    items: [
      {
        id: "telos-unique-s1-e100",
        name: "Any unique (streak 1 @ 100% enrage)",
        rateNumerator: 1,
        rateDenominator: 263,
        notes: "Official Jagex example."
      },
      {
        id: "telos-unique-s1-e500",
        name: "Any unique (streak 1 @ 500% enrage)",
        rateNumerator: 1,
        rateDenominator: 72,
        notes: "Official Jagex example."
      },
      {
        id: "telos-unique-s1-e999",
        name: "Any unique (streak 1 @ 999% enrage)",
        rateNumerator: 1,
        rateDenominator: 38,
        notes: "Official Jagex example."
      },
      {
        id: "dormant-sgb-s1-e100",
        name: "Dormant Seren godbow (streak 1 @ 100%)",
        rateNumerator: 10,
        rateDenominator: 30245,
        notes: "Unique 1/263 × 10/115 weapon weight ≈ 1/3024.5."
      },
      {
        id: "dormant-zgs-s1-e100",
        name: "Dormant Zaros godsword (streak 1 @ 100%)",
        rateNumerator: 10,
        rateDenominator: 30245,
        notes: "Unique 1/263 × 10/115 ≈ 1/3024.5."
      },
      {
        id: "dormant-sos-s1-e100",
        name: "Dormant Staff of Sliske (streak 1 @ 100%)",
        rateNumerator: 10,
        rateDenominator: 30245,
        notes: "Unique 1/263 × 10/115 ≈ 1/3024.5."
      },
      {
        id: "reprisal-s1-e100",
        name: "Reprisal ability codex (streak 1 @ 100%)",
        rateNumerator: 10,
        rateDenominator: 30245,
        notes: "Unique 1/263 × 10/115 ≈ 1/3024.5."
      }
    ]
  }
];
