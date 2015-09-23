$('document').ready(function() {

/* Beginning of Subscription Amount Validation
	--------------------------------------------	*/
	$("#adherent_subscriptions_attributes_0_subscription_amount").keypress(function(event) {
		return isNumberKey(event);
	});

	$("#adherent_subscriptions_attributes_0_subscription_amount").on('blur', function() {
		isSubsAmountEnough(this);
	});

	$("#subscription_checkbox").click(function() {
		isCheckboxChecked(this);
	});// Ends Subscription Amount Validation


/* Email Validation
	----------------	*/
	// Mailcheck
	var domains = ['orange.fr', 'gmail.com', 'aol.com', 'hotmail.com', 'yahoo.com', 'msn.com',
	'facebook.com', 'outlook.com', 'outlook.fr', 'laposte.net'];
	var secondLevelDomains = ['orange', 'gmail', 'aol', 'hotmail', 'yahoo', 'msn', 'facebook',
	'outlook', 'laposte'];
	var topLevelDomains = ["com", "net", "org", "fr"];

	// var superStringDistance = function(string1, string2) {
	// // a string distance algorithm of your choosing
	// };

	$('.user_email').on('blur', function() {
		$(this).mailcheck({
			domains: domains,														// optional
			secondLevelDomains: secondLevelDomains,			// optional
			topLevelDomains: topLevelDomains,						// optional
			// distanceFunction: superStringDistance,		// optional
			suggested: function(element, suggestion) {
				// callback code
				defaultMailInput(element);
				$("#suggested_bloc").css("display", "inline");
				$("#suggested_bloc a:nth-child(2)").text(suggestion.full);
			},
			empty: function(element) {
				// callback code
				$("#suggested_bloc").css("display", "none");
				defaultMailInput(element);
				validateEmail(element);
			}
		});

		$('#suggestedEmail').click(function() {
			$('.user_email').val( $("#suggestedEmail").text() );
			$("#suggested_bloc").css("display", "none");
			$("#suggested_bloc").prev("label").removeClass("false_label");
		});
	});// Ends Email Validation


/* Gender Validation
	-----------------	*/
	$(".gender_bloc").children("input").click(function() {
		defaultRadio(".gender_bloc");
	});// Ends Gender Validation


/* Name Validation
	---------------	*/
	$(".user_firstname, .user_lastname").blur(function() {
		validatePresence(this);
	});//Ends Name Validation


/* Submit Adhesions Validation
	---------------------------	*/
	$('form').submit(function(event) {
		if( !isSubsAmountEnough("#adherent_subscriptions_attributes_0_subscription_amount") ) {
			event.preventDefault();
		}
		if( $("#subscription_checkbox").is(":checked") ) {
			$("#adherent_subscriptions_attributes_0_subscription_amount").val(17);
		}
		if( !validateEmail('.user_email') ) {
			event.preventDefault();
		}
		if(!validateGender(".gender_bloc") ) {
			event.preventDefault();
		}
		[$(".user_firstname"), $(".user_lastname")].forEach(function(element) {
			if( !validatePresence(element) ) {
				event.preventDefault();
			}
		});
	});// Ends Submit Validation

});// End of (document).ready


/* Functions
	----------	*/
// Verify if subscription checkbox is cheked
function isCheckboxChecked(element) {
	if( $(element).is(":checked") ) {
		$("#adherent_subscriptions_attributes_0_subscription_amount").val("");
		resetAmountText();
		return true;
	} else if( !$(element).is(":checked") ) {
		alertAmountText();
		return false;
	}
}

// Enable only numbers in Subscription Amount
function isNumberKey(evt){
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if(charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

// Check if amount matches minimum subscription amount
function isSubsAmountEnough(element) {
	if( ($(element).val() == "") && $("#subscription_checkbox").is(":checked") ) {
		return true;
	} 
	if( ($(element).val() < 17) ) {
		$("#subscription_checkbox").prop("checked", "");
		alertAmountText();
		return false;
	} else if($(element).val() >= 17) {
		$("#subscription_checkbox").prop("checked", "");
		resetAmountText();
		return true;
	} else {
		return true;
	}
}

// Display subscription amount alert text
function alertAmountText() {
	$("#subscription_amount_text").css('display', 'block');
}

// Hide subscription amount alert text
function resetAmountText() {
	$("#subscription_amount_text").css('display', 'none');
}

// Validate presence of value and value matching regex in email field
// Regex taken here with a really good article about mail validation : http://davidcel.is/posts/stop-validating-email-addresses-with-regex/
function validateEmail(element) {
	if( !$(element).val() && !$(element).hasClass('false_input') ) {
		alertInput(element);
		return false;
	} else if( !( /.+@.+\..+/i.test($(element).val()) ) && !$(element).hasClass('false_input') ) {
		regexMailValidation(element);
		return false;
	} else if( /.+@.+\..+/i.test($(element).val()) ) { 
		return true;
	}
}

// Turns label and email field to red if input is invalid
function regexMailValidation(element) {
	$(element).addClass('false_input');
	$(element).prevAll('label').append(' invalide').addClass("false_label");
}

// Turns label and email field to normal if input
function defaultMailInput(element) {
	$(element).removeClass('false_input');
	$(element).prevAll('label').removeClass('false_label');
	$(element).prevAll('label').text("* Email");
}

// Checks if gender is present
function validateGender(element) {
	var val = element + " :input";
	if( !$(val).is(":checked") ) {
		alertRadio(".gender_bloc");
		return false;
	} else {
		return true;
	}
}

// Turns '* Civilité' to red if no gender chosen
function alertRadio(element) {
	defaultRadio(element);
	$(element).children('p').append(" est obligatoire").addClass("false_label");
}

// Turns '* Civilité' back to normal if a gender has been chosen
function defaultRadio(element) {
	var str =	$(element).children('p').text().replace(' est obligatoire', '');
	$(element).children('p').text(str);
	$(element).children('p').removeClass('false_label');
}

// Turns label and field to red if no input
function alertInput(element) {
	$(element).addClass('false_input');
	$(element).prevAll('label').append(' est un champs obligatoire').addClass("false_label");
}

// Turns label and field to normal if input
function defaultInput(element) {
	$(element).removeClass('false_input');
	$(element).prevAll('label').removeClass('false_label');
	var str =	$(element).prevAll('label').text().replace(' est un champs obligatoire', '');
	$(element).prevAll('label').text(str);
}

// Validate presence of value in field
function validatePresence(element) {
	if( !$(element).val() && !$(element).hasClass('false_input') ) {
		alertInput(element);
		return false;
	} else if( $(element).val() ) {
		defaultInput(element);
		return true;
	}
}