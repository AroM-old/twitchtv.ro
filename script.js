
// Data request & initialization
function init() {
    // Array with channels names
    var channels = ["ESL_SC2", 
                    "OgamingSC2", 
                    "brtt", 
                    "freecodecamp", 
                    "bige3430", 
                    "habathcx", 
                    "RobotCaleb", 
                    "codedminds",
                    "RealKraftyy",
                    "goober1476"];

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
                        document.getElementById("channelsInfo").insertAdjacentHTML('afterbegin', '<div class="row offline"><div class="col-md-3"><img src="https://www.naplesgarden.org/wp-content/themes/naples_botanical/img/notfound.jpg"></div><div class="col-md-6"><a href ="https://www.twitch.tv/' + name + '"target="blank"><span class="name">' + name + '</span></a></div><div class=col-md-3 center-block>' + status + '</div><div class="col-md-12">' + game + '</div></div>');
                    } else {
                        status = "Online";
                        document.getElementById("channelsInfo").insertAdjacentHTML('afterbegin', '<div class="row online"><div class="col-md-3"><img src="' +
                            data.stream.channel.logo + '"></div><div class="col-md-6"><a href="https://www.twitch.tv/' + name + '"target="blank"><span class="name">' + name + '</span></a></div><div class=col-md-3>' + status + '</div><div class="col-md-12">' + data.stream.channel.game + '</div></div>');
                    }
                }
            }
        };
        xhr.send();
    });
}

// Calling the function to show data
init();

// Show 'All' button and clean the data
document.getElementById("all").addEventListener("click", function () {
    document.getElementById("channelsInfo").innerHTML = "";
    init();
});

// Show only 'Online'
document.getElementById("online").addEventListener("click", function(){
    var rows = document.querySelectorAll(".offline");
   
    for (var i = 0; i < rows.length; i++) {
        rows[i].classList.toggle('hidden');
    }
});

// Show only 'Offline'
document.getElementById("offline").addEventListener("click", function(){
    var rows = document.querySelectorAll(".online");
    for (var i = 0; i < rows.length; i++) {
        rows[i].classList.toggle('hidden');
        
    }
});