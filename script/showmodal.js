$(document).ready( function() {

    /// thesis
    $("#modal-thesisbtn").click(function(){
        $("#modal-thesis").addClass("is-active");
    })

    $("#modal-closethesis").click(function(){
        $("#modal-thesis").removeClass("is-active");
    })

    /// portfolio
    $("#modal-portfliobtn").click(function(){
        $("#modal-portfolio").addClass("is-active");
    })

    $("#modal-closeportfolio").click(function(){
        $("#modal-portfolio").removeClass("is-active");
    })

    /// 3d builder
    $("#modal-3dbuilderbtn").click(function(){
        $("#modal-3dbuilder").addClass("is-active");
    })

    $("#modal-close3dbuilder").click(function(){
        $("#modal-3dbuilder").removeClass("is-active");
    })
})