const contact_form = document.querySelector("#contact-form");
if (contact_form) {
  contact_form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collecte des données du formulaire
    var formData = new FormData(event.target);

    emailjs.init("eoPJ5KwYUNr5YwcQL");
    emailjs
      .send("service_cemli3i", "template_clt36qe", {
        to_email: "ericphlpp@gmail.com", // Adresse e-mail de destination
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
      })
      .then(
        function (response) {
          console.log("E-mail envoyé avec succès", response);
          toastr.success("Votre message a bien été envoyé !", "Succès");
        },
        function (error) {
          console.error("Erreur lors de l'envoi de l'e-mail", error);
          toastr.error(
            "Une erreur est survenue lors de l'envoi de votre message !",
            "Erreur"
          );
        }
      );
  });
}

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
