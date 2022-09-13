"use strict";
let weatherAPI = "http://api.openweathermap.org/data/2.5/forecast"

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-96.796856, 32.776272]
});


//nav & search controls
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
map.addControl(new mapboxgl.NavigationControl())

// let forecasts = []

$('#search-btn').click(() => {
    const search = $('#search-input').val()
    console.log(search)
    geocode(search, mapboxgl.accessToken).then((location) => {
        console.log(location)
        map.setCenter(location)
        map.setZoom(9)

        let marker = new mapboxgl.Marker()
            .setLngLat([location[0],location[1]])
            .addTo(map)

        ajaxCall(location)

    })

})

let ajaxCall = (arr) => {
    $.get(weatherAPI, {
        APPID: OPEN_WEATHER_APPID,
        lat: arr[1],
        lon: arr[0],
        units: "imperial"
    }).done(function(data) {

        let forecasts = data.list
            let forecastHTML = append(forecasts)
            $('#weather').html(forecastHTML)
        console.log(forecasts)
    })
}

function append(data) {
    let html = ``
       for  (let i = 0; i < data.length; i += 8){
           const {dt_text, main: {humidity, temp, temp_max, temp_min}, weather: [{description, icon}]} = data[i]
           html += `<div class="card" style="width: 19%;">
<!--          <img src="..." class="card-img-top" alt="...">-->
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>`}
    return html
    }

// (let i = 0; i < forecasts.length; i++){

function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }

let fiveDiv = $('#weather')