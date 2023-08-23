class Memory {
  constructor() {
    this.memory = this.loadMemory();
  }

  clearMemory() {
    let memory = localStorage.getItem("ratios");
    if (memory) {
      console.log(this.memory) // [{...}, {...}]
      localStorage.setItem("ratios", JSON.stringify([]));
      this.memory = this.loadMemory();
      console.log(memory) // [{...}, {...}]
      console.log(localStorage.getItem("ratios")) // []
      console.log(this.memory) // []
    }
  }

  loadMemory() {
    let ratios = localStorage.getItem("ratios");

    if (!ratios) {
      localStorage.setItem("ratios", JSON.stringify([]));
    }
    return JSON.parse(ratios);
  }

  saveRatio(numEls) {
    const nums = numEls.map((numEl) => numEl.value);
    const ratio = {};
    let i = 1;
    for (const key of nums) {
      ratio["num" + i] = key;
      i++;
    }

    // pushes object to localStorage array
    this.memory.push(ratio);
    localStorage.setItem("ratios", JSON.stringify(this.memory));
  }
}

module.exports = Memory;
