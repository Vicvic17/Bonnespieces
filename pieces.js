// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];

    const pieceElement = document.createElement("h2");
    pieceElement.innerText = article.nom;
    
    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.description ?? "aucune catégorie";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "pas de description pour le moment.";

    const stockElement = document.createElement("p");
    stockElement.innerText = article.description ? "En stock": "rupture de stock";
    
    
    const sectionFiches = document.querySelector(".fiches");
    sectionFiches.appendChild(pieceElement);

    sectionFiches.appendChild(imageElement);
    sectionFiches.appendChild(nomElement);
    sectionFiches.appendChild(prixElement);
    sectionFiches.appendChild(categorieElement);
    sectionFiches.appendChild(descriptionElement);
    sectionFiches.appendChild(stockElement);
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    pieces.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(pieces);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});


const boutonDecroissant = document.querySelector(".btn-Decroissant");
boutonDecroissant.addEventListener("click", function () {
    pieces.sort(function (a, b) {
        return b.prix - a.prix;
    });
    console.log(pieces);
});

const boutonDescription = document.querySelector(".btn-nodesc");
boutonDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    console.log(pieces);
});