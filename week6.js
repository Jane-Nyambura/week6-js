const kiosk = {
    Fruit: "orange",
    get getFruit() {
        return this.Fruit;
    },

    set setFruit(newFruit) {
        this.Fruit = newFruit;
    }
};
console.log(kiosk.Fruit);
kiosk.newFruit = "banana"

console.log(kiosk.newFruit);