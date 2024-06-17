$(document).ready(function () {
  // Click event handler for opening popup
  $(".popup_open_symptom").click(function () {
    var popupId = $(this).attr("id");
    console.log("Clicked Popup ID: " + popupId);

    $("#" + popupId)
      .next(".history_popup")
      .removeClass("d-none");
  });

  // Click event handler for closing popup
  $(".symp_pop_close, .popup_ok").click(function () {
    let popCloseBtn = $(this).parent().parent().parent();
    popCloseBtn.addClass("d-none");
  });

   $(".user_pannel").click(function () {
     $(".user_account").toggleClass("display_block");
   });
});
