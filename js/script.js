$(document).ready(function(){

    $(document).on("click",".on-off",function(){
        $(".fan").toggleClass("animation");
        $(".fan").css("animation-duration","4s");
    })

    $(document).on("click",".1",function(){
        $(".fan").css("animation-duration","4s");
    })

    $(document).on("click",".2",function(){
        $(".fan").css("animation-duration","2s");
    })

    $(document).on("click",".3",function(){
        $(".fan").css("animation-duration","0.9s");
    })

    $(document).on("click",".4",function(){
        $(".fan").css("animation-duration","0.5s");
    })

    $(document).on("click",".5",function(){
        $(".fan").css("animation-duration","0.1s");
    })

})
