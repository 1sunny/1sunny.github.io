var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    var a = new Array("life", "is", "but","a","span");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 5,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "#4d4d4d"
    });
    $("body").append($i);
    $i.animate({
        "top": y - 50,
        "opacity": 0
      },
      1000,
      function () {
        $i.remove();
      });
  });
  setTimeout('delay()', 1000);
});

function delay() {
  $(".buryit").removeAttr("onclick");
}
