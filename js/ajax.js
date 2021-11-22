$(function () {
  $("#formCall").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formCall").serialize();
      $.ajax({
        url: "modal.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#modal-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formReview").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formReview").serialize();
      $.ajax({
        url: "review.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#review-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formGood").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formGood").serialize();
      $.ajax({
        url: "good.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#good-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

});
