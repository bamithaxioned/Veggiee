/* Author: 

*/


$(document).ready(function () {
    
    $('.menu-links').removeClass("active");
    console.log()
    $(".menu-links").click(function () {
        //    console.log(this.innerHTML);
        let value = $(this).attr("data-filter");
        console.log(value);

        let list = $(".menu-list-li");
        console.log(list.hasClass(value))

        if (list.hasClass(value)) {
            $(list).not("." + value).hide();
            $(list).filter("." + value).show();
        }
        
        $(this).addClass("active").siblings().removeClass("active");
    })
})