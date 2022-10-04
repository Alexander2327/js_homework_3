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
// t = new GoodsList([x, y, z, h, k], /sh/gi, true, true);
// t.add(k);
// t.remove(3);
// console.log(t.list);

class BasketGood extends Good {
    constructor (id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}

class Basket {
    constructor (goods) {
        this.goods = goods;
    }
    get totalAmount () {
        let total = 0;
        for (i of this.goods) {
            total += i.amount;
        }
        return total;
    }
    get totalSum () {
        let sum = 0;
        for (i of this.goods) {
            sum += i.price * i.amount;
        }
        return sum;
    }
    add (good, amount) {
        let flag = false;
        for (i of this.goods) {
            if (good.id === i.id) {
                i.amount += amount;
                flag = true;
            }
        }
        if (!flag) {
            k = new BasketGood(good.id, good.name, good.description, good.sizes, good.price, good.available, amount);
            this.goods.push(k);
        }
 
    }
    remove (good, amount) {
        for (i of this.goods) {
            if (good.id === i.id) {
                i.amount -= amount;
            }
        this.goods.forEach((el, i) => {
            if (el.amount === 0) this.goods.splice(i, 1);
            });
        }
    }
    clear () {
        while (this.goods.length) {
            this.goods.pop();
        }
    }
    removeUnavailable () {
        this.goods = this.goods.filter(good => good.available);
        }
}
// i = new BasketGood(1, 't-short', 'blue', 'XL', 1700, true, 3)
// j = new BasketGood(2, 'jeans', 'red', 32, 2000, false, 4)
// k = new Good(3, 'jeans', 'red', 32, 2000, true)
// f = new Basket([i, j])
// console.log(f.totalSum)
// console.log(f.totalAmount)
// f.add(k, 3)
// console.log(f)
// f.remove(j, 4)
// console.log(f)
// f.clear()
// console.log(f)
// f.removeUnavailable()
// console.log(f)
