console.log("-----연습문제 1-----");
console.log("-----for 문---------");
// 연습문제 1
// 2단 부터 9단 까지
// (for 문, while 문)

for (i = 2; i<=9; i++) {
    for (j = 1; j<=9; j++) {
        console.log("%d x %d =", i, j,  i*j );
    }
    
}

console.log("-----while 문-------");

i = 2;
j = 1;

while (i<=9) {
    for (j=1; j<=9; j++) {
        console.log("%d x %d =", i, j, i*j);
     }
    i++;
}

console.log("--------------------");


console.log("-----연습문제 2-----");
//  연습문제 2
//  *****
//  ****
//  ***
//  **
//  *
//  (for 문, while 문)
// for (i=1; i<=5; i++) {
//     console.log("*****")
// }