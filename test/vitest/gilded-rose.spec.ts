import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(46);
  });
});

// describe("Cas valeur péremption dépassé ", () => {
// it('qualite se dégrade 2 fois plus rapidement')
// const gildedRose = new GildedRose([new Item('foo', 0, 0)]);


// });
