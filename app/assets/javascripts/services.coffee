$ ->
  configureFeatures()
  animateLandingElements()

animateLandingElements = ->
  #$('#copylingual').find('h1').addClass('zoomInDown animated')
  #$('#copylingual').find('.subtitle').addClass('flipInY animated')
  $('nav').addClass('fadeInDown animated')
  $('#copylingual').find('.fa-arrow-down').addClass('pulse animated infinite')

configureFeatures = ->
  # Spy scroll and activate current section in the topbar
  $('body').scrollspy target: '.navbar-fixed-top'

  # Smooth scrolling for local links
  smoothScroll.init(
    speed: 400
    easing: 'easeInOutCubic'
    updateURL: yes
  )

  # Carousel
  #$('.slick-carousel').slick
    #infinite: true
    #slidesToShow: 3
    #slidesToScroll: 3

  # Reveal animations as you scroll
  new WOW({
    duration: '2.5s'
  }).init()

