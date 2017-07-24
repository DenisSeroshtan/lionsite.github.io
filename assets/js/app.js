//preloader
window.onload = function() {
  document.querySelector('.wrapper').classList.add('loaded');
};
//countdown timer
$(function(){

  var time = new Date();
  var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
  var note = $('#note'),
      note2 = $('#note2'),
      note3 = $('#note3'),
      note4 = $('#note4'),
      note5 = $('#note5'),
      note6 = $('#note6'),
      ts = new Date(2017, 5, 14),
      newYear = true;

  if((new Date()) > ts){
    ts = target_time.valueOf()+1000*60*60*24;
    newYear = false;
  }

  $('.countdown').countdown({
    timestamp	: ts,
    callback	: function(days, hours, minutes, seconds){

      var message = "";

      message += days + " дней" + ( days==1 ? '':'' ) + ", ";
      message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
      message += minutes + " минут" + ( minutes==1 ? '':'' ) + " и ";
      message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";

      if(newYear){
        message += "";
      }
      else {
        message += "";
      }

      note.html(message);
      note2.html(message);
      note3.html(message);
      note4.html(message);
      note5.html(message);
      note6.html(message);
    }
  });

  $('.countdown2').countdown({timestamp: ts});
  $('.countdown3').countdown({timestamp: ts});
  $('.countdown4').countdown({timestamp: ts});
  $('.countdown5').countdown({timestamp: ts});
  $('.countdown6').countdown({timestamp: ts});

});

//


