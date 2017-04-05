var first = document.getElementById('first');

first.addEventListener('mouseover', function (){
	var img = document.getElementById(this.attributes["data-img"].value);
	if (img.className === "hidden") { // Use querySelectorAll("img") to apply hide to all calsses
		img.className = "";
	} else {
		img.className = "hidden";
	}
})