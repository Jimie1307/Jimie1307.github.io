$(document).ready( function(){
    var tmp = 1;

    // intro
    $("#introbtn").click(function(){
        hideContent(tmp);
        showContent("#introbtn_li","#introduction",);
        tmp = 1;
    })

    // edu
    $("#edubtn").click(function(){
        hideContent(tmp);
        showContent("#edubtn_li","#edu");
        tmp = 2;
    })

    // career
    $("#careerbtn").click(function(){
        hideContent(tmp);
        showContent("#careerbtn_li","#career");
        tmp = 3;
    })

    // project
    $("#projectbtn").click(function(){
        hideContent(tmp);
        showContent("#projectbtn_li","#projects");
        tmp = 4;
    })

    // employment
    $("#employbtn").click(function(){
        hideContent(tmp);
        showContent("#employbtn_li","#employment");
        tmp = 5;
    })

    function hideContent(tmp){
        // remove currently active
        switch(tmp){
            case 1:
                $("#introbtn_li").removeClass("is-active");
                $("#introduction").hide();
                break;
            case 4:
                $("#projectbtn_li").removeClass("is-active");
                $("#projects").hide();
                break;
            case 5:
                $("#employbtn_li").removeClass("is-active");
                $("#employment").hide();
                break;
            case 2:
                $("#edubtn_li").removeClass("is-active");
                $("#edu").hide();
            break;

            case 3:
                $("#careerbtn_li").removeClass("is-active");
                $("#career").hide();
            break;
        }
        
    }

    function showContent(id,divid){
        // is active
        $(id).addClass("is-active");
        $(divid).fadeIn("slow");
    }
});