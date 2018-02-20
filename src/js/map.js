// map.js
;(function() {

var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 47.8150, lng: 35.1703},
  zoom: 17,
  disableDefaultUI: true,
  unitSystem: google.maps.UnitSystem.METRIC,
});

var marker = new google.maps.Marker({
  position: {lat: 47.816150, lng: 35.170192},
  map: map,
  title: "Here we are!",
  icon: {
    path: "M32.07 0c-7.9.17-15.54 4.1-19.78 11.02-1.86 3.02-2.4 12.85-2.4 12.85v28.92s17.82-6.2 27.91-9.46c6.88-2.87 12.79-6.57 15.06-10.27 6.47-10.54 2.62-24.02-8.58-30.11A24.48 24.48 0 0 0 32.07 0zm.87 9.34c6.37 0 11.54 4.86 11.54 10.86 0 6-5.17 10.85-11.54 10.85-6.37 0-11.54-4.86-11.54-10.85 0-6 5.17-10.86 11.54-10.86z",
    fillColor: '#60606e',
    fillOpacity: 1,
    anchor: new google.maps.Point(9,52),
    strokeWeight: 0,
    scale: 1
  },
});

})();
