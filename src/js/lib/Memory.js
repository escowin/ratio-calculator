class Memory {
  constructor() {
    this.memory = this.loadMemory();
  }

  loadMemory() {
    let ratios = localStorage.getItem("ratios")

    if (!ratios) {
      localStorage.setItem("ratios", []);
    }
    return ratios;
  }

  saveRatio(ratio) {
    return this.memory.push(ratio)
  }
}

module.exports = Memory;
