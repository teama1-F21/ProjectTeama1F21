//new user

/*
btnSubmit.onclick=function(){
    let username = newUsername.value
    let password = newPassword.value
    
    query = "INSERT INTO clients (username,password) VALUES ('" + username + "', '" + password + "')"
    // look at how the query is rendered by the code and use this form to test with database
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + teamID + "&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            newLabel.textContent = "You have successfully created an account!"
        else
           newLabel.textContent = "There was a problem with creating an account."
    } else   // transit error
        newLabel.textContent = "Error: " + req.status
}


btnMenu3.onclick=function(){
      ChangeForm(homePage)
}

*/