// Regular Item class, I won't modify it
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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

// Legendary items which won't lose durability
class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    return this.quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      item.updateQuality && item.updateQuality();
      item.sellIn -= 1;
    })
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  LegendaryItem,
  LosingQualityItem,
  EarningQualityItem
}
