/*//favorites page

let query= ""
let req=""
let results=[]
let pw="LucyiSgetting0ld69420"
let netID="ajw62691"
let teamID="375groupa1"

req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)

favorites.onshow=function(){
  
  for (i = 0; i < foodName.length; i++)
        optionsDrp.addItem(foodName[i])
  
}
submitFavorites.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    optionsDrp.value = s     // make dropdown show choice the user made
    console.log(`The user chose ${s} and .selection is ${optionsDrp.selection}.`)
  }
  }
  */