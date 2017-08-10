var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var urlStreams = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";

var ttvRequest = new XMLHttpRequest();
ttvRequest.open('GET', urlStreams, true);
ttvRequest.send();

ttvRequest.onload = function() {
    if (ttvRequest.readyState === ttvRequest.DONE) {
        if (ttvRequest.status === 200) {
            document.getElementById('here').innerHTML = '<div class="col-md-12">' + ttvRequest.responseText + '</div>';
        }
    }
};