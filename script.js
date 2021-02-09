var w = document.getElementById("loc");
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      w.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  async function showPosition(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
    w.innerHTML = "Latitude: <b>" + position.coords.latitude + 
    "</b><br>Longitude: <b>" + position.coords.longitude +"</b>";
    try {
    let x =  await fetch('https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+long)
    let data = await x.json();
    console.log(Object.keys(data.results)[0],Object.values(data.results)[0]);
    var obj = data.results;
    console.log(obj);
    j = 1;
    Object.values(obj).forEach((ele,ind)=>{
      var e = document.getElementById("tim"+j);
       e.innerHTML = "<b>"+ele+"</b>";
       j++;
   })
    }
    catch(error){
      console.log(error);
    }
}
