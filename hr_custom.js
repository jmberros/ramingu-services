/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
  jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
  jQuery(".preloader").delay(1000).fadeOut("slow");
})

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

$(".video-container").fitVids();


/* =================================
===  MAILCHIMP                 ====
=================================== */

//$('.mailchimp').ajaxChimp({
//    callback: mailchimpCallback,
//    url: "http://webdesign7.us6.list-manage.com/subscribe/post?u=9445a2e155b82208d73433060&amp;id=16dc80e353" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
//});

//function mailchimpCallback(resp) {
//     if (resp.result === 'success') {
//        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
//        $('.subscription-error').fadeOut(500);
//        
//    } else if(resp.result === 'error') {
//        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
//    }  
//}

/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 60, //Height of Navigation Bar
    filter: ':not(.external)',
    changeHash: true
  });
  
});


/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

if (matchMedia('(max-width: 480px)').matches) {
    $('.main-navigation a').on('click', function () {
        $(".navbar-toggle").click();
    });
}


/* NAVIGATION VISIBLE ON SCROLL */

$(document).ready(function () {
    mainNav();
});

$(window).scroll(function () {
    mainNav();
});

if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-60'});
    }
}

if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-180'});
    }
}



/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
jQuery(function( $ ){
      $('#download-button').localScroll({
        duration:1000
      });
    });


/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura); 
  
}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});


/* =================================
===  WOW ANIMATION             ====
=================================== */
wow = new WOW(
  {
    mobile: false
  });
wow.init();


/* =================================
===  OWL CROUSEL               ====
=================================== */
$(document).ready(function () {

    $("#feedbacks").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 800,
        paginationSpeed: 400,
        autoPlay: 20000,
        singleItem: true
    });

    var owl = $("#screenshots");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });


});


/* =================================
===  Nivo Lightbox              ====
=================================== */
var app = {};
app.showlogin = false;
$(document).ready(function () {

    $('#screenshots a').nivoLightbox({
        effect: 'fadeScale',
    });

    $('.login_button').click(function(){
        window.location = "http://hiringroom.com/app/main/login";
    });
});

