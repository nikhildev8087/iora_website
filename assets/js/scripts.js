window.addEventListener('DOMContentLoaded', () => {
    if ($(window).width() > 769) {
    let scrollPos = 0;
    const mainNavi = document.getElementById('mainNavi');
    const headerHeight = mainNavi.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNavi.classList.contains('is-fixed')) {
                mainNavi.classList.add('is-visible');
            } else {
                console.log(123);
                mainNavi.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNavi.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNavi.classList.contains('is-fixed')) {
                mainNavi.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
};
})


// Alert
$(document).ready(function() {
    $("#success-alert").hide();
    $("#newsletterbtn").click(function showAlert() {
      $("#success-alert").fadeTo(3000, 500).slideUp(500, function() {
        $("#success-alert").slideUp(500);
      });
    });
  });

//   To top
$(document).ready(function() {
    var scrollTop = $(".totop");
    $(window).scroll(function() {
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
      } else {
        $(scrollTop).css("opacity", "0");
      }
    });
  
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      return false;
    });
  });