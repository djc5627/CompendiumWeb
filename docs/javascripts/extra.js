var birdsOfPrey = document.getElementById('birds-of-prey-');

birdsOfPrey.style.cursor = 'pointer';
birdsOfPrey.onclick = collapseBirdsOfPrey;

function collapseBirdsOfPrey() {
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

var dovesPigeonsSwifts = document.getElementById('dovespigeonsswifts-');

birdsOfPrey.style.cursor = 'pointer';
birdsOfPrey.onclick = collapseDovesPigeonsSwifts;

function collapseDovesPigeonsSwifts() {
  var x = document.getElementById("dovespigeonsswifts-row");
  var y = document.getElementById('dovespigeonsswifts-');
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.textContent = 'Doves/Pigeons/Swifts [-]';
  } else {
    x.style.display = "none";
	y.textContent = 'Doves/Pigeons/Swifts [+]';
  }
}