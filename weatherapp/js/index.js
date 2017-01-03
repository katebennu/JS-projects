$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            var lat = (position.coords.latitude).toFixed(0),
                lon = (position.coords.longitude).toFixed(0);
            $("#test").html("latitude: " + lat + "<br>longitude: " + lon);
            var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=87703abe8c78fd2ec0117e25f494fa76"

            $.getJSON(url, function(json) {
                var name = "<p>" + json.name + "</p>";
                var text = "<p>" + json.weather[0].main + "</p>";
                var t = (json.main.temp - 273.15).toFixed(1);
                var temp = "<p>" + t + "&deg; C</p>";
                var img = "<img src='http://openweathermap.org/img/w/"+json.weather[0].icon + ".png'>"
                $("#weather").html(name + temp + text + img);
            });
        });
    }
});
