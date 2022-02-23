const {Shop, Item} = require("../src/gilded_rose");
const {LosingQualityItem} = require("../src/losing_quality_item");
const {EarningQualityItem} = require("../src/earning_quality_item");
const {LegendaryItem} = require("../src/legendary_item");

describe("Gilded Rose", function() {
  // General settings
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("quality should have a minimum value of 0", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("quality should have a maximum value of 50", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  // Losing quality items
  it("should lose quality", function() {
    const gildedRose = new Shop([new EarningQualityItem("Aged Brie", 8, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("should lose quality twice as fast (conjured or expired)", function() {
    const gildedRose = new Shop([new LosingQualityItem("Conjured Mana Cake", 3, 6, true), new LosingQualityItem("+5 Dexterity Vest", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
    expect(items[1].quality).toBe(18);
  });

  it("should lose quality four times faster (conjured AND expired)", function() {
    const gildedRose = new Shop([new LosingQualityItem("Conjured Mana Cake", 0, 6, true)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  // Earning quality items
  it("should earn quality depending on sellIn time", function() {
    const gildedRose = new Shop([new EarningQualityItem("Aged Brie", 8, 0), new EarningQualityItem("Aged Brie", 5, 0), new EarningQualityItem("Backstage passes to a TAFKAL80ETC concert", 5, 0, true),new EarningQualityItem("Backstage passes to a TAFKAL80ETC concert", 15, 0, true)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
    expect(items[1].quality).toBe(3);
    expect(items[2].quality).toBe(3);
    expect(items[3].quality).toBe(1);
  });

  it("Backstage passes quality should be 0 if expired", function() {
    const gildedRose = new Shop([new EarningQualityItem("Backstage passes to a TAFKAL80ETC concert", 0, 0, true)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  // Legendary items
  it("sulfuras should not lose any quality", function() {
    const gildedRose = new Shop([new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});
