$('#title').change(function(){
    if( $(this).val() == 'other'){
        $('#other-title').show();
    }else{
        $('#other-title').hide();
    }
});

$('#design').change(function (){
    $("#color").val("");

    if( $(this).val()=='js puns') {
        $(" #color option[value=\"cornflowerblue\"] ").show();
        $(" #color option[value=\"darkslategrey\"] ").show();
        $(" #color option[value=\"gold\"] ").show();
        $(" #color option[value=\"tomato\"] ").hide();
        $(" #color option[value=\"steelblue\"] ").hide();
        $(" #color option[value=\"dimgrey\"] ").hide();
    }

    else if( $(this).val()=='heart js'){
        $(" #color option[value=\"cornflowerblue\"] ").hide();
        $(" #color option[value=\"darkslategrey\"] ").hide();
        $(" #color option[value=\"gold\"] ").hide();
        $(" #color option[value=\"tomato\"] ").show();
        $(" #color option[value=\"steelblue\"] ").show();
        $(" #color option[value=\"dimgrey\"] ").show();

    }

    else {
        $(" #color option[value=\"cornflowerblue\"] ").hide();
        $(" #color option[value=\"darkslategrey\"] ").hide();
        $(" #color option[value=\"gold\"] ").hide();
        $(" #color option[value=\"tomato\"] ").hide();
        $(" #color option[value=\"steelblue\"] ").hide();
        $(" #color option[value=\"dimgrey\"] ").hide();

    }
});

$(function() {
    $('input').change(function () {
        var val = $(this).attr("name");

        if (val == "js-frameworks") {
            $("input[name='express']").prop("disabled", $(this).is(":checked"));
            $("input[name='express']").prop("checked", false);

        } else if (val == "express") {
            $("input[name='js-frameworks']").prop("disabled", $(this).is(":checked"));
            $("input[name='js-frameworks']").prop("checked", false);

        } else if (val == "node") {
            $("input[name='js-libs']").prop("disabled", $(this).is(":checked"));
            $("input[name='js-libs']").prop("checked", false);
        } else if (val == "js-libs") {
            $("input[name='node']").prop("disabled", $(this).is(":checked"));
            $("input[name='node']").prop("checked", false);
        } else if (val == "all") {
            $("input[name='express']").prop("disabled", $(this).is(":checked"));
            $("input[name='express']").prop("checked", false);
            $("input[name='js-frameworks']").prop("disabled", $(this).is(":checked"));
            $("input[name='js-frameworks']").prop("checked", false);
            $("input[name='node']").prop("disabled", $(this).is(":checked"));
            $("input[name='node']").prop("checked", false);
            $("input[name='js-libs']").prop("disabled", $(this).is(":checked"));
            $("input[name='js-libs']").prop("checked", false);
            $("input[name='build-tools']").prop("disabled", $(this).is(":checked"));
            $("input[name='build-tools']").prop("checked", false);
            $("input[name='npm']").prop("disabled", $(this).is(":checked"));
            $("input[name='npm']").prop("checked", false);
        }
    })
}
);

    $("form").submit(function() {
        var name = $.trim($('#name').val());

        // Check if empty of not

        if (name === '') {
            //alert('Text-field is empty.');
            //style.css("border", "1px solid red");
            $('#nameError').html("Name-field is empty.").css("color", "red");
            return false;
        }
        $('#nameError').html("");

        var mail = $.trim($('#mail').val());
        if (mail === '') {
            $('#emailError').html("Email field is empty.").css("color", "red");
            return false;
        }

        $('#emailError').html("");

        if (isEmail(mail) == false) {
            $('#emailError').html("Email format is wrong.").css("color", "red");
            return false;
        }

        var i = 0;
        $('input[type="checkbox"]').each(function () {

            if ($(this).is(":checked")) {
                i += 1;
                return true;
            }
            //else if ($(this).is(":not(:checked)")) {

            //}


        });
        if (i == 0) {
            $('#activityError').html("Check at least one event.").css("color", "red");
            return false;
        }

        var paymentMethod = $.trim($('select[id="payment"]').val());

        if (paymentMethod == "credit-card"){


            //Payment Info
            $('#cardnumberError').html("");

            var cardnumber = $.trim($('input[id="cc-num"]').val());

            if (!isNumber(cardnumber)) {
                $('#cardnumberError').html("Enter a numeric value.").css("color", "red");
                return false;
            }

            if (cardnumber.length < 13 || cardnumber.length > 16) {
                $('#cardnumberError').html("Card number has to be between 13 and 16.").css("color", "red");
                return false;
            }


            $('#zipcodeError').html("");

            var zipcode = $.trim($('input[id="zip"]').val());

            if (!isNumber(zipcode)) {
                $('#zipcodeError').html("Enter a numeric value.").css("color", "red");
                return false;
            }

            if (zipcode.length != 5) {
                $('#zipcodeError').html("Zip code has to be 5 numbers long.").css("color", "red");
                return false;
            }

            var cvv = $.trim($('input[id="cvv"]').val());

            if (!isNumber(cvv)) {
                $('#CVVError').html("Enter a numeric value.").css("color", "red");
                return false;
            }

            if (cvv.length != 3) {
                $('#CVVError').html("CVV has to be 3 numbers long.").css("color", "red");
                return false;
            }
        }
    }
);

function isNumber(num) {
    var isnum = /^\d+$/.test(num);
    return isnum;
}


function isEmail(mail) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(mail);
}


$('#payment').change(function () {
    if ($(this).val() == 'paypal') {
        $("#paypal").show();
        $("#credit-card").hide();
        $("#bitcoin").hide();
    }

    else if ($(this).val() == 'bitcoin')
    {
        $("#bitcoin").show();
        $("#paypal").hide();
        $("#credit-card").hide();
    }

    else if ($(this).val() == 'credit-card')
    {
        $("#bitcoin").hide();
        $("#paypal").hide();
        $("#credit-card").show();

    }
});

