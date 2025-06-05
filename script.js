const username=document.getElementById("username");
const password=document.getElementById("password");
const user="anahitapaglu";
function check(){
if(username.value==user)
{
    if(password.value==6969)
    {        
        window.open("admin.html");
    }  
    else
    {
        window.open("back.html");
    }
}
else
{
        window.open("back.html");
}

}



function logout(){
    window.close("admin.html");
}

function back(){
    window.close("back.html");
}