var i=0;
while(i<7)
{
document.getElementsByClassName("drum")[i].addEventListener("click",mouseClick);

i++;
}
document.addEventListener("keypress",keyclick);
function keyclick()
{
    animation(event.key);
    handleClick(event.key);
}
function mouseClick()
{
    animation(this.innerHTML);
    handleClick(this.innerHTML);
}
function handleClick(temp)
{  
     
    
    var sound=temp;
    var track;
    console.log(sound);
    if(sound=="w")
    {
        track="tom-1.mp3";

    }
    if(sound=='a'){
        track="tom-2.mp3";
    }
    if(sound=='s')
    {
        track="tom-3.mp3";
    }
    if(sound=='d')
    {
        track="tom-4.mp3";
    }
    if(sound=='j')
    {
        track="snare.mp3";
    }
    if(sound=="k")
    {
        track="crash.mp3";
    }
    if(sound=="l")
    {
        track="kick-bass.mp3";
    }

    var audio= new Audio('sounds/'+track);
    audio.play();
}
function animation(temp)
{
   var activeKey= document.querySelector("."+temp);
   activeKey.classList.add("pressed");
   setTimeout(function(){
       activeKey.classList.remove("pressed");

   },100);

}
function song()
{
    var arr=[];
    console.log(arr);
}