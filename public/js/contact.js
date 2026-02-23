const form = document.getElementById("contactForm");

const handleSubmit = (event) => {
  event.preventDefault();

  // On récupere les données du formulaire
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log("Données prêtes à l'envoi :", data);
};

form.addEventListener("submit", handleSubmit);
