const {Item} = require("../src/gilded_rose");

// Legendary items which won't lose durability
class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    return this.quality;
  }
}

module.exports = {
  LegendaryItem
}
