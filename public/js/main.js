    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  let navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
      $("#guitar").css({fill: '#157d17'});
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
      $("#guitar").css({fill: '#fff'});
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  
  // Embed latest youtube video from channel
  let channelID = "UCt9gSAPExmOmecTkO8SJbKw";
  let reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
  $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
    let link = data.items[0].link;
    let id = link.substr(link.indexOf("=")+1);
    $("#youtube_video").attr("src","https://www.youtube-nocookie.com/embed/"+id + "?showinfo=0&rel=0");
  });
  
})(jQuery); // End of use strict
