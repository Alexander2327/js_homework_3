class Good {
    constructor (id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable (available) {
        this.available = available;
    }
}

x = new Good(1, 't-short', 'blue', 'XL', 1700, true);
y = new Good(2, 'jeans', 'red', 32, 2000, true);
z = new Good(3, 'shoots', 'orange', 40, 5000, true);
h = new Good(4, 'skinny-jeans', 'skinny', 33, 2500, false);
k = new Good(5, 'short', 'white', 30, 2200, true);

// console.log(x);
// x.setAvailable(false);
// console.log(x);

class GoodsList {
    constructor (goods, filter, sortPrice, sortDir) {
        this.goods = goods;
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list () {
        const filterGoods = this.goods.filter(good => good.available && this.filter.test(good.name));
        console.log(filterGoods)
        if (this.sortPrice) {
            if (this.sortDir) {
                return filterGoods.sort((good1, good2) => good1.price >= good2.price ? 1 : -1);
            } else {
                return filterGoods.sort((good1, good2) => good1.price <= good2.price ? 1 : -1);
            }
        } else {
            return filterGoods;
        }
    }
    add (good) {
        this.goods.push(good)
    }
    remove (id) {
        this.goods.forEach((el, i) => {
            if (el.id === id) this.goods.splice(i, 1);
          })
    }
}
t = new GoodsList([x, y, z, h, k], /sh/gi, true, true);
// t.add(k);
// t.remove(3);
console.log(t.list);

class BasketGood extends GoodsList {
    constructor (goods, filter, sortPrice, sortDir, amount) {
        super(goods, filter, sortPrice, sortDir);
        this.amount = amount;
    }
}

class Basket {
    constructor (goods) {
        this.goods = goods;
    }
    get totalAmount () {

    }
    get totalSum () {

    }
    add (good, amount) {

    }
    remove (good, amount) {

    }
    clear () {

    }
    removeUnavailable () {

    }
}