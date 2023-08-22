class Memory {
  constructor() {
    this.memory = this.loadMemory();
  }

  loadMemory() {
    let ratios = localStorage.getItem("ratios")

    if (!ratios) {
      localStorage.setItem("ratios", JSON.stringify([]));
    }
    return JSON.parse(ratios);
  }

  saveRatio(ratio) {
    // for localStorage purposes
    let ratioString = `${ratio[0]} : ${ratio[1]} = ${ratio[2]} : ${ratio[3]}`

    this.memory.push(ratioString);
    localStorage.setItem("ratios", JSON.stringify(this.memory))
  }
}

module.exports = Memory;
