$(document).ready(function (){
    // Source: how to create the Modal functions https://www.w3schools.com/howto/howto_css_modals.asp
    $(".img-box img").click(function(){
        var imgSrc = $(this).attr("src");
        $(".modalImg").append("<img alt = \"Bigger performance image\" src = \""+ imgSrc+"\"/>");
        $(".modal").removeClass("hidden");
    });

    $(".close").click(function(){
        $(".modal").addClass("hidden");
        $(".modalImg img").remove();
    })

});
