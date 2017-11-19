
// This function repeat the carousel animation every 27 seconde.

  setInterval(function(){
  var container = document.getElementById('content');
  var tmp = container.innerHTML;
  container.innerHTML= tmp;
}, 27500
  );

// This show change the class name of the navbar to apply the mobile style
  function navbarMobile() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " mobileNavBar";
    } else {
        x.className = "navbar";
    }
}
