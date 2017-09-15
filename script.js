var channels = ["ESL_SC2", "OgamingSC2", "brtt", "freecodecamp", "bige3430", "habathcx", "RobotCaleb","codedminds"];

//Making request of each channel and show data in website
channels.forEach(function (name) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/' + name + '?client_id=kgxowepe5yvejan6xhzky0gzsraqe3', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                var status, game;
                if (data.stream === null || data.stream === undefined) {
                    status = "Offline";
                    game = "Not Available";
                    document.getElementById("channelsInfo").insertAdjacentHTML('afterbegin', '<div class="row"><div class="col-md-3"><img src="https://www.naplesgarden.org/wp-content/themes/naples_botanical/img/notfound.jpg"></div><div class="col-md-6"><a href ="https://www.twitch.tv/' + name + '"target="blank">'  + name + '</a></div><div class=col-md-3 center-block>' + status + '</div><div class="col-md-12">' + game +'</div></div>');
                } else {
                    status = "Online";
                    document.getElementById("channelsInfo").insertAdjacentHTML('afterbegin', 
                    '<div class="row"><div class="col-md-3"><img src="' + 
                    data.stream.channel.logo + '"></div><div class="col-md-6"><a href="https://www.twitch.tv/' + name + '" target="blank">' + name + '</a></div><div class=col-md-3>' + status + '</div><div class="col-md-12">' + data.stream.channel.game +'</div></div>');
                }
            }
        }
    };
    
    xhr.send();
});
    
