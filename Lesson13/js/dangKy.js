
const fn_CheckInput = (obj)=>{
    // console.log(obj);
    // console.log(obj.name);
    // console.log(obj.id);
    // console.log(obj.value);
    flag = true;
    if(obj.value == ""){
        flag=false;
        document.querySelectorAll("#"+obj.id+" + span")[0].innerText="Bạn chưa thông tin";
    }else{
         document.querySelectorAll("#"+obj.id+" + span")[0].innerText="OK";
    }
    return flag;
}

const fn_CheckRegister = ()=>{
    // kiểm tra các điểu khiển có gắn * không được để trống
    let flag = true;
    // let hten = hoTen.value;
    // // let hten1 = document.getElementById("hoTen").value;
    // // console.log("hoten:",hten);
    // console.log("ho ten:",hoTen.value);
    // console.log(document.querySelectorAll("#hoTen + span"));
    if(hoTen.value == ""){
        flag=false;
        document.querySelectorAll("#hoTen + span")[0].innerText="Bạn chưa nhập họ tên";
    }else{
        document.querySelectorAll("#hoTen + span")[0].innerText="Ok";
    }
    
    // check tên đăng nhập
    let element = document.getElementById("tenDangNhap");
    flag = fn_CheckInput(element);
    
    // MẬT KHẨU
    element = document.getElementById("matKhau");
    flag = fn_CheckInput(element);

    return false;
    // return flag;
}