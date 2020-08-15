
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

// ANIMATION PROGRESS PAR
$(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');


  $('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });