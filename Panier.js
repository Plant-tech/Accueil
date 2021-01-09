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

function getTailleP(v) {
	if (v=="A"){
		return "9 cm";
	}else if (v=="B"){
		return "12 cm";
	}else if (v=="C"){
		return "15 cm";
	}else if (v=="D"){
		return "20 cm";
	}else if (v=="E"){
		return "30 cm";
	}else {
		return "Non identifiée";
	}
}

function getTailleA(v) {
	if (v=="F"){
		return "50cl";
	}else if (v=="G"){
		return "1L";
	}else if (v=="H"){
		return "1.5L";
	}else {
		return "Non identifiée";
	}
}

function getCouleurM(v) {
	if (v=="I"){
		return "Noir";
	}else if (v=="J"){
		return "Chrome";
	}else if (v=="K"){
		return "Blanc";
	}else {
		return "Non identifiée";
	}
}	

const paniervide=document.getElementById("rien");
const Rpanier =document.getElementById("resumePanier");
const panier=document.getElementById("panier");
const soustot = panier.getElementsByClassName("soustotal");
const total = document.getElementById("total");


// Affichage du panier 

RechargePanier();
panier.addEventListener("change", RechargePanier);

function RechargePanier(){
    if (panier.rows.length <=2){
        Rpanier.style.visibility='hidden';
        paniervide.style.visibility='visible';
    } else{
        Rpanier.style.visibility='visible';
        paniervide.style.visibility='hidden';
    }

    // calcul total produits

    var t=0;
    let i=0;
    for (i=0; i<soustot.length; i++){
        t+= parseFloat(soustot[i].innerHTML); 
    }
    total.innerText=t + "€";
}

// suppression produits



function remove(){
    event.target.parentElement.parentElement.remove();
    RechargePanier();
    alert("Le produit a bien été supprimé !");
    
} 

panier.addEventListener("change", RechargePanier);

//Ajouter au panier

const boutonAcheterP = document.getElementById("boutonAjouterP");
const boutonAcheterA = document.getElementById("boutonAjouterA");
const boutonAcheterM = document.getElementById("boutonAjouterM");


function AjouterPanier(nomProd,couleurchoisie,taillechoisie,prixProdU) {
      
      const row = panier.insertRow(1);
      const ProdCell = document.createElement("td");
      const removeCell = document.createElement("td");
      const subpriceCell = document.createElement("td");
      row.className="ligneProduit";
      subpriceCell.className="soustotal";
      
      // pour la case ProdCell

      const div2 = document.createElement("div");
      div2.innerText=nomProd;
      const br=document.createElement("br")
      ProdCell.appendChild(div2);
      ProdCell.appendChild(br);
      ProdCell.appendChild(br);
      const div1 = document.createElement("div");
      div1.innerText="Taille : " + taillechoisie +"       "+"Couleur : " + couleurchoisie;
      ProdCell.appendChild(div1);
      
      // pour la case de suppression
      
      const removeButton=document.createElement("button");
      
      removeButton.className="bouton boutonblanc removeBouton";
      removeButton.innerText="Supprimer";
      removeButton.addEventListener("click",remove);
      removeCell.appendChild(removeButton);
      
      //pour la case subprice
      subpriceCell.innerText= prixProdU;
      
      row.appendChild(ProdCell);
      row.appendChild(removeCell);
      row.appendChild(subpriceCell);
      alert("le produit a été ajouté");
      RechargePanier();
}


function AcheterP(e){
      const couleurchoisie=document.getElementById("couleurP").value; 
      const t= document.getElementById("tailleP").value;
      const taillechoisie = getTailleP(t);
      const prixProdU=document.getElementById("prixP").value;
      const nomProd = "Pot connecté";
	if (t=="" || couleurchoisie=="") {
		alert("Selectionner une option de taille et/ou de couleur");
	}else {
     	AjouterPanier(nomProd,couleurchoisie,taillechoisie,prixProdU);
	}
}

function AcheterA(e){
      const couleurchoisie=document.getElementById("couleurA").value; 
      const t= document.getElementById("tailleA").value;
      const taillechoisie = getTailleA(t);
      const prixProdU=document.getElementById("prixA").value;
      const nomProd ="Arrosoir";
	if (t=="" || couleurchoisie=="") {
		alert("Selectionner une option de taille et/ou de couleur");
	}else {
     	AjouterPanier(nomProd,couleurchoisie,taillechoisie,prixProdU);
	}
}

function AcheterM(e){
      const c=document.getElementById("couleurM").value; 
      const couleurchoisie=getCouleurM(c);
      const taillechoisie= "Taille unique"; 
      const prixProdU="100€";
      const nomProd ="Musicaplante";
	if (c=="") {
		alert("Selectionner une option de taille et/ou de couleur");
	}else {
      	AjouterPanier(nomProd,couleurchoisie,taillechoisie,prixProdU);
	}
}

boutonAcheterP.addEventListener("click", AcheterP); 
boutonAcheterA.addEventListener("click", AcheterA); 
boutonAcheterM.addEventListener("click", AcheterM); 
