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
});
const myMap = new Map();
const mySet = new Set();;