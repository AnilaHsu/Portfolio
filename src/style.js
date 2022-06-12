
$(document).ready(function(){
    $("#nav_button").click(function(){
        $('#sm_nav_list').css('display') == 'block' ? 
        $('#sm_nav_list').removeClass('nav_block') : 
            $('#sm_nav_list').addClass('nav_block');
    });
});