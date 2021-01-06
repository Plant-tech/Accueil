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


const paniervide=document.getElementById("rien");
const Rpanier =document.getElementById("resumePanier");
const panier=document.getElementById("panier");
const soustot = panier.getElementsByClassName("soustotal");
const total = document.getElementById("total");


// Affichage du panier 

RechargePanier();

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
    total.innerText=t + " euros";
}

// suppression produits

removeBouton.addEventListener("click", remove);

function remove(){
    event.target.parentElement.parentElement.remove();
    RechargePanier();
    alert("L'object a bien été supprimé !");
    
} 

panier.addEventListener("change", RechargePanier);

//Ajouter au panier

const boutonAcheterP = document.getElementById("boutonAjouterP");
const boutonAcheterA = document.getElementById("boutonAjouterA");
const boutonAcheterM = document.getElementById("boutonAjouterM");


function AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU) {
      
      const row = document.createElement("tr");
      const ProdCell = document.createElement("td");
      const quantityCell = document.createElement("td");
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
      div1.innerText="Taille : " + taillechoisie +"   "+"couleur : " + couleurchoisie;
      ProdCell.appendChild(div1);
      
      // pour la case de quantité
      const q= document.createElement("input");
      q.className="quantity";
      q.type="number";
      q.value="1";
      q.min="1";
      quantityCell.appendChild(q);
      
      const removeButton=document.createElement("button");
      removeButton.className="bonton boutonblanc";
      removeButton.id="removeBouton";
      removeButton.onclick="remove()";
      removeButton.type="button";
      removeButton.innerText="Remove";
      quantityCell.appendChild(removeButton);
      
      //pour la case subprice
      subpriceCell.innerText= prixProdU;
      
      row.appendChild(ProdCell);
      row.appendChild(quantityCell);
      row.appendChild(subpriceCell);
      panier.appendChild(row);
}


function AcheterP(e){
      alert("le produit va etre ajouté");
      alert(document.getElementById("couleurP").value);
      const couleurchoisie=document.getElementById("couleurP").value; 
      const taillechoisie= document.getElementById("tailleP").value.tostring;  
      const prixProdU=document.getElementById("prixP").value;
      const nomProd = "Pot connecté";
      AjouterPanier(nomProd,couleurchoisie,taillechoisie,prixProdU);
}

function AcheterA(e){
      alert("le produit va etre ajouté");
      alert(document.getElementById("couleurA").value); 
      const couleurchoisie=document.getElementById("couleurA").value; 
      const taillechoisie= document.getElementById("tailleA").value;  
      const prixProdU=document.getElementById("prixP").value;
      const nomProd ="Arrosoir";
      AjouterPanier(nomProd,couleurchoisie,taillechoisie,prixProdU);
}

function AcheterM(e){
      alert("le produit va etre ajouté");
      alert(document.getElementById("couleurM").value); 
      string couleurchoisie=document.getElementById("couleurM").value; 
      string taillechoisie= "Taille unique"; 
      const prixProdU=document.getElementById("prixM").value;
      const nomProd = "Musicaplante";
      AjouterPanier(nomProd,couleurchoisie,taillechoisie,prixProdU);
}

boutonAcheterP.addEventListener("click", AcheterP); 
boutonAcheterA.addEventListener("click", AcheterA); 
boutonAcheterM.addEventListener("click", AcheterM); 
