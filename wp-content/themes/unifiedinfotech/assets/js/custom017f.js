// js file

// has submenu icon
$(".desktopMenu ul li").has("ul").addClass("hasMenu")
$(".desktopMenu .hasMenu").prepend('<span class="subarrow"></span>')
// mobile menu
$(".mobileMenu ul li").has("ul").addClass("hasSubMenu")
$(".hasSubMenu").prepend('<span class="subToggle"></span>')
$(".subToggle").click(function () {
  $(this).siblings("ul").slideToggle(500)
  $(this).toggleClass("active")
})
$(".menuOpen").click(function () {
  $(".mobileMenu").addClass("show")
  $(".page-overlay").addClass("show")
})
$(".menu-close,.page-overlay").click(function () {
  $(".mobileMenu").removeClass("show")
  $(".page-overlay").removeClass("show")
  $(".mobileMenu").find("ul").removeAttr("style")
  $(".subToggle").removeClass("active")
})

// header
$(window).scroll(function () {
  var top_offset = $(window).scrollTop()
  if (top_offset > 10) {
    $(".headerMain").addClass("changeHeader")
  } else {
    $(".headerMain").removeClass("changeHeader")
  }
})
var top_offset = $(window).scrollTop()
if (top_offset > 10) {
  $(".headerMain").addClass("changeHeader")
} else {
  $(".headerMain").removeClass("changeHeader")
}

// clientSlider
var swiper = new Swiper(".clientSlider", {
  slidesPerView: 2,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1025: {
      slidesPerView: 8,
    },
  },
})

var $mycls = $(".blackFloatingForm")
if ($mycls.length) {
  $(
    ".blackFloatingForm .form-group input, .blackFloatingForm .form-group textarea"
  ).each(function () {
    $(this).focusout(function () {
      if ($(this).val() !== "") {
        $(this).addClass("has-value")
      } else {
        $(this).removeClass("has-value")
      }
    })
  })
  $("[name=phone]").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
  })
}

// Attach Resume Upload Function
$(".uploadFile").on("change", function () {
  let fileName = $(this).val()
  let fileNameMain = fileName.substring(
    fileName.lastIndexOf("\\") + 1,
    fileName.length
  )
  if (fileNameMain != "") {
    $(this).closest(".uploadGroup").find(".uploadNameText").html(fileNameMain)
    $(this).closest(".uploadGroup").find(".uploadFileName").show()
  } else {
    $(this).val("")
    $(this).closest(".uploadGroup").find(".uploadNameText").html("")
    $(this).closest(".uploadGroup").find(".uploadFileName").hide()
  }
})
$(".cancelIcon").on("click", function () {
  $(this).parent(".uploadFileName").hide()
  $(this).closest(".uploadGroup").find(".uploadFile").val("")
  $(this).closest(".uploadGroup").find(".uploadNameText").html("")
})

// clutch Slider
var swiper = new Swiper(".testiSmallSlider", {
  slidesPerView: 1,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".testiSliderMain .slider-pagination",
    clickable: true,
  },
})
// small testimonial Slider
var swiper = new Swiper(".clutchSlider", {
  slidesPerView: 1,
  loop: true,
  speed: 700,
  pagination: {
    el: ".clutchSliderWrap .slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".clutchSliderWrap .next-slide",
    prevEl: ".clutchSliderWrap .prev-slide",
  },
})
// Service Testimonial Slider
var testimonialSlide = new Swiper(
  ".service-testimonial-slide-outer .swiper-container",
  {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    pagination: {
      el: ".service-testimonial-wrapper .swiper-pagination",
      clickable: true,
    },
  }
)

// accordian
$(".accordianSec:not(.notOpen) .accList:first-child .toggleTitle").addClass(
  "active"
)
$(".accordianSec:not(.notOpen) .accList:first-child .accDesc").slideDown(300)
$(".accordianSec .toggleTitle").append("<i></i>")
$(".accordianSec .toggleTitle").click(function () {
  $(this).toggleClass("active")
  $(this).parent(".accTitle").next(".accDesc").slideToggle(300)
  $(this)
    .closest(".accList")
    .siblings(".accList")
    .find(".toggleTitle")
    .removeClass("active")
  $(this).closest(".accList").siblings(".accList").find(".accDesc").slideUp(300)
})

