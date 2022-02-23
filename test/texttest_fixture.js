const {Shop} = require("../src/gilded_rose");
const {LosingQualityItem} = require("../src/losing_quality_item");
const {EarningQualityItem} = require("../src/earning_quality_item");
const {LegendaryItem} = require("../src/legendary_item");

const items = [
  new LosingQualityItem("+5 Dexterity Vest", 10, 20),
  new EarningQualityItem("Aged Brie", 2, 0),
  new LosingQualityItem("Elixir of the Mongoose", 5, 7),
  new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80),
  new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
  new EarningQualityItem("Backstage passes to a TAFKAL80ETC concert", 15, 20, true),
  new EarningQualityItem("Backstage passes to a TAFKAL80ETC concert", 10, 49, true),
  new EarningQualityItem("Backstage passes to a TAFKAL80ETC concert", 5, 49, true),

  // This Conjured item does not work properly yet
  new LosingQualityItem("Conjured Mana Cake", 3, 6, true),
];

const days = Number(process.argv[2]) || 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
