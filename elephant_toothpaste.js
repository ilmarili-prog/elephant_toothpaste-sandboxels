lements.hydrogen_peroxide = {
  color: "#d1f0ff",
  behavior: behaviors.LIQUID,
  tempHigh: 150,
  stateHigh: "steam",
  category: "liquids",
  state: "liquid",
  density: 1140,
  reactions: {
    "iron": { elem1: null, elem2: "rust" },
    "blood": { elem1: "oxygen", elem2: "foam" },
    "yeast": { elem1: null, elem2: "oxygen", chance: 0.2 },
    "yeast_solution": { elem1: null, elem2: "oxygen", chance: 0.2 },
    "potassium_iodide": { elem1: null, elem2: "oxygen", chance: 0.2 },
    "soap": { elem1: null, elem2: "foam", chance: 1 }
  }
};

elements.yeast_solution = {
  color: "#d5c79b",
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1050,
};

elements.yeast = {
  color: "#f5deb3",
  behavior: behaviors.POWDER,
  category: "life",
  state: "solid",
  density: 600,
  reactions: {
    "water": { elem1: null, elem2: "yeast_solution" }
  }
};