// approach slider
var txtslide = new Swiper(".approachSlideMenu", {
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    992: {
      direction: "vertical",
      slidesPerView: 5,
      spaceBetween: 60,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
})
var imgslide = new Swiper(".approachSlideMain", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".approachSliderSec .next-slide",
    prevEl: ".approachSliderSec .prev-slide",
  },
  thumbs: {
    swiper: txtslide,
  },
})

// Blog Slider
var featureBlogSlider = new Swiper(".featuredBlogSlider .swiper-container", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 32,
  navigation: {
    nextEl: ".featuredBlogSlider  .swiper-button-next",
    prevEl: ".featuredBlogSlider  .swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 22,
    },
  },
})

// custom Tab multicontent
$(".tabMenuMulti li:first-child").addClass("active")
$(".customTabMulti .tabPanel:first-child").show()
$(".customTabMulti .tabPanel1:first-child").show()
$(".tabMenuMulti li").click(function () {
  $(this).addClass("active")
  $(this).siblings().removeClass("active")
  $(this).closest(".customTabMulti").find(".tabPanel").hide()
  $(this).closest(".customTabMulti").find(".tabPanel1").hide()
  var index = $(this).index()
  $(this)
    .closest(".customTabMulti")
    .find(".tabPanel")
    .eq(index)
    .show()
    .addClass("active")
  $(this)
    .closest(".customTabMulti")
    .find(".tabPanel1")
    .eq(index)
    .show()
    .addClass("active")
})
// custom Tab
$(".tabMenu li:first-child").addClass("active")
$(".customTab .tabPanel:first-child").show().addClass("active")
$(".tabMenu li").click(function () {
  $(this).toggleClass("active")
  $(this).siblings().removeClass("active")
  $(this).closest(".customTab").find(".tabPanel").hide().removeClass("active")
  var index = $(this).index()
  $(this)
    .closest(".customTab")
    .find(".tabPanel")
    .eq(index)
    .show()
    .addClass("active")
})
// Function to set width and height attributes for all images
function setImagesSize() {
  // Get all images on the page
  var images = document.getElementsByTagName("img")
  // Set width and height for each image
  for (var i = 0; i < images.length; i++) {
    // Set a specific width and height (you can adjust these values)
    var x = images[i].offsetWidth
    var y = images[i].offsetHeight
    images[i].setAttribute("width", x)
    images[i].setAttribute("height", y)
  }
}

// Call the function when the page has finished loading
window.onload = setImagesSize
// Select Field Label Hide
$("select")
  .on("change", function () {
    if (this.value) {
      $(this)
        .closest(".dropdown-field")
        .find(".control-label")
        .css("opacity", "1")
    } else {
      $(this).css("opacity", "1")
    }
  })
  .change()

// $(".blackFloatingForm .dropdown-field select").css("opacity", "0")
$(".blackFloatingForm .dropdown-field .control-label").css("opacity", "0.8")
$(".blackFloatingForm .dropdown-field select").on("change", function () {
  $(this).closest(".dropdown-field").find(".control-label").addClass("hover")
})

