import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(46);
  });
});


describe('Gilded Rose', () => {
  it("La qualité d'un produit ne peut jamais être négative", () => {
    const item1 = new Item('foo', 0, -1);
    expect(item1.quality).toBeNull;
  });

});
describe('Gilded Rose', () => {
  it("Aged Brie augmente sa qualité (`quality`) plus le temps passe", () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThan(30);
  });
});
// describe("Cas valeur péremption dépassé ", () => {
// it('qualite se dégrade 2 fois plus rapidement')
// const gildedRose = new GildedRose([new Item('foo', 0, 0)]);


// });
