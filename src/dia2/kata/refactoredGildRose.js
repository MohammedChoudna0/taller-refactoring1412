class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  class Shop {
    constructor(items = []) {
      this.items = items;
    }
  
    updateQuality() {
  
      for (let item of this.items) {
        if (item.name !== 'Sulfuras, Hand of Ragnaros') {
  
          if (item.name === 'Aged Brie') {
            this.updateAgedBrie(item);
  
          } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            this.updateBackstagePasses(item);
  
          } else if (item.name.startsWith('Conjured')) {
            this.updateConjuredItem(item);
  
          } else {
            this.updateNormalItem(item);
          }
          item.sellIn--;
        }
  
      }
  
      return this.items;
    }
  
    updateNormalItem(item) {
  
      if (item.quality <= 0){
        item.quality= 0;
        return;
      }
      
      item.quality--;
      //Se degrada el doble despues de la fecha de venta recom.
      if (item.sellIn <= 0) {
        item.quality--;
      }
    }
  
    updateAgedBrie(item) {
      if (item.quality >= 50) {
        return;
      }
  
      item.quality++;//más uno calidad
  
      if (item.sellIn <= 0) {
        item.quality++; // Caracteristico de Aged Brie
      }
    }
    
  
    updateBackstagePasses(item) {
      // calidad a 0 despues de fecha de venta 
      if (item.sellIn <= 0) {
        item.quality = 0;
        return;
      }
      //Calidad siempre 50 o menos
      if (item.quality >= 50) {
        return;
      }
      if (item.sellIn <= 5) {
        item.quality += 3;
  
      } else if (item.sellIn <= 10) {
        item.quality += 2;
  
      } else {
        item.quality++;
      }
  
      if (item.quality > 50) {
        item.quality = 50;
      }
    }
    
  
    updateConjuredItem(item) {
      if (item.quality > 0) {
        item.quality = item.quality - 2 < 0 ? 0 : item.quality - 2;
      }
    }
  }
  
  module.exports = {
    Item,
    Shop,
  };
  