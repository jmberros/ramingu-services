$ ->
  #$('body').on({
    #'mousewheel': (event) ->
      #unless event.target.id == 'el'
        #event.preventDefault()
        #event.stopPropagation()
  #})

  $('body').scrollspy({ target: '#sidebar-wrapper' })

  $('.collapse').collapse()

  $('.sidebar-nav a[href^="#"]').on('click', (event) ->
    #$('a[href^="#"]').removeClass('active')
    #$(this).addClass('active')
    $target = $( $(this).attr('href') )
    if $target.length
      event.preventDefault()
      $('body').animate({
        scrollTop: $target.offset().top
      }, 750)
  )

  $('.section a[href^="#"]').on('click', (event) ->
    #$target = $( $(this).attr('href') )
    #if $target.length
      #event.preventDefault()
      #$target.slideToggle()
  )

