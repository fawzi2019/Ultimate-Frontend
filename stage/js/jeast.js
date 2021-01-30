$(function() {
    'use strict';
    $('.toggle-sidebar').on('click', function () {
        $('.content-area, .sidebar ').toggleClass('no-sidebar');
    });
    // Toggle-Submenu
    $('.toggle-submenu').on('click', function () {
        //  $(this).toggleClass('fa-angle-right fa-angle-down');
        $(this).find('.fa-angle-right')
        .toggleClass("down");
        $(this)
        //   .parent("a")
          .next(".child-links")
          .slideToggle();
    });
    // Open / Close FullScreen
    $('.toggle-fullscreen').on('click', function () {
      $(this).toggleClass('full-screen');
      if ($(this).hasClass('full-screen')) { /* Page Is Now FullScreen*/
        openFullscreen();
      } else { /* Page Is Now Not FullScreen*/
        closeFullscreen();
      }
    });
});



/* Get The documentElement <html> to display the page in fullscreen*/
var elem = document.documentElement;

/*View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /*Firefox*/
       elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /*Chrome, Safari and Opera */
       elem.webkitRequestFullscreen();
    } else if (msRequestFullscreen) { /* IE/Edge */
       elem.msRequestFullscreen();
    }
}

/*View in fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullScreen) { /* Chrome, Safari and Opera */
       document.webkitExitFullScreen();
    } else if (document.msExitFullScreen) {/* IE/Edge */
       document.msExitFullScreen();
    }
}