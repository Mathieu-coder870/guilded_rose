import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(46);
  });

  it("La qualité d'un produit ne peut jamais être négative", () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const item = gildedRose.updateQuality();
    expect(item[0].quality).toBe(0);
  });

  it("Aged Brie augmente sa qualité (`quality`) plus le temps passe", () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThan(30);
  });

  it("La qualité d'un produit n'est jamais de plus de 50", () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });


  it("Sulfuras, étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité", () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1000, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(1000);
  });


  it('"Backstage passes", comme le "Aged Brie", augmente sa qualité (`quality`) plus le temps passe (`sellIn`) ; La qualité augmente de 2 quand il reste 10 jours ou moins "', () => {
    const gildedRose2 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25)]);
    const item2 = gildedRose2.updateQuality();
    expect(item2[0].quality).toBe(27);


  });

  it('"Backstage passes", comme le "Aged Brie", mais la qualité tombe à 0 après le concert"', () => {
    const gildedRose3 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 27)]);
    const item3 = gildedRose3.updateQuality();
    expect(item3[0].quality).toBe(30);

  });

  it('"Backstage passes", comme le "Aged Brie", augmente sa qualité et de 3 quand il reste 5 jours ou moins"', () => {
    const gildedRose4 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 27)]);
    const item4 = gildedRose4.updateQuality();
    expect(item4[0].quality).toBe(0);
  });

  it('"les éléments "Conjured" voient leur qualité se dégrader de deux fois plus vite"', () => {
    const gildedRose5 = new GildedRose([new Item('Conjured', 0, 24)]);
    const item5 = gildedRose5.updateQuality();
    expect(item5[0].quality).toBe(22);
  });


});











