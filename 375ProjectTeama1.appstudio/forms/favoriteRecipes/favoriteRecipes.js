/*
let query= ""
let req=""
let results=[]
let pw="LucyiSgetting0ld69420"
let netID="ajw62691"
let teamID="375groupa1"

*/
query= "SELECT favorite FROM food"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)
if (req.status=200) {
results=JSON.parse(req.responseText)
if (results.length == 0)
lblFavRecipes.textContent= "There are no favorite recipes in the database."

else {
  message=""
  for (i=0; i<results.length;i++)
    message=message+results[i][0]+"\n"
    txtResults.value=message
    }
 } else
    lblFavRecipes.textContent= "Error code: " + req.status