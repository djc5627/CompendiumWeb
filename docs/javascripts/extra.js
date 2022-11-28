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

var dovesPigeonsSwifts = document.getElementById('dovesswifts-');

dovesPigeonsSwifts.style.cursor = 'pointer';
dovesPigeonsSwifts.onclick = collapseDovesPigeonsSwifts;

function collapseDovesPigeonsSwifts() {
  var x = document.getElementById("dovespigeonsswifts-row");
  var y = document.getElementById('dovespigeonsswifts-');
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.textContent = 'Doves/Swifts [-]';
  } else {
    x.style.display = "none";
	y.textContent = 'Doves/Swifts [+]';
  }
}



var hummingbirdsKingfishers = document.getElementById('hummingbirdskingfishers-');

hummingbirdsKingfishers.style.cursor = 'pointer';
hummingbirdsKingfishers.onclick = collapseHummingbirdsKingfishers;

function collapseHummingbirdsKingfishers() {
  var x = document.getElementById("hummingbirdskingfishers-row");
  var y = document.getElementById('hummingbirdskingfishers-');
  
  if (x.style.display === "none") {
    x.style.display = "block";
	y.textContent = 'Hummingbirds/Kingfishers [-]';
  } else {
    x.style.display = "none";
	y.textContent = 'Hummingbirds/Kingfishers [+]';
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
//var thumbnailSlider = document.getElementById("thumbnailSlider");
var imagesPerRowSelect = document.getElementById("imagesPerRow");

// Update the current slider value (each time you drag the slider handle)
//thumbnailSlider.oninput = function() {
//	setThumbnailSize(this.value);
//}

imagesPerRowSelect.onchange = function() {
	setThumbnailSize(this.value);
}

//Init the imagesPerRow based on screen width
if (window.innerWidth < 1280)
	imagesPerRowSelect.value = 2;
else
	imagesPerRowSelect.value = 3;

console.log(screen.width);
console.log(window.innerWidth);
console.log(imagesPerRowSelect.value);

// Init thumbnail size
setThumbnailSize(imagesPerRowSelect.value);

function setThumbnailSize(newSize) {
	var elements = document.querySelectorAll('.column');
	for(var i=0; i<elements.length; i++){
		elements[i].style.width = 100 / newSize + "%";
		//elements[i].style.height = elements[i].style.height * newSize + "px";
	}
}
