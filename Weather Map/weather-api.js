"use strict";
//WEATHER API
let weatherAPI = "http://api.openweathermap.org/data/2.5/forecast"

//MAPBOX API
mapboxgl.accessToken = MAPBOX_TOKEN;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 8,
    center: [-96.796856, 32.776272]
});

//MAPBOX NAV CONTROLS
map.addControl(new mapboxgl.NavigationControl())

//SEARCH BAR FUNCTION
$('#search-btn').click(() => {
    const search = $('#search-input').val()
    console.log(search)
    geocode(search, mapboxgl.accessToken).then((location) => {
        console.log(location)
        map.setCenter(location)
        map.setZoom(11)

        let marker = new mapboxgl.Marker()
            .setLngLat([location[0],location[1]])
            .addTo(map)

        ajaxCall(location)
        revGeo(location[0], location[1])
    })

})

//WEATHER API AJAX CALL FUNCTION
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

//5DAY FORECAST HTML FUNCTION
let append = (data) => {
    let html = ``
       for  (let i = 0; i < data.length; i += 8){
           console.log(data[i])
           const {dt_txt, main: {humidity, temp, temp_max, temp_min}, weather: [{description, icon}], wind: {speed}} = data[i]
           html += `
            <div class="card border-light card " style="width: 20%; eight: ">
               <h6 class="card-header text-center text-dark opacity-75 mb-2" style="font-size: small">${dt_txt.substring(5,7)}.${dt_txt.substring(8,10)}.${dt_txt.substring(0,4)}
               </h6>
               <img src='http://openweathermap.org/img/w/${icon}.png' class="img-thumbnail mx-auto d-block border-0" style='width: 100px; height: 100px;' alt="...">
              <div class="card-body pt-0">
              <h4 class="card-title text-center">${temp.toFixed(1)}ºF</h4>
                <div class="d-flex justify-content-around" >
                <p class="card-text mb-0 text-warning pe-1" style="font-size: small;">
                H:${temp_max.toFixed(1)}ºF 
                </p>
                
                <p class="card-text mb-0 text-warning" style="font-size: small">
                L:${temp_min.toFixed(1)}ºF
                </p>
                </div>
            
              </div>
              <ul class="list-group list-group-flush text-center">
                
                <li class="list-group-item text-dark" style="font-size: small">Humidity: ${humidity}%</li>
                <li class="list-group-item text-dark" style="font-size: small">Wind: ${speed} mph</li>
              </ul>
              <div class="card-body p-0 ">
              <p class="list-group-item bg-secondary text-light text-center p-0 m-0">${description.toUpperCase()}</p>
              </div>
            </div>`}
    return html
    }

//REV-GEO LOCATION DISPLAY FUNCTION
let revGeo = (lng, lat) => {
    reverseGeocode({lng, lat}, MAPBOX_TOKEN).then(function(results){
        console.log(results)
        $('#city').text(`${results}`)

    })
}

//MAPBOX (REVERSE) GEOCODER FUNCTIONS
function geocode(search, token) {
        let baseUrl = 'https://api.mapbox.com';
        let endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }

function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            let city
            return data.features[0].place_name
                // .context[2].text;
        });
}