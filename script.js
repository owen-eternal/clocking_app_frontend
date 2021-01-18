let video;
let address;
let myCanvas;
const btnLocation = document.getElementById("location");

function setup() {

    myCanvas = createCanvas(320,240);
    background(51);
    // video = createCapture(VIDEO);
    // video.size(320,240);
    const button = createButton('snap');

    //the functions
    button.mousePressed(takesnap);
    btnLocation.addEventListener('click', getLocation)
}

function takesnap() {
    // const image64 = video.canvas.toDataURL() 
    image(video, 0, 0);
    const image64 = myCanvas.canvas.toDataURL();
    print(image64)
}

function getLocation() {
    //get users location
    if (navigator.geolocation) {

        let platform = new H.service.Platform({
            'apikey': ''
            });

        let geocoderService = platform.getGeocodingService();

        //Get coordinates
        navigator.geolocation.getCurrentPosition(position =>{
            const { latitude, longitude } = position.coords

            //Get address
            geocoderService.reverseGeocode(
                {
                mode: "retrieveAddresses",
                maxresults: 1,
                prox: latitude + "," + longitude
                }, data => {
                    address = data.Response.View[0].Result[0].Location.Address.Label
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
}






