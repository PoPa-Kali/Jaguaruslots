const cache = {};

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      this.img.src = `./symbols/${name}.png`;
      cache[name] = this.img;
    }
  }

  static async preload() {
    const symbols = Symbol.symbols;

  
    await Promise.all(symbols.map(symbol => Symbol.loadImage(symbol)));
  }

  static loadImage(symbol) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        cache[symbol] = img;
        resolve();
      };
      img.onerror = reject;
      img.src = `./symbols/${symbol}.png`;
    });
  }

  static get symbols() {
    return [
      "at_at",
      "c2po",
      "darth_vader",
      "death_star",
      "falcon",
      "r1d2",
      "stormtrooper",
      "tie_ln",
      "yoda",
    ];
  }

  static random() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }
}
