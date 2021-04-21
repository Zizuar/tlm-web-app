$(document).ready(function() {
    refreshPrices();
    $('#g-recaptcha-response').attr('required', '');
    $('#ep_option').on('change', function(e) {
        refreshPrices();
    });

    $('#signed').on('change', function(e) {
        if ($('#signed').is(':checked')) {
            $('#sig-name-div').slideDown(500);
        } else {
            $('#sig-name-div').slideUp(500);
        }
    });

    $('#country_id').on('change', function(e) {
        if ($('#country_id').val() == "United States") {
            $('#state_id').prop('disabled', false);
            $('#state_id').attr('required', '');
        } else {
            $('#state_id').prop('disabled', true);
            $('#state_id').removeAttr('required');
            $('#state_id').val('');
        }
        refreshPrices();
    });

    const forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // CAPTCHA VALIDATION
            const response = grecaptcha.getResponse();
            if (form.checkValidity() === false) {
                if(response.length == 0){
                    document.querySelector('.g-recaptcha>div').classList.add('border', 'border-danger');
                    event.stopPropagation();
                } 
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                $('#button-default-text').addClass("d-none");
                $('#button-loading-text').removeClass("d-none");

                const formData = {
                    email: $('#email').val(),
                    mailName: $('#mail_name').val(),
                    street1: $('#street1_id').val(),
                    street2: $('#street2_id').val(),
                    city: $('#city_id').val(),
                    state: $('#state_id').val(),
                    zip: $('#zip_id').val(),
                    country: $('#country_id').val(),
                    wantsEP: $('#ep_option').is(":checked"),
                    wantsSignature: $('#signed').is(":checked"),
                    signatureName: $('#sign_name_id').val(),
                    otherRequests: $('#other_id').val(),
                    recaptchaResponse: response
                };

                $.ajax({
                    url: '/order',
                    data: formData,
                    dataType: 'json',
                    type: 'POST',
                    success: function( data ) {
                        $('#order-section').fadeOut(500, () => {
                            $('#order-section').addClass("d-none");
                            $('#success-section').removeClass("d-none");
                            $('#success-section').fadeIn(500);
                        })
                    },
                    error: function (xhr) {
                        const error = JSON.parse(xhr.responseText);
                        if (error.type == "database") {
                            $('#error-message').text('Database error.' + error.message)
                        } else if (error.type == "captcha") {
                            $('#error-message').text("Couldn't verify reCAPTCHA response. Please make sure you completed the captcha.")
                        } else if (error.type == "validation") {
                            $('#error-message').text('' + error.message + ' Please check your form inputs.')
                        } else {
                            $('#error-message').text('Something went wrong! Please check you filled out everything, completed the captcha and try again!')
                        }
                        $('#error-modal').modal('show')
                        
                    },
                    complete: function() {
                        $('#button-loading-text').addClass("d-none");
                        $('#button-default-text').removeClass("d-none");
                    }
                });
            }
            form.classList.add('was-validated');
        }, false);
      });

});

function refreshPrices() {
    if ($('#ep_option').is(':checked')) {
        $('#cd-price-display').text('20');
    } else {
        $('#cd-price-display').text('15');
    }
    let shippingPrice = 0;
    if ($('#country_id').val() == null) {
        $('#shipping-price-display').text('select country');
    } else if ($('#country_id').find(':selected').data('category') == "DOM") {
        shippingPrice = 7;
        $('#shipping-price-display').text('$' + shippingPrice);
    } else if ($('#country_id').find(':selected').data('category') == "1") {
        shippingPrice = 10;
        $('#shipping-price-display').text('$' + shippingPrice);
    } else { 
        shippingPrice = 15;
        $('#shipping-price-display').text('$' + shippingPrice);
    }

    $('#order-price-display').text( parseInt($('#cd-price-display').text()) + shippingPrice );
}