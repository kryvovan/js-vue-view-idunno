console.log('Happy developing ✨')
//
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
//
//
// let sum = 0;
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i
//     }
// }
// console.log(sum)
// _________________________
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 ===0) {
//         console.log(i)
//     }
// }
//_______________________________
// for (let i = 1; i <= 100; i++) {
//     if (i > 25 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i)
//         break
//     }
// }
// //
// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         console
//     }
//     console.log(i)
// }

let students = +prompt("");
let sum = 0, mean, goodGrade = 0, midGrade = 0, badGrade = 0, minGrade = 101, maxGrade =  -1, first = 0;
for (let i = 1; i <= students; i++) {
    let grade = +prompt("");
    if (!(grade >= 0 && grade <= 100)) {
        alert("error");
        i--;
        continue;
    }

    if(grade >= 90 && grade <= 100) {
        goodGrade ++;
    }
    else if(grade >= 60 && grade <= 89) {
        midGrade ++;
    }
    else{
        badGrade ++;
    }
    if (grade < minGrade) {
        minGrade = grade
    }
    if (grade > maxGrade) {
        maxGrade = grade
    }
    if (grade === 100 && first === 0) {
        first = i;
    }

    sum += grade;
}
mean = sum / students;
console.log("avg: " + mean);
console.log("90-100: " + goodGrade);
console.log("60-89: " + midGrade);
console.log("<60: " + badGrade);
console.log("min: " + minGrade);
console.log("max: " + maxGrade);
console.log("first: " + first);