
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