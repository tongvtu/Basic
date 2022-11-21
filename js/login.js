function Checkdangnhap(event)
{
    event.preventDefault();


    var username = document.getElementById('tendn').value;
    var pass = document.getElementById('mk').value;

    if (username == 'john' && pass=='1234')

    {
        window.location.replace("dashboard.html");
        localStorage.setItem("username", 1);
    }
    else {
    document.getElementById('tendn').style.backgroundColor = 'yellow';
    document.getElementById('mk').style.backgroundColor = 'yellow';
    document.getElementById('login-error').style.visibility="visible";
}
}
function Validate() {

    Checkdangnhap(event);

}
