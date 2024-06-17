
let sitebarmenu = document.querySelectorAll(".nav-link_aside");

for (let i = 0; i < sitebarmenu.length; i++) {
  sitebarmenu[i].addEventListener("click", function () {
    let activeClas = document.querySelector(".active");
    if (activeClas && activeClas.classList.contains("active")) {
      activeClas.classList.remove("active");
    }
    this.classList.add("active");
  });
}


// Popup open for predict btn
let predic_btn = document.querySelectorAll(".popup_open");
for (let i = 0; i < predic_btn.length; i++) {
  predic_btn[i].addEventListener("click", function () {
    let popup = document.querySelector(".symtomp_popup");
    popup.classList.add("display_block");
  });
}

// Symtomp popup btn close
let popup_close = document.querySelectorAll(".dep_popup_close");
for (let i = 0; i < popup_close.length; i++) {
  popup_close[i].addEventListener("click", function () {
    let popup = this.parentElement.parentElement.parentElement;
    popup.classList.remove("display_block");
  });
}




// Search bar
let searchbtn = document.querySelector(".symptom_search_btn_profile");
searchbtn.addEventListener("focus", function () {
  this.classList.add("display_none");
  let searchbar = document.querySelector(".symtomp_h_form_div form");
  searchbar.classList.add("display_block");
});


// Bootstrap live search
 $(document).ready(function () {
   $(
     "#selectBox1, #selectBox2, #selectBox3, #selectBox4, #selectBox5, #selectBox6"
   ).select2();
   $(
     "#selectBox1, #selectBox2, #selectBox3, #selectBox4, #selectBox5, #selectBox6"
   ).select2({
     width: "100%",
   });

   Datepicker;
   $("#fullCalendar").fullCalendar({
     header: {
       left: "prev,next today",
       center: "title",
       right: "month,agendaWeek,agendaDay",
     },
     defaultView: "month",
     events: [
       {
         title: "Event 1",
         start: "2024-01-31",
       },
       {
         title: "Event 2",
         start: "2024-02-01",
         end: "2024-02-03",
       },
       // Add more events as needed
     ],
   });

 });

 

$(document).ready(function(){
  // Location Search
  $(".location_select").selectpicker();
})



// user logout
$(document).ready(function(){
  $(".user_pannel").click(function () {
    $(".user_account").toggleClass("display_block");
  });
})



