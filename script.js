document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([33.1574, -84.9071], 7); // Georgia coordinates

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
        { coords: [30.8730, -83.5497], title: "Brooks County: John Rountree & Emma Jane Rountree Farm", img: "images/RountreeFarm.jpeg", desc: "John Willis Rountree, a skilled carpenter and farmer, purchased the land of what eventually became Rountree farm from James E. Henry in 1891. By 1930, the farm housed horses, mules, tobacco, a cotton house, a smokehouse, and water wells. Half of the farm was utilized as a timber reserve, while the remaining acres were used to produce crops like peaches, vegetables, pecans, corn, and tobacco.The John & Emma Jane Rountree Farm was the first African American family to receive the Centennial Family Farm Award in 1994. As of 2001, the farm is being taken care of by grandchildren and cousins.", year:  1994, sources:"Georgia African American Historic Preservation Network (2001). Reflections- Georgia African American Historic Preservation Network, Vol. 1, no. 2 (Feb. 2001). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b1-s2-belec-p-btext"},
        { coords: [31.8982, -84.1279], title: "Sumter County: Carranza Morgan’s Farm", img: "images/MorganFarm.png", desc: "The Morgan family farm, located 6.5 miles from Americus in Sumter County, Georgia, has a rich history that traces back to Nathan Morgan, a former slave who purchased 202 acres from A. Windsor in 1886. The farm initially grew cotton, corn, peanuts, and vegetables, and continues to produce peanuts, watermelon, and okra today. The farmstead includes a historic farmhouse, six outbuildings, and 117 acres of cultivated fields. Milton Morgan, Nathan's descendant, owned the farm from 1925 to 1947. During his tenure, he sold 60 acres, including one acre that is now home to Mount Zion A.M.E. Church, the family’s place of worship. In 1952, after Milton’s death, his son Carranza purchased the farm, ensuring the continuation of the family’s agricultural legacy. Carranza preserved the historic landscape of the original farm, maintaining garden vegetable plots, fruit trees, pastures, and cultivated fields. The historic outbuildings have been adapted for modern use, storing current farming equipment. In recognition of its significance, the Morgan family farm was listed in the National Register of Historic Places in 1998 and received the African American Centennial Family Farm Award in 1995 and the African American Centennial Heritage Farm Award in 2001.", year: [1995, 1996],sources:"Georgia African American Historic Preservation Network (2002). Reflections- Georgia African American Historic Preservation Network, Vol. 2, no. 2 (Mar. 2002). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b2-s2-belec-p-btext" },
        { coords: [30.8417, -84.0473], title: "Thomas County: Lewis Clark Estate", img: "images/LewisClarkFarm.jpeg", desc: "The Kentavia Williams Farm, located near Thomasville, Georgia, spans 245 acres, with half of the land still actively used for farming. The farm is named in honor of its original owners, Kenneth and Octavia Williams, and is currently owned by their descendant, Belle Williams, and her brothers. The farm grows a variety of crops, including cotton, peanuts, corn, soybeans, and pecans. The original farmhouse, built in 1916, has been renovated over time, preserving its historic architectural style. This blend of tradition and modern farming practices reflects the enduring legacy of the Williams family on the land.", year: 2000, sources:"Georgia African American Historic Preservation Network (2000). Reflections- Georgia African American Historic Preservation Network, Dec. 2000. Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b2000-s12-belec-p-btext" },
        { coords: [31.5282, -83.8897], title: "Worth County: Rev. James Fowler Farm", img: "images/FowlerFarm.png", desc: "Rev. James Fowler, the third African American recipient of the Centennial Family Farm Award, was honored on October 6th, 2000. In 1888, Rev. Fowler received 202 acres of land from N.F. Mercer and quickly became one of the leading local cotton producers in the area. Over the years, his descendants expanded the land, continuing the family’s agricultural legacy. At the time of the award, the farm was owned by Juanita Fowler Miller, Rev. Fowler’s granddaughter, who had diversified the farm by adding peanuts, wheat, and soybeans to the existing cotton crops. Today, 160 acres of the farm are still actively in use, preserving the family’s long-standing connection to the land.", year: 2001,sources:"Georgia African American Historic Preservation Network (2000). Reflections- Georgia African American Historic Preservation Network, Dec. 2000. Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b2000-s12-belec-p-btext" },
        { coords: [32.4220, -83.6348], title: "Houston County: David Toomer Estate", img: "images/DavidToomerEstate.webp", desc: "Description for Location 5.", year: 2001, sources:"hello"},
        { coords: [33.2700, -82.9990], title: "Hancock County: Zach & Camillia Hubert", img: "images/Camilla.jpeg", desc: "The farm has received several prestigious honors, including the Centennial Heritage Farm Award, the Centennial Farm Award, and the Centennial Family Farm Award, all of which recognize its historical significance and continued agricultural legacy. Funding for its operations and development came from the Julius Rosenwald Fund and a substantial $1.2 million from the Quality of Life Bond Fund, which was used for streetscape design. The farm produces a variety of crops, including organic vegetables, fruits, herbs, cotton, and corn, showcasing a diverse approach to agriculture. With a legacy spanning three generations, the farm not only honors the family’s long-standing commitment to farming but also aims to educate the public about agriculture while supporting Black farmers. The family’s land has been expanded through state land programs, further solidifying its place in the community and ensuring its future growth.", year: 2002 , sources:"Georgia African American Historic Preservation Network (2002). Reflections- Georgia African American Historic Preservation Network, Vol. 3, no. 1 (Nov. 2002). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b3-s1-belec-p-btext"},
        { coords: [31.2008, -84.7316], title: "Miller County: L. and M. Kindler Farm", img: "location7.jpg", desc: "The Kinder family farm, located near Colquitt in Miller County, Georgia, received the Centennial Family Farm Award in recognition of its historical and agricultural significance. The farm originally consisted of 240 acres, purchased by Littleton Kinder from A.L. Bowen. Littleton Kinder, a literate and resourceful man, played a key role in helping African Americans protect their farms during the challenging Jim Crow era. Today, the Kinder farm spans approximately 240 acres, with 120-140 acres dedicated to pine and hardwood reforestation efforts, while the remaining 120 acres are used for livestock and vegetable farming. The farm is currently owned by Martha Kinder, continuing the legacy of the Kinder family. The farm is documented in Reflections L and M Kinder Farm, celebrating the family’s long-standing commitment to both agriculture and social advocacy.", year: 2005, sources:"Georgia African American Historic Preservation Network (2006). Reflections- Georgia African American Historic Preservation Network, Vol. 5, no. 4 (Feb. 2006). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b5-s4-belec-p-btext" },
        { coords: [33.5794, -83.4644], title: "Morgan County: Charleston-Allen Farm", img: "images/Charleston.jpeg", desc: "The Charleston-Allen family farm in Morgan County, Georgia, was honored with the Georgia Centennial Family Farm Award in 2010, recognizing its enduring legacy. The farm, which has remained in the family for over a century, has evolved significantly over the years. Initially established with cotton fields, it has since transitioned into a 100-acre tree farm while continuing to produce cotton, corn, and livestock, including cattle and pigs. This long-standing commitment to agricultural innovation and preservation has ensured that the Charleston-Allen farm remains a vital part of the community, reflecting the family’s dedication to both their heritage and sustainable farming practices.", year: 2010, sources:"Georgia African American Historic Preservation Network (2011). Reflections- Georgia African American Historic Preservation Network, Vol. 9, no. 4 (Mar. 2011). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b9-s4-belec-p-btext" },
        { coords: [32.3596, -81.7787], title: "Bulloch County: Garfield Hall Farm", img: "location9.jpg", desc: "The Garfield Hall farm, located in Bulloch County, Georgia, was officially acquired by Garfield Hall in 1928, although the Hall family had been associated with the land since 1904. The family, who were formerly enslaved, has maintained ownership of the farm for generations. The farm spans 155 acres, with 40 acres currently dedicated to tree production and the remaining 115 acres managed by the Hall family for agricultural use. Over the years, the farm has produced a variety of crops, including cotton, peanuts, corn, and tobacco. In recognition of their long-standing agricultural legacy, the Hall family farm was awarded the Georgia Centennial Family Farm Award in 2010. Today, the Hall family continues to steward the land, honoring their rich history while embracing tree farming and sustainable agricultural practices.", year: 2010, sources:"Georgia African American Historic Preservation Network (2011). Reflections- Georgia African American Historic Preservation Network, Vol. 9, no. 4 (Mar. 2011). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b9-s4-belec-p-btext" },
        { coords: [31.2624, -81.6035], title: "Glynn County: Gilliard Farm", img: "images/gilliard.jpeg", desc: "The Gilliard Farm, located in Glynn County, Georgia, was founded in 1874 by Jupiter Gilliard, a formerly enslaved man, and has remained in the same family for over 100 years. Originally spanning 457 acres, the farm now retains 50 acres, with 15 acres dedicated to agriculture. The farm has earned significant recognition, receiving the Georgia Centennial Family Farm Award in 2012 and being part of the Southeastern African American Farmers Organic Network (SAAFON). Today, it is owned by Althea and Matthew Raiford, who have transformed the farm into an organic operation. They produce a variety of fruits, vegetables, and livestock, while also running a Community Supported Agriculture (CSA) program, which strengthens their connection to the local community and promotes sustainable farming practices. The Gilliard Farm continues to honor its rich history while embracing modern, environmentally-conscious farming techniques.", year: 2012, sources:"Georgia African American Historic Preservation Network (2012). Reflections- Georgia African American Historic Preservation Network, Vol. 11, no. 1 (Dec. 2012). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b11-s1-belec-p-btext" },
        { coords: [30.8417, -83.8473], title: "Thomas County: Kentavia Williams", img: "images/kentaviaWilliamsFarm.jpg", desc: "The Kentavia Williams Farm, located near Thomasville, Georgia, has been in the same family since 1883 when Charles Cockrell originally purchased over 200 acres of land. The farm, now operated by Bryan Williams, is named in honor of its original owners, Kenneth and Octavia Williams. It spans 245 acres, with half of the land still actively farmed. Over the years, the farm has produced a variety of crops, including cotton, peanuts, corn, soybeans, and pecans, as well as livestock. The original farmhouse, built in 1916, has been carefully renovated to preserve its historical architectural style. In 2013, the farm was awarded the Centennial Farm Award, recognizing its continuous operation for over a century. The Williams family’s commitment to farming, despite facing hardships, showcases their resilience and dedication to maintaining the legacy of this historic farm.", year: 2013, sources:"Georgia African American Historic Preservation Network (2013). Reflections- Georgia African American Historic Preservation Network, Vol. 11, no. 4 (Dec. 2013). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b11-s4-belec-p-btext" },
        { coords: [33.0888, -81.9535], title: "Burke County: Cooper Family Farm", img: "images/Cooper.png", desc: "The Hall family farm, located in Bulloch County, Georgia, was awarded the Georgia Centennial Family Farm Award in 2010 in recognition of its rich agricultural history. Spanning 155 acres, the farm grows a variety of crops, including cotton, peanuts, corn, and tobacco. Forty acres of the land are dedicated to tree production, while the remaining 115 acres are actively maintained by the Hall family. This farm continues to be owned and operated by the Hall family, preserving a legacy of agricultural excellence and commitment to sustainable farming practices that has been passed down through generations.", year: 2014, sources:"hello" },
        { coords: [31.5439, -84.2279], title: "Dougherty County: Titus Stephens Farm", img: "images/Titus.png", desc: "The Titus Stephens family farm, located in Dougherty, Georgia, has been a cornerstone of agricultural heritage since the post-Civil War era. It is believed that Titus Stephens, who was formerly enslaved, acquired the 99-acre farm from his master and began farming as a means of survival. Over time, the farm has evolved, showcasing the historical contributions of Black family farmers and acting as a bridge to both the community and the global economy. Now owned and operated by the fifth generation of Stephens’ descendants, the farm was designated as a Centennial Family Farm by the Georgia Department of Natural Resources in 2013. The farm rotates crops such as cotton, peanuts, pecans, and tobacco, and its mission statement reflects the values of the family: “We are dedicated to continuing the heritage of our ancestors; to show the duty of family, the value of Black land ownership, and the respect and preservation of natural resources.” The farm has survived many challenging periods in history, including the Great Depression and the Jim Crow era, due to the resilience and commitment of the Stephens family. Today, the farm remains in the hands of Virginia Seabrook, a descendant of Titus Stephens, who continues to uphold the sustainable farming practices that have been passed down through generations. Through outreach, education, and agrotourism, the family works to preserve their legacy while promoting the importance of sustainable farming within the Black farming community.", year: 2014, sources:"Georgia African American Historic Preservation Network (2014). Reflections- Georgia African American Historic Preservation Network, Vol. 12, no. 2 (Dec. 2014). Retrieved from https://dlg.galileo.usg.edu/do:dlg_ggpd_i-ga-bn200-ph5-bp1-br4-b12-s2-belec-p-btext" },
        { coords: [33.3205, -82.0843], title: "Richmond County: Thompson Farms", img: "images/Thompson.jpeg", desc: "Description for Location 14.", year: 2019 },
        { coords: [32.8888, -82.0535], title: "Burke County: Gough Family Land, LLC.", img: "images/gough.png", desc: "Description for Location 15.", year: 2022 }
    ];

    // vertical timeline 
    const timeline = document.querySelector(".timeline");

    // Years for timeline
    const years = [1995, 2000, 2005, 2010, 2015, 2020, 2025];

    // Generate timeline items
    years.forEach(year => {
        const li = document.createElement("li");
        li.textContent = year;
        li.dataset.year = year;
        timeline.appendChild(li);
    });

    timeline.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            const selectedYear = e.target.dataset.year;

            // Reset all timeline items
            document.querySelectorAll(".timeline li").forEach(item => {
                item.classList.remove("active");
            });
            e.target.classList.add("active");

            // Update farm colors
            locations.forEach((loc, idx) => {
                if (Array.isArray(loc.year)) {
                    if (loc.year[0] <= selectedYear || loc.year[1] <= selectedYear) {
                        markers[idx].marker.setIcon(redIcon)
                    } else {
                        markers[idx].marker.setIcon(yellowIcon)
                    }
                } else if (loc.year <= selectedYear) {
                    markers[idx].marker.setIcon(redIcon)
                } else {
                    markers[idx].marker.setIcon(yellowIcon)
                }
            });
        }
    });

    // Store marker references
    var markers = [];
    var currentPopup = null; // To store the currently open popup
    let index = 0;
    let prevIndex = -1;

    locations.forEach((loc, idx) => {
        var marker = L.marker(loc.coords, { icon: yellowIcon }).addTo(map)
            //.bindPopup(`<h3>${loc.title}</h3><img src="${loc.img}" width="100%"><h3>${loc.year}</h3>`);

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

            document.getElementById('container').classList.add('show');
            document.getElementById('background-content').style.display = 'none';
            document.getElementById('timeline-content').style.display = 'block';

            //map.setView(loc.coords, 10); // Zoom in on the marker
        });

        markers.push({ year: loc.year, marker: marker });
    });

    // New function to handle timeline navigation
    function navigateTimeline(direction) {
        prevIndex = index;
        if (direction === 'left') {
            const previousLocation = locations.slice(0, index).reverse().find(loc => loc.year < locations[index].year);
            if (previousLocation) {
                index = locations.indexOf(previousLocation);
            } else {
                document.getElementById('container').classList.remove('show');
                document.getElementById('background-content').style.display = 'block';
                document.getElementById('timeline-content').style.display = 'none';
                map.setView([32.1574, -82.9071], 7); // Reset to original zoom and center
                return;
            }
        } else if (direction === 'right') {
            const nextLocation = locations.slice(index + 1).find(loc => loc.year > locations[index].year);
            if (nextLocation) {
                index = locations.indexOf(nextLocation);
            } else {
                index = 0; // Wrap around to the first location if no higher year is found
            }
        }

        updateTimeline(index);
    }

    function updateTimeline(currIndex) {
        document.getElementById('timeline-year').innerText = `Year: ${Array.isArray(locations[currIndex].year) ? locations[currIndex].year.join(' and ') : locations[currIndex].year}`;
        document.getElementById('timeline-image').src = locations[currIndex].img;
        document.getElementById('timeline-desc').innerHTML = `${locations[currIndex].desc}<br><br><strong>Sources:</strong> ${locations[currIndex].sources}`;
        document.getElementById('timeline-farm-name').innerText = locations[currIndex].title;

        markers.forEach((marker, idx) => {
            if (idx != currIndex) {
                marker.marker.setIcon(yellowIcon);
            }
        });

        // if (prevIndex != -1) {
        //     markers[prevIndex].marker.setIcon(yellowIcon);
        // }
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

    document.getElementById('backgrounds-btn').click();

    // Forward button logic
    document.getElementById('forward-btn').addEventListener('click', function() {
        const earliestLocation = locations.reduce((earliest, loc) => {
            return loc.year < earliest.year ? loc : earliest;
        }, locations[0]);

        const earliestIndex = locations.indexOf(earliestLocation);
        updateTimeline(earliestIndex);
        //map.setView(earliestLocation.coords, 10); // Zoom in on the earliest marker
        document.getElementById('container').classList.add('show');
        document.getElementById('background-content').style.display = 'none';
        document.getElementById('timeline-content').style.display = 'block';
    });

    // Add event listeners for timeline arrows
    document.querySelector('.timeline-arrow[onclick="moveTimeline(\'left\')"]').addEventListener('click', function() {
        navigateTimeline('left');
    });

    document.querySelector('.timeline-arrow[onclick="moveTimeline(\'right\')"]').addEventListener('click', function() {
        navigateTimeline('right');
    });



});