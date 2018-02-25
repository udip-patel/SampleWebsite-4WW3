document.addEventListener("DOMContentLoaded", function(evt){
  var sMap = L.map('map-with-single-marker');

  L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: 'Map data &copy; <a href="httpss://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, '
                  + '<a target="_blank" href="http://creativecommons.org/licenses/by-sa/2.0">CC-BY-SA</a>'
    }
  ).addTo(sMap);

  //center on the location
  sMap.setView([43.25858, -79.90806], 15);

  //set the single marker
  L.marker([43.261243, -79.889325]).addTo(sMap)
  .bindPopup(function(){
    return "<p class='text-center'>50 Dundurn St S<br></p>";
  }).openPopup();
});
