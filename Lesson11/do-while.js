// do ... while
/*
    syntax:
    do{
        statement block 
    }while(condition);

    - Thực hiện ít nhất 1 lần
    - vòng lặp tiếp tục thực hiện khi condition=true

    - Ví dụ: 
        + Cho mang giá trị
        + in ra các phần tử trong mảng
    */
var arr = ["JS","Loop","do...while"];
var i=0;
var arrLength = arr.length;
do{
    console.log(i, arr[i]);
    i++;
}while(i<arrLength);
console.log("Finished!");
/*
    - cho mảng số nguyên 
        arr = [10,12,25,34,25,36];
    - Tính tổng các phần tử trong mảng
    - Tính tổng các phần tử có giá trị là số chẵn
*/

arr = [10,12,25,34,25,36];
tong=0;
tongChan=0;
i=0;
do{
    tong +=arr[i];
    // tổng chẵn
    if(arr[i] % 2 == 0){
        tongChan +=arr[i];
    }
    // tăng biến lặp
    i++;
}while(i<arr.length);
console.log("Tổng:",tong);
console.log("Tổng chẵn:",tongChan);