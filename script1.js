async function request(){
    try {
    var response = await fetch('https://restcountries.eu/rest/v2/all');
    var data = await response.json();
    var div = document.getElementById("exampleFormControlSelect1")
    console.log(data);
    data.forEach(function(ele,ind){
        var sel = document.createElement("option")
        sel.innerText = ele.name;
        div.append(sel);
    })
    div.onclick = async function(){
        var dval = document.querySelector("#exampleFormControlSelect1").value;
        var match =  data.filter((ele,index)=>{
            if(ele.name==dval){
                return ele.latlng
            }
        })
        var response1 = await fetch('https://api.sunrise-sunset.org/json?lat='+match[0].latlng[0]+'&lng='+match[0].latlng[1])
        var data1 = await response1.json();
        console.log(data1);
        var obj = data1.results;
        console.log(obj);
        var i = 0;
        var j = 1;
        Object.values(obj).forEach((ele,ind)=>{
           var e = document.getElementById("tim"+j);
            e.innerHTML = "<b>"+ele+"</b>";
            j++;
        })
    }
   }
    catch(error){
        console.log(error);
    }

}
request();