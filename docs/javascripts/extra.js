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

var dovesPigeonsSwifts = document.getElementById('dovesswiftshummingbirdskingfishers-');

dovesPigeonsSwifts.style.cursor = 'pointer';
dovesPigeonsSwifts.onclick = collapseDovesPigeonsSwifts;

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

var seaWaterShoreBirds = document.getElementById('seawatershore-birds-');

seaWaterShoreBirds.style.cursor = 'pointer';
seaWaterShoreBirds.onclick = collapseSeaWaterShoreBirds;

function collapseSeaWaterShoreBirds() {
  var x = document.getElementById("seawatershorebirds-row");
  var y = document.getElementById('seawatershore-birds-');
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.textContent = 'Sea/Water/Shore Birds [-]';
  } else {
    x.style.display = "none";
	y.textContent = 'Sea/Water/Shore Birds [+]';
  }
}

var songBirds = document.getElementById('song-birds-');

songBirds.style.cursor = 'pointer';
songBirds.onclick = collapseSongBirds;

function collapseSongBirds() {
  var x = document.getElementById("songBirds-row");
  var y = document.getElementById('song-birds-');
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.textContent = 'Song Birds [-]';
  } else {
    x.style.display = "none";
	y.textContent = 'Song Birds [+]';
  }
}

var woodpeckers = document.getElementById('woodpeckers-');

woodpeckers.style.cursor = 'pointer';
woodpeckers.onclick = collapseWoodpeckers;

function collapseWoodpeckers() {
  var x = document.getElementById("woodpeckers-row");
  var y = document.getElementById('woodpeckers-');
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.textContent = 'Woodpeckers [-]';
  } else {
    x.style.display = "none";
	y.textContent = 'Woodpeckers [+]';
  }
}

// Grab slider for compendium thumbnail size
var thumbnailSlider = document.getElementById("thumbnailSlider");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
thumbnailSlider.oninput = function() {
  setThumbnailSize(this.value);
}

// Init thumbnail size
setThumbnailSize(thumbnailSlider.value);

function setThumbnailSize(newSize) {
	var elements = document.querySelectorAll('.column');
	for(var i=0; i<elements.length; i++){
		elements[i].style.width = 100 / newSize + "%";
		//elements[i].style.height = elements[i].style.height * newSize + "px";
	}
}
