DineInList.onshow=function(s){
DineInList.clear()
for (i=0; i<=yummy.length;i++)
  DineInList.addItem(yummy[i])
}
DineInList.onclick=function(s){
if (typeof(s)=="object")
  return
else{
  DineInList.value = s
  console.log(`The user chose ${s}.`)
}
if (DineInList.value = "steak")
  lblRecipe.value  = "Just Cook the damn steak!"
}
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


DineInHome.onclick=function(){
  ChangeForm(homePage)
}
