const {Item} = require("../src/gilded_rose");

// Items that lose durability over time
class LosingQualityItem extends Item {
  constructor(name, sellIn, quality, isConjured=false) {
    super(name, sellIn, quality);
    this.isConjured = isConjured;
    // If an object is conjured or expired, multiplies by 2 it's quality degradation. If it has both, multiplies it by 4.
    this.multiplicator = 1 * (this.isConjured ? 2 : 1) * (this.sellIn <= 0 ? 2 : 1);
  }

  updateQuality() {
    if (this.quality > 0) this.quality -= this.multiplicator;
    if (this.quality < 0) this.quality = 0;
  }
}

module.exports = {
  LosingQualityItem
}
