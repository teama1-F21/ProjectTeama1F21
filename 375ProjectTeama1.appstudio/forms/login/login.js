//login

let query = ""

let req = ""

let results = []

let pw = "Fluffy.2013"

  let netID = "nbp30352"

let teamID = "375groupa1"


btnLogin.onclick = function() {
    // use select query
    query = "Select username,passcode FROM clients;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)

    let username = username.value
    let password = password.value
    // use a loop here
    while () {
    /*if ((username == ' ') && (password == '')) {
      ChangeForm(homePage)
    } else {
      lblMessage.textContent = "Try Again"
    }*/
}


    Button1.onclick = function() {
      ChangeForm(newAccount)
    }