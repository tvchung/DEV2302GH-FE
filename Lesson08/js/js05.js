//Toán tử đặc biệt
// ()?x:y
x=100; 
y=200;

z= (x>y)?x:y; // z=200
console.log("z=(",x,">",y,")?=>",z);


z= (x>y)?"Long":"Hổ"; 
console.log("z=(",x,">",y,")?=>",z);

// typeof => xác định kiểu dữ liệu của biến/hằng
kq = typeof(x);
console.log("kiểu:",kq);
x="100";
kq = typeof(x);
console.log("kiểu:",kq);
x=100.34;
kq = typeof(x);
console.log("kiểu:",kq);
x={
    name:"Chung",
    age:45
}
kq = typeof(x);
console.log("kiểu:",kq);
x=[1,2,3];
kq = typeof(x);
console.log("kiểu:",kq);
x=Array(1,2,3);
kq = typeof(x);
console.log("kiểu:",kq);

x=()=>{
    console.log("Xin chào ai đó");
}
kq = typeof(x);
console.log("kiểu:",kq);

x=null;
kq = typeof(x);
console.log("kiểu:",kq);

// Các hàm chuyển đổi

x="100"; // string
kq=parseInt(x); // kq: number -> int

y="123.23"; // string
console.log(y);
y=parseFloat(y);// number -> float
console.log(y);
y=parseInt(y);
console.log(y);

x="123";
y=456;
z=x+y;
console.log(z);
console.log(typeof(z));
z=eval(x+y);
console.log(z);
console.log(typeof(z));
m=eval(z=x+y, z++);
console.log(m);
