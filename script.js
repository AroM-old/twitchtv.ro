$(document).ready(function() {
    var channels = ["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas"];
    
    function getChannelData(){
        channels.forEach(function(channel){
            $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel + '?callback=?', function(data){
                var game;
                var status;
                var links;
                var logo;
                if (data.stream === null) {
                    game = "Not Available Currently Offline";
                    status = "Offline";
                    logo = "http://via.placeholder.com/50x50";
                } else if (data.stream === undefined) {
                    game = "Account Closed";
                    status = "Offline";
                    logo = "http://via.placeholder.com/50x50";                
                }else{
                    game = data.stream.game;
                    linkName = data.stream.channel.url;
                    logo = data.stream.channel.logo;
                    status = "Online";
                }
                $("#name").append("<div class='col-md-1 data'><img src=" + logo + "></div>");
                $("#name").append("<div class='col-md-3 data'><a target='blank' href="+linkName+">" + channel + "</a></div>");
                $("#name").append("<div class='col-md-8 data'>" + status + "</div>");
                // $("#name").append("<div class='col-md-6 data'>" + game + "</div>");
                // console.log(data);
            });
        });
    
    }
    
    getChannelData();
});


   







// // Button handling
// document.getElementById("all").addEventListener("click", function(){
//     for (var i = 0; i < channels.length; i++) {
//         httpRequest("https://wind-bow.gomix.me/twitch-api/streams/" + channels[i] + "?callback=?");
//         document.getElementById("name").innerHTML += "<p>" + channels[i] + "</p>";
        
//     }
        
// });

// // Twitch API http request
// function httpRequest(url){
//     var request = new XMLHttpRequest();
//     request.open('GET', url, true);
//     request.onreadystatechange = function(){
//         if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
//             var data = JSON.parse(request.responseText);
//             if (data.stream === null) {
//                 document.getElementById("status").innerHTML += "<p>Channel no streaming</p>";
//             }else{
//                 document.getElementById("status").innerHTML += "<p>Streaming</p>";
//             }
            
//         }
//     };
//     request.send();
// }