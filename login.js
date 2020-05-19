function validate()
{
    var username =document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    
    if (username==""||password==""){
        alert("Fields should not be empty");    
    }
    else{
        alert("All inputs are valid");
    }
}