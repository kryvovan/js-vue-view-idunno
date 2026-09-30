let cars = 0
let electric = 0
let total = 0
let best = 0

for (let i = 1; i <= 7; i++) {
    let hours = +prompt("hours")

    if (hours === 0) {
        break
    }
    if (hours < 0 || hours > 12) {
        alert("помилка")
        continue
    }
    let type = +prompt("type")
    if (type !== 1 && type !== 2) {
        alert("помилка")
        continue
    }
    let price

    if (type === 1) {
        price = hours * 40
    } else {
        price = hours * 30
        electric += 1
    }
    if (hours > 5) {
        price = price * 0.8
    }
    cars += 1
    total += price

    if (price > best) {
        best = price
    }
}
console.log("cars = " + cars)
console.log("electric = " + electric)
console.log("total = " + total)