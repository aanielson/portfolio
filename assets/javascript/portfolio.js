window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrolltop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navlinks").style.height = "50px";
    document.getElementById("navlinks").style.backgroundColor = "#511D47";
  } else {
    document.getElementById("navlinks").style.backgroundColor = "#511D47";
  }
}