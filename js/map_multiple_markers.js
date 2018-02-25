//function that adds/removes colors to table rows as their corresponding markers are selected on the map
function highlightTableResult(nameOfTableRow){
  if(nameOfTableRow == 'first-row'){
    document.getElementById(nameOfTableRow).classList.add('rr-yellow');
    document.getElementById('second-row').classList.remove('rr-yellow');
  }
  else if(nameOfTableRow == 'second-row'){
    document.getElementById(nameOfTableRow).classList.add('rr-yellow');
    document.getElementById('first-row').classList.remove('rr-yellow');
  }
  //handles the case for when the user clicks on the map but does not select a marker
  else{
    document.getElementById('first-row').classList.remove('rr-yellow');
    document.getElementById('second-row').classList.remove('rr-yellow');
  }
}

//on loading the document, add the map with the multiple hard-coded markers to the div with the specific id
document.addEventListener("DOMContentLoaded", function(evt){
  var mMap = L.map('map-with-multiple-markers');

  L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: 'Map data &copy; <a href="httpss://openstreetmap.org" target="_blank">OpenStreetMap</a> contributors, '
                  + '<a target="_blank" href="http://creativecommons.org/licenses/by-sa/2.0">CC-BY-SA</a>'
    }
  ).addTo(mMap);

  mMap.setView([43.25858, -79.90806], 12);

  //marker for the first result in the table
  L.marker([43.261243, -79.889325]).addTo(mMap)
  .bindPopup(function(){
    highlightTableResult('first-row');
    return "<p class='text-center'><b>McDonalds</b><br>&#x2605;&#x2605;&#x2605;&#x2605;<br>50 Dundurn St S<br><a href='individual_sample.html'>Go To Page</a></p>";
  }).openPopup();

  //marker for the second result in the table
  L.marker([43.265163, -79.949742]).addTo(mMap)
  .bindPopup(function(){
    highlightTableResult('second-row');
    return "<p class='text-center'><b>McDonalds</b><br>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;<br>10 Cootes Dr<br><a href='individual_sample.html'>Go To Page</a></p>";
  });

  //handle base case for when user does not click on any marker
  mMap.on('click', highlightTableResult);
});
