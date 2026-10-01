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

});






