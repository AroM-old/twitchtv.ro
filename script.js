var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var urlStreams = "https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2";

var ttvRequest = new XMLHttpRequest();

ttvRequest.open('GET', urlStreams);
ttvRequest.send('');

console.log(ttvRequest);