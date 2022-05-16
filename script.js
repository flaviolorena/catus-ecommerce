const menuButton = document.querySelector("#menu-icon");
const menuHidden = document.querySelector(".menu-hidden");
menuButton.addEventListener("click", () => {
  menuHidden.classList.toggle("menu-expanded");
  menuHidden.classList.toggle("menu-hidden");
});

$(".carousel").slick({
  dots: false,
  arrows: true,
  prevArrow: "<img src='./src/img/preview.svg'></img>",
  nextArrow: "<img src='./src/img/next.svg'></img>",
  infinite: false,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
$(".banner-carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
});
