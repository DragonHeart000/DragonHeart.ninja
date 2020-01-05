$(document).ready(function () {
"use strict";

$(window).on("load",function() {
	var showingtext="All";
	document.getElementById("showingType").innerHTML=showingtext;
	$(".sidebar-list :checkbox").css('display', "none").delay(1000);
	$(".sidebar-list :checkbox").fadeIn(1000);
});
	
$(window).on("beforeunload",function() {        
    var showingtext="All";
	document.getElementById("showingType").innerHTML=showingtext;
	$(".sidebar-list :checkbox").fadeOut(0).delay(1000);
	$(".sidebar-list :checkbox").fadeIn(1000);
});

$(window).scroll(function(){
    var fromTop = $(window).scrollTop();
	if (fromTop!==200 && fromTop <=200){
    	$("#sidebar").css('margin-top', (200 - fromTop) + 'px');
	} else if (fromTop>=200){
		$("#sidebar").css('margin-top', '0');
	}
	
});
	
	
//Likely a better way to do this; each of the following is for controlling the slideshow for each individual object.
$("#TTT_Archive-Pavlov-Slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#TTT_Archive-Pavlov-Slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#TTT_Archive-Pavlov-Slideshow');
}, 3000);

$("#4-Shadowed-Slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#4-Shadowed-Slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#4-Shadowed-Slideshow');
}, 3000);


$("#DesktopInUnity-Slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#DesktopInUnity-Slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#DesktopInUnity-Slideshow');
}, 3000);
	
	
$("#Apostasy-Slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#Apostasy-Slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#Apostasy-Slideshow');
}, 3000);
	
$("#Twitch_Chat_HotKeys-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#Twitch_Chat_HotKeys-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#Twitch_Chat_HotKeys-slideshow');
}, 3000);
	
$("#Immerse_Creator-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#Immerse_Creator-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#Immerse_Creator-slideshow');
}, 3000);
	
$("#surf_onionmap-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#surf_onionmap-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#surf_onionmap-slideshow');
}, 3000);
	
$("#de_Convenience-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#de_Convenience-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#de_Convenience-slideshow');
}, 3000);
	
$("#de_Fusion-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#de_Fusion-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#de_Fusion-slideshow');
}, 3000);
	
$("#surf_potato-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#surf_potato-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#surf_potato-slideshow');
}, 3000);
	
$("#surf_1v1-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#surf_1v1-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#surf_1v1-slideshow');
}, 3000);
	
$("#2v2_Convenience_Store-slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#2v2_Convenience_Store-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#2v2_Convenience_Store-slideshow');
}, 3000);

	
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	//showhidesidebar();
	//Sets the sidebar to hidden if on mobile but does not disable sidebar.
	
	alert("This site is not yet optimized for mobile phones so do expect bugs. I will add support once the full content is done as I plan to make a whole new style for mobile.");
}
	
$(".showonly").on('change', function() {
    $(".showonly").not(this).prop('checked', false); 
});

});



function showhidesidebar(){
	"use strict";
	if (document.getElementById("sidebar").className==="sidebarshown"){
		$(document.getElementById("sidebar")).removeClass("sidebarshown").addClass("sidebarhidden");
	} else {
		$(document.getElementById("sidebar")).removeClass("sidebarhidden").addClass("sidebarshown");
	}
	
	if (document.getElementById("wrapper").className==="wrapperforwhensidebarisused"){
	/*WHY DID I NOT USE THIS?????? $("#ID") Wonder which is better to use. Look this up later.*/	$("#wrapper").removeClass("wrapperforwhensidebarisused").addClass("wrapperforwhensidebarisusedbutnotactive");
	} else {
		$(document.getElementById("wrapper")).removeClass("wrapperforwhensidebarisusedbutnotactive").addClass("wrapperforwhensidebarisused");
	}
	
	if (document.getElementById("arrowtoturn").className==="left"){
		$(document.getElementById("arrowtoturn")).removeClass("left").addClass("right");
	} else {
		$(document.getElementById("arrowtoturn")).removeClass("right").addClass("left");
	}
	
	if (document.getElementById("sidebaritem-1").className==="sidebaritem"){
		$("#sidebaritem-1").removeClass("sidebaritem").addClass("sidebaritem-hide");
	} else {	
		$("#sidebaritem-1").removeClass("sidebaritem-hide").addClass("sidebaritem");
	}
	
	if (document.getElementById("sidebaritem-2").className==="sidebaritem"){
		$("#sidebaritem-2").removeClass("sidebaritem").addClass("sidebaritem-hide");
	} else {	
		$("#sidebaritem-2").removeClass("sidebaritem-hide").addClass("sidebaritem");
	}
	
	if ($(".sidebar-list :checkbox").css('display')==="none"){
		setTimeout(function(){
			$(".sidebar-list :checkbox").fadeIn(1000);
		}, 1000);
	} else {
			$(".sidebar-list :checkbox").css('display', 'none');
	}
}

