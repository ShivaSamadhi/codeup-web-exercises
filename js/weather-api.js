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
           console.log(data[i])
           const {dt_txt, main: {humidity, temp, temp_max, temp_min}, weather: [{description, icon}], wind: {speed}} = data[i]
           html += `
            <div class="card" style="width: 19%;">
               <h5 class="card-header text-center">${dt_txt.substring(5,7)}.${dt_txt.substring(8,10)}.${dt_txt.substring(0,4)}
               </h5>
               <img src='http://openweathermap.org/img/w/${icon}.png' class="img-thumbnail mx-auto d-block border-0" style='width: 100px; height: 100px;' alt="...">
              <div class="card-body pt-0">
              <h3 class="card-title text-center">${temp.toFixed(1)}ºF</h3>
                <div class="d-flex justify-content-between">
                <h6 class="card-text mb-0 text-danger">H: ${temp_max.toFixed(1)}ºF</h6>
                <h6 class="card-text mb-0 text-primary">L: ${temp_min.toFixed(1)}ºF</h6>
                </div>
            
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

function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}