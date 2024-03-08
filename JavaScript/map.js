const m = new Map();

let a = 0 / "", b = 0 / "", c = +0, d = -0

console.log(a === b, c === d)

m.set(a, "a")
m.set(c, "c")

console.log(m.get(b), m.get(d))

const key = {};
const wm2 = new WeakMap([
    [key, "val1"],
    [{}, "val2"],
    [{}, "val3"]
]);

const wm3 = new WeakMap([
    [new String("BADKEY"), "val1"]
]);

let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this.year_;
        },
        set: function (newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});
console.log(Object.getOwnPropertyDescriptors(book));