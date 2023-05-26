window.onload = function() {
    emailjs.init(`${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`)
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_2asm0hd', 'contact_form_portfolio', this)
        alert('Votre message a bien été envoyé !')
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            // console.log('FAILED...', error);
            alert('Votre message n\'a pas pu être envoyé, veuillez réessayer ou me contacter par mail')
        });
        document.getElementById('contact-form').reset();
    });
}