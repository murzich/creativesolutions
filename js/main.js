!function(){var e=new google.maps.Map(document.getElementById("map"),{center:{lat:47.815,lng:35.1703},zoom:17,disableDefaultUI:!0,unitSystem:google.maps.UnitSystem.METRIC});new google.maps.Marker({position:{lat:47.81615,lng:35.170192},map:e,title:"Here we are!",icon:{path:"M32.07 0c-7.9.17-15.54 4.1-19.78 11.02-1.86 3.02-2.4 12.85-2.4 12.85v28.92s17.82-6.2 27.91-9.46c6.88-2.87 12.79-6.57 15.06-10.27 6.47-10.54 2.62-24.02-8.58-30.11A24.48 24.48 0 0 0 32.07 0zm.87 9.34c6.37 0 11.54 4.86 11.54 10.86 0 6-5.17 10.85-11.54 10.85-6.37 0-11.54-4.86-11.54-10.85 0-6 5.17-10.86 11.54-10.86z",fillColor:"#60606e",fillOpacity:1,anchor:new google.maps.Point(9,52),strokeWeight:0,scale:1}})}(),$(window).scroll(function(){$(window).scrollTop()>100?$(".menu").addClass("_scroll"):$(".menu").removeClass("_scroll")}),$(document).ready(function(){$(".menu__toggler").click(function(){$(".navbar-collapse").toggleClass("collapse _show"),$("body").toggleClass("_active-menu")}),$(".menu__link").click(function(){$(".navbar-collapse").removeClass("_show").addClass("collapse"),$("body").removeClass("_active-menu")})}),$(document).ready(function(){var e,t=0,o=5,n=$(".menu").outerHeight();$(window).scroll(function(t){e=!0}),setInterval(function(){e&&(!function(){var e=$(this).scrollTop();if(Math.abs(t-e)<=o)return;e>t&&e>n?($(".menu").removeClass("nav-down").addClass("nav-up"),$("a").blur()):e+$(window).height()<$(document).height()&&$(".menu").removeClass("nav-up").addClass("nav-down");t=e}(),e=!1)},250)}),$('a[href*="#"]').not('[href="#"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}}),$(document).ready(function(){$("#slider--works").slick({lazyLoad:"ondemand",dots:!0,nextArrow:'<svg class="slick-next works__arrow"><use xlink:href="./img/svg-icons.svg#arrow-right" /></svg>',prevArrow:'<svg class="slick-prev works__arrow"><use xlink:href="./img/svg-icons.svg#arrow-left" /></svg>'}),$("#slider--teams").slick({dots:!1,nextArrow:'<svg class="slick-next team__arrow"><use xlink:href="./img/svg-icons.svg#arrow-right" /></svg>',prevArrow:'<svg class="slick-prev team__arrow"><use xlink:href="./img/svg-icons.svg#arrow-left" /></svg>',infinite:!1,speed:300,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]})}),function(){var e,t;e=this,t=function(){function e(e,t){if(t){var o=!e.getAttribute("viewBox")&&t.getAttribute("viewBox"),n=document.createDocumentFragment(),s=t.cloneNode(!0);for(o&&e.setAttribute("viewBox",o);s.childNodes.length;)n.appendChild(s.firstChild);e.appendChild(n)}}function t(t){t.onreadystatechange=function(){if(4===t.readyState){var o=document.createElement("x");o.innerHTML=t.responseText,t.s.splice(0).map(function(t){e(t[0],o.querySelector("#"+t[1].replace(/(\W)/g,"\\$1")))})}},t.onreadystatechange()}return function(o){o=o||{};var n=document.getElementsByTagName("use"),s="shim"in o?o.shim:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,a=o.validate,i=window.requestAnimationFrame||setTimeout,r={};s&&function o(){for(var l;l=n[0];){var c=l.parentNode;if(c&&/svg/i.test(c.nodeName)){var d=l.getAttribute("xlink:href");if(s&&(!a||a(d,c,l))){var u=d.split("#"),g=u[0],m=u[1];if(c.removeChild(l),g.length){var v=r[g]=r[g]||new XMLHttpRequest;v.s||(v.s=[],v.open("GET",g),v.send()),v.s.push([c,m]),t(v)}else e(c,document.getElementById(m))}}}i(o,17)}()}},"function"==typeof define&&define.amd?define([],function(){return e.svg4everybody=t()}):"object"==typeof exports?module.exports=t():e.svg4everybody=t(),"#nofill"!==location.hash&&svg4everybody()}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibWFwIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJ6b29tIiwiZGlzYWJsZURlZmF1bHRVSSIsInVuaXRTeXN0ZW0iLCJVbml0U3lzdGVtIiwiTUVUUklDIiwiTWFya2VyIiwicG9zaXRpb24iLCJ0aXRsZSIsImljb24iLCJwYXRoIiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJhbmNob3IiLCJQb2ludCIsInN0cm9rZVdlaWdodCIsInNjYWxlIiwiJCIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZWFkeSIsImNsaWNrIiwidG9nZ2xlQ2xhc3MiLCJkaWRTY3JvbGwiLCJsYXN0U2Nyb2xsVG9wIiwiZGVsdGEiLCJuYXZiYXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImV2ZW50Iiwic2V0SW50ZXJ2YWwiLCJzdCIsInRoaXMiLCJNYXRoIiwiYWJzIiwiYmx1ciIsImhlaWdodCIsImhhc1Njcm9sbGVkIiwibm90IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsInRhcmdldCIsImhhc2giLCJsZW5ndGgiLCJzbGljZSIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsIm9mZnNldCIsInRvcCIsIiR0YXJnZXQiLCJmb2N1cyIsImlzIiwiYXR0ciIsInNsaWNrIiwibGF6eUxvYWQiLCJkb3RzIiwibmV4dEFycm93IiwicHJldkFycm93IiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFycm93cyIsImEiLCJiIiwiYyIsImdldEF0dHJpYnV0ZSIsImQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZSIsImNsb25lTm9kZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkTm9kZXMiLCJhcHBlbmRDaGlsZCIsImZpcnN0Q2hpbGQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInJlc3BvbnNlVGV4dCIsInMiLCJzcGxpY2UiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmIiwic2hpbSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImciLCJ2YWxpZGF0ZSIsImgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiaSIsImoiLCJwYXJlbnROb2RlIiwibm9kZU5hbWUiLCJrIiwibCIsInNwbGl0IiwibSIsIm4iLCJyZW1vdmVDaGlsZCIsIm8iLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwicHVzaCIsImRlZmluZSIsImFtZCIsInN2ZzRldmVyeWJvZHkiLCJleHBvcnRzIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiQ0FFQyxXQUVELElBQUlBLEVBQU0sSUFBSUMsT0FBT0MsS0FBS0MsSUFBSUMsU0FBU0MsZUFBZSxRQUNwREMsUUFBU0MsSUFBSyxPQUFTQyxJQUFLLFNBQzVCQyxLQUFNLEdBQ05DLGtCQUFrQixFQUNsQkMsV0FBWVYsT0FBT0MsS0FBS1UsV0FBV0MsU0FHeEIsSUFBSVosT0FBT0MsS0FBS1ksUUFDM0JDLFVBQVdSLElBQUssU0FBV0MsSUFBSyxXQUNoQ1IsSUFBS0EsRUFDTGdCLE1BQU8sZUFDUEMsTUFDRUMsS0FBTSwyVEFDTkMsVUFBVyxVQUNYQyxZQUFhLEVBQ2JDLE9BQVEsSUFBSXBCLE9BQU9DLEtBQUtvQixNQUFNLEVBQUUsSUFDaENDLGFBQWMsRUFDZEMsTUFBTyxLQW5CVixHQTBCQUMsRUFBRUMsUUFBUUMsT0FBTyxXQUVaRixFQUFFQyxRQUFRRSxZQUFjLElBQ3hCSCxFQUFFLFNBQVNJLFNBQVMsV0FFcEJKLEVBQUUsU0FBU0ssWUFBWSxhQUk1QkwsRUFBRXJCLFVBQVUy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aWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gbWFwLmpzXHJcbjsoZnVuY3Rpb24oKSB7XHJcblxyXG52YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICBjZW50ZXI6IHtsYXQ6IDQ3LjgxNTAsIGxuZzogMzUuMTcwM30sXHJcbiAgem9vbTogMTcsXHJcbiAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICB1bml0U3lzdGVtOiBnb29nbGUubWFwcy5Vbml0U3lzdGVtLk1FVFJJQyxcclxufSk7XHJcblxyXG52YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgcG9zaXRpb246IHtsYXQ6IDQ3LjgxNjE1MCwgbG5nOiAzNS4xNzAxOTJ9LFxyXG4gIG1hcDogbWFwLFxyXG4gIHRpdGxlOiBcIkhlcmUgd2UgYXJlIVwiLFxyXG4gIGljb246IHtcclxuICAgIHBhdGg6IFwiTTMyLjA3IDBjLTcuOS4xNy0xNS41NCA0LjEtMTkuNzggMTEuMDItMS44NiAzLjAyLTIuNCAxMi44NS0yLjQgMTIuODV2MjguOTJzMTcuODItNi4yIDI3LjkxLTkuNDZjNi44OC0yLjg3IDEyLjc5LTYuNTcgMTUuMDYtMTAuMjcgNi40Ny0xMC41NCAyLjYyLTI0LjAyLTguNTgtMzAuMTFBMjQuNDggMjQuNDggMCAwIDAgMzIuMDcgMHptLjg3IDkuMzRjNi4zNyAwIDExLjU0IDQuODYgMTEuNTQgMTAuODYgMCA2LTUuMTcgMTAuODUtMTEuNTQgMTAuODUtNi4zNyAwLTExLjU0LTQuODYtMTEuNTQtMTAuODUgMC02IDUuMTctMTAuODYgMTEuNTQtMTAuODZ6XCIsXHJcbiAgICBmaWxsQ29sb3I6ICcjNjA2MDZlJyxcclxuICAgIGZpbGxPcGFjaXR5OiAxLFxyXG4gICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoOSw1MiksXHJcbiAgICBzdHJva2VXZWlnaHQ6IDAsXHJcbiAgICBzY2FsZTogMVxyXG4gIH0sXHJcbn0pO1xyXG5cclxufSkoKTtcclxuXG4vLyBtZW51LmpzXHJcbjskKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cclxuICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICQoJy5tZW51JykuYWRkQ2xhc3MoJ19zY3JvbGwnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgICAkKCcubWVudScpLnJlbW92ZUNsYXNzKCdfc2Nyb2xsJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbjskKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICQoJy5tZW51X190b2dnbGVyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubmF2YmFyLWNvbGxhcHNlJykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlIF9zaG93Jyk7XHJcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ19hY3RpdmUtbWVudScpO1xyXG4gIH0pO1xyXG4gICQoJy5tZW51X19saW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubmF2YmFyLWNvbGxhcHNlJykucmVtb3ZlQ2xhc3MoJ19zaG93JykuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XHJcbiAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ19hY3RpdmUtbWVudScpOyAgICBcclxuICB9KTtcclxufSk7XHJcblxyXG47JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAvLyBIaWRlIEhlYWRlciBvbiBvbiBzY3JvbGwgZG93blxyXG4gIHZhciBkaWRTY3JvbGw7XHJcbiAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gIHZhciBkZWx0YSA9IDU7XHJcbiAgdmFyIG5hdmJhckhlaWdodCA9ICQoJy5tZW51Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbihldmVudCl7XHJcbiAgICAgIGRpZFNjcm9sbCA9IHRydWU7XHJcbiAgfSk7XHJcblxyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoZGlkU2Nyb2xsKSB7XHJcbiAgICAgICAgICBoYXNTY3JvbGxlZCgpO1xyXG4gICAgICAgICAgZGlkU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICB9LCAyNTApO1xyXG5cclxuICBmdW5jdGlvbiBoYXNTY3JvbGxlZCgpIHtcclxuICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGV5IHNjcm9sbCBtb3JlIHRoYW4gZGVsdGFcclxuICAgICAgaWYoTWF0aC5hYnMobGFzdFNjcm9sbFRvcCAtIHN0KSA8PSBkZWx0YSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgXHJcbiAgICAgIC8vIElmIHRoZXkgc2Nyb2xsZWQgZG93biBhbmQgYXJlIHBhc3QgdGhlIG5hdmJhciwgYWRkIGNsYXNzIC5uYXYtdXAuXHJcbiAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHlvdSBuZXZlciBzZWUgd2hhdCBpcyBcImJlaGluZFwiIHRoZSBuYXZiYXIuXHJcbiAgICAgIGlmIChzdCA+IGxhc3RTY3JvbGxUb3AgJiYgc3QgPiBuYXZiYXJIZWlnaHQpe1xyXG4gICAgICAgICAgLy8gU2Nyb2xsIERvd25cclxuICAgICAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ25hdi1kb3duJykuYWRkQ2xhc3MoJ25hdi11cCcpO1xyXG4gICAgICAgICAgJCgnYScpLmJsdXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNjcm9sbCBVcFxyXG4gICAgICAgICAgaWYoc3QgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPCAkKGRvY3VtZW50KS5oZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ25hdi11cCcpLmFkZENsYXNzKCduYXYtZG93bicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBsYXN0U2Nyb2xsVG9wID0gc3Q7XHJcbiAgfVxyXG59KTtcclxuLy8gbWVudS5qcyBFTkRcbi8vIFNlbGVjdCBhbGwgbGlua3Mgd2l0aCBoYXNoZXNcclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG47JCgnYVtocmVmKj1cIiNcIl0nKVxyXG4gIC8vIFJlbW92ZSBsaW5rcyB0aGF0IGRvbid0IGFjdHVhbGx5IGxpbmsgdG8gYW55dGhpbmdcclxuICAubm90KCdbaHJlZj1cIiNcIl0nKVxyXG4gIC8vIC5ub3QoJ1tocmVmPVwiIzBcIl0nKVxyXG4gIC5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgLy8gT24tcGFnZSBsaW5rc1xyXG4gICAgaWYgKFxyXG4gICAgICBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSBcclxuICAgICAgJiYgXHJcbiAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcclxuICAgICkge1xyXG4gICAgICAvLyBGaWd1cmUgb3V0IGVsZW1lbnQgdG8gc2Nyb2xsIHRvXHJcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuICAgICAgLy8gRG9lcyBhIHNjcm9sbCB0YXJnZXQgZXhpc3Q/XHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gT25seSBwcmV2ZW50IGRlZmF1bHQgaWYgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGdvbm5hIGhhcHBlblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMTAwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAvLyBDYWxsYmFjayBhZnRlciBhbmltYXRpb25cclxuICAgICAgICAgIC8vIE11c3QgY2hhbmdlIGZvY3VzIVxyXG4gICAgICAgICAgdmFyICR0YXJnZXQgPSAkKHRhcmdldCk7XHJcbiAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7XHJcbiAgICAgICAgICBpZiAoJHRhcmdldC5pcyhcIjpmb2N1c1wiKSkgeyAvLyBDaGVja2luZyBpZiB0aGUgdGFyZ2V0IHdhcyBmb2N1c2VkXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICR0YXJnZXQuYXR0cigndGFiaW5kZXgnLCctMScpOyAvLyBBZGRpbmcgdGFiaW5kZXggZm9yIGVsZW1lbnRzIG5vdCBmb2N1c2FibGVcclxuICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuLy8gfSk7XG4vLyBzbGlkZXIuanNcclxuOyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgJCgnI3NsaWRlci0td29ya3MnKS5zbGljayh7XHJcbiAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBuZXh0QXJyb3c6ICc8c3ZnIGNsYXNzPVwic2xpY2stbmV4dCB3b3Jrc19fYXJyb3dcIj48dXNlIHhsaW5rOmhyZWY9XCIuL2ltZy9zdmctaWNvbnMuc3ZnI2Fycm93LXJpZ2h0XCIgLz48L3N2Zz4nLFxyXG4gICAgcHJldkFycm93OiAnPHN2ZyBjbGFzcz1cInNsaWNrLXByZXYgd29ya3NfX2Fycm93XCI+PHVzZSB4bGluazpocmVmPVwiLi9pbWcvc3ZnLWljb25zLnN2ZyNhcnJvdy1sZWZ0XCIgLz48L3N2Zz4nLFxyXG4gIH0pO1xyXG4gICQoJyNzbGlkZXItLXRlYW1zJykuc2xpY2soe1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBuZXh0QXJyb3c6ICc8c3ZnIGNsYXNzPVwic2xpY2stbmV4dCB0ZWFtX19hcnJvd1wiPjx1c2UgeGxpbms6aHJlZj1cIi4vaW1nL3N2Zy1pY29ucy5zdmcjYXJyb3ctcmlnaHRcIiAvPjwvc3ZnPicsXHJcbiAgICBwcmV2QXJyb3c6ICc8c3ZnIGNsYXNzPVwic2xpY2stcHJldiB0ZWFtX19hcnJvd1wiPjx1c2UgeGxpbms6aHJlZj1cIi4vaW1nL3N2Zy1pY29ucy5zdmcjYXJyb3ctbGVmdFwiIC8+PC9zdmc+JyxcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIH1cclxuICAgICAgfV1cclxuICB9KTtcclxufSk7XHJcbi8vIHNsaWRlci5qcyBFTkRcbjsoZnVuY3Rpb24oKXtcbiFmdW5jdGlvbihhLGIpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gYS5zdmc0ZXZlcnlib2R5PWIoKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTphLnN2ZzRldmVyeWJvZHk9YigpfSh0aGlzLGZ1bmN0aW9uKCl7LyohIHN2ZzRldmVyeWJvZHkgdjIuMC4wIHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbmZ1bmN0aW9uIGEoYSxiKXtpZihiKXt2YXIgYz0hYS5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpJiZiLmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIiksZD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksZT1iLmNsb25lTm9kZSghMCk7Zm9yKGMmJmEuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLGMpO2UuY2hpbGROb2Rlcy5sZW5ndGg7KWQuYXBwZW5kQ2hpbGQoZS5maXJzdENoaWxkKTthLmFwcGVuZENoaWxkKGQpfX1mdW5jdGlvbiBiKGIpe2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoND09PWIucmVhZHlTdGF0ZSl7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInhcIik7Yy5pbm5lckhUTUw9Yi5yZXNwb25zZVRleHQsYi5zLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oYil7YShiWzBdLGMucXVlcnlTZWxlY3RvcihcIiNcIitiWzFdLnJlcGxhY2UoLyhcXFcpL2csXCJcXFxcJDFcIikpKX0pfX0sYi5vbnJlYWR5c3RhdGVjaGFuZ2UoKX1mdW5jdGlvbiBjKGMpe2Z1bmN0aW9uIGQoKXtmb3IodmFyIGM7Yz1lWzBdOyl7dmFyIGo9Yy5wYXJlbnROb2RlO2lmKGomJi9zdmcvaS50ZXN0KGoubm9kZU5hbWUpKXt2YXIgaz1jLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7aWYoZiYmKCFnfHxnKGssaixjKSkpe3ZhciBsPWsuc3BsaXQoXCIjXCIpLG09bFswXSxuPWxbMV07aWYoai5yZW1vdmVDaGlsZChjKSxtLmxlbmd0aCl7dmFyIG89aVttXT1pW21dfHxuZXcgWE1MSHR0cFJlcXVlc3Q7by5zfHwoby5zPVtdLG8ub3BlbihcIkdFVFwiLG0pLG8uc2VuZCgpKSxvLnMucHVzaChbaixuXSksYihvKX1lbHNlIGEoaixkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuKSl9fX1oKGQsMTcpfWM9Y3x8e307dmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksZj1cInNoaW1cImluIGM/Yy5zaGltOi9cXGJFZGdlXFwvMTJcXGJ8XFxiVHJpZGVudFxcL1s1NjddXFxifFxcYlZlcnNpb25cXC83LjAgU2FmYXJpXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpfHwobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJLaXRcXC8oXFxkKykvKXx8W10pWzFdPDUzNyxnPWMudmFsaWRhdGUsaD13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0LGk9e307ZiYmZCgpfXJldHVybiBjfSk7XG5pZiAobG9jYXRpb24uaGFzaCAhPT0gJyNub2ZpbGwnKSB7c3ZnNGV2ZXJ5Ym9keSgpO307XG59KSgpOyJdfQ==