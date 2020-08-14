
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

    function me(num1, operator){
        const me = document.querySelector(num1);	    
        me.style.transform = 'translateX(' + scrollPosition * operator + 'px)';
    }

    me('.me', '-.1');
    me('.name', '+.3');
    me('.title', '+.2');
    me('.subTitle', '+.1');

})

// RELAX.JS
// data-lax-translate-y="0 0, 400 -400" class"lax"
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}