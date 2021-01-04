//création de la 2e liste  pour choisir la couleur de l'arrosoir après avoir choisi le volume
var colorsBySize = {
	F: ["Chrome", "Cuivre"],
	G: ["Chrome", "Cuivre"],
	H: ["Chrome"]
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

function ComputePrice() {
	if (value == A)	prix.value = 10€ ;
	else if (value == B) prix.value = 15€ ;
	else if (value == C) prix.value = 23€ ;
	else if (value == D) prix.value = 30€ ;
	else if (value == E) prix.value = 40€ ;
	else if (value == F) prix.value = 20€ ;
	else if (value == G) prix.value = 25€ ;
	else if (value == H) prix.value = 30€ ;
	else if (value == I) prix.value = 15€ ;
	else prix.value = 100€;
}
