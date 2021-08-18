// CUSTOM JS
$(document).ready(function(){

    if( $('#phone').length ){
	    $(function(){
	        $('#phone').phonecode({
	            preferCo: 'ru'
	        });
	    });
	    $('#phone').mask('(999) 999-99-99');
	}

	// REGISTRATION FORM
	if($('.sign-up-form').length){

		$("#registerBtn").addClass('btn_disabled').prop('disabled', true);

		// show and hide password
		$('.input-group__pass-status').on('click', function(){
			$(this).parent().find('.input-group__input').attr('type', function(index, attr){
				return attr == 'text' ? 'password' : 'text';
			});

			$(this).toggleClass('input-group__pass-status_show');
		});

		// check for a valid
		$('.sign-up-form, #registerBtn, input').on('input click change paste keyup', function(){
			var phone = $('.input-group__input[name="phone"]').val().trim();
			var pass = $('.input-group__input[name="password"]').val().trim();
			var passrepeat = $('.input-group__input[name="password-repeat"]').val().trim();
			var checkbox = $('.custom-checkbox__input');

			if( !phone.trim().length ){
				$('#phone').parent().parent().find('.input-group__help').css('display', 'block').html('* Incorrect phone number');
				$('.country-phone').addClass('error');
				$("#registerBtn").addClass('btn_disabled').prop('disabled', true);
			}
			else if ( pass.length == 0 ){
				$('#password').addClass('error').parent().find('.input-group__help').css('display', 'block').html('* Password can\'t be empty');
				$("#registerBtn").addClass('btn_disabled').prop('disabled', true);
			}
			else if ( pass.length < 12 && pass.length > 0){
				$('#password').addClass('error').parent().find('.input-group__help').css('display', 'block').html('* Password should contain at least 12 characters');
				$("#registerBtn").addClass('btn_disabled').prop('disabled', true);
			}
			else if ( passrepeat.length == 0 ){
				$('#password-repeat').addClass('error').parent().find('.input-group__help').css('display', 'block').html('* Repeat password');
				$("#registerBtn").addClass('btn_disabled').prop('disabled', true);
			}
			else if ( passrepeat != pass ){
				$('#password-repeat').addClass('error').parent().find('.input-group__help').css('display', 'block').html('* Passwords must match');
				$("#registerBtn").addClass('btn_disabled').prop('disabled', true);
			}
			else if ( !checkbox.is(':checked') ){
				$('.custom-checkbox__icon').css('border-color', '#F02D3A');
				$("#registerBtn").addClass('btn_disabled').prop('disabled', true);
			}
			else{
				$('.input-group__help').css('display', 'none');
				$('.custom-checkbox__icon').css('border-color', '#D0D2D3;');
				$('.input-group__input, .country-phone').removeClass('error');
				$("#registerBtn").removeClass('btn_disabled').prop('disabled', false);

				// Do submit
				$("#registerBtn").on('click', function(){
					$('.sign-up-form').submit();					
				});
			}
		});
	}

});