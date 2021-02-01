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
    // Toggle Settings
    $('.toggle-settings').on('click', function() {
      $(this)
      .find("i")
      .toggleClass('fa-spin')
      $(this)
      .parent()
      .toggleClass("hide-settings");
    });
    // Switch Colors Theme
    var themesClasses = [];
    $('.color-options li').each(function() {
      themesClasses.push($(this).data('theme'));
    });
    // console.log(themesClasses);
    $('.color-options li').on('click', function() {
      // console.log($(this).data('theme'));
      $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
      $("body")
      // .removeClass("GREEN-theme blue-theme BLUEBELL-theme RED-theme Pink-theme")
      .removeClass(themesClasses.join(" "))
      .addClass($(this).data('theme'));
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