// tab cum accordian
$(".tabPan").prepend('<span class="tabTitleHead"></span>')
$(".tabNav li").each(function () {
  var index = $(this).index()
  var tdt = $(this).text()
  $(this)
    .closest(".tabCumAccordian")
    .find(".tabPan")
    .eq(index)
    .children(".tabTitleHead")
    .text(tdt)
})
$(".tabNav li:first-child, .tabPan:first-child .tabTitleHead").addClass(
  "active"
)
$(".tabPan .tabInner").hide()
$(".tabPan:first-child .tabInner").show()
$(".tabNav li").click(function () {
  var index = $(this).index()
  $(this).siblings().removeClass("active")
  $(this).addClass("active")
  $(this).closest(".tabNav").next(".tabMain").find(".tabPan .tabInner").hide()
  $(this)
    .closest(".tabNav")
    .next(".tabMain")
    .find(".tabPan .tabTitleHead")
    .removeClass("active")
  $(this)
    .closest(".tabNav")
    .next(".tabMain")
    .find(".tabPan")
    .eq(index)
    .children(".tabInner")
    .show()
  $(this)
    .closest(".tabNav")
    .next(".tabMain")
    .find(".tabPan")
    .eq(index)
    .find(".tabTitleHead")
    .addClass("active")
  return false
})
$(".tabTitleHead").click(function () {
  var index = $(this).parent(".tabPan").index()
  $(this)
    .parent(".tabPan")
    .siblings(".tabPan")
    .children(".tabInner")
    .slideUp(200)
  $(this).next(".tabInner").slideToggle(200)
  $(this).closest(".tabMain").prev(".tabNav").find("li").removeClass("active")
  $(this)
    .closest(".tabMain")
    .prev(".tabNav")
    .find("li")
    .eq(index)
    .toggleClass("active")
  $(this)
    .parent(".tabPan")
    .siblings()
    .find(".tabTitleHead")
    .removeClass("active")
  $(this).toggleClass("active")
})
$(window).resize(function () {
  if ($(window).width() > 767) {
    $(".tabNav li.active").each(function () {
      var index = $(this).index()
      $(".tabPan").eq(index).find(".tabTitleHead").addClass("active")
      $(".tabPan").eq(index).children(".tabInner").show()
      return false
    })
  }
})

// featured client slider
var swiper = new Swiper(".featureSlider", {
  slidesPerView: 2,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
})

// industry list Slider
var swiper = new Swiper(".indSlider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".indSliderWrap .next-slide",
    prevEl: ".indSliderWrap .prev-slide",
  },
  pagination: {
    el: ".indSliderWrap .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
})

// app dev how we do slider
var swiper = new Swiper(".app-dev-how-we-do-slide-outer .swiper-container", {
  slidesPerView: 6,
  loop: false,
  speed: 800,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: { slidesPerView: 6, spaceBetween: 20 },
    768: { slidesPerView: 5, spaceBetween: 20 },
    575: { slidesPerView: 4, spaceBetween: 10 },
    318: { slidesPerView: 2, centerSlides: true, spaceBetween: 20 },
  },
})

// App Dev Device Slider
var swiper = new Swiper(".app-dev-performance-slider-outer .swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 700,
  navigation: {
    nextEl: ".app-dev-performance-slider-outer .next-slide",
    prevEl: ".app-dev-performance-slider-outer .prev-slide",
  },
  breakpoints: {
    576: { slidesPerView: 2, spaceBetween: 20 },
    800: { slidesPerView: 3, spaceBetween: 20 },
  },
})

// blog scroll
$(".blogGuid a").click(function () {
  var blogid = $(this).attr("href")
  $(this).parent("li").addClass("active")
  $(this).parent("li").siblings().removeClass("active")
  $("html, body").animate(
    {
      scrollTop: $(blogid).offset().top - 82,
    },
    600
  )
  return false
})

