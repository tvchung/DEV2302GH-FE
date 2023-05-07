$().ready(function(){
    $("a>img").click(function(){
        let img_src = $(this).attr("src");
        console.log("img_src:",img_src);
        //  gán lại nguồn ảnh
        $("#image-large>img").attr({
            'src':img_src
        });
        // tạo hiệu ứng
        $("#image-large>img").fadeOut(1000).fadeIn(1000);
        // active img small
        $("a>img").removeClass("active");
        $(this).addClass("active");
    })
});

// phát triển thêm -> tự động chuyển
