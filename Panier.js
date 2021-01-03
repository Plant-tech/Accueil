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