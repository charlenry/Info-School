"use strict";

/*** Fetch all the forms we want to apply custom Bootstrap validation styles to ***/
const forms = document.querySelectorAll('.needs-validation');

/*** Loop over the forms and check validity ***/
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    } else {
       alert("Merci pour votre message.\nCliquez sur OK pour confirmer l'envoi.");
    }
  }, false)
});


/*** Courses search function ***/
$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#lessonList .col-12").filter(function() {
       /* toggle(true) == display: block ; toggle(false) ==  display: none */
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
  });
});
