const paniervide=document.getElementById("rien");
const Rpanier =document.getElementById("resumePanier");
const panier=document.getElementById("panier");
const soustot = panier.getElementsByClassName("soustotal");
const quantite = panier.getElementsByClassName("quantity");
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

    // cacul prix par quantité de produits
    
    let j=0;
    for (j=0; j<soustot.length; j++){
        soustot[j].innerHTML = 5 * parseFloat(quantite[j].value); //a modifier pour mettre le prix unitaire 
        soustot[j].innerHTML += "euros";
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


const boutonAcheterP = document.getElementById("boutonAcheterP");
const boutonAcheterA = document.getElementById("boutonAcheterA");
const boutonAcheterM = document.getElementById("boutonAcheterM");


function AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU) {
      
      const row = document.createElement("tr");
      const ProdCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const subpriceCell = document.createElement("td");
      row.className="ligneProduit";
      subpriceCell.className="soustotal";
      
      // pour la case ProdCell
      const image=document.createElement("img");
      image.src=sourceimage;
      image.alt=nomProd;
      image.width="10%";
      const div = document.createElement("div");
      div.innerText="Taille : "+ taillechoisie+"couleur : " + couleurchoisie;
      
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
      let panier2=document.getElementById("panier");
      panier2.appendChild(row);
      alert("le produit a ete ajouté effectivement");
}


function AcheterP(e){
      alert("le produit va etre ajouté");
      const section = e.target.parentElement.parentElement;
      alert(document.getElementById("couleurP").value); //element undefined comment recuperrer les couleurs et autres ? 
      const enfants=section.childNodes[2];
      const couleurchoisie=document.getElementById("couleurP").value; // Comment ? get element by id n'est possible que sur tout le doc
      const taillechoisie= document.getElementById("tailleP").value;  // Il n'y a que avec le pot que cette fonction marche 
      const prixProdU=document.getElementById("prixP").value;
      const sourceimage= enfants.src;
      const nomProd = section.firstChild.innertText;
      AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU);
}

function AcheterA(e){
      alert("le produit va etre ajouté");
      const section = e.target.parentElement.parentElement;
      alert(document.getElementById("couleurA").selectedIndex.value); //element undefined comment recuperrer les couleurs et autres ? 
      const enfants=section.childNodes[2];
      const couleurchoisie=document.getElementById("couleurA").value; // Comment ? get element by id n'est possible que sur tout le doc
      const taillechoisie= document.getElementById("tailleA").value;  // Il n'y a que avec le pot que cette fonction marche 
      const prixProdU=document.getElementById("prixP").value;
      const sourceimage= enfants.src;
      const nomProd = section.firstChild.innertText;
      AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU);
}

function AcheterM(e){
      alert("le produit va etre ajouté");
      const section = e.target.parentElement.parentElement;
      alert(document.getElementById("couleurM").value); //element undefined comment recuperrer les couleurs et autres ? 
      const enfants=section.childNodes[2];
      const couleurchoisie=document.getElementById("couleurM").value; // Comment ? get element by id n'est possible que sur tout le doc
      const taillechoisie= "Taille unique";  // Il n'y a que avec le pot que cette fonction marche 
      const prixProdU=document.getElementById("prixM").value;
      const sourceimage= enfants.src;
      const nomProd = section.firstChild.innertText;
      AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU);
}

boutonAcheterP.addEventListener("click", AcheterP); 
boutonAcheterA.addEventListener("click", AcheterA); 
boutonAcheterM.addEventListener("click", AcheterM); 
