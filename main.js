function play()
{
    window.location = "login_page.html"
}

function join()
{
    var UN = document.getElementById("un").value
    localStorage.setItem('UNAU' , UN)

    console.log(UN)
    window.location = "Game.html"
}



