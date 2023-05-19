const skoleomPage = document.getElementById("skoleom-page");
const marketPlace = document.getElementById("market-place");
const statistiques = document.getElementById("statistiques");
const offresAbonnements = document.getElementById("offres-abonnements");

const ecranSkoleomPage = document.getElementById("ecran-skoleom-page");
const ecranMarketPlace = document.getElementById("ecran-market-place");
const ecranStatistiques = document.getElementById("ecran-statistiques");
const ecranOffresAbonnments = document.getElementById("ecran-offres-abonnements");


skoleomPage.addEventListener("click", () => {
    skoleomPage.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    marketPlace.style.backgroundColor = "rgba(0, 0, 0, 0)";
    statistiques.style.backgroundColor = "rgba(0, 0, 0, 0)";
    offresAbonnements.style.backgroundColor = "rgba(0, 0, 0, 0)";

    ecranSkoleomPage.style.visibility = "visible";
    ecranMarketPlace.style.visibility = "hidden";
    ecranStatistiques.style.visibility = "hidden";
    ecranOffresAbonnments.style.visibility = "hidden";
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
});