console.log("Welcome to javascript in Devmaster");
// Biến , hằng
// Khai báo biến: let (local), var (Global, local)
var name="Chuung Chuung";
console.log("Welcom, ", name);
var name="Devmaster Academy" // khai báo lại
console.log("Welcome, ", name);
var age=4;
console.log("Welcome, ", name, age);
age=100; // gán lại giá trị cho biến
console.log("Welcome, ", name, age);
// local (let)
let address="25 Vũ Ngọc Phan, Láng hạ, Đống đa, Hà nội";
console.log("Address:",address);

// let address="25 Vũ Ngọc Phan "; // lỗi ở đây

// Gán lại giá trị
address = "Tầng 6, Tòa VIỆN CÔNG NGHỆ, Số 25 Vũ Ngọc Phan";
console.log("Address:",address);

// hằng: biến hằng -> không cho phép khai báo lại, không cho phép gán lại 
const PI=3.14;
console.log("PI:",PI);
// gán lại -> lỗi -> Assignment to constant variable.
PI=3.2415;
console.log("PI:",PI);
// không cho phép khai báo lại
// const PI=3.14155; // lối - Identifier 'PI' has already been declared