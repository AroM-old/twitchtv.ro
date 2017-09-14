var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

//Making request of each channel and show data in website
channels.forEach(function (name) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/kraken/streams/' + name + '?client_id=kgxowepe5yvejan6xhzky0gzsraqe3', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(xhr.responseText);
                var status;
                if (data.stream === null || data.stream === undefined) {
                    status = "Offline";
                    document.getElementById("channelsInfo").insertAdjacentHTML('afterbegin', '<div class="col-md-3"><img src="https://www.naplesgarden.org/wp-content/themes/naples_botanical/img/notfound.jpg"></div>');
                } else {
                    status = "Online";
                    document.getElementById("channelsInfo").insertAdjacentHTML('afterbegin', '<div class="col-md-3"><img src="' + data.stream.channel.logo + '"></div>');
                }
                console.log(data.stream);

                document.getElementById("channelsInfo").insertAdjacentHTML('beforeend', '<div class="col-md-3">' + name + '</div>');
                // document.getElementById("channelsInfo").insertAdjacentHTML('beforeend', '<div class="col-md-6">' + data.stream.channel.game +'</div>');
            }

        }
    };
    xhr.send();
});