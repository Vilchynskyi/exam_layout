// Hamburger menu 

let mobileMenu = document.querySelector(".mobile_menu");
let mainMenu = document.querySelector(".navigation");
let main = document.querySelector(".main")

mobileMenu.addEventListener("click", function() {
	mobileMenu.classList.toggle("active_menu");
	if (mobileMenu.classList.contains("active_menu")) {
		mainMenu.classList.add("active_menu");
	} else {
		mainMenu.classList.remove("active_menu")
    }
    main.classList.toggle("main_transition")
})

// let menuItem = document.querySelectorAll(".menu_item")
// for (i=0; i < menuItem.length; i++) {
// 	menuItem[i].addEventListener("click", function() {
// 		mobileMenu.classList.remove("active_menu");
// 		mainMenu.classList.remove("active_menu");
// 	})
// }


// boards slider

$(document).ready(function(){
    $(".boards_slider").owlCarousel({
        nav: true,
        navText: ["<img src='images/arrow1.png'>","<img src='images/right1.png'>"],
        items: "1",
        dots: false,
    })
})


// team slider

$(document).ready(function(){
    $(".team_slider").owlCarousel({
      items: "4",
      margin: -20,
      mergeFit: true,
      nav: true,
      navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
      dots: false, 
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:4,
        }
    }
    });
  });


