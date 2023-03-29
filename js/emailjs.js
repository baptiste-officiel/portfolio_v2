window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_2asm0hd', 'contact_form_portfolio', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Votre message a bien été envoyé !')
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}