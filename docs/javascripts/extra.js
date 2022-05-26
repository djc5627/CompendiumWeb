var something = document.getElementById('birds-of-prey-');

something.style.cursor = 'pointer';
something.onclick = myFunction;

function myFunction() {
  var x = document.getElementById("birds-of-prey-row");
  var y = document.getElementById('birds-of-prey-');
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.textContent = 'Birds of Prey [-]';
  } else {
    x.style.display = "none";
	y.textContent = 'Birds of Prey [+]';
  }
}