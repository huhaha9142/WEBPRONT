//  Date: 날짜와 시간
let now = new Date();   //  현재 시간
console.log("now:", now);
let time = new Date(1990, 9, 14);  //  월은 0부터 시작
//  => 1990년 10월 14일
console.log("time:", time);
time = new Date(2014, 02, 07, 09, 30, 0)    //  년월일시분초
console.log("time:", time);

console.log("년도:", time.getFullYear());   //  년도
console.log("월:", time.getMonth() +1);     //  월정보는 0부터 시작
console.log("일:", time.getDate());         //  일
console.log("요일:", time.getDay());        //  일요일: 0

//  set메서드
time.setFullYear(2021);
console.log("변경된 time:", time);
//  이 날은 무슨 요일?
console.log("요일:", time.getDay());