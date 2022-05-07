function user_login()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    if(username=="yossef"&& password =="123")
    {
        window.open("pp.html")
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}