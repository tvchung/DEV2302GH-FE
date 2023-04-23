// lặp trong tập hợp, đối tượng sử dụng for...in
arr = ["JS","Loop","For...in"];

for(let i in arr){
    console.log(arr[i]);
}

var student = {
    id:100,
    name:"Devmaster",
    age:6
}

for(let i in student){
    console.log(student[i]);
}

arr.forEach(x=> console.log(x))
// student.forEach(x=>console.log(x)) // không dành cho đối tượng