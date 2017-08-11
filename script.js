var lat=0.0;
var lon=0.0;
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude; 
    
    var url="https://api.openweathermap.org/data/2.5/weather?";
    var key="01b347e0bc70514efa39a98ff1f1b6ce";
    var units="metric";
    var unitDisplay="Celsius"
    
    var data={APPID:key,lat:lat, lon:lon, units:units};
    $.ajax({
        url:url,
        data:data,
        type:"GET",
        success:function(response){
            var weatherMain=response.weather[0].main;
            var temp=response.main.temp;
            x.innerHTML="<p>The weather today is "+weatherMain+" and the temperature is "+temp+" in "+unitDisplay+"</p>";
            console.log(response.main.temp)
        }
        
    });

    
}


