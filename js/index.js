import Slot from "./Slot.js";

const config = {
  inverted: true, //true de sus ain jos / false de jos in sus
  onSpinStart: (symbols) => {
    console.log("onSpinStart", symbols);
  },
  onSpinEnd: (symbols) => {
    console.log("onSpinEnd", symbols);
  },
};

const slot = new Slot(document.getElementById("slot"), config);
