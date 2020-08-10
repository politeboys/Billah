
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

// PARALUX background EFFECT
// const paralux2 = document.getElementById('me');

// window.addEventListener('scroll', function(){
//     let scrollPosition = window.pageYOffset;

//     paralux2.style.backgroundPositionY = scrollPosition * 0.7 + 'px' ;

    
// PARALLUX EFFECT
window.addEventListener('scroll', function(){		
    let scrollPosition = window.pageYOffset;

    const me = document.querySelector('.me');	    
    me.style.transform = 'translateX(' + scrollPosition * -.1 + 'px)';

    const name = document.querySelector('.name');
    name.style.transform = 'translateX(' + scrollPosition * +.3 + 'px)' ;
    
    const title = document.querySelector('.title');
    title.style.transform = 'translateX(' + scrollPosition * +.3 + 'px)' ;

    const subTitle = document.querySelector('.subTitle');
    subTitle.style.transform = 'translateX(' + scrollPosition * +.3 + 'px)' ;

}) 
