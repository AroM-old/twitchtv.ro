// Channels to test

var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];



/* Request to the server and display raw data in screen */
var urlStreams = "https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2";
var ttvRequest = new XMLHttpRequest();
ttvRequest.open('GET', urlStreams, true);
// ttvRequest.setRequestHeader("cache-control", "no-cache");
ttvRequest.send(null);
ttvRequest.onload = function() {
    if (ttvRequest.readyState === ttvRequest.DONE) {
        if (ttvRequest.status === 200) {
            ttvRequest = JSON.parse(this.responseText);


            document.getElementById('here').innerHTML = '<div class="col-md-4">' + ttvRequest.stream.channel.name + '</div>';
        }
    }
};