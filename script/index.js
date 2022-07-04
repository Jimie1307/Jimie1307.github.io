$(document).ready( function(){
    var tmp = 1;

    // intro
    $("#introbtn").click(function(){
        showContent("#introbtn_li","#introduction",tmp);
        tmp = 1;
    })

    // project
    $("#projectbtn").click(function(){
        showContent("#projectbtn_li","#projects",tmp);
        tmp = 2;
    })

    // employment
    $("#employbtn").click(function(){
        showContent("#employbtn_li","#employment",tmp);
        tmp = 3;
    })

    // contact
    $("#contactbtn").click(function(){
        showContent("#contactbtn_li","#contact",tmp);
        tmp = 4;
    })

    function showContent(id, divid,tmp){
        // remove currently active
        switch(tmp){
            case 1:
                $("#introbtn_li").removeClass("is-active");
                $("#introduction").fadeOut();
                break;
            case 2:
                $("#projectbtn_li").removeClass("is-active");
                $("#projects").fadeOut();
                break;
            case 3:
                $("#employbtn_li").removeClass("is-active");
                $("#employment").fadeOut();
                break;
            case 4:
                $("#contactbtn_li").removeClass("is-active");
                $("#contact").fadeOut();
                break;
        }
        // is active
        $(id).addClass("is-active");
        $(divid).fadeIn("slow");
    }
});