// giải phương trình bậc 2
a=1;
b=8;
c=1;

if(a==0){ // giải phương trình bậc 1 bx + c =0
    if(b==0){
        if(c==0){
            console.log("pt vô số nghiệm");
        }else{
            console.log("pt vô nghiệm");
        }
    }else{
        console.log("pt có nghiệm x=", -c/b);
    }
}else{ // a!=0 => là phương trình bậc 2
    delta = b*b - 4*a*c;
    if(delta>0){
        x1=(-b-Math.sqrt(delta))/(2*a);
        x2=(-b+Math.sqrt(delta))/(2*a);
        console.log("Nghiệm x1=",x1);
        console.log("Nghiệm x2=",x2);
    }else if(delta==0){
        x=-b/(2*a);
        console.log("pt có nghiệm kép x1=x2=",x);
    }else{
        console.log("pt vô nghiệm");
    }
}