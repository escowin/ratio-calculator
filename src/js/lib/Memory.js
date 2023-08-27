class Memory {
  constructor() {
    this.database = null;
    this.year = new Date().getFullYear();
  }

  openDatabase() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("ratio_calculator", 1);
      request.onerror = (e) => reject(e.target.errorCode);

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        db.createObjectStore("ratios", { autoIncrement: true });
        for (let i = 1; i < 5; i++) {
          store.createIndex(`num${i}`, `num${i}`, { unique: false });
        }
      };

      request.onsuccess = (e) => {
        this.database = e.target.result;
        resolve();
      };
    });
  }

  // clearMemory() {
  //   let memory = localStorage.getItem("ratios");
  //   if (memory) {
  //     localStorage.setItem("ratios", JSON.stringify([]));
  //     // reset concludes with constructor calling for the now empty `ratios` array in localStorage
  //     return (this.memory = this.loadMemory());
  //   }
  // }

  async loadMemory() {
    await this.openDatabase();

    return new Promise((resolve, reject) => {
      const memory = [];
      const transaction = this.database.transaction("ratios");
      const store = transaction.objectStore("ratios");
      const cursorRequest = store.openCursor();
      cursorRequest.onsuccess = (e) => {
        const cursor = e.target.result;
        cursor ? memory.push(cursor.value) : resolve(memory);
      };
      cursorRequest.onerror = (e) => reject(e);
    });
  }

  async saveRatio(numEls) {
    const nums = numEls.map((numEl) => numEl.value);
    const ratio = {};
    let i = 1;
    for (const key of nums) {
      ratio["num" + i] = key;
      i++;
    }

    return new Promise((resolve, reject) => {
      const transaction = this.database.transaction(["ratios"], "readwrite");
      transaction.onerror = (e) => reject(e);
      const store = transaction.objectStore("ratios");
      const addRequest = store.add(ratio);
      addRequest.onsuccess = () => resolve();
      addRequest.onerror = (e) => reject(e);
    });
  }
}

module.exports = Memory;
