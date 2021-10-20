// MPC Biz Intelligence

var myMap=L.map('mapid', {
    'center':[39.630858, -104.956553],
    'zoom':9});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY,
    }).addTo(myMap);

function pickColor(win_loss) {
    var color=''
    if (win_loss==0.0){
        color='red'}
    else if (win_loss==1.0){
        color='green'}
    else {
        color='black'}
    return color
};

d3.csv("estimates_clean.csv").then((data) => {
    console.log(data);
    Object.entries(data).forEach(([key, estimate]) => {
        // console.log(value);
        // Object.entries(value).forEach(([keys,estimate])=> {
            var date = estimate['Date'];
            var employee = estimate['Bid Employee'];
            var lat = estimate['Latitude'];
            var lon = estimate['Longitude'];
            var win_loss = estimate['Win_Loss'];
            var bid_amount = estimate['Amount'];
            var sub_fee = estimate['Subcontractor'];
            var profit = estimate['Net Income'];
            var description = estimate['Description'];
            L.circle([lat,lon], {
                fillOpacity:0.5,
                color: pickColor(win_loss),
                fillColor: pickColor(win_loss),
                radius: bid_amount*.15})
                .bindPopup(`Date: ${date}
                            Employee: ${employee}
                            Bid Amt: ${bid_amount}
                            Sub Fee: ${sub_fee}
                            Profit: ${profit}
                            Description: ${description}`)
                .addTo(myMap)
    })
    var legend = L.control({ position: "bottomleft" });
    legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    // var limits = geojson.options.limits;
    // var colors = geojson.options.colors;
    // var labels = ['>20','15-20','10-15','<10'];
    var labels = ['<li style=background-color: "red"></li>','<li style="background-color: "green"</li>']

    // Add min & max
    var legendInfo = "<h3>Estimates (size by amount, color by win/loss)</h3>" +
      "<div class=\"labels\">" +
        // "<div class=\"min\">" + 0 + "</div>" +
        // "<div class=\"max\">" + 50 + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    // limits.forEach(function(limit, index) {
    //   labels.push("<li style=\"background-color: " + green + "\"></li>");
    ;

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);
});



    