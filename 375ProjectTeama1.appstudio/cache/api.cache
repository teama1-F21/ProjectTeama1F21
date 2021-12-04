let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants in Omaha&key=AIzaSyCf-Nh8N3Mout-y2ol_R3MmMDJ2AiaqN3I&location=41.265331,-95.949364&radius=500"
function onXHRLoad() {
    let apiData = JSON.parse(this.responseText)
       restaurantDrp.clear()
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        restaurantDrp.addItem(apiData.results[i].name)
    }
    // 2. *** put your textarea control name here ****
  // restaurantDrp.value = message
    // if want to add to database call a function here that does that
    // addToDatabase()
}
function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url
    xhttp.open('GET', URL)
    // if you DON'T need cors use this code:
    //xhttp.open('GET',URL)
    /* Headers
    // if you need to set the returned data type, use this line of code:
    //xhttp.setRequestHeader('Content-Type', 'application/json')
    // if you need authorization token (stored in myToken) use this line of code:
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here.
    */
    // Here are headers you might need:
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
   */
    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}
// 3. *** add a new button onclick event and put the callAPI code into it ***
restaurantDrp.onshow=function(){
  callAPI(requestURL)
restaurantDrp_contents.style.height= "100px"
}
restaurantDrp.onclick=function(s){
// see what user clicked on in the drpBestMajor dropdown
// Notice I added 's' parameter to the function because the
// event returns the text of the chosen item.
// this control loaded at design time
  if (typeof(s) == "object"){  // means the control was clicked
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    restaurantDrp.value = s     // make dropdown show choice the user made
  }
}
btnSeeRestaurants.onclick=function(){
    // call the code that will make the API call, then process what comes back
alert(`You chose ${restaurantDrp.value} for lunch`)
}
