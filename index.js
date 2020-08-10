
// SLICKY NAVIGATION MENUE
$(".sec2").waypoint(function(direction){
    if (direction == "down"){
        $("nav").addClass("sticky");
    }
    else{
        $("nav").removeClass("sticky");
    }
})

// HAMBERGAR MENU
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%"
}

// PARALUX EFFECT
window.addEventListener('scroll', function(){
    const paralux = document.querySelector('.details');
    let scrollPosition = window.pageYOffset;

    paralux.style.transform = 'translateY(' + scrollPosition * -.5 + 'px)' ;

    
    const me = document.querySelector('.me');
    me.style.transform = 'translateX(' + scrollPosition * -.1 + 'px)' ;
})