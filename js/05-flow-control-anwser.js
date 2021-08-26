console.log("-----연습문제 1-----");
console.log("-----for 문 구구단---------");
// 연습문제 1
// 2단 부터 9단 까지
// (for 문, while 문)

for (let dan = 2; dan <= 9; dan++) {
    //  단 루프
    console.log(dan + "단");
    for (let num = 1; num <= 9; num++){
        console.log(`${dan} * ${num} = ${dan * num}`);
    }
    console.log();
}
    


console.log("-----while 구구단-------");

let dan = 2;
while (dan <= 9) {
    //  단 루프
    let num = 1;
    console.log(dan + "단");
    while(num <= 9) {
        console.log(`${dan} * ${num} = ${dan * num}`);
        num ++;
    }
    console.log();
    dan ++;
}

console.log("--------------------");


console.log("-----연습문제 2-----");
//  연습문제 2
//  *****
//  ****
//  ***
//  **
//  *
console.log("-------for star --------");
for (let count = 5; count >=1; count--) {
    let stars = "";
    for (let col = 1; col <= count; col++) {
        stars += "*";
    }
    console.log(stars);
}

console.log("-------while star --------");
let count = 5;
while (count >=1) {
    let stars = "";
    let col = 1;
    while (col <= count) {
        stars += "*";
        col++;
    }
    console.log(stars);
    count--;
}