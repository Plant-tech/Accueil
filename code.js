//création de la 2e liste  pour choisir la couleur de l'arrosoir après avoir choisi le volume
var colorsBySize = {
	A: ["Chrome", "Cuivre"],
	B: ["Chrome", "Cuivre"],
	C: ["Chrome"]
}

function changeSize(value) {
	if (value.length == 0) document.getElementById("couleurA").innerHTML = "<option>Selectionnez une taille</option>";
	else {
		var sizeOption = "";
		for (sizeID in colorsBySize[value]) {
			sizeOption += "<option>" + colorsBySize[value][sizeID] + "</option>";
		}
		document.getElementById("couleurA").innerHTML = sizeOption;
	}
}

//création de la 2e liste pour choisir la couleur du pot après avoir choisi le volume
var colorsBySizeP = {
	A: ["Brique", "Noir", "Blanc"],
	B: ["Vert", "Brique", "Noir"],
	C: ["Brique", "Noir"],
	D: ["Brique", "Blanc"],
	E: ["Brique"]
}

function changeSizeP(value) {
	if (value.length == 0) document.getElementById("couleurP").innerHTML = "<option>Selectionnez une taille</option>";
	else {
		var sizeOption = "";
		for (sizeID in colorsBySizeP[value]) {
			sizeOption += "<option>" + colorsBySizeP[value][sizeID] + "</option>";
		}
		document.getElementById("couleurP").innerHTML = sizeOption;
	}
}