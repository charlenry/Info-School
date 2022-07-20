"use strict";

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation');
const patternTime = /^(\d\d):(\d\d)$/;
const $timeInput = document.querySelector('#timeInput');
const $timeError = document.querySelector('#timeError');
const $iconError = document.querySelector('.icon-error');

// Loop over the forms and check validity
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    const patternTextResult = patternTime.test($timeInput.value.toString());

    if (!patternTextResult) {
      $timeError.style.display = "block";
      $iconError.style.display = "block";
      $timeInput.style.border = "1px solid #DC3545";
      event.preventDefault();
      event.stopPropagation();
    } else {
      $timeError.style.display = "none";
      $iconError.style.display = "none";
      $timeInput.style.border = "1px solid #198754";
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }
  }, false)
});

/* Courses search function */
$(document).ready(function(){
  $("#searchInput").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $("#lessonList .col-12").filter(function() {
       /* toggle(true) == display: block ; toggle(false) ==  display: none */
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
  });
});
