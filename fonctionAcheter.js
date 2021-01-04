

const panier=document.getElementById("panier");

function AjouterPanier(nomProd) {

      const row = document.createElement("tr");
      const ProdCell = document.createElement("td");
      const quantityCell = document.createElement("td");
      const subprice = document.createElement("td");
      row.className="ligneProduit";
      subprice.className="soustotal";
      
      // pour la case ProdCell
      const image=document.createElement("img");
      image.src=#;
      image.alt= //idproduit;
      image.width="10%";
      
      
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
      subprice.innerText= prix;
      
      row.appendChild(ProdCell);
      row.appendChild(quantityCell);
      row.appendChild(subpriceCell);
      panier.appendChild(row);
}
