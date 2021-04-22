$(document).ready(function () {
	$("#contact").submit(function (e) {
		e.preventDefault();
		var name = $("#name").val();
		var number = $("#number").val();
		var email = $("#email").val();

		$(".error").remove();

		if (name.length < 1) {
			$("#name").after('<span class="error">Palun täitke see väli</span>');
		}

		if ($.isNumeric(number)) {
			if (number.length < 7) {
				$("#number").after('<span class="error">Palun sisestage kehtiv telefoni number</span>');
			} else if (number.length > 9) {
				$("#number").after('<span class="error">Palun sisestage kehtiv telefoni number</span>');
			}
		} else {
			$("#number").after('<span class="error">Palun sisestage kehtiv telefoni number</span>');
		}

		if (email.length < 1) {
			$("#email").after('<span class="error">Palun sisestage e-mail</span>');
		} else {
			var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
			var validEmail = regEx.test(email);
			if (!validEmail) {
				$("#email").after('<span class="error">Palun sisestage kehtiv e-mail</span>');
			}
		}
	});
});
