// $(document).ready(function() {

//     // JS code to add toggle effect for the "What We Do" section

//     $('#doctor_consultation_services >img').click(function() {
//         $(this).toggleClass('d-none');
//         $('.specialists').toggleClass('d-none');
//     });

//     $('.specialists').click(function() {
//         $(this).toggleClass('d-none');
//         $('#doctor_consultation_services >img').toggleClass('d-none');
//     });
// });

$(document).ready(function() {
    $('#first_image').click(function (event) {
        $('#specialists').toggle();
    })

    $('#second_image').click(function (event) {
        $('#lab_services').toggle();
    })

    $('#third_image').click(function (event) {
        $('#pharmacy_services').toggle();
    })

    $('#fourth_image').click(function (event) {
        $('#nutrition_services').toggle();
    })

    $('#fifth_image').click(function (event) {
        $('#medical_devices').toggle();
    })

    $('#sixth_image').click(function (event) {
        $('#vaccination_services').toggle();
    })
});