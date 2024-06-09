// Récupérez les références des éléments HTML
const openPopupButton = document.getElementById("openPopupButton");
const popupOverlay = document.getElementById("popupOverlay");

// Lorsque le bouton est cliqué, affichez le popup
openPopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "block";
});

// Lorsque le fond de superposition est cliqué, fermez le popup
popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});
