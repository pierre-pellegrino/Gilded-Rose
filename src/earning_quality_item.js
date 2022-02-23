const {Item} = require("../src/gilded_rose");

// Items that earn durability over time
class EarningQualityItem extends Item {
  constructor(name, sellIn, quality, canExpire = false) {
    super(name, sellIn, quality);
    this.canExpire = canExpire;
  }

  updateQuality() {
    if (this.canExpire && this.sellIn === 0) this.quality = 0;
    else this.sellIn <= 5 ? this.quality += 3 : this.sellIn <= 10 ? this.quality += 2 : this.quality += 1;
    if (this.quality > 50) this.quality = 50;
  }
}

module.exports = {
  EarningQualityItem
}
