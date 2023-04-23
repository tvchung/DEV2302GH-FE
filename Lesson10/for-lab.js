/*
    1. Th (log): (10')
        + Cho số nguyên dương n;
        + In ra các số chẵn , lẻ trong khoảng 0-n
            hàng chẵn: 
            hàng lẻ:
    2. Th (form): (15')
*/
n=20;
chan="";
le="";
for(i=0; i<n;i++){
    if(i%2==0){
        chan += i +", ";
    }else{
        le += i + ", ";
    }
}
console.log('Hàng chẵn:',chan);
console.log('Hàng lẻ:',le);
