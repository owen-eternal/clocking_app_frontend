const btnLocation = document.getElementById("location");


btnLocation.addEventListener('click', ()=>{
    let platform = new H.service.Platform({
        'apikey': 'MW6aHeGhrIuXS85D7cpKDgJaalCovbPx40nbSWwxJ60'
        });

    let geocoderService = platform.getGeocodingService();

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(position =>{
            const { latitude, longitude } = position.coords

            //Get address
            geocoderService.reverseGeocode(
                {
                mode: "retrieveAddresses",
                maxresults: 1,
                prox: -26.2129 + "," + 28.1638
                }, data => {
                    const address = data.Response.View[0].Result[0].Location.Address.Label
                    document.getElementById("Address").value = address;
                });

            //create the map
            let map = new H.Map(
                document.getElementById('mapContainer'),
                platform.createDefaultLayers().vector.normal.map,
                {
                zoom: 10,
                center: { lat: latitude, lng: longitude }
                });
                const marker = new H.map.Marker({lat: latitude, lng: longitude});
                map.addObject(marker);
        });
    } else {
        console.log("not available");
    }  
})


