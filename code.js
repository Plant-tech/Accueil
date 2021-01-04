//création de la 2e liste  pour choisir la couleur de l'arrosoir après avoir choisi le volume
var colorsBySize = {
	F: ["Chrome", "Cuivre"],
	G: ["Chrome", "Cuivre"],
	H: ["Chrome"]
}

var priceBySize = {
	F: ["20€"],
	G: ["25€"],
	H: ["30€"],
}

function changeSize(value) {
	if (value.length == 0) document.getElementById("couleurA").innerHTML = "<option>Selectionnez une taille</option>";
	else {
		var sizeOption = "";
		for (sizeID in colorsBySize[value]) {
			sizeOption += "<option>" + colorsBySize[value][sizeID] + "</option>";
		}
		prixSelection = "<option>" + priceBySize[value] + "</option>";
		document.getElementById("couleurA").innerHTML = sizeOption;
		document.getElementById("prixA").innerHTML = prixSelection;
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

var priceBySizeP = {
	A: ["10€"],
	B: ["15€"],
	C: ["23€"],
	D: ["30€"],
	E: ["40€"]
}

function changeSizeP(value) {
	if (value.length == 0) document.getElementById("couleurP").innerHTML = "<option>Selectionnez une taille</option>";
	else {
		var sizeOption = "";
		for (sizeID in colorsBySizeP[value]) {
			sizeOption += "<option>" + colorsBySizeP[value][sizeID] + "</option>";
		}
		prixSelection = "<option>" + priceBySizeP[value] + "</option>";
		document.getElementById("couleurP").innerHTML = sizeOption;
		document.getElementById("prixP").innerHTML = prixSelection;
	}
}

