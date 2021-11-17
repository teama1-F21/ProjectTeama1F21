
let query= ""
let req=""
let results=[]
let pw="LucyiSgetting0ld69420"
let netID="ajw62691"
let teamID="375groupa1"

req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)

checkboxFavorites.onchange=function(){
 let choice=   $("input[name=checkboxFavorites]:checked").prop("value")
 switch(choice) {
case "favoriteRecipes":
  changeForm(recipes)
  break
case "favoriteRestaurants":
  changeForm(restaurants)
break
 }
}
