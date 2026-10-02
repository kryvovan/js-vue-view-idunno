console.log('Happy developing ✨')
//
// function name(args) {
//     code...
// }
//

//
// function hello() {
//     alert("Hello world!")
// }
//
// hello()
//
// function showInfo(name, price = "no", count) {
//     console.log("Himeno shop")
//     console.log("skibidi 12am - 9pm")
//     console.log(`tovar: ${name}, price: ${price} grn`)
//     console.log(`sun: ${count * price}`)
// }
//
// showInfo('green tea', 100, 4)
//
// function calculateTotal(price, total) {
//     let suma = price * total, discount, totalSuma
//     if (suma >= 5000) {
//         discount = 0.1
//     } else {
//         discount = 0
//     }
//     totalSuma =  suma * (1 - discount)
//     return totalSuma
// }
//
// let total = calculateTotal(500, 3)
// console.log(total)

// function showInfo(name, price = "no", count) {
//     console.log("Himeno shop")
//     console.log("skibidi 12am - 9pm")
// }
//
// function getProductTotal(price, count) {
//     return price * count
//
// }
//
// function getDiscountPercent(total) {
//     if (total >= 10000) {
//         return 15
//     } else if(total >= 5000) {
//         return 10
//     } else if (total >= 2000) {
//         return 5
//     } else {
//         return 0
//     }
// }
//
// function getDiscountValue(total, percent) {
//     return total * percent / 100
// }
//
// function getFinalPrice(total, discount) {
//     return total - discount
// }
//
// let productName = prompt()
// let productPrice = +prompt()
// let productCount = +prompt()
//
// let productTotal = getProductTotal(productPrice, productCount)
// let discountPercent = getDiscountPercent(productTotal)
// let discountValue = getDiscountValue(productTotal, discountPercent)
//
// let finalPrice = getFinalPrice(productTotal, discountValue)
//
// showInfo(productName, productPrice, productCount)
// console.log(productName)
// console.log(productPrice)
// console.log(productCount)
// console.log(productTotal)
// console.log(discountPercent)
// console.log(discountValue)
// console.log(finalPrice)
____________________________________________________________________________

// function calculateTickets(price, count) {
//     return price * count
// }
//
// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 15
//     } else if (total >= 1000) {
//         return 10
//     } else if (total >= 500) {
//         return 5
//     } else {
//         return 0
//     }
// }
//
// function calculateTicketDiscount(total, percent) {
//     return total * percent / 100
// }
//
// function calculateTicketFinalPrice(total, discount) {
//     return total - discount
// }
//
// let ticketPrice = +prompt()
// let ticketCount = +prompt()
//
// let total = calculateTickets(ticketPrice, ticketCount)
// let discountPercent = getTicketDiscount(total)
// let discount = calculateTicketDiscount(total, discountPercent)
//
// let finalPrice = calculateTicketFinalPrice(total, discount)
//
// console.log(ticketPrice)
// console.log(ticketCount)
// console.log(total)
// console.log(discountPercent)
// console.log(discount)
// console.log(finalPrice)

____________________________________________________________________________

let password = ""

function registration() {
    password = prompt("")
    alert("")
}

function login() {
    if (password === "") {
        alert("gloop")
        return;
    }

    let attempts = 3;

    while (attempts > 0) {
        let userPassword = prompt("Введіть пароль: ")

        if (userPassword === password) {
            alert("ok")
            alert("okay")
            return;
        }
        else {
            attempts -= 1

            if (attempts > 0) {
                alert(`hell no, att -  ${attempts}`)
            }
        }
    }

    alert("loh")
}


while (true) {
    let choice = prompt()

    if (choice === 1) {
        registration()
    }
    else if (choice === 2) {
        login()
    }
    else if (choice === 0) {
        alert("no")
        break;
    }
    else {
        alert("no")
    }
}