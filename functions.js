// Script to open and close sidenav
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function cycleImages(id) {
	if (id=="1") {
		var src1="Images/1.JPG";
		var src2="Images/2.JPG";
		var src3="Images/3.JPG";
		document.getElementById("imgGrid1").src = src1;
		document.getElementById("imgGrid2").src = src2;
		document.getElementById("imgGrid3").src = src3;
		document.getElementById("imgGrid4").src = src3;
	}
	else if (id=="2") {
		var src1="Images/4.JPG";
		var src2="Images/5.JPG";
		var src3="Images/6.JPG";
		document.getElementById("imgGrid1").src = src1;
		document.getElementById("imgGrid2").src = src2;
		document.getElementById("imgGrid3").src = src3;
		document.getElementById("imgGrid4").src = src3;
	}
	else {
		var src1="Images/7.JPG";
		var src2="Images/8.JPG";
		var src3="Images/9.JPG";
		document.getElementById("imgGrid1").src = src1;
		document.getElementById("imgGrid2").src = src2;
		document.getElementById("imgGrid3").src = src3;
		document.getElementById("imgGrid4").src = src3;
	}

}