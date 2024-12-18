function valide(){
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let score = 0;
        let answers = { q1: 'Nettoyage', q2: 'Peau grasse' }; // Réponses correctes
        for (let question in answers) {
            let userAnswer = document.querySelector(`input[name="${question}"]:checked`);
            if (userAnswer && userAnswer.value === answers[question]) {
                score++;
            }
        }
        document.getElementById('result').textContent = alert(`Vous avez ${score} bonnes réponses !`);;
    });
}
function envoi() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut du formulaire

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        // Vérification
        if (name === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs avant de cliquer sur Envoyer !");
        } else {
            alert("Votre message a été envoyé avec succès ! Merci de m'avoir contacté.");

            document.getElementById("contactForm").reset(); // Réinitialise le formulaire
        }
    });
}

