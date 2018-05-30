// results slider
$(document).ready(function(){
  $('.results-slider').slick({
    inifite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
      }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '100px'
        }
      }
    ]
  });
});
$(document).ready(function(){
  // burger menu
  var burgerMenu = $('.header-top__nav');
  var burgerMenuBtn = $('.responsive-menu__btn');
  burgerMenuBtn.on('click', function () {
    burgerMenu.slideToggle('header-top__nav-list--active');
  })
  // special offer opening form
  var btnForOpeningOfferingPopup = $('.special-offer-open');
  var btnForClosingOfferingPopup = $('.special-offer-popup__close-btn');
  var specialOfferPopup = $('.special-offer-popup__wrap');

  btnForOpeningOfferingPopup.on('click', function () {
    specialOfferPopup.show();
  })
  btnForClosingOfferingPopup.on('click', function () {
    specialOfferPopup.hide();
  })
  // special offer form
  var offeringPopupEmail = $('#popup-email-address');
	var offeringPopupPhone = $('#popup-phone-number');
	var offeringPopupBtn = $('#popup-btn');
	var offeringHolder = $('#offering-form');
	var offeringMsg = $('.offering-form__msg');

	offeringPopupBtn.on('click', function (e) {
		e.preventDefault();
		var formEmail = offeringPopupEmail.val();
		var formPhoneNumb = offeringPopupPhone.val();
		
		if(formEmail.length > 0 || formPhoneNumb > 0){
			$.post('https://offers.qyksonic.com/test/offer.php', { email: formEmail, phone: formPhoneNumb }, function(response) {
				if (response.success == 1) {
					// console.log("Success!");
					window.location.href='https://qyksonic.com/products/zoe%E2%84%A2-special-offer';
					
				} else if (response.error < 0) {
					// console.log("Failed to send data");
					offeringMsg.addClass('offering-form__msg--bl')
					offeringMsg.text("Invalid e-mail address, please try again.")
				}
			});
		}else{
			// console.log("fill one of inputs");
			offeringMsg.addClass('offering-form__msg--bl');
			offeringMsg.text("Please enter your e-mail address or phone number.")
		}
		
  })
  // click outside
  $(document).click(function(event) {
    if (!$(event.target).closest(".special-offer-popup, .special-offer-open").length) {
      $("body").find(".special-offer-popup__wrap").hide() ;
    }
  });
});
