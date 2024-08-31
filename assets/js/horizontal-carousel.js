$('.horizontal-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  variableHeight: true,
  variableWidth: true,
  adaptiveHeight: true,
  adaptiveWidth: true,
  // arrows:true,
  centerMode: true,
  arrows: false,
  // dots:true

});

var owl1 = $(".landing-image");
var owl2 = $(".text-carousel");

owl1.on('change.owl.carousel', function (event) {
  if (event.namespace && event.property.name === 'position') {
    var target = event.relatedTarget.relative(event.property.value, true);
    owl2.owlCarousel('to', target, 300, true);
  }
})

$('.landing-img').owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  items: 1,
  autoHeight: true,
  autoWidth: true,
  margin: 100,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  rtl: true,
});
$('.text-carousel').owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  items: 1,
  autoHeight: true,
  autoWidth: true,
  margin: 60,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,

});
$('.vertical-carousel').owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  items: 3,
  autoHeight: true,
  autoWidth: true,
  margin: 60,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,

});