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

  // loadMemory() {
  //   let ratios = localStorage.getItem("ratios");

  //   if (!ratios) {
  //     localStorage.setItem("ratios", JSON.stringify([]));
  //   }
  //   return JSON.parse(ratios);
  // }

  loadMemory() {
    let db;
    return new Promise((resolve, reject) => {
      // requests database from indexeddb using the name and version. possible event outcomes:
      // - triggers .onsuccess()
      // - creates the database through .open() operation. an .onupgradeneeded event is then triggered
      const request = window.indexedDB.open("ratio_calculator", 1);
      request.onerror = (e) => console.error(e.target.errorCode);

      request.onupgradeneeded = (e) => {
        // database interface
        db = e.target.result;

        // table analog | object holds js objecs
        const store = db.createObjectStore("ratios", { autoIncrement: true });
        for (let i = 1; i < 5; i++) {
          store.createIndex(`num${i}`, `num${i}`, { unique: false });
        }

        // store.transaction.oncomplete = (e) => {
        //   const ratioStore = db
        //     .transaction("ratios", "readwrite")
        //     .objectStore("ratios");
        //   mockRatios.forEach((ratio) => ratioStore.add(ratio));
        //   console.log(ratioStore);
        // };
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
          if (cursor) {
            memory.push(cursor.value);
            cursor.continue();
          } else {
            resolve(memory);
          }
        };
      };
    });
  }

  saveRatio(numEls) {
    const nums = numEls.map((numEl) => numEl.value);
    const ratio = {};
    let i = 1;
    for (const key of nums) {
      ratio["num" + i] = key;
      i++;
    }

    // indexeddb
    const request = window.indexedDB.open("ratio_calculator", 1);
    request.onerror = (e) => console.error(e.target.errorCode);
    request.onsuccess = (e) => {
      let db = e.target.result;
      const transaction = db.transaction(["ratios"], "readwrite");
      transaction.oncomplete = (e) => console.log(e);
      transaction.onerror = (e) => console.error(e);

      const store = transaction.objectStore("ratios");
      store.add(ratio).onsuccess = (e) =>
        console.log("store request success " + e);
    };
  }
}

module.exports = Memory;
