/*
let query = ""
let req = ""
let results = []
let pw = "Fluffy.2013"
let netID = "nbp30352"
let teamID = "375groupa1"
*/

favorites.onshow = function() {
    recipeDrpCopy.clear()
    restaurantsDrpCopy.clear()
    query = "SELECT foodName FROM food WHERE favorite = 'YES'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)
    if (req.status == 200) {
      results = JSON.parse(req.responseText)
      let foodName = results
      for (i = 0; i < foodName.length; i++)
        recipeDrpCopy.addItem(foodName[i])
      query = "SELECT resturauntName FROM resturaunt WHERE favorite = 'YES'"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)
      if (req.status == 200) {
        results = JSON.parse(req.responseText)
        let resturauntName = results
        for (i = 0; i < resturauntName.length; i++)
          restaurantsDrpCopy.addItem(resturauntName[i])
      }
    }
    }
    recipeDrpCopy.onclick = function(s) {
      // see what user clicked on in the drpBestMajor dropdown
      // Notice I added 's' parameter to the function because the
      // event returns the text of the chosen item.
      // this control loaded at design time
      if (typeof(s) == "object") { // means the control was clicked
        return // but no selection made yet so do nothing
      } else { // a selection made
        recipeDrpCopy.value = s // make dropdown show choice the user made
      }
    }
    restaurantsDrpCopy.onclick = function(s) {
      // see what user clicked on in the drpBestMajor dropdown
      // Notice I added 's' parameter to the function because the
      // event returns the text of the chosen item.
      // this control loaded at design time
      if (typeof(s) == "object") { // means the control was clicked
        return // but no selection made yet so do nothing
      } else { // a selection made
        restaurantsDrpCopy.value = s // make dropdown show choice the user made
      }
    }
    Button1.onclick = function() {
      alert(`You chose ${restaurantsDrpCopy.value} or ${recipeDrpCopy.value}`)
    }


Button2.onclick=function(){
  ChangeForm(homePage)
}
