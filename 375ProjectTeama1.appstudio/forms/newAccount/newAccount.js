//new user
/*
let query = ""

let req = ""

let results = []

let pw = "Fluffy.2013"

let netID = "nbp30352"

let teamID = "375groupa1"

addNew.onclick = function() {
  let newFirstName = firstName.value
  let newLastName = lastName.value
  let accUsername = newUsername.value
  let accPassword = newPassword.value
  query = "INSERT INTO clients (firstName,lastName,username,passcode) VALUES('"+newFirstName +"', '"+ newLastName +"', '"+accUsername +"', '"+accPassword +"')"


  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)
  if (req.status == 200) { //transit worked.
  results = JSON.parse(req.responseText)
    if (req.responseText == 500) // for our server - this means the insert succeeded
      newLabel.value = "You have successfully created an account!"
    else
      newLabel.value = "There was a problem with creating an account."
  } else // transit error
    newLabel.value = "Error: " + req.status
}

newNext.onclick = function() {
  ChangeForm(homePage)
}

*/