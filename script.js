// const canvas = document.getElementById('canvas');
//  
// const ctx = canvas.getContext("2d");

// const setupCanvas = ()=> {
//     ctx.fillStyle = "#ccc";
//     ctx.rect(0, 0, canvas.width, canvas.height);
//     ctx.fill(); 
//     ctx.fillStyle = "Blue";
//     ctx.font = "35px serif";
//     ctx.fillText("decode this bitch", 30, 60);
// }

if ("geolocation" in navigator){
  console.log('available')
  navigator.geolocation.getCurrentPosition( position => {
    const { latitude, longitude }  = position.coords;
    console.log(latitude, longitude)
  });
} else{l
  console.log('unavailable')
}

// function init() {

//     const base64 = canvas.toDataURL().split(",")[1];

//     const data = {
//       "generated_at" : new Date().toISOString(),
//       "png": base64, 
//     };

//     const options = {
//         method: 'POST',
//         cache: 'no-cache',
//         body: JSON.stringify(data),
//         headers: { "Content-Type" : "application/json"}
//     }
    
//     fetch('http://127.0.0.1:5000//api/1.0/clockings/upload', options);
   
// }

// setupCanvas()
// btnUpload.addEventListener('click', init)







