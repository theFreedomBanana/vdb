$('document').ready(function() {

/* Beginning of Monthly Subscription Validation
	--------------------------------------------	*/
	$("#monthly_subscription_amount").on('blur', function() {
		isMonthlySubsAmountEnough(this);
	});

	$("#radio_amount_bloc").children('input').click(function() {
		resetMonthlySubscriptionAmount();
		resetAmountText();
		resetDonation();
		resetDonationText();
		resetNoDonationSelectedText();
	});

	$("#donation_amount").on('blur', function() {
		isDonationAmountEnough(this);
	});// Ends Monthly Subscription Validation


/* Submit Donations Validation
	---------------------------	*/
	$('form').submit(function(event) {
		var table = ($("#radio_amount_bloc").children('input'));
		var subsRadioValue = false;
		$.each(table, function(w, z) { 
			if( $(z).is(":checked") ) {
				subsRadioValue = true;
			}
		});
		if( subsRadioValue == false && $("#monthly_subscription_amount").val() === "" && $("#donation_amount").val() === "" ) {
			alertNoDonationSelectedText();
			event.preventDefault();
		} else if( !isMonthlySubsAmountEnough("#monthly_subscription_amount") || !isDonationAmountEnough("#donation_amount") ) {
			event.preventDefault();
		}
		if( !!$("#radio_amount_bloc").children('input').is(":checked") ) {
			$("#monthly_subscription_amount").val( $("#radio_amount_bloc input[type='radio']:checked").val() );
		}
	});// Ends Submit Validation

});// End of (document).ready


/* Functions
	----------	*/
// Check if amount matches minimum monthly subscription amount
function isMonthlySubsAmountEnough(element) {
	if( ($(element).val() < 5) && (!$(element).val() == "") ) {
		clearRadioSubscriptionInput();
		alertAmountText();
		resetDonation();
		resetDonationText();
		resetNoDonationSelectedText();
		return false;
	} else if($(element).val() >= 5) {
		clearRadioSubscriptionInput();
		resetAmountText();
		resetDonation();
		resetDonationText();
		resetNoDonationSelectedText();
		return true;
	} else {
		return true;
	}
}

// Clear monthly donation radio input
function clearRadioSubscriptionInput() {
	$("#radio_amount_bloc").children('input').prop("checked", "");
}

// Clear monthly donation amount input
function resetMonthlySubscriptionAmount() {
	$("#monthly_subscription_amount").val("");
}

// Check if amount matches minimum donation
function isDonationAmountEnough(element) {
	if( $("#donation_amount").val() <= 0 && (!$(element).val() == "") ) {
		clearRadioSubscriptionInput();
		resetMonthlySubscriptionAmount();
		resetAmountText();
		alertDonationText();
		resetNoDonationSelectedText();
		return false;
	} else if( $("#donation_amount").val() >= 1 ) {
		clearRadioSubscriptionInput();
		resetMonthlySubscriptionAmount();
		resetDonationText();
		resetAmountText();
		resetNoDonationSelectedText();
		return true;
	} else {
		return true;
	}
}

// Reset the donation input
function resetDonation() {
	$("#donation_amount").val("");
}

// Display the donation alert text
function alertDonationText() {
	resetNoDonationSelectedText();
	$("#donation_amount_text").css('display', 'block');
}

// Hide the donation alert text
function resetDonationText() {
	$("#donation_amount_text").css('display', 'none');
}

// Display the noDonationSelectedText block
function alertNoDonationSelectedText() {
	resetAmountText();
	resetDonationText();
	$("#no_donation_selected_text").css('display', 'block');
}

// Hide the noDonationSelectedText block
function resetNoDonationSelectedText() {
	$("#no_donation_selected_text").css('display', 'none');
}