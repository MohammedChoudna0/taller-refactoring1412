const { Shop, Item } = require("./gildRose");
//const { Shop, Item } = require("./refactoredGildRose");

describe('Gilded Rose', function () {

  it('should decrease quality and sellIn for normal item', function() {

    const gildRose = new Shop([new Item('normal', 10, 20)]);

    const items = gildRose.updateQuality();

    expect(items[0].quality).toEqual(19);
    expect(items[0].sellIn).toEqual(9);
  });

  
  it('should decrease quality by 2 if sellIn <= 0', function() {

    const gildRose = new Shop([new Item('normal', 0, 20)]);

    const items = gildRose.updateQuality();

    expect(items[0].quality).toEqual(18);
    expect(items[0].sellIn).toEqual(-1);
  });

  it('should increase quality for Aged Brie', function() {

    const gildRose = new Shop([new Item('Aged Brie', 10, 20)]);

    const items = gildRose.updateQuality();

    expect(items[0].quality).toEqual(21);
    expect(items[0].sellIn).toEqual(9);
  });

  it('should not change quality for Sulfuras', function() {

    const gildRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);

    const items = gildRose.updateQuality();

    expect(items[0].quality).toEqual(80);
    expect(items[0].sellIn).toEqual(10);
  });

  it('should increase quality by 2 for Backstage passes when sellIn <= 10', function() {
    const gildRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);

    const items = gildRose.updateQuality();

    expect(items[0].quality).toEqual(22);
    expect(items[0].sellIn).toEqual(9);
  });

  it('should increase quality by 3 for Backstage passes when sellIn <= 5', function() {

    const gildRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
    
    const items = gildRose.updateQuality();

    expect(items[0].quality).toEqual(23);
    expect(items[0].sellIn).toEqual(4);
  });

  it('should drop quality to 0 for Backstage passes when sellIn < 0', function() {
    const gildRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);

    const items = gildRose.updateQuality();

    expect(items[0].quality).toEqual(0);
    expect(items[0].sellIn).toEqual(-1);
  });

});
