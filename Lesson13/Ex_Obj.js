// Object in javascript
// 1. Khái báo
// cách 1
var obj = new Object();
// cách 2
obj = {}
// 2. Khai báo đối tượng với các thuộc tính
// khởi tạo thuộc tính và gán gán giá trị

obj.fullName = 'Chung Chung';
obj.age=44;

// lấy giá trị từ thuộc tính của đối tượng
console.log("FullName:", obj.fullName);
console.log("age:", obj.age);

// cách 2: Khai báo đối tượng và khởi tạo các thuộc tính
obj = {
    fullName : 'Chung Chung',
    age:44,
}
console.log(obj);
console.log("FullName:", obj.fullName);
console.log("age:", obj.age);

// 3. Làm việc với các phương thức
// Cách 1:
obj = new Object();
// thuộc tính:
obj.fullName = 'Chung Chung';
obj.age=44;
// phương thức
obj.print = function(){
    console.log("Đây là phương thức print của obj");
}

// gọi thực hiện phương thức
obj.print();

// cách 2 với {}
obj = {
    // thuộc tính
    fullName:"Devmaster Academy",
    age:6,
    // phương thức
    show:function(){
        console.log("========={}==========");
        console.log("FullName:",this.fullName);
        console.log("age:",this.age);
    },
    add:function(fullName,age){
        this.fullName=fullName;
        this.age=age;
    }
}
// gọi phương thức
obj.show();
obj.add("Chung Chung",45);
obj.show();
