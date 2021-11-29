//login


let query = ""

let req = ""

let results = []

let pw = "Fluffy.2013"

let netID = "nbp30352"

let teamID = "375groupa1"


btnLogin.onclick = function() {
  let username1 = username.value
  let password1 = password.value
  query = "Select username,passcode FROM clients WHERE username = '" + username1 + "' and passcode ='" + password1 + "' "

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)

    if (results.length == 0) {
      lblMessage.value = "Try Again"
    } else {
      ChangeForm(homePage)
    }
  }
}


btnNewAccount.onclick = function() {
  ChangeForm(newAccount)
}


