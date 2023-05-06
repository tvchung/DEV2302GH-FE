$().ready(function(){
    // set color cho button, p
    $("button").each(function(){
        let mau = $(this).attr("color");
        let nen = $(this).attr("bg")
        $(this).css({
            color:mau,
            background:nen
        })
    }).click(function(){
        let mau = $(this).attr("color");
        // alert(mau)
        $("p").css({
            color:mau
        })
    })
    /*
    // tô màu cho button
    $("button").each(function(){
        let mau = $(this).attr("color");
        $(this).css({
            color:mau
        })
    })
     // tô màu cho p
    $("button").click(function(){
        let mau = $(this).attr("color");
        // alert(mau)
        $("p").css({
            color:mau
        })
    })
    */
})