class Memory {
  constructor() {
    this.memory = this.loadMemory();
    this.year = new Date().getFullYear();
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
        const db = e.target.result;
        const tx = db.transaction(["ratios"], "readwrite");
        tx.onerror = (e) => reject(e);
        tx.oncomplete = (e) => {
          this.memory = this.loadMemory();
          return this.memory;
        };

        const store = tx.objectStore("ratios");
        store.add(ratio).onsuccess = (e) => resolve(this.loadMemory());
      };
    });
  }

  clearMemory() {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open("ratio_calculator", 1);
      request.onerror = (e) => console.error(e)
      request.onsuccess = e => {
        const db = e.target.result;
        const tx = db.transaction("ratios", "readwrite");
        const store = tx.objectStore("ratios");
        const clearRequest = store.clear();

        clearRequest.onerror = (e) => reject(e);
        clearRequest.onsuccess = () => {
          this.memory = this.loadMemory();
          return resolve(this.memory)
        };
      }
    })
  }
}

module.exports = Memory;
