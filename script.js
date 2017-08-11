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
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    
    var url="https://api.openweathermap.org/data/2.5/weather?";
    var key="01b347e0bc70514efa39a98ff1f1b6ce";
    var data={APPID:key,lat:lat, lon:lon};
    $.ajax({
        url:url,
        data:data,
        type:"GET",
        success:function(response){
            console.log(response);
        }
        
    });
}


