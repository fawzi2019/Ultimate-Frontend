$(function(){"use strict";$(".toggle-sidebar").on("click",function(){$(".content-area, .sidebar ").toggleClass("no-sidebar")}),$(".toggle-submenu").on("click",function(){$(this).find(".fa-angle-right").toggleClass("down"),$(this).next(".child-links").slideToggle()}),$(".toggle-fullscreen").on("click",function(){$(this).toggleClass("full-screen"),$(this).hasClass("full-screen")?openFullscreen():closeFullscreen()}),$(".toggle-settings").on("click",function(){$(this).toggleClass("fa-spin"),$(this).parent().toggleClass("hide-settings")})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullScreen?document.webkitExitFullScreen():document.msExitFullScreen&&document.msExitFullScreen()}const myMap=new Map,mySet=new Set;