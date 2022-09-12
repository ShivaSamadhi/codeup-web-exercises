"use strict";

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-96.796856, 32.776272]
});

let restaurants = [
    {
        name: `Uchi`,
        address: `2817 Maple Ave, Dallas, Texas 75201, United States`,
        coordinates: [-96.806492, 32.79706],
        cuisine: `Sushi/Japanese`,
        description: `Located in the Arts District, the third location of Uchi made its debut in 2015. Melding the best offerings of Chef Tyson Cole’s first three restaurants (Uchi Austin, Uchiko, and Uchi Houston).`
    },
    {
        name:`Ricky's Hot Chicken`,
        address: `100 South Central Expressway, Richardson, Texas 75080, United States`,
        coordinates: [-96.73751, 32.94937],
        cuisine:`Fried Chicken / Nashville Hot Chicken`,
        description:`Our journey began after founder Ricky had hot chicken for the first time. Coming from an engineering background, Ricky started by visiting Nashville and researching the history behind NHC (Nashville Hot Chicken).`,
    },
    {
        name: `NEONY Pizza Works`,
        address: `829 W Davis St, Dallas, TX 75208`,
        coordinates: [-96.83668, 32.74957],
        cuisine: `Pizza`,
        description: `Located near the Bishop Arts District of Oak Cliff in Dallas, TX - Offering delicious neo artisan pizza`,

    }
]

//nav & search controls
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
map.addControl(new mapboxgl.NavigationControl())

//loop
restaurants.forEach((restaurant) => {
    const {name, address, cuisine, description} = restaurant
    let popup = new mapboxgl.Popup()
        .setHTML(`
        <div class="card" style="width: 100%">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${address}</h6>
            <p class="card-text">${description}</p>
            <p class="card-text">${cuisine}</p>
          </div>
        </div>
        `)

    let marker = new mapboxgl.Marker()
        .setLngLat(restaurant.coordinates)
        .addTo(map)
        .setPopup(popup)
        popup.addTo(map)
})
$('#search-btn').click(() => {
    const search = $('#search-input').val()
    console.log(search)
    geocode(search, mapboxgl.accessToken).then((location) => {
        map.setCenter(location)
        map.setZoom(9)
        new mapboxgl.Marker()
            .setLngLat([location[0],location[1]])
            .addTo(map)
    })
})
/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
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


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
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