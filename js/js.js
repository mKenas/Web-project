// This function repeat the carousel animation every 27 seconde.

setInterval(function () {
    var container = document.getElementById('carouselID');
    var tmp = container.innerHTML;
    container.innerHTML = tmp;
}, 27500);

// This function changes the class name of the navbar to apply the mobile style to navbar.
function navbarMobile() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className = "navbar mobileNavBar";
    } else {
        x.className = "navbar";
    }
}

// This function to replay the save-sharing-video.
function replayVideo() {
    var icon = document.getElementById("replay-icon");
    var replayText = document.getElementById("play-again-txt");
    var video = document.getElementById("save-sharing-video");
    if (video.paused) {
        video.currentTime = 0;
        video.play();
        icon.style.display = "none";
        replayText.style.display = "none";
    }
}

// This function displays the replay text and icon when the video has played oance.
function showReplayText() {
    var icon = document.getElementById("replay-icon");
    var replayText = document.getElementById("play-again-txt");
    icon.style.display = "block";
    replayText.style.display = "block";
}

// This function applies the animation to intro section.
function introFadeIn() {
    var h1 = document.getElementById("intro-section-h1");
    var introTxt = document.getElementById("intro-section-text");
    h1.className = "intro-h1-animation";
    introTxt.className = "intro-txt-animation";
}
// This function applies the animation to how it works text.
function howItWorksTxtFadeIn() {
    var howItWorksTxt = document.getElementById("howItWorksTxtId");
    howItWorksTxt.className = "how-it-works-txt-animation";
}
// This function applies the animation how it works image.
function howItWorksImgFadeIn() {
    var howItWorksImg = document.getElementById("howItWorksImgId");
    howItWorksImg.className = "how-it-works-img-animation";
}
