// const des boutons du panneau de control
const skoleomPage = document.getElementById("skoleom-page");
const marketPlace = document.getElementById("market-place");
const statistiques = document.getElementById("statistiques");
const offresAbonnements = document.getElementById("offres-abonnements");

//  const du bouton des parametres
const parametres = document.getElementById("bouton-parametres");

// const du panneau parametres
const ecranParametres = document.getElementById("ecran-parametres");

// const des écrans de monetizer
const ecranSkoleomPage = document.getElementById("ecran-skoleom-page");
const ecranMarketPlace = document.getElementById("ecran-market-place");
const ecranStatistiques = document.getElementById("ecran-statistiques");
const ecranOffresAbonnments = document.getElementById("ecran-offres-abonnements");

// clics sur les boutons du panneau gauche
skoleomPage.addEventListener("click", () => {
    skoleomPage.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    marketPlace.style.backgroundColor = "rgba(0, 0, 0, 0)";
    statistiques.style.backgroundColor = "rgba(0, 0, 0, 0)";
    offresAbonnements.style.backgroundColor = "rgba(0, 0, 0, 0)";

    ecranSkoleomPage.style.visibility = "visible";
    ecranMarketPlace.style.visibility = "hidden";
    ecranStatistiques.style.visibility = "hidden";
    ecranOffresAbonnments.style.visibility = "hidden";

    ecranParametres.style.visibility = "hidden"
});

marketPlace.addEventListener("click", () => {
    skoleomPage.style.backgroundColor = "rgba(0, 0, 0, 0)";
    marketPlace.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    statistiques.style.backgroundColor = "rgba(0, 0, 0, 0)";
    offresAbonnements.style.backgroundColor = "rgba(0, 0, 0, 0)";

    ecranSkoleomPage.style.visibility = "hidden";
    ecranMarketPlace.style.visibility = "visible";
    ecranStatistiques.style.visibility = "hidden";
    ecranOffresAbonnments.style.visibility = "hidden";

    ecranParametres.style.visibility = "hidden"
});

statistiques.addEventListener("click", () => {
    skoleomPage.style.backgroundColor = "rgba(0, 0, 0, 0)";
    marketPlace.style.backgroundColor = "rgba(0, 0, 0, 0)";
    statistiques.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    offresAbonnements.style.backgroundColor = "rgba(0, 0, 0, 0)";

    ecranSkoleomPage.style.visibility = "hidden";
    ecranMarketPlace.style.visibility = "hidden";
    ecranStatistiques.style.visibility = "visible";
    ecranOffresAbonnments.style.visibility = "hidden";

    ecranParametres.style.visibility = "hidden"
});

offresAbonnements.addEventListener("click", () => {
    skoleomPage.style.backgroundColor = "rgba(0, 0, 0, 0)";
    marketPlace.style.backgroundColor = "rgba(0, 0, 0, 0)";
    statistiques.style.backgroundColor = "rgba(0, 0, 0, 0)";
    offresAbonnements.style.backgroundColor = "rgba(0, 0, 0, 0.1)";

    ecranSkoleomPage.style.visibility = "hidden";
    ecranMarketPlace.style.visibility = "hidden";
    ecranStatistiques.style.visibility = "hidden";
    ecranOffresAbonnments.style.visibility = "visible";

    ecranParametres.style.visibility = "hidden"
});

// clic sur le bouton des parametres
parametres.addEventListener("click", () => {
    ecranParametres.style.visibility = "visible";
})