import Slot from "./Slot.js";

const config = {
  inverted: true, 
  onSpinStart: (symbols) => {
    console.log("onSpinStart", symbols);
  },
  onSpinEnd: (symbols) => {
    console.log("onSpinEnd", symbols);
  },
};

const slot = new Slot(document.getElementById("slot"), config);
