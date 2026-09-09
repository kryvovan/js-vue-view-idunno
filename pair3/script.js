console.log('Happy developing ✨')


// let age = +prompt("")
// let register = confirm("")
//
// if (register) {
//     if (age < 18) {
//         alert("no")
//     } else {
//         alert("ok")
//     }
// }

//#2
//
// let accessLevel = prompt("");
// if (accessLevel === "admin" || accessLevel === "teacher") {
//     alert("ok");
// } else {
//     alert("no");
// }
//#3


// let register = confirm("")
// let age = +prompt("")
//
// if (register) {
//     if (age < 18) {
//         alert("no")
//     } else {
//         alert("ok")
//     }
// } else {
//     alert("no")
// }

//#4
//
// let grade = +prompt("")
// if (grade <= 60) {
//     alert("loh")
// }
// else if (60 < grade <= 69) {
//     alert("okay")
// }
// else if (70 <= grade <= 89) {
//     alert("norm")
// }
// else if (90 <= grade <= 100) {
//     alert("good")
// }
//#5
//
// let role = prompt()
// let sub, block
// if (role === "teacher") {
//     block = confirm()
//     if (block === false) {
//         alert("ok")
//     } else {
//         alert("no")
//     }
// } else if (role === "student") {
//     block = confirm()
//     if (block === false) {
//         sub = confirm()
//         if (sub) {
//             alert("ok")
//         } else {
//             alert("no")
//         }
//     } else {
//         alert("no")
//     }
// } else {
//     alert("no")
// }

//#6
//name price count
const sale = "sale";
const discount = 0.1;
let sum;
let name = prompt("Product Name");
let price = prompt("Product Price");
let count = prompt("Product Count");
sum = price * count;
let access = confirm("Product Access");
if (access && sum >= 1000 && (prompt("enter promocode") === sale || confirm("Do you have a vip?"))) {
    alert("You have a discount:" + (sum - (sum * discount)) + "%");
}
else {
    alert("Your total price is: " + price);
}
