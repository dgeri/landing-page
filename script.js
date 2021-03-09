var slider = document.querySelector(".es-text-scroll");
var secondBlock = document.querySelector(".inner-text-2");
var secondTitle = document.querySelector(".es-left-title-1");
var thirdBlock = document.querySelector(".inner-text-3");
var thirdTitle = document.querySelector(".es-left-title-2");
var thorthBlock = document.querySelector(".inner-text-4");
var thorthTitle = document.querySelector(".es-left-title-3");
slider.addEventListener("scroll", function () {
  if (
    secondBlock.getBoundingClientRect().top < 500 &&
    secondBlock.getBoundingClientRect().top > -300
  ) {
    secondTitle.style.display = "block";
  } else {
    secondTitle.style.display = "none";
  }
  if (
    thirdBlock.getBoundingClientRect().top < 500 &&
    thirdBlock.getBoundingClientRect().top > -140
  ) {
    thirdTitle.style.display = "block";
  } else {
    thirdTitle.style.display = "none";
  }
  if (
    thorthBlock.getBoundingClientRect().top < 650 &&
    thorthBlock.getBoundingClientRect().top > 0
  ) {
    thorthTitle.style.display = "block";
  } else {
    thorthTitle.style.display = "none";
  }
})(
  (function () {
    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.querySelector(".es-imgs-container").scrollLeft -= delta * 40; // Multiplied by 40
      e.preventDefault();
    }
    if (document.querySelector(".es-imgs-container").addEventListener) {
      // IE9, Chrome, Safari, Opera
      document
        .querySelector(".es-imgs-container")
        .addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document
        .querySelector(".es-imgs-container")
        .addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      // IE 6/7/8
      document
        .querySelector(".es-imgs-container")
        .attachEvent("onmousewheel", scrollHorizontally);
    }
  })()
);
