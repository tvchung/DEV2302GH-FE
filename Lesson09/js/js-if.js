// demo if
/*
    Dạng 1:  if đơn
    if(codition){
        statement block;
    }

    -- ex: kiểm tra giá trị của n nếu >0 thì in ra n;
*/
var n = 100;
if(n>0){
    console.log("Giá trị n=",n);
}
n=-10;
if(n>0){
    console.log("Giá trị n=",n);
}
/*
    Dạng 2: if đầy đủ
    if(condition){
        statement block <-> condition==true;
    }else{
        statement block <-> condition==false;
    }

    -ex: kiểm tra số nguyên n là số chẵn hay số lẻ?

*/
n=5;
if(n%2==0){
    console.log(n, " là số chẵn");
}else{
    console.log(n, " là số lẻ");
}
/*
    Dạng 3: if bậc thang
    syntax:
    if(condition1){
        statement 1;
    }else if(condition2){
        statement 2;
    }....
    
    }else{
        statement n+1;
    }

    - ex: kiểm tra số nguyên n là số dương, số âm hay số 0

*/
n=-111;
if(n>0){
    console.log(n, " là số dương");
}else if(n==0){
    console.log(n, " là số 0");
}else{
    console.log(n, " là số âm");
}

/*
    Dạng 4: if lồng nhau
    syntax:
    if(condition1){
        statement;
        if(condition2){...}
        statement; 
        ...
    }else{
        if(condition2){....}
    }

    --ex: cho 2 số a, b;
        kiểm tra nếu a > 0 thì tính 
            nếu b là chẵn thì tính:  m=b-a;
            neesuu b lẻ thì tính m=b/a;
        ngược lại a<=0 thì tính m=b*a;
*/
a=100;
b=50;
if(a>0){
    if(b%2==0){
        m=b-a;
    }else{
        m=b/a;
    }
}else{
    m=b*a;
}
console.log("m=",m);