/* =================================
===  SUBSCRIPTION FORM          ====
=================================== */
function isValidSubscriberName(name){
    if((name == '') || (name.length <3) || (name.length >30)){
    $('#subscriber-firstname').css('border', '2px solid #e53135');
    return 0;
    } else {
    $('#subscriber-firstname').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
function isValidSubscriberLastname(lastname){
    if((lastname == '') || (lastname.length <3) || (lastname.length >30)){
    $('#subscriber-lastname').css('border', '2px solid #e53135');
    return 0;
    } else {
    $('#subscriber-lastname').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
function isValidSubscriberEmail(email){
    if((email == '') || (email.length <3) || (email.length >30) || !EmailisValidEmail(email)){
    $('#subscriber-email').css('border', '2px solid #e53135');
    return 0;
    } else {
    $('#subscriber-email').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };  
function isValidAccountName(alias){
    var isValidAccount;
    $.ajax({
          type: 'POST',
          url: '/hiringroom/isAccountAlreadyExists/',
          dataType: 'json',
          async: false,
          data: {account_alias: alias},
          success: function(data) {
                 if(data == "true"){
                         isValidAccount = true;
                 }else{
                         isValidAccount = false;
                                 }                  
                 },
         error: function(err) {

         }
   });
   return isValidAccount;
}   

function isUsernameExists(username){
//    var isValidUsername;
//    $.ajax({
//          type: 'POST',
//          url: '/hiringroom/isUsernameAlreadyExists/',
//          dataType: 'json',
//          async: false,
//          data: {username: username},
//          success: function(data) {
//                 if(data == "true"){
//                         isValidUsername = true;
//                 }else{
//                         isValidUsername = false;
//                                 }                  
//                 },
//         error: function(err) {
//
//         }
//   });
//   return isValidUsername;
} 

function isValidCompanyName(name){
    
    if((name == '') || (name.length < 3) || (name.length > 30)){
    $('.company-name').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('.company-name').css('border', '1px solid #d4d3d3');
    }
    return 1;
};

function isValidDomainName(name){
    
    if((name == '') || (name.length < 3) || (name.length > 30)){
    $('.domain-name').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('.domain-name').css('border', '1px solid #d4d3d3');
    }
    return 1;
};

function isValidUsername(name){
    if((name == '') || (name.length < 4) || (name.length > 15)){
    $('.username').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('.username').css('border', '1px solid #d4d3d3');
    }
    return 1;
}

$("#subscribe-button").click(function (e) {
    //e.preventDefault();
    var validate = 0;
    var fisrtname = $("#subscriber-firstname").val();
    var lastname = $("#subscriber-lastname").val();
    var email = $("#subscriber-email").val();
    
    validate = isValidSubscriberName(fisrtname) + isValidSubscriberLastname(lastname) + isValidSubscriberEmail(email) ;
    
    var context = $(this).parent().parent();
    
    if(validate == 3){
         bootbox.dialog({
            title: "Escoge tu subdominio",
            message: "<div id='formsubmit2'>"+
                     "<div class='col-xs-12'>"+
                         "<p class='register-desc'>Antes de que te enviemos el email de confirmaciÃ³n ingresa el nombre de tu compaÃ±Ã­a y el subdominio que deseas para tu sitio de vacantes.</p>"+
                             "<div class='col-xs-12'><input type='text' class='form-control input-box company-name' placeholder='Nombre de la compaÃ±Ã­a'></div>"+
                             "<div class='col-xs-12'><input type='text' class='form-control input-box username' placeholder='Nombre de usuario'></div>"+
                             "<div class='col-xs-12'><h6 class='text-muted'>Entre 4 y 15 caracteres. No se permiten caracteres especiales ni espacios.</h6></div>"+ 
                             "<div class='col-xs-12'><p class='url-domain' style='float:left'>www.</p><div class='col-xs-6 subdomain'><input type='text' class='form-control input-box domain-name' placeholder='Ingresa un subdominio'></div><p class='url-domain' style='float:left'>.hiringroom.com</p>"+
                             "<div class='col-xs-1 btn-help'><i class='glyphicon glyphicon-question-sign text-muted'></i></div>"+
                             "</div>"+
                             "<div class='col-xs-12'><h6 class='text-muted'>26 caracteres como mÃ¡ximo. No se permiten caracteres especiales ni espacios.</h6></div>"+ 
 //                            <a href="#" id="formsubmit2-send"><?php echo $this->lang->line('send'); ?></a>
 //                            <h3><?php echo $this->lang->line('form_info_send'); ?></h3>
 //                            <a href="#" id="formsubmit2-goback"><?php echo $this->lang->line('form_back'); ?></a>
                     "</div>"+
                         "<div class='col-xs-12 error_alias'><p class='error_domain alert-danger hide'>El nombre de dominio ya existe.</p>"+
                            "<p class='error_username alert-danger hide'>El nombre de usuario ya existe.</p>"+
                         "</div>"+
                     "</div>",

            buttons: {
                 success: {
                     label: "Hecho",
                     className : "btn btn-primary btn-get-demo",
                     callback: function () {
                         
                        $(".company-name").focus( function(){
                            $('.company-name').css('border', '1px solid #00ab66');
                        });
                        $(".company-name").blur(function(){
                            $('.company-name').css('border', '1px solid #d4d3d3');
                        })
                        $(".company-name").change(function(){
                            isValidCompanyName($(".company-name").val());
                        });
                        $(".domain-name").focus( function(){
                            $('.domain-name').css('border', '1px solid #00ab66');
                        });
                        $(".domain-name").blur(function(){
                            $('.domain-name').css('border', '1px solid #d4d3d3');
                        })
                        $(".domain-name").change(function(){
                            isValidDomainName($(".domain-name").val());
                        });
                        $(".username").focus( function(){
                            $('.username').css('border', '1px solid #00ab66');
                        });
                        $(".username").blur(function(){
                            $('.username').css('border', '1px solid #d4d3d3');
                        })
                        $(".username").change(function(){
                            isValidUsername($(".username").val());
                        }); 
                         var validation = 0;
                         var domain_name = $(".domain-name").val();
                         var company = $(".company-name").val();
                         var username = $(".username").val();
                         validation += isValidCompanyName(company);
                         validation += isValidDomainName(domain_name);
                         validation += isValidUsername(username);   
                         if(validation != 3){
                             return false;
                         }
                         
//                         var isValidUs = isUsernameExists(username);
//                         if(isValidUs){
//                             $('.username').css('border', '1px solid #d4d3d3');
//                             $('#formsubmit2').find('.error_alias .error_username').addClass('hide');
//                         }else{
//                             $('.username').css('border', '1px solid #e53135');
//                             $('#formsubmit2').find('.error_alias .error_username').removeClass('hide');
//                             return false;
//                         }
                         
                         var isvalidAcc = isValidAccountName(domain_name);
                         if(isvalidAcc){
                             $('.domain-name').css('border', '1px solid #d4d3d3');
                             $('#formsubmit2').find('.error_alias .error_domain').addClass('hide');
                             var formData = new FormData();
                             formData.append("firstname", fisrtname);
                             formData.append("lastname", lastname);
                             formData.append("email", email);
                             formData.append("company", company);
                             formData.append("domain_name", domain_name);
                             formData.append("username", username);
                             $('.btn-get-demo').val("Procesando...");
                             $.ajax({
                                type: 'POST',
                                url: '/hiringroom/getDemo/',
                                //dataType: 'json',
                                async: false,
                                data: formData,
                                success: function(data) {
                                    console.log(data.result);
                                    context.find("#subscriber-firstname").val("");
                                    context.find("#subscriber-lastname").val("");
                                    context.find("#subscriber-email").val("");
                                    bootbox.dialog({
                                        title: "Tus datos han sido enviados con Ã©xito",
                                        message: "Por favor, comprueba que has recibido el email de confirmaciÃ³n en tu correo y haz click en el enlace para completar la registraciÃ³n.",
                                        buttons: {
                                            success: {
                                                label: "Volver al sitio",
                                                className: "btn-success btn-primary",
                                                callback: function() {
                                                    
                                                }
                                            }
                                        }
                                    })
                                    
                               },
                                error: function(err) {
                                   console.log("Error");
                                },
                                cache: false,
                                contentType: false,
                                processData: false
                            });
                         }else{
                             $('.domain-name').css('border', '1px solid #e53135');
                             $('#formsubmit2').find('.error_alias .error_domain').removeClass('hide');
                             return false;
                         }
                         
                     }
                 }
            }
     });
    }
});

/* =================================
===  CONTACT FORM          ====
=================================== */

function isValidName(name){
    
    if((name == '') || (name.length < 3) || (name.length > 20)){
    $('#name').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('#name').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
function EmailisValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };
function isValidEmail(email){
    if((email == '') || (email.length <10) || (email.length >50) || !EmailisValidEmail(email)){
    $('#email').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('#email').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
function isValidCompany(company){
    if((company == '') || (company.length <3) || (company.length >30)){
    $('#company').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('#company').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
function isValidPosition(position){
    if((position == '') || (position.length <3) || (position.length >30)){
    $('#position').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('#position').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
function isValidMessage(message){
    if((message == '') || (message.length <10) || (message.length >200)){
    $('#message').css('border', '1px solid #e53135');
    return 0;
    } else {
    $('#message').css('border', '1px solid #d4d3d3');
    }
    return 1;
};
$("#name").focus( function(){
    $('#name').css('border', '1px solid #00ab66');
});
$("#name").blur(function(){
    $('#name').css('border', '1px solid #d4d3d3');
})
$("#name").change(function(){
    isValidName($("#name").val());
});
$("#email").focus( function(){
    $('#email').css('border', '1px solid #00ab66');
});
$("#email").blur(function(){
    $('#email').css('border', '1px solid #d4d3d3');
});
$("#email").change(function(){
    isValidEmail($("#email").val());
});
$("#company").focus( function(){
    $('#company').css('border', '1px solid #00ab66');
});
$("#company").blur(function(){
    $('#company').css('border', '1px solid #d4d3d3');
});
$("#company").change(function(){
    isValidCompany($("#company").val());
});
$("#position").focus( function(){
    $('#position').css('border', '1px solid #00ab66');
});
$("#position").blur(function(){
    $('#position').css('border', '1px solid #d4d3d3');
});
$("#position").change(function(){
    isValidPosition($("#position").val());
});
$("#message").focus( function(){
    $('#message').css('border', '1px solid #00ab66');
});
$("#message").blur(function(){
    $('#message').css('border', '1px solid #d4d3d3');
});
$("#message").change(function(){
    isValidMessage($("#message").val());
});

$("#submit").click(function(e) {
    console.log('submit');
    var validate = 0;

    var name = $("#name").val();
    validate += isValidName(name);
    var email = $("#email").val();
    validate += isValidEmail(email);
    var company = $("#company").val();
    validate += isValidCompany(company);
    var position = $('#position').val();
    validate += isValidPosition(position);
    var message = $("#message").val();
    validate += isValidMessage(message)

    e.preventDefault();

    if (validate == 5) {
        $.ajax({
            type: 'POST',
            url: '/hiringroom/contact/',
            dataType: 'json',
            data: {name: name, email: email, company: company, position: position, message: message},
            success: function(data) {
//                $('.success').fadeIn(1000);
//                $('.error').fadeOut(500);
                bootbox.dialog({
                    message: "En unos instantes daremos respuesta a tu consulta, estamos ansiosos por enseÃ±arte Hiring Room.",
                    title: "Â¡Gracias por tu interÃ©s!",
                    buttons: {
                        success: {
                            label: "OK",
                        }
                    }
                });
            }, error: function() {

            }
        });
        $("#name").val("");
        $("#email").val("");
        $("#company").val("");
        $('#position').val("");
        $("#message").val("");
    } else {
        return false;
    }
});




/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
$('.expand-form').simpleexpand({
    'defaultTarget': '.expanded-contact-form'
});



/* =================================
===  STELLAR                    ====
=================================== */
$(window).stellar({ 
horizontalScrolling: false 
});


/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
