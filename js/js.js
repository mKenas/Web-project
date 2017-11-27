
// This function repeat the carousel animation every 27 seconde.

  setInterval(function(){
  var container = document.getElementById('content');
  var tmp = container.innerHTML;
  container.innerHTML= tmp;
}, 27500
  );

// This function changes the class name of the navbar to apply the mobile style
  function navbarMobile() {
    var x = document.getElementById("navbar");

    if (x.className === "navbar" ) {
        x.className = "navbar mobileNavBar";
    } else {
        x.className = "navbar";
    }




}



function replayVideo(){
  var icon = document.getElementById("replay-icon");
  var replayText = document.getElementById("play-again-txt");
  var video = document.getElementById("save-sharing-video");
  if (video.paused){
      video.currentTime = 0;
      video.play();
      icon.style.display = "none";
      replayText.style.display = "none";


}

}
function showReplayText(){
var icon = document.getElementById("replay-icon");
var replayText = document.getElementById("play-again-txt");
icon.style.display = "block";
replayText.style.display = "block";

}



window.onscroll = function() {

}


function fadeIn() {

    var h1 = document.getElementById("intro-section-h1");
    var introTxt = document.getElementById("intro-section-text");
    h1.className = "intro-h1-animation";
    introTxt.className = "intro-animation-txt";

}
/*
function growShrinkLogo() {
  var navBar = document.getElementById("navbar")
  var logo = document.getElementById("logoId")


  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        navBar.className += " smallNavBar";
        logo.style.width="100px";
        logo.style.padding="5px 40px 15px 40px";

          }
     else {
        navBar.className = "navbar";
        logo.style.width="150px";
        logo.style.padding=" 25px 20px 25px 20px";
    }


}

*/