(function () {

  var menuSelector = ".header__nav";
  var activeClass = "active";
  var navHeight = $(menuSelector).outerHeight();

// show menu when scroll block presentation
  $(function () {
    var presentationH = $('.presentation__top').height();
    $(document).on('scroll', function (e) {
      e.preventDefault();
      var documentScroll = $(this).scrollTop();
      if (documentScroll > presentationH) {
        $(menuSelector).addClass('nav__fixed');
      }
      else $(menuSelector).removeClass('nav__fixed');
    });
  });

  // backlight menu with scroll
  function onScroll(){
    var scrollTop = $(document).scrollTop() + navHeight;
    $(menuSelector + " a").each(function(){
      var hash = $(this).attr("href");
      var target = $(hash);
      var currentScroll = target.position().top ;

      if (currentScroll <= scrollTop && currentScroll + target.outerHeight() > scrollTop) {
        $(menuSelector + " a." + activeClass).removeClass(activeClass);
        $(this).addClass(activeClass);
      } else {
        $(this).removeClass(activeClass);
      }
    });
  };
  ///smooth scroll menu
  $(function () {
    $(document).on("scroll", onScroll);
    $("a[href^=#js]").click(function(e){
      e.preventDefault();

      // $(document).on("scroll");
      // $(menuSelector + " a." + activeClass).removeClass(activeClass);
      // $(this).addClass(activeClass);
      var hash = $(this).attr("href");
      var target = $(hash);

      $("html, body").stop(true, true).animate({
        scrollTop: target.offset().top - navHeight + 1
      }, 500, function(){
        $(document).on("scroll", onScroll);
      });

    });
  });
}());
$(function() {
  var $menu = $(".nav-mobile").mmenu({
    "navbar":{
      "add" : false
    },
    "pageScroll": {
      "scroll" : true
    },
    "offCanvas": {
      "position": "right"
    }
  });
  var $icon = $(".hamburger");
  var API = $menu.data( "mmenu" );

  $icon.on( "click", function() {
    API.open();
  });

  API.bind( "open:finish", function() {
    setTimeout(function() {
      $icon.addClass( "is-active" );
    }, 100);
  });
  API.bind( "close:finish", function() {
    setTimeout(function() {
      $icon.removeClass( "is-active" );
    }, 100);
  });
});
$(function () {
  wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       100,
        mobile:       true,
        live:         true
      }
  )
  wow.init();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWRlci5qcyIsImNvdW50ZG93bi5qcyIsInNjcm9sbC5qcyIsIm1tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcHJlbG9hZGVyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG59OyIsIi8vY291bnRkb3duIHRpbWVyXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciB0YXJnZXRfdGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XHJcbiAgdmFyIG5vdGUgPSAkKCcjbm90ZScpLFxyXG4gICAgICBub3RlMiA9ICQoJyNub3RlMicpLFxyXG4gICAgICBub3RlMyA9ICQoJyNub3RlMycpLFxyXG4gICAgICBub3RlNCA9ICQoJyNub3RlNCcpLFxyXG4gICAgICBub3RlNSA9ICQoJyNub3RlNScpLFxyXG4gICAgICBub3RlNiA9ICQoJyNub3RlNicpLFxyXG4gICAgICB0cyA9IG5ldyBEYXRlKDIwMTcsIDUsIDE0KSxcclxuICAgICAgbmV3WWVhciA9IHRydWU7XHJcblxyXG4gIGlmKChuZXcgRGF0ZSgpKSA+IHRzKXtcclxuICAgIHRzID0gdGFyZ2V0X3RpbWUudmFsdWVPZigpKzEwMDAqNjAqNjAqMjQ7XHJcbiAgICBuZXdZZWFyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAkKCcuY291bnRkb3duJykuY291bnRkb3duKHtcclxuICAgIHRpbWVzdGFtcFx0OiB0cyxcclxuICAgIGNhbGxiYWNrXHQ6IGZ1bmN0aW9uKGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKXtcclxuXHJcbiAgICAgIHZhciBtZXNzYWdlID0gXCJcIjtcclxuXHJcbiAgICAgIG1lc3NhZ2UgKz0gZGF5cyArIFwiINC00L3QtdC5XCIgKyAoIGRheXM9PTEgPyAnJzonJyApICsgXCIsIFwiO1xyXG4gICAgICBtZXNzYWdlICs9IGhvdXJzICsgXCIg0YfQsNGB0L7QslwiICsgKCBob3Vycz09MSA/ICcnOicnICkgKyBcIiwgXCI7XHJcbiAgICAgIG1lc3NhZ2UgKz0gbWludXRlcyArIFwiINC80LjQvdGD0YJcIiArICggbWludXRlcz09MSA/ICcnOicnICkgKyBcIiDQuCBcIjtcclxuICAgICAgbWVzc2FnZSArPSBzZWNvbmRzICsgXCIg0YHQtdC60YPQvdC0XCIgKyAoIHNlY29uZHM9PTEgPyAnJzonJyApICsgXCIgPGJyIC8+XCI7XHJcblxyXG4gICAgICBpZihuZXdZZWFyKXtcclxuICAgICAgICBtZXNzYWdlICs9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZSArPSBcIlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBub3RlLmh0bWwobWVzc2FnZSk7XHJcbiAgICAgIG5vdGUyLmh0bWwobWVzc2FnZSk7XHJcbiAgICAgIG5vdGUzLmh0bWwobWVzc2FnZSk7XHJcbiAgICAgIG5vdGU0Lmh0bWwobWVzc2FnZSk7XHJcbiAgICAgIG5vdGU1Lmh0bWwobWVzc2FnZSk7XHJcbiAgICAgIG5vdGU2Lmh0bWwobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb3VudGRvd24yJykuY291bnRkb3duKHt0aW1lc3RhbXA6IHRzfSk7XHJcbiAgJCgnLmNvdW50ZG93bjMnKS5jb3VudGRvd24oe3RpbWVzdGFtcDogdHN9KTtcclxuICAkKCcuY291bnRkb3duNCcpLmNvdW50ZG93bih7dGltZXN0YW1wOiB0c30pO1xyXG4gICQoJy5jb3VudGRvd241JykuY291bnRkb3duKHt0aW1lc3RhbXA6IHRzfSk7XHJcbiAgJCgnLmNvdW50ZG93bjYnKS5jb3VudGRvd24oe3RpbWVzdGFtcDogdHN9KTtcclxuXHJcbn0pO1xyXG5cclxuLy9cclxuIiwiXG4oZnVuY3Rpb24gKCkge1xuXG4gIHZhciBtZW51U2VsZWN0b3IgPSBcIi5oZWFkZXJfX25hdlwiO1xuICB2YXIgYWN0aXZlQ2xhc3MgPSBcImFjdGl2ZVwiO1xuICB2YXIgbmF2SGVpZ2h0ID0gJChtZW51U2VsZWN0b3IpLm91dGVySGVpZ2h0KCk7XG5cbi8vIHNob3cgbWVudSB3aGVuIHNjcm9sbCBibG9jayBwcmVzZW50YXRpb25cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByZXNlbnRhdGlvbkggPSAkKCcucHJlc2VudGF0aW9uX190b3AnKS5oZWlnaHQoKTtcbiAgICAkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBkb2N1bWVudFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICAgICBpZiAoZG9jdW1lbnRTY3JvbGwgPiBwcmVzZW50YXRpb25IKSB7XG4gICAgICAgICQobWVudVNlbGVjdG9yKS5hZGRDbGFzcygnbmF2X19maXhlZCcpO1xuICAgICAgfVxuICAgICAgZWxzZSAkKG1lbnVTZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ25hdl9fZml4ZWQnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gYmFja2xpZ2h0IG1lbnUgd2l0aCBzY3JvbGxcbiAgZnVuY3Rpb24gb25TY3JvbGwoKXtcbiAgICB2YXIgc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyBuYXZIZWlnaHQ7XG4gICAgJChtZW51U2VsZWN0b3IgKyBcIiBhXCIpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciBoYXNoID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgIHZhciB0YXJnZXQgPSAkKGhhc2gpO1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSB0YXJnZXQucG9zaXRpb24oKS50b3AgO1xuXG4gICAgICBpZiAoY3VycmVudFNjcm9sbCA8PSBzY3JvbGxUb3AgJiYgY3VycmVudFNjcm9sbCArIHRhcmdldC5vdXRlckhlaWdodCgpID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgICQobWVudVNlbGVjdG9yICsgXCIgYS5cIiArIGFjdGl2ZUNsYXNzKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIC8vL3Ntb290aCBzY3JvbGwgbWVudVxuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgJChcImFbaHJlZl49I2pzXVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gJChkb2N1bWVudCkub24oXCJzY3JvbGxcIik7XG4gICAgICAvLyAkKG1lbnVTZWxlY3RvciArIFwiIGEuXCIgKyBhY3RpdmVDbGFzcykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgLy8gJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG4gICAgICB2YXIgaGFzaCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgICB2YXIgdGFyZ2V0ID0gJChoYXNoKTtcblxuICAgICAgJChcImh0bWwsIGJvZHlcIikuc3RvcCh0cnVlLCB0cnVlKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gbmF2SGVpZ2h0ICsgMVxuICAgICAgfSwgNTAwLCBmdW5jdGlvbigpe1xuICAgICAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9KTtcbn0oKSk7IiwiJChmdW5jdGlvbigpIHtcbiAgdmFyICRtZW51ID0gJChcIi5uYXYtbW9iaWxlXCIpLm1tZW51KHtcbiAgICBcIm5hdmJhclwiOntcbiAgICAgIFwiYWRkXCIgOiBmYWxzZVxuICAgIH0sXG4gICAgXCJwYWdlU2Nyb2xsXCI6IHtcbiAgICAgIFwic2Nyb2xsXCIgOiB0cnVlXG4gICAgfSxcbiAgICBcIm9mZkNhbnZhc1wiOiB7XG4gICAgICBcInBvc2l0aW9uXCI6IFwicmlnaHRcIlxuICAgIH1cbiAgfSk7XG4gIHZhciAkaWNvbiA9ICQoXCIuaGFtYnVyZ2VyXCIpO1xuICB2YXIgQVBJID0gJG1lbnUuZGF0YSggXCJtbWVudVwiICk7XG5cbiAgJGljb24ub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgQVBJLm9wZW4oKTtcbiAgfSk7XG5cbiAgQVBJLmJpbmQoIFwib3BlbjpmaW5pc2hcIiwgZnVuY3Rpb24oKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRpY29uLmFkZENsYXNzKCBcImlzLWFjdGl2ZVwiICk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG4gIEFQSS5iaW5kKCBcImNsb3NlOmZpbmlzaFwiLCBmdW5jdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGljb24ucmVtb3ZlQ2xhc3MoIFwiaXMtYWN0aXZlXCIgKTtcbiAgICB9LCAxMDApO1xuICB9KTtcbn0pO1xuJChmdW5jdGlvbiAoKSB7XG4gIHdvdyA9IG5ldyBXT1coXG4gICAgICB7XG4gICAgICAgIGJveENsYXNzOiAgICAgJ3dvdycsXG4gICAgICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJyxcbiAgICAgICAgb2Zmc2V0OiAgICAgICAxMDAsXG4gICAgICAgIG1vYmlsZTogICAgICAgdHJ1ZSxcbiAgICAgICAgbGl2ZTogICAgICAgICB0cnVlXG4gICAgICB9XG4gIClcbiAgd293LmluaXQoKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
