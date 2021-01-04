
const boutonAcheter = document.getElementById("boutonAcheter");
const panier=document.getElementById("panier");

function AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU) {

      const row = document.createElement("tr");
      const ProdCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const subprice = document.createElement("td");
      row.className="ligneProduit";
      subprice.className="soustotal";
      
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
      subprice.innerText= prixProdU;
      
      row.appendChild(ProdCell);
      row.appendChild(quantityCell);
      row.appendChild(subpriceCell);
      panier.appendChild(row);
      alert("le produit a ete ajouté");
}


function Acheter(e){
      alert("le produit va etre ajouté");
      const section = e.target.parentElement.parentElement;
      alert(section.getElementsByTagName("couleurP").innerText); //element undefined comment recuperrer les couleurs et autres ? 
      const enfants=section.childNodes[2];
      const couleurchoisie=section.getElementsByTagName("couleurP").selectedIndex.innerText; // Comment ? get element by id n'est possible que sur tout le doc
      const taillechoisie= section.getElementsByTagName("tailleP").selectedIndex.innerText;  // Il n'y a que avec le pot que cette fonction marche 
      const prixProdU=section.getElementsByTagName("prixP").selectedIndex.innerText;
      const sourceimage= enfants.src;
      const nomProd = section.firstChild.innertText;
      AjouterPanier(nomProd,sourceimage,couleurchoisie,taillechoisie,prixProdU);
}

boutonAcheter.addEventListener("click", Acheter); 
