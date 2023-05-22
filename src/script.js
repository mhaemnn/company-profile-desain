// services
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  prevArrow: '.arrow_prev',
  nextArrow: '.arrow_right',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
          breakpoint: 850,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 650,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

btnMenu.onclick = () => {
  btnMenu.classList.toggle("fa-times");
  menu.classList.toggle("active");
};
toggleSwitch.addEventListener("change", switchTheme, false);

// addEvenLisner
function toggleForm() {
  var form = document.getElementById("form");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}