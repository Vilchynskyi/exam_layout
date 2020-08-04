// Hamburger menu 

let mobileMenu = document.querySelector(".mobile_menu");
let mainMenu = document.querySelector(".navigation");
let main = document.querySelector(".main");

mobileMenu.addEventListener("click", function() {
	mobileMenu.classList.toggle("active_menu");
	if (mobileMenu.classList.contains("active_menu")) {
		mainMenu.classList.add("active_menu");
	} else {
		mainMenu.classList.remove("active_menu");
    }
    main.classList.toggle("main_transition");
})


$(document).mouseup(function(e){
    let $header = $('.header');
    if (!$header.is(e.target) // The target of the click isn't the container.
    && $header.has(e.target).length === 0) // Nor a child element of the container
    {
        $(".navigation").removeClass("active_menu");
        $(".mobile_menu").removeClass("active_menu");
        $(".main").removeClass("main_transition");
    }
});


// jquery method

// let $mobileMenu = $(".mobile_menu");
// let $mainMenu = $(".navigation");
// let $main = $(".main");
// $(document).ready(function(){
//     $mobileMenu.click(function(){
//         $mobileMenu.toggleClass("active_menu");
//         $main.toggleClass("main_transition");
//         if ($mobileMenu.hasClass("active_menu")){
//             $mainMenu.addClass("active_menu")
//         } else {
//             $mainMenu.removeClass("active_menu")
//         }
//     });
// });



// let menuItem = document.querySelectorAll(".menu_item")
// for (i=0; i < menuItem.length; i++) {
// 	menuItem[i].addEventListener("click", function() {
// 		mobileMenu.classList.remove("active_menu");
// 		mainMenu.classList.remove("active_menu");
// 	})
// }


// menu background color animation


$(function(){
    $(document).scroll(function(){
        let header = $(".header");
        let menu = $(".menu");
        header.toggleClass("scrolled", $(this).scrollTop() > header.height());
        menu.toggleClass("scrolled", header.hasClass("scrolled"));
    });
});



// boards slider


$('.boards_slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider_counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
        nav: true,
        navText: ["<img src='images/arrow1.png'>","<img src='images/right1.png'>"],
        items: "1",
        dots: false,
        responsive:{
            992:{
                mouseDrag:false,
            }
        },
        slideTransition: "ease-in-out",
        smartSpeed: 600,
  });


// team slider

$(document).ready(function(){
    $(".team_slider").owlCarousel({
        items: "4",
        margin: -40,
        slideBy: 4,
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


// instagram 

(function($){
    $(window).on('load', function(){
        $.instagramFeed({
            'username': 'wsl',
            'container': "#instagramFeed",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 4,
            'items_per_row': 2,
            'margin': 0,
            'lazy_load': true,
            'on_error': console.error,
            "image_size": 640,
        });
    });
})(jQuery);


// tabs 

let listOfCharacteristicBlocks = document.querySelectorAll(".board_characteristics_block");

let listOfButtonBlocks = [].map.call(listOfCharacteristicBlocks, function(characteristicBlocks){
    // console.log(characteristicBlocks)
    let buttons = characteristicBlocks.querySelectorAll("button");
    // console.log(buttons)
    let changeTab = [].map.call(buttons, function(btn){
        // console.log(btn)
        let currentTitlesBlock = characteristicBlocks.querySelector(".characteristic_titles")
        let currentActiveTitle = currentTitlesBlock.querySelector(".active")
        let currentSlider = characteristicBlocks.querySelector(".title_slider")

        let actWidth = $(currentTitlesBlock).find(".active").width();
        let actPosition = $(currentActiveTitle).position();
        $(currentSlider).css({"left":+ actPosition.left,"width": actWidth});

        btn.addEventListener("click", function(){
            for (i=0; i<buttons.length; i++){
                buttons[i].classList.remove("active")
            }
            let allTexts = characteristicBlocks.querySelectorAll("p")
            for (i=0; i<allTexts.length; i++){
                allTexts[i].classList.remove("active")
            }
            dataTarget = btn.getAttribute('data-target');
            characteristicBlocks.getElementsByClassName(dataTarget)[0].classList.add("active")
            btn.classList.add("active");

            let position = $(btn).position();
            let width = $(btn).width();
            $(currentSlider).css({"left":+ position.left,"width":width});
        })
        return btn;
    })
    return characteristicBlocks;
})
