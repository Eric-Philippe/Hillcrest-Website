document
  .querySelector("#contact-form")
  .addEventListener("submit", function (event) {
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
