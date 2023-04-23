/*
    syntax:

    for( init ; condition ; step){

        statement block;

    }

*/
// Dạng 1: for đầy đủ
// in ra các số nguyên dương từ 0 đến n
n=5;
console.log("Dãy số nguyên từ 0 - ",n);
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log("Dãy số nguyên từ 0 - ",n);
for(let i=0; i<n ; i++){
    console.log(i);
}
// Dạng 2: for khuyết
console.log("Khuyết init:");
i=0;
for(;i<n; i++){
    console.log(i);
}
console.log("Khuyết condition:");
// i=0;
for(let i=0; ; i++){
    if(i>=n) break;
    console.log(i);
}
console.log("Khuyết step:");
// i=0;
for(let i=0; i<n ; ){
    console.log(i);
    i++;
}
// Dạng 3: for khuyết toàn bộ
console.log("For khuyết toàn bộ");
i=0;
for ( ; ; ){
    if(i>=n) break;
    console.log(i);
    i++;
}
// Dạng 4: for không thân
console.log("For không thân");
for(let i=0; i<n;console.log(i), i++ );

/*
    1. Th (log): (10')
        + Cho số nguyên dương n;
        + In ra các số chẵn , lẻ trong khoảng 0-n
            hàng chẵn: 
            hàng lẻ:
    2. Th (form): (15')
*/