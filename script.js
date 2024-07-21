const $left = $(".left");
const $right = $(".right");
const $container = $(".container");

$left.on("mouseenter", function () {
  $container.addClass("hover-left");
});

$left.on("mouseleave", function () {
  $container.removeClass("hover-left");
});

$right.on("mouseenter", function () {
  $container.addClass("hover-right");
});

$right.on("mouseleave", function () {
  $container.removeClass("hover-right");
});

// const left = document.querySelector(".left");
// const right = document.querySelector(".right");
// const container = document.querySelector(".container");

// left.addEventListener("mouseenter", () =>
//   container.classList.add("hover-left")
// );
// left.addEventListener("mouseleave", () =>
//   container.classList.remove("hover-left")
// );

// right.addEventListener("mouseenter", () =>
//   container.classList.add("hover-right")
// );
// right.addEventListener("mouseleave", () =>
//   container.classList.remove("hover-right")
// );
