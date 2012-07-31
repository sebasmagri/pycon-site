(function ($) {
    $.fn.delayKeyup = function(callback, ms){
        var timer = 0;
        $(this).keyup(function(){                   
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        });
        return $(this);
    };
})(jQuery);


var PYCON = {
    init: function () {
        $('[rel=popover]').popover()
        
        
        $(".show-form-speakers").click(function() {
        	$(".form-attendees").fadeOut(200, function(){
        		$(".form-speakers").fadeIn(500);
        	});
			
			$("#f-speakers").addClass("active");
			$("#f-attendees").removeClass("active");
		});

		$(".show-form-attendees").click(function() {
			$(".form-speakers").fadeOut(200, function(){
				$(".form-attendees").fadeIn(500);
			});
			$("#f-speakers").removeClass("active");
			$("#f-attendees").addClass("active");
		});

        var _countError = function(){

            var cantErrors = 0;

            if ($('#id_first_name').val().length < 1) cantErrors ++;
            if ($('#id_last_name').val().length < 1) cantErrors ++;
            if ($('#id_email').val().length < 1) cantErrors ++;
            if ($('#id_password').val().length < 1) cantErrors ++;
            if ($('#id_confirm_password').val().length < 1) cantErrors ++;
            if ($('#id_country option:selected').val() == "" ) cantErrors ++;

            var cantDivError = $("#register").find('.alert-error:visible').length;

            if (cantErrors > 0 || cantDivError > 0) {
                $('.form-actions > button').addClass('disabled');
                $('.form-actions > button').attr('disabled','disabled');
                

                //$('form').
                //$('form').disableOnSubmit();
            }
            else {
                $('.form-actions > button').removeClass('disabled');
                $('.form-actions > button').removeAttr('disabled');

            }
            
        }

        var _checkComboBox = function(idComboBox){
            $(idComboBox).on("change", (function(){
                var idComboBoxSelected = idComboBox + " option:selected";
                if ($(idComboBoxSelected).val() == "") {
                    $(idComboBoxSelected).parent().parent().parent().parent().find('.span5').hide();
                    $(idComboBoxSelected).parent().parent().parent().after('<div class="span5 alert alert-error"> Este campo es obligatorio </div>');
                }
                else {
                    $(idComboBoxSelected).parent().parent().parent().parent().find('.span5').hide();
                }
                _countError();
                
            }));
            $(idComboBox).on("change", (function(){
                var idComboBoxSelected = idComboBox + " option:selected";
                if ($(idComboBoxSelected).val() == "19") {
                    $('#register > div:eq(5)').css("display", "block");
                }
                else {
                    $('#register > div:eq(5)').css("display", "none");
                }
            }));
        }

        var _checkInputText = function (idInputText){
            $(idInputText).on("keyup", (function(){
                if ($(idInputText).val() == "") {
                    $(idInputText).parent().parent().parent().find('.span5').hide();
                    $(idInputText).parent().parent().after('<div class="span5 alert alert-error"> Este campo es obligatorio </div>');
                }
                if ((idInputText) == '#id_email'){
                    if ($(idInputText).val().indexOf('@', 0) == -1 || $(idInputText).val().indexOf('.', 0) == -1) {
                        $(idInputText).parent().parent().parent().find('.span5').hide();
                        $(idInputText).parent().parent().after('<div class="span5 alert alert-error"> Este campo debe corresponder a un correo electrónico </div>');
                    }
                }
                _countError();
            }));
            $(idInputText).on("keydown", (function(){
                if ($(idInputText).val().length > 0) {
                   $(idInputText).parent().parent().parent().find('.span5').hide();
                }
            }));
            
        }
        var _checkInputTextEqual = function(idInputText1, idInputText2){

            $(idInputText2).on("keyup", (function(){
                if ($(idInputText2).val() != $(idInputText1).val()) {
                    $(idInputText2).parent().parent().parent().find('.span5').hide();
                    $(idInputText2).parent().parent().after('<div class="span5 alert alert-error">Las contraseñas no coinciden</div>');
                }
                else {
                    $(idInputText2).parent().parent().parent().find('.span5').hide();
                    $(idInputText1).parent().parent().parent().find('.span5').hide();
                }
                _countError();
            }));
            $(idInputText1).on("keyup", (function(){
                if ($(idInputText1).val() != $(idInputText2).val()) {
                    $(idInputText1).parent().parent().parent().find('.span5').hide();
                    $(idInputText1).parent().parent().after('<div class="span5 alert alert-error">Las contraseñas no coinciden</div>');
                }
                else {
                    $(idInputText2).parent().parent().parent().find('.span5').hide();
                    $(idInputText1).parent().parent().parent().find('.span5').hide();
                }
                _countError();
            }));
        }
        

        var idInputTexts = ["#id_first_name","#id_last_name","#id_email","#id_password","#id_confirm_password"];
        for (var i = 0; i < idInputTexts.length ; i++) {
            _checkInputText(idInputTexts[i]);
        };
        
        //_checkInputTextEqual('#id_password', '#id_confirm_password');
        _checkInputTextEqual('#id_confirm_password', '#id_password');
        _checkComboBox('#id_country');
        $('#register > div:eq(5)').hide();
        $('.form-actions > button').addClass('disabled');

        $('header ul a').bind('click',function(event){
            var $anchor = $(this);
     
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 500,'easeInOutExpo');
            event.preventDefault();
        });
        
        $("#form").keypress(function(e) {
            if (e.which == 13) {
            return false;
            }
        });
        $('#ra').roundabout({
            autoplay: true,
            autoplayDuration: 5000,
            autoplayPauseOnHover: true,
            enableDrag: true
        });

        $('#slider').s3Slider({
            timeOut: 5000
        });
    }
}

$(document).ready(function () {PYCON.init();});
