function validate()
{
    var username =document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (username==""||password==""){
        alert("Fields should not be empty");    
    }
    
    else if(ValidateEmail(username)==False){
        alert("You have entered an invalid email address!");
    }
    else{
        alert("All inputs are valid");
    }
}
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username.value))
  {
    return (true)
  }
    
    return (false)
}
