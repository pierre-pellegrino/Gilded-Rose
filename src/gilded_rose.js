// Regular Item class, I won't modify it
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      item.updateQuality();
    })
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