function filter(){
	"use strict";
	if ($("#filteroutgames").is(":checked")){
		$(".game").fadeOut("slow");
	} else if($(".game").css("display")==="none"){
		$(".game").fadeIn("slow");
	}
	if ($("#filteroutsoftware").is(":checked")){
		$(".software").fadeOut("slow");
	} else if($(".software").css("display")==="none"){
		$(".software").fadeIn("slow");
	}
	if ($("#filteroutwebsites").is(":checked")){
		$(".website").fadeOut("slow");
	} else if($(".website").css("display")==="none"){
		$(".website").fadeIn("slow");
	}
	if ($("#filteroutvideos").is(":checked")){
		$(".webVideo").fadeOut("slow");
	} else if($(".webVideo").css("display")==="none"){
		$(".webVideo").fadeIn("slow");
	}
	if ($("#filteroutGameMod").is(":checked")){
		$(".gameMod").fadeOut("slow");
	} else if($(".gameMod").css("display")==="none"){
		$(".gameMod").fadeIn("slow");
	}
	if ($("#filteroutosu").is(":checked")){
		$(".osu").fadeOut("slow");
	} else if($(".osu").css("display")==="none"){
		$(".osu").fadeIn("slow");
	}
}

function showprep(){
	"use strict";
	setInterval(function() {
		show();
}, 100);
}

function show(){
	"use strict";
	//Make text say whats showing
	if ($("#showall").is(":checked")){
		changeShowingText("All");
	} else if ($("#showgames").is(":checked")){
		changeShowingText("Games");
	} else if ($("#showsoftware").is(":checked")){
		changeShowingText("Software");
	} else if ($("#showwebsites").is(":checked")){
		changeShowingText("Websites");
	} else if ($("#showwebvideos").is(":checked")){
		changeShowingText("Videos");
	} else if ($("#showGameMod").is(":checked")){
		changeShowingText("Game Mods");
	} else if ($("#showosu").is(":checked")){
		changeShowingText("Osu! Maps");
	}
	
	//make it only show that
	
	if ($("#showgames").is(":checked")){
		$(".game").fadeIn("slow");
		$(".software").fadeOut("slow");
		$(".website").fadeOut("slow");
		$(".webVideo").fadeOut("slow");
		$(".gameMod").fadeOut("slow");
		$(".osu").fadeOut("slow"); //Waiiiiiit, I removed osu! why is there still support for it?
	} else if ($("#showsoftware").is(":checked")){
		$(".game").fadeOut("slow");
		$(".software").fadeIn("slow");
		$(".website").fadeOut("slow");
		$(".webVideo").fadeOut("slow");
		$(".gameMod").fadeOut("slow");
		$(".osu").fadeOut("slow");
	} else if ($("#showwebsites").is(":checked")){
		$(".game").fadeOut("slow");
		$(".software").fadeOut("slow");
		$(".website").fadeIn("slow");
		$(".webVideo").fadeOut("slow");
		$(".gameMod").fadeOut("slow");
		$(".osu").fadeOut("slow");
	} else if ($("#showwebvideos").is(":checked")){
		$(".game").fadeOut("slow");
		$(".software").fadeOut("slow");
		$(".website").fadeOut("slow");
		$(".webVideo").fadeIn("slow");
		$(".gameMod").fadeOut("slow");
		$(".osu").fadeOut("slow");
	} else if ($("#showGameMod").is(":checked")){
		$(".game").fadeOut("slow");
		$(".software").fadeOut("slow");
		$(".website").fadeOut("slow");
		$(".webVideo").fadeOut("slow");
		$(".gameMod").fadeIn("slow");
		$(".osu").fadeOut("slow");
	} else {
		$(".game").fadeIn("slow");
		$(".software").fadeIn("slow");
		$(".website").fadeIn("slow");
		$(".webVideo").fadeIn("slow");
		$(".gameMod").fadeIn("slow");
		$(".osu").fadeIn("slow");
		changeShowingText("All");
	}
}

function changeShowingText(showingText){
	"use strict";
	document.getElementById("showingType").innerHTML=showingText;
}