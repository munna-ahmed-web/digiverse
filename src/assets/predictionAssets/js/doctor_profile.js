$(document).ready(function () {
  $(".calender_left_arrow").click(function () {
    $(".dr_calender_year_contents").each(function (index) {
      const curentItem = $(this);
      const curentIndex = index;

      if (index > 0) {
        if (curentItem.hasClass("translate_0")) {
          curentItem.addClass("translate-100");
          curentItem.removeClass("translate_0");

          $(".dr_calender_year_contents").each(function (newIndex) {
            if (curentIndex - 1 == newIndex) {
              $(this).addClass("translate_0");
            }
          });
        }
      }
    });
  });

  $(".calender_right_arrow").click(function () {
    const totalLength = $(".dr_calender_year_contents").length;

    let shouldContinue = true;

    $(".dr_calender_year_contents").each(function (index) {
      const curentItem = $(this);
      const curentIndex = index;

      if (shouldContinue) {
        if (curentIndex === totalLength - 1) {
          // Do something if it's the last item
        } else {
          if (curentItem.hasClass("translate_0")) {
            curentItem.removeClass("translate_0");
            curentItem.next().removeClass("translate-100");
            curentItem.next().addClass("translate_0");

            // Set shouldContinue to false to break out of the loop
            shouldContinue = false;
          }
        }
      }
    });
  });



  //Calender Focus
  $(".cNumber").click(function(){
    currentElement = $(this);
   if(currentElement.hasClass("calender_data_focus")){

   }
   else{
    $(".cNumber").removeClass("calender_data_focus");
    currentElement.addClass("calender_data_focus");
   }   
  });
});
