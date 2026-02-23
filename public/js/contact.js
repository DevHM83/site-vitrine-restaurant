const form = document.getElementById("contactForm");

const handleSubmit = (event) => {
  event.preventDefault();

  // On récupere les données du formulaire
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Puis on les vérifie
  if (!validateForm(data)) {
    return;
  }

  // Si tout va bien
  console.log("Données prêtes à l'envoi :", data);
  showSuccessMessage(data.name);
};

form.addEventListener("submit", handleSubmit);

// Pour valider les données du formulaire, on va utiliser une fonction
function validateForm(data) {
  // 1. On vérifie le name
  if (data.name.trim().length < 2) {
    alert("Merci d'indiquer un nom valide.");
    return false;
  }

  // 2. On vérifie l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    alert("L'adresse email n'est pas valide.");
    return false;
  }

  // 3. On vérifie la longueur du sujet
  if (data.subject.trim().length < 3) {
    alert("Votre sujet est trop court.");
    return false;
  }

  // 4. On vérifie la longueur du message
  if (data.message.trim().length < 10) {
    alert("Votre message est trop court.");
    return false;
  }
  return true;
}

// On affiche un message à l'utilisateur suite à la soumission du formulaire
function showSuccessMessage(userName) {
  const container = document.querySelector(".contact-form");
  container.innerHTML = `
        <div class="form-success-card">
            <h3>Merci ${userName} !</h3>
            <p>Votre demande de réservation a bien été transmise au restaurant.</p>
            <button onclick="window.location.reload()" class="btn">Retour</button>
        </div>
    `;
}
