//login
let query = ""

let req = ""

let results = []

let pw = "Fluffy.2013"

let netID = "nbp30352"

let teamID = "375groupa1"


btnLogin.onclick = function() {
    // use select query
    let username1 = username.value
    
    let password1 = password.value
    // need remove space b4 and after the value
    query = "Select username,passcode FROM clients WHERE username = ' "+username1+" ' and passcode =' "+password1+" ' "
    alert(query)
    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)
    results = JSON.parse(req.responseText)
    console.log(results)

    // use a loop here

    if (query == true) {
      ChangeForm(homePage)
    } else {
      lblMessage.value = "Try Again"
    }
    
    
}


btnNewAccount.onclick=function(){
  ChangeForm(newAccount)
}
