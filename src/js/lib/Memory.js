class Memory {
  constructor() {
    this.memory = this.loadMemory();
  }

  loadMemory() {
    let ratios = localStorage.getItem("ratios");

    if (!ratios) {
      const array = [];
      localStorage.setItem("ratios", array);
      return ratios;
    }

    return ratios;
  }
}

module.exports = Memory;
