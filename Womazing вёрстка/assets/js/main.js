  
 // fixed header   

window.onscroll = function showHeader() {
  var header = document.querySelector('.header-inner');

  if(window.pageYOffset > 800) {
      header.classList.add('header_fixed');
  } else {
      header.classList.remove('header_fixed');
  }
}

// tabs shop

  const tabBtns = document.querySelectorAll('.tabs__btn');
  const tabContents = document.querySelectorAll('.tabs-content');

  const changeClassTabBtn = element => {
    for(let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove('active');
    }
    element.classList.add('active');
  }

  tabBtns.forEach((btn,index) => {
    btn.addEventListener('click', event => {
      changeClassTabBtn(event.target);
      let currentIndex = index + 1;
      for(i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
        if(tabContents[i].dataset.contents__card == currentIndex) {
           tabContents[i].classList.add('active');
            }
        }
      })

  })

// Добавляем класс для ссылкок в вордпрессе

jQuery('.menu__item a').addClass('menu__link');


// scroll Up

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > offset ) {
      scrollUp.classList.add('scroll-active');
    } else {
      scrollUp.classList.remove('scroll-active');
    }
});  

//click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




jQuery(function ($) {

  // preloader

$(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

  // fade 

  $(window).scroll(function() {
        $('.demands__item_left').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function() {
        $('.demands__item_center').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInDown");
            }
        });
    });
    $(window).scroll(function() {
        $('.demands__item_right').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRight");
            }
        });
    });

// Menu mobile burger

  $('.burger').on('click', function() {
    $('.menu').toggleClass('active');
  })

  $('.close-menu-btn').on('click', function() {
    $('.menu').toggleClass('active')
  });


// Modal form

  $('.tel').on('click', function() {
    $('.modal-wrapper, .modal-window').fadeIn();
  });
  $('.modal-wrapper').on('click', function() {
    $(this).fadeOut();
    $(this).children().fadeOut()
  });
  $('.modal-close-btn').on('click', function() {
    $('.modal-wrapper, .modal-window').fadeOut();
  });
  $('.modal-wrapper').children().on('click', function(e) {
    e.stopPropagation();
  })
  $('.transparent-btn_thanks').on('click', function() {
    $('.modal-wrapper, .thanks-window').fadeOut();
  });

    
// slick-slider header

    $('.offer').slick({
      arrows:false,
      dots:true,
      asNavFor: '.picture' 
    });
    $('.picture').slick({
      arrows:false,
      fade:true,  
      asNavFor: '.offer'
    });  


scroll

  $(".scroll-to").on("click", function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 60
      }, 800);
  });

// Validation


  $('[data-submit-contact]').on('click', function(e) {
    e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod("regex", function(value, element, regexp) {
      let regExp = new RegExp(regexp);
      return this.optional(element) || regExp.test(value)
  }, 'Please check your input');
  

function valEl(el) {
   el.validate({
    rules: {
      firstName: {
        required: true,
        regex : "[A-Za-z]"   
      },

      email : {
        required : true
      },

      phoneNumber: {
          digits : true,
          required: true,
          minlength: 10,
          maxlength: 12,
          regex: "[0-9]+"
      },

      build: {
          digits : true,
          required: true,
          minlength: 1,
          maxlength: 10,
          regex: "[0-9]+"
      },

      flat: {
          digits : true,
          required: true,
          minlength: 1,
          maxlength: 100,
          regex: "[0-9]+"
      },

      country: {
        required: true,
        regex : "[A-Za-z]"   
      },

      town: {
        required: true,
        regex : "[A-Za-z]"   
      },

      street: {
        required: true,
        regex : "[A-Za-z]"   
      },
  },

  messages: {
      phoneNumber : {
        required: 'Введите ваш телефон',
        regex: 'Неправильно набран номер'
      },
      firstName : {
        required: 'Введите ваше имя',
        regex: 'Неправильно написано имя'
      },
      email : {
        required: 'Введите вашу почту',
        regex: 'Неправильно введена почта'
      },
      country : {
        required: 'Страна',
        regex: 'Неправильно написана страна'
      },
      town : {
        required: 'Город',
        regex: 'Неправильно написан город'
      },
      street : {
        required: 'Введите вашу улицу',
        regex: 'Неправильно написана улица'
      },
      build : {
        required: 'Номер дома',
        regex: 'Неверный номер дома'
      },
      flat : {
        required: 'Номер квартиры',
        regex: 'Неверный номер квартиры'
      },
  },

  submitHandler: function(form){
       $('#preloader-active').fadeIn();
       let $form = $(form);
       let $formId = $(form).attr('id');
       switch ($formId) {
        case 'modalForm' :
          $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: $form.serialize()
          })
          .done(function() {
            console.log('Succes');
          })
          .fail(function() {
            console.log('Fail');
          })
          .always(function() {
            setTimeout(function() {
              $form.trigger('reset');
              $('.modal-window').fadeOut();
            }, 1000);
             setTimeout(function() {
              $('#preloader-active').fadeOut();
            }, 1400);
              setTimeout(function() {
              $('.thanks-window').fadeIn();
            }, 1700);
          });
          break;
          case 'contactForm' :
          $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: $form.serialize()
            })
            .done(function() {
              console.log('Succes');
            })
            .fail(function() {
              console.log('Fail');
            })
            .always(function() {
              console.log('Always');
              setTimeout(function() {
                 $form.trigger('reset');
              }, 1000);
               setTimeout(function() {
                $('#preloader-active').fadeOut();
              }, 1400);
               setTimeout(function() {
                $('.status').fadeIn();
               }, 1700);
             });
             break;
             case 'orderForm' :
          $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: $form.serialize()
            })
            .done(function() {
              console.log('Succes');
            })
            .fail(function() {
              console.log('Fail');
            })
            .always(function() {
              console.log('Always');
              setTimeout(function() {
                 $form.trigger('reset');
              }, 1000);
               setTimeout(function() {
                $('#preloader-active').fadeOut();
              }, 1400);
               setTimeout(function() {
                $('.modal-wrapper, .thanks-window').fadeIn();
               }, 1700);
             });
             break;
           } 
           return false;   
         }
       })
     };
     $('.js-form').each(function() {
      valEl($(this));
     })
});

