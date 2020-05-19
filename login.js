function validate()
{
    var username =document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (username==""||password==""){
        alert("Fields should not be empty");    
    }
    
    else if(username.match(mailformat)==False){
        alert("Enter a email address as username");
    }
    else{
        alert("All inputs are valid");
    }
}
