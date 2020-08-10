
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
const paralux = document.getElementById('me');

window.addEventListener('scroll', function(){
    let scrollPosition = window.pageYOffset;

    paralux.style.backgroundPositionY = scrollPosition * 0.7 + 'px' ;

    
    // const me = document.querySelector('.me');
    // me.style.transform = 'translateX(' + scrollPosition * -.1 + 'px)' ;
})

// JQUERY PARALUX EFFECT
// $(window).scroll(function(){
//     var scroll_Position = $(window).scrollTop()/2;
//     $('header').css({
//         'background-position-y' : - scroll_Position + 'px',
//     })
// })