var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
console.log(ctx)

var img = ["The_Skeld_map.png"]
console.log(img[0])
var random = Math.floor(Math.random() * 5)
console.log(random)
var x = 17;
var y = 5;


window.addEventListener("keydown",down)
function down(h){
    console.log(h)

    if (h.keyCode == "40")
    {
        console.log("down")
        hi1()
    }

    if (h.keyCode == "38")
    {
        console.log("up")
        hi()
    }

    if (h.keyCode == "37")
    {
        console.log("left")
        hi2()
    }

    if (h.keyCode == "39")
    {
        console.log("right")
        hi3()
    }


}

function j()
{

    console.log("hi")
    
     backimg=new Image()
    backimg.src = img[random];
    backimg.onload = jk
    console.log(backimg)

    rover=new Image()
    rover.src = "Amoung_us_green.png"
    rover.onload = jkk
    console.log(rover)
}
 function jk()
 {
ctx.drawImage(backimg,0,0,canvas.width,canvas.height)
}

function jkk()
{
ctx.drawImage(rover,x,y,75,75)
}

function hi()
{
if( y > 0)
{
    y = y-10;
    jk()
    jkk()
    
}

}

function hi1()
{
    if(y < canvas.height-75)
    {
        y = y+10;
        jk()
        jkk()

    }
}

function hi2()
{
    if(x > 0)
    {
        x= x-10
        jk()
        jkk()
    }
}

function hi3()
{
    if(x < canvas.width-75)
    {
        x= x+10
        jk()
        jkk()


    }
}

