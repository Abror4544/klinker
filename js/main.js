$(function () {
  $(".menu_open").click(function () {
    $(".header-nav__menu, body").addClass("active");
  });

  $(".menu_close").click(function () {
    $(".header-nav__menu, body").removeClass("active");
  });

  var swiper = new Swiper(".adv-slider", {
    spaceBetween: 15,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".adv-button-next",
      prevEl: ".adv-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
      },
      767: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3.5,
      },
    },
  });

  var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 35,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });


  $(".close_thanks").click(function () {
    $.fancybox.close({
      href: "javascript:;",
      src: "#thanks",
    });
  })

  const orderBtn = document.querySelectorAll(".catalog__order")
  const orderName = document.querySelectorAll(".catalog__title")


  for (let i = 0; i < orderBtn.length; i++) {
    $(orderBtn[i]).on("click", () => {
      $("#good-form .title").text($(orderName[i]).text())
      $("input.hidden").val($(orderName[i]).text())
    })
  }

  $("input").on("keyup", (e) => {
    console.log(e.target.value);
  })





  /* ************** calculator select ******************* */
});
