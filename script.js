var channels = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
];

// Button handling
document.getElementById("all").addEventListener("click", function(){
    for (var i = 0; i < channels.length; i++) {
        httpRequest("https://wind-bow.gomix.me/twitch-api/streams/" + channels[i]);
        document.getElementById("name").innerHTML += "<p>" + channels[i] + "</p>";
        // console.log(channels[i]);
    }
        
});

// Twitch API http request
function httpRequest(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            var data = JSON.parse(request.responseText);
            if (data.stream === null) {
                document.getElementById("status").innerHTML += "<p>Channel no streaming</p>";
            }else{
                document.getElementById("status").innerHTML += "<p>Streaming</p>";
            }
            
        }
    };
    request.send();
}