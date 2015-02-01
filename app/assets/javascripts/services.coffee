$ ->
  configureFeatures()
  animateLandingElements()

animateLandingElements = ->
  #$('#copylingual').find('h1').addClass('zoomInDown animated')
  #$('#copylingual').find('.subtitle').addClass('flipInY animated')
  #$('nav').addClass('fadeInDown animated')
  $('#copylingual').find('.fa-arrow-down').addClass('pulse animated infinite')

configureFeatures = ->

  $('.navbar').css(top: -51) # Hide Navbar by default
  mainNav()
  $(window).scroll mainNav

  # Spy scroll and activate current section in the topbar
  $('body').scrollspy target: '.navbar-fixed-top'

  # Smooth scrolling for local links
  smoothScroll.init(
    speed: 400
    easing: 'easeInOutCubic'
    updateURL: yes
  )

  # Pop-up modal galleries
  $('.popup-gallery').each( ->
    $(this).magnificPopup(
      delegate: 'a'
      type: 'image'
      titleSrc: 'title'
      midClick: yes
      gallery: { enabled: yes }
    )
  )

  # Ajax-popup of blog links
  $('.blog-link').magnificPopup(
    type: 'iframe'
    callbacks:
      open: (item) ->
        $('.mfp-content').addClass('big-modal')
  )

  # Reveal animations as you scroll
  new WOW(
    duration: '2.5s'
  ).init()

# Navbar visible on scroll
mainNav = ->
  $navbar = $('.navbar')
  top = if $(window).scrollTop() > 100 then 0 else -51
  $navbar.stop().animate(top: top)

