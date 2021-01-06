
const boutonAcheterP = document.getElementById("boutonAcheterP");
const boutonAcheterA = document.getElementById("boutonAcheterA");
const boutonAcheterM = document.getElementById("boutonAcheterM");
const panier2=document.getElementById("panier");

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
      const taillechoisie= document.getElementById("tailleM").value;  // Il n'y a que avec le pot que cette fonction marche 
      const prixProdU=document.getElementById("prixM").value;
      const sourceimage= enfants.src;
      const nomProd = section.firstChild.innertText;
      AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU);
}

boutonAcheterP.addEventListener("click", AcheterP); 
boutonAcheterA.addEventListener("click", AcheterA); 
boutonAcheterM.addEventListener("click", AcheterM); 
