
const loadDataMemner = ()=>{
    // lấy dữ liệu từ listMember
    let row = ``;
    listMember.forEach((member,index) => {
        row += `
            <tr>
                <td>${index+1}</td>
                <td>${member.hoTen}</td>
                <td>${member.gioiTinh}</td>
                <td>${member.thuDienTu}</td>
                <td>${member.dienThoai}</td>
                <td align="center">
                    <button>Xem</button>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        `;
    });
    
    console.log(row);
    document.getElementById("dataMember").innerHTML='';
    document.getElementById("dataMember").innerHTML=row;

}