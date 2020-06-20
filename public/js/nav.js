var toggleAffix = function(affixElement, scrollElement, wrapper) {
    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;

    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }
};

/* use toggleAffix on any data-toggle="affix" elements */
$('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');

    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, $(this), wrapper);
    });

    // init
    toggleAffix(ele, $(window), wrapper);
});


$(window).scroll(function() {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('affix');
     
    } else {
      $('.navbar').removeClass('affix');
      
    }
  });