const mockRatios = require("../lib/__mocks__/Memory");

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
    let db;
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("ratio_calculator", 1);
      request.onerror = (e) => reject(e.target.errorCode);
      request.onupgradeneeded = (e) => {
        // database interface
        db = e.target.result;

        // table analog | object holds js objecs
        const store = db.createObjectStore("ratios", { autoIncrement: true });
        for (let i = 1; i < 5; i++) {
          store.createIndex(`num${i}`, `num${i}`, { unique: false });
        }
      };
      request.onsuccess = (e) => {
        const memory = [];
        db = e.target.result;
        const cursorRequest = db
          .transaction("ratios")
          .objectStore("ratios")
          .openCursor();
        cursorRequest.onsuccess = (e) => {
          const cursor = e.target.result;
          cursor
            ? (memory.push(cursor.value), cursor.continue())
            : resolve(memory);
        };
      };
    });
  }

  saveRatio(numEls) {
    return new Promise((resolve, reject) => {
      const nums = numEls.map((numEl) => numEl.value);
      const ratio = {};
      let i = 1;
      for (const key of nums) {
        ratio["num" + i] = key;
        i++;
      }
      const request = window.indexedDB.open("ratio_calculator", 1);
      request.onerror = (e) => console.error(e.target.errorCode);
      request.onsuccess = (e) => {
        let db = e.target.result;
        const transaction = db.transaction(["ratios"], "readwrite");
        transaction.onerror = (e) => console.error(e);
        transaction.oncomplete = (e) => {
          console.log(this.memory);
          this.memory = this.loadMemory();
          return this.memory;
        };

        const store = transaction.objectStore("ratios");
        store.add(ratio).onsuccess = (e) => resolve(this.loadMemory());
      };
    });
  }

  // updateMemory() {
  //   this.memory = this.loadMemory()
  //   console.log(this.memory)
  //   return this.memory
  // }
}

module.exports = Memory;
