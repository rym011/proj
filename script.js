function valide() {
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let score = 0;

        let answers = { 
            q1: 'Nettoyage', 
            q2: 'Peau grasse', 
            q3: 'Deux fois', 
            q4: 'Aloe vera',
            q5: 'Après la crème hydratante',
            q6: 'Une à deux fois par semaine',
            q7: 'Acide salicylique'
        };

        for (let question in answers) {
            let userAnswer = document.querySelector(`input[name="${question}"]:checked`);
            if (userAnswer && userAnswer.value === answers[question]) {
                score++;
            }
        }
        alert(`Vous avez ${score} bonnes réponses !`);
    });
}

function envoi() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Veuillez remplir tous les champs avant de cliquer sur Envoyer !");
        } else {
            alert("Votre message a été envoyé avec succès ! Merci de m'avoir contacté.");

            document.getElementById("contactForm").reset(); 
        }
    });
}
