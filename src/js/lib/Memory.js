class Memory {
  constructor() {
    this.memory = this.loadMemory();
    this.year = new Date().getFullYear();
  }

  clearMemory() {
    let memory = localStorage.getItem("ratios");
    if (memory) {
      localStorage.setItem("ratios", JSON.stringify([]));
      // reset concludes with constructor calling for the now empty `ratios` array in localStorage
      return (this.memory = this.loadMemory());
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

  async initDB() {
    let db;
    const request = window.indexedDB.open("ratioCalculator", 1);

    request.onerror = (e) => console.error(e.target.errorCode);
    // request.onsuccess = (e) => (db = e.target.result);
    request.onupgradeneeded = (e) => {
      db = e.target.result;
      const store = db.createObjectStore("ratios", { autoIncrement: true });
      // for (let i = 1; i < 5; i++) {
      //   store.createIndex(`num${i}`, `num${i}`, { unique: false });
      // }
      console.log(db);
      console.log(store);

      store.transaction.oncomplete = (e) => {
        const ratioStore = db
          .transaction("ratios", "readwrite")
          .objectStore("ratios");
        console.log(ratioStore);
      };
    };
  }
}

module.exports = Memory;