// related blog Slider
var swiper = new Swiper(".blogSlider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".blogSliderWrap .next-slide",
    prevEl: ".blogSliderWrap .prev-slide",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

// Project Highlight Slider
var swiper = new Swiper(".projectHighlightsSlider .swiper-container", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".projectHighlightsSlider .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    318: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
  },
})
// Project Discovery Slider
var swiper = new Swiper(".projectDiscoverySlider .swiper-container", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  speed: 800,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".projectDiscoverySlider .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    318: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
})
if($(".tech-expert-tabs").length){
  $(".tech-expert-tabs .nav li a").click(function(event){
    event.preventDefault();
    const linkHref = $(this).attr("href").substring(1);
    $(".tech-expert-tabs .nav li a").each(function(index, item){
      $(item).removeClass("active")
    })
    $(".tech-expert-tabs .list-accordian").each(function(index, item){
      $(item).removeClass("active")
    })
    $(this).addClass("active");
    //console.log('log', linkHref)
    $(`.tech-expert-tabs .list-accordian#${linkHref}`).addClass("active")
  })
}
// Tech slider
var swiper = new Swiper(".techSlideNew", {
  spaceBetween: 30,
  speed: 5000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
})
var swiper = new Swiper(".techSlideNew1", {
  spaceBetween: 30,
  speed: 5000,
  autoplay: {
    delay: 1,
    reverseDirection: true,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
})

var TestiSlider = new Swiper("#testiThumbSlide", {
  slidesPerView: 3,
  spaceBetween: 45,
  autoplay: false,
  loop: true,
  speed: 300,
  centeredSlides: true,
  // loopAdditionalSlides: 2,
  watchSlidesVisibility: !0,
  watchSlidesProgress: !0,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  },
})
// jQuery("#newTestiSlide").length &&
var swiper = new Swiper("#newTestiSlide", {
  slidesPerView: 1,
  autoplay: false,
  loop: true,
  speed: 300,
  // loopAdditionalSlides: 2,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".newTestSlider .swiper-button-next",
    prevEl: ".newTestSlider .swiper-button-prev",
  },
  pagination: {
    el: ".newTestSlider .swiper-pagination",
    type: "fraction",
  },
  thumbs: {
    swiper: TestiSlider,
  },
})
// custom rating
$(".rateBox span").click(function () {
  $(this).addClass("fill")
  $(this).prevAll("span").addClass("fill")
  $(this).nextAll("span").removeClass("fill")
  var r = $(this).text()
  $(this).closest(".rateBox").children(".totalRate").val(r)
})
$(".rateBox span").hover(function () {
  $(this).addClass("over")
  $(this).prevAll("span").addClass("over")
  $(this).nextAll("span").removeClass("over")
  $(this).closest(".rateBox").children(".customRate").addClass("rover")
})
$(".rateBox span").mouseout(function () {
  $(this).addClass("over")
  $(this).prevAll("span").removeClass("over")
  $(this).closest(".rateBox").children(".customRate").removeClass("rover")
})

$(window).on("scroll", function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height()
  var scrollPercent = (s / (d - c)) * 100
  // console.clear();
  // console.log(scrollPercent);
  $(".progressbar span").width(scrollPercent + "%")
})

// go to price
$(".gotoPrice").click(function () {
  var priceid = $(this).attr("href")
  $("html, body").animate(
    {
      scrollTop: $(priceid).offset().top - 82,
    },
    600
  )
  return false
})

// go to job apply
$(".jobBtn").click(function () {
  var jobid = $(this).attr("href")
  $("html, body").animate(
    {
      scrollTop: $(jobid).offset().top - 82,
    },
    600
  )
  return false
})
// How We Work Scroll
$(function () {
  var link = $("#navbar a.dot")

  // Move to specific section when click on menu link
  link.on("click", function (e) {
    var target = $($(this).attr("href"))
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      600
    )
    $(this).addClass("active")
    e.preventDefault()
  })

  $(window).on("scroll", function () {
    scrNav()
  })

  function scrNav() {
    var sTop = $(window).scrollTop()
    $(".content-row").each(function () {
      var id = $(this).attr("id"),
        offset = $(this).offset().top - 1,
        height = $(this).height()
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass("active")
        $("#navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active")
      }
    })
  }
  scrNav()
})
jQuery(document).on("scroll", function () {
  var pixels = $(document).scrollTop()
  var pageHeight = $(".how-we-work-wrapper").height()
  var progress = (100 * pixels) / pageHeight

  jQuery("#myBar").css("height", progress + "%")
})

$(".leading-app-development-anim-block").closest(".gutter").addClass("mb-60")
$(".portfoliovideoBanner .playBtn").click(function () {
  $(".videoPopup").fadeIn(300)
})
$(".vidClose").click(function () {
  $(".videoPopup").fadeOut(300)
})

// Fancybox
if ($("[data-fancybox]").length) {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  })
}
