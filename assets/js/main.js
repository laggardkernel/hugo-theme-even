$(document).ready(function () {
  Even.backToTop();
  Even.mobileNavbar();
  Even.toc();
  Even.fancybox();
  $(window).scroll(function(){
    $(".top-progress-bar").attr("style", "width: " + ($(this).scrollTop() / ($(document).height() - $(this).height()) * 100) + "%; display: block;");
  });
});

Even.responsiveTable();
Even.flowchart();
Even.sequence();

if (window.hljs) {
  hljs.initHighlighting();
  Even.highlight();
} else {
  Even.chroma();
}

