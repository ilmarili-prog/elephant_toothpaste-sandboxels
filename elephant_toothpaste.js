elements.hydrogen_peroxide = {
  color: "#d1f0ff",
  behavior: behaviors.LIQUID,
  tempHigh: 150,
  stateHigh: "steam",
  category: "liquids",
  state: "liquid",
  density: 1140,
  reactions: {
    "iron": { elem1: null, elem2: "rust" },
    "blood": { elem1: "oxygen", elem2: "foam" }
  }
};elements.yeast_solution = {
  color: "#d5c79b",
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1050,
  reactions: {
    "hydrogen_peroxide": {
      elem1: null,
      chance: 0.2,
      reactions: [
        { elem2: "foam" },
        { elem2: "oxygen" }
      ]
    }
  }
}reactions: {
  "yeast": { 
    elem1: null, 
    chance: 0.1, 
    reactions: [
      { elem2: "oxygen" },
      { elem2: "foam" }
    ]
  },
  "yeast_solution": { 
    elem1: null, 
    chance: 0.2, 
    reactions: [
      { elem2: "oxygen" },
      { elem2: "foam" }
    ]
  },
  "potassium_iodide": { 
    elem1: null, 
    chance: 0.1, 
    reactions: [
      { elem2: "oxygen" },
      { elem2: "foam" }
    ]
  },
  "soap": {
    elem1: null,
    elem2: "foam"
  }
}
elements.yeast = {
  // existing properties...
  reactions: {
    "water": { 
      elem1: null, 
      elem2: "yeast_solution" 
    }
  }
};