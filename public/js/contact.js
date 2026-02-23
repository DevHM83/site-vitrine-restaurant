const form = document.getElementById("contactForm");

const handleSubmit = async (event) => {
  event.preventDefault();

  // On récupere les données du formulaire
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // On selectionne le bouton pour pouvoir changer le texte
  const formButton = document.querySelector(".btn");

  // On vérifie les données
  if (!validateForm(data)) {
    return;
  }

  // On change le texte du bouton après que les données soient validées
  formButton.classList.add("is-loading");
  formButton.disabled = true;
  formButton.textContent = "Envoi en cours...";

  // Si tout va bien
  console.log("Données prêtes à l'envoi :", data);

  // Pas d'envoi réel ici
  /* setTimeout(() => showSuccessMessage(data.name), 1500); */

  // Envoi d'un email grâce à EmailJs
  try {
    await emailjs.send("service_82inqaf", "template_yw0vkps", data);
    showSuccessMessage(data.name);
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    alert("Désolé, une erreur technique est survenue.");
    // On redonne la main à l'utilisateur
    formButton.disabled = false;
    formButton.classList.remove("is-loading");
    formButton.textContent = "Réessayer";
  }
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
