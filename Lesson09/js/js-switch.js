// lệnh rẽ nhánh switch
/*
    syntax:
    switch(expression){
        case value1:
            statement 1;
            break;
        case value2:
            statement 2;
            break;
        ....
        [
            default:
                statement n+1 
        ]
    }

    ex: cho số nguyên n có một chữ số => đọc ra lời việt
    1 => một
    5 => năm
    ...

*/
num = 9;
switch(num){
    case 0:
        str = "không"; break;
    case 1:
        str = "một"; break;
    case 2:
        str = "hai"; break;
    case 3:
        str = "ba"; break;
    case 4:
        str = "bốn"; break;
    case 5:
        str = "năm"; break;
    case 6:
        str = "sáu"; break;
    case 7:
        str = "bảy"; break;    
    case 8:
        str = "tám"; break;   
    case 9:
        str = "chín"; break;                                                     
}
console.log(num,"=>",str);