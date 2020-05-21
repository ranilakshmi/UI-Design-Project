function validate()
{
    var username =document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    
    var atposition=username.indexOf("@");  
    var dotposition=username.lastIndexOf("."); 
    if (username==""||password==""){
        alert("Fields should not be empty");    
    } 
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=username.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    }
    else{
        alert("All inputs are valid");
    }
}  

function register(){
    var username=document.getElementById("email").value;
    var password =document.getElementById("pwd").value;
    var password1 = document.getElementById("pwd1").value;

    var atposition=username.indexOf("@");  
    var dotposition=username.lastIndexOf("."); 

    if (username==""||password==""){
        alert("Fields should not be empty");    
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=username.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    }
    else if (password!==password1){
        alert("Password doesn't match");
    }
    else{
        alert("All inputs are valid");
    }
}  
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  

  var i=0;
    var text = new Array();
    text[0]="There is only one thing that makes a dream impossible to achieve: the fear of failure.";
    text[1]="Every blessing ignored becomes a curse.";
    text[2]="Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.";
 function quotes(){
    document.getElementById("quote").innerHTML=text[i];
    if (i<path.length-1) {
        i++;}
    else {i=0;}}
        setTimeout("quotes()",1000);
 function main(){
     quotes();
     startTime();
 }