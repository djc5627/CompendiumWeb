var something = document.getElementById('birds-of-prey');

something.style.cursor = 'pointer';
something.onclick = myFunction;

function myFunction() {
  var x = document.getElementById("birds-of-prey-row");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}