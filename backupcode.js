// Run our jQuery
$(document).ready(function() {
    // Channels lists
    var channels = ["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas"];
   
    // Creating url for each channel
    function getChannel(){
        channels.forEach(function(channel){
            function url(type, name){
                return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
            }
        });
         // Get channels data
    $.getJSON(url('streams', channel), function(data){
        var game, status;
        if (data.stream === null) {
            game = 'Offline';
            status = 'offline';
        }else if (data.stream === undefined) {
            game = 'Account Closed';
            status = 'closed';
        }else{
            game = data.stream.game;
            status = 'Online';
        }
        $.getJSON(url('channels', channel), function(data){
            var logo, name;
            if (data.logo !== null) {
                logo = data.logo;
                name = data.display_name;
            }else{
                logo = 'https://openclipart.org/image/2400px/svg_to_png/211479/Simple-Image-Not-Found-Icon.png';
                name = channel;
            }

            
            html = '<div class="row' + 
            status + '"><div class="col-sm-1" id="icon"><img src="' + 
            logo + '"class="logo"';
        });
    });
    }    
   
});