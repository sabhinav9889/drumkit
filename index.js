for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){  
        var num=this.innerHTML;
        makesound(num); call_listner(num);
    });
}
document.addEventListener('keypress',function(event){
    const key=event.key; call_listner(key);
    makesound(key);
});

function makesound(key){
    switch (key) {
        case 'k':
            var audio; audio=new Audio('sounds/crash.mp3'); audio.play();
            break;
        case 'l':
            var audio; audio=new Audio('sounds/kick-bass.mp3'); audio.play();
            break;
        case 'j':
            var audio; audio=new Audio('sounds/snare.mp3'); audio.play();
            break;
        case 'w':
            var audio; audio=new Audio('sounds/tom-1.mp3'); audio.play();
            break;
        case 'a':
            var audio; audio=new Audio('sounds/tom-2.mp3'); audio.play();
            break;
        case 's':
            var audio; audio=new Audio('sounds/tom-3.mp3'); audio.play();
            break;
        case 'd':
            var audio; audio=new Audio('sounds/tom-4.mp3'); audio.play();
            break;
        default:
            break;
    }
}
function call_listner(key){
  function buttonkey(){
    var num=document.querySelector('.'+key);
    num.classList.add('pressed');
  }
  buttonkey();
  function rm(){
    var num=document.querySelector('.'+key);
    num.classList.remove('pressed');
  }
  setTimeout(rm,100);
}