
// This function make

  setInterval(function(){
  var container = document.getElementById('content');
  var tmp = container.innerHTML;
  container.innerHTML= tmp;
}, 27000 // length of the whole show in milliseconds
  );

  function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " mobileNavBar";
    } else {
        x.className = "navbar";
    }
}
