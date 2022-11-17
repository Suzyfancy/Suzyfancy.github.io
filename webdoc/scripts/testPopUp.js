"use strict"

$(document).ready(initialiser);


function initialiser() {
    
    $(window).on('load',function(){
        if($('#modalCompositeur').modal('id')){
            $("#audio").volume = "0";
        };
    });
    

}


    
    