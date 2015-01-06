$ ->
  $('#fullpage').fullpage({
    # Navigation
    #menu: true,
    anchors: [], # ['presentation', 'copywriting', 'translation'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['presentation', 'copywriting', 'translation'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    ## Scrolling
    css3: true,
    scrollingspeed: 200,
    autoscrolling: true,
    scrollbar: true,
    easing: 'easeinquart',
    easingcss3: 'ease',
    loopbottom: false,
    looptop: false,
    loophorizontal: true,
    continuousvertical: false,
    #normalscrollelements: '#element1, .element2',
    scrolloverflow: false,
    touchsensitivity: 15,
    normalscrollelementtouchthreshold: 5,

    ## Accessibility
    keyboardScrolling: true,
    #animateAnchor: true,

    ## Design
    controlArrows: true,
    verticalCentered: true,
    resize : false,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsive: 0,

    ## Custom selectors
    #sectionSelector: '.section',
    #slideSelector: '.slide',

    ## events
    onLeave: (index, nextIndex, direction) -> {},
    afterLoad: (anchorLink, index) -> {},
    afterRender: () -> {},
    afterResize: () -> {},
    afterSlideLoad: (anchorLink, index, slideAnchor, slideIndex) -> {},
    onSlideLeave: (anchorLink, index, slideIndex, direction) -> {}
  })
