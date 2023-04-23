// khai báo, khai báo và khởi tạo
var arr1 = new Array();
var arr2 = new Array("Dev",123, "Master");
var arr3 = [];
var arr4 = [12,34,4,56,24,4];
// truy xuất đến phần tử trong mảng
// tên mảng [chỉ số]
// - gán
arr1[0]=100;
arr1[9]="Chung";
console.log(arr1);
arr1[5]="Devmaster";
console.log(arr1);
// Lấy giá trị
console.log(arr4[3]);

// Duyệt mảng (loop: for, while, do...while, for...in)
for (let index = 0; index < arr4.length; index++) {
    const item = arr4[index];
    console.log(item);
}

arr4.forEach(x=>console.log(x));
arr4.forEach((item,index)=>{
    console.log(index, item);
});

// một số phương thức thường dùng
// pop, push, shift, unshift, sort, find, filter, ..
// xóa các phần tử có giá trị 4 trong mảng arr4

arr4 = arr4.filter(x=> x!=4);
console.log(arr4);

// sắp xếp (sort)
arr4.sort();
console.log(arr4);

arr4.reverse();
console.log(arr4);

var arr4 = [12,34,4,56,24,4];
console.log(arr4);
arr4.sort((a,b)=>{return b-a;})
console.log(arr4);

arr = [
    { 'item1' : 1234, 'item2' : 'apple',price:456 },
    { 'item1' : 1234, 'item2' : 'banana',price:234 },
    { 'item1' : 1234, 'item2' : 'custard',price:321 },
    { 'item1' : 2156, 'item2' : 'melon',price:123 },
    { 'item1' : 4345, 'item2' : 'asparagus',price:222 } 
  ];
console.log(arr);

arr.sort((a,b)=>{
    if(a.price>b.price){
        return -1;
    }else{
        return 1;
    }
});
console.log(arr);

// tìm kiếm
// find
var res = arr4.find(x=>x>4);
console.log("result:",res);
// filter
var res = arr4.filter(x=>x>4);
console.log("result:",res);

// filter
res = arr.filter(x=> x.item2.startsWith('a'));
console.log(res);