document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([32.1574, -82.9071], 7); // Georgia coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Define yellow and red icons
    var yellowIcon = L.icon({
        iconUrl: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    var redIcon = L.icon({
        iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    var locations = [
        { coords: [30.8730, -83.5497], title: "Brooks County: John Rountree & Emma Jane Rountree Farm", img: "location1.jpg", desc: "John Willis Rountree, a skilled carpenter and farmer, purchased the land of what eventually became Rountree farm from James E. Henry in 1891. By 1930, the farm housed horses, mules, tobacco, a cotton house, a smokehouse, and water wells. Half of the farm was utilized as a timber reserve, while the remaining acres were used to produce crops like peaches, vegetables, pecans, corn, and tobacco.The John & Emma Jane Rountree Farm was the first African American family to receive the Centennial Family Farm Award in 1994. As of 2001, the farm is being taken care of by grandchildren and cousins.", year:  1994},
        { coords: [31.8982, -84.1279], title: "Sumter County: Carranza Morgan’s Farm", img: "location2.jpg", desc: "Description for Location 2.", year: 1995 },
        { coords: [32.0982, -84.3279], title: "Sumter County: Carranza Morgan’s Farm", img: "location2.jpg", desc: "Description for Location 2 (duplicate for heritage farm point).", year : 1996 },
        { coords: [30.8417, -84.0473], title: "Thomas County: Lewis Clark Estate", img: "location3.jpg", desc: "Description for Location 3.", year: 2000 },
        { coords: [31.5282, -83.8897], title: "Worth County: Rev. James Fowler Farm", img: "location4.jpg", desc: "Description for Location 4.", year: 2001 },
        { coords: [32.4220, -83.6348], title: "Houston County: David Toomer Estate", img: "location5.jpg", desc: "Description for Location 5.", year: 2001 },
        { coords: [33.2700, -82.9990], title: "Hancock County: Zach & Camillia Hubert", img: "location6.jpg", desc: "Description for Location 6.", year: 2002 },
        { coords: [31.2008, -84.7316], title: "Miller County: L. and M. Kindler Farm", img: "location7.jpg", desc: "Description for Location 7.", year: 2005 },
        { coords: [33.5794, -83.4644], title: "Morgan County: Charleston-Allen Farm", img: "location8.jpg", desc: "Description for Location 8.", year: 2010 },
        { coords: [32.3596, -81.7787], title: "Bulloch County: Garfield Hall Farm", img: "location9.jpg", desc: "Description for Location 9.", year: 2010 },
        { coords: [31.2624, -81.6035], title: "Glynn County: Gilliard Farm", img: "location10.jpg", desc: "Description for Location 10.", year: 2012 },
        { coords: [30.8417, -83.8473], title: "Thomas County: Kentavia Williams", img: "location11.jpg", desc: "Description for Location 11.", year: 2013 },
        { coords: [33.0888, -81.9535], title: "Burke County: Cooper Family Farm", img: "location12.jpg", desc: "Description for Location 12.", year: 2014 },
        { coords: [31.5439, -84.2279], title: "Dougherty County: Titus Stephens Farm", img: "location13.jpg", desc: "Description for Location 13.", year: 2014 },
        { coords: [33.3205, -82.0843], title: "Richmond County: Thompson Farms", img: "location14.jpg", desc: "Description for Location 14.", year: 2019 },
        { coords: [32.8888, -82.0535], title: "Burke County: Gough Family Land, LLC.", img: "location15.jpg", desc: "Description for Location 15.", year: 2022 }
    ];

    // Store marker references
    var markers = [];
    var currentPopup = null; // To store the currently open popup
    let index = 0;
    let prevIndex = -1;

    locations.forEach((loc, idx) => {
        var marker = L.marker(loc.coords, { icon: yellowIcon }).addTo(map)
            .bindPopup(`<h3>${loc.title}</h3><img src="${loc.img}" width="100%"><h3>${loc.year}</h3>`);

        marker.on('click', function() {
            updateTimeline(idx);
            markers.forEach(markerObj => {
                markerObj.marker.setIcon(yellowIcon);
            });
            marker.setIcon(redIcon);

            if (currentPopup) {
                currentPopup.remove();
            }

            marker.openPopup();
            currentPopup = marker.getPopup(); // Store the current popup
        });

        markers.push({ year: loc.year, marker: marker });
    });

    // Timeline Update Logic
    function moveTimeline(direction) {
        prevIndex = index;
        if (direction === 'left') {
            index--;
            if (index < 0) {
                index = locations.length - 1;
            }
        } else if (direction === 'right') {
            index++;
            if (index == locations.length) {
                index = 0;
            }
        }

        console.log("moving timeline, prevIndex is ", prevIndex);
        console.log("current index is now ", index);
        updateTimeline(index);
    }

    function updateTimeline(currIndex) {
        document.getElementById('timeline-year').innerText = `Year: ${locations[currIndex].year}`;
        document.getElementById('timeline-image').src = locations[currIndex].img;
        document.getElementById('timeline-desc').innerText = locations[currIndex].desc;
        document.getElementById('timeline-farm-name').innerText = locations[currIndex].title;

        if (prevIndex != -1) {
            markers[prevIndex].marker.setIcon(yellowIcon);
        }
        currMarker = markers[currIndex].marker;
        console.log("current market we want to open popup of", currMarker);
        currMarker.setIcon(redIcon);
        currMarker.openPopup();

        if (currentPopup) {
            currentPopup.remove();
        }

        currentPopup = markers[currIndex].marker.getPopup();
        index = currIndex;
    }

    updateTimeline(0);
});