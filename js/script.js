
let mainSwiper  = new Swiper(".page",{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: "vertical",
    slidesPerView: "auto",
    parallax: true,
    keyboard:{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel:{
      sensitivity: 1,
    },
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    watchOverflow: true,
    pagination:{
        el: ".page__pagination",
        type: "bullets",
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active"
    },
    scrollbar:{
        el: ".page__scroll",
        dragClass: "page__drag-scroll",
        draggable: true
    }
})


// let bodyToggle = true;
//
// document.getElementById("hamburger-menu").addEventListener("click",function (){
//
//     this.classList.toggle("hamburger-menu_active")
//     document.getElementById("hamburger-opened-menu").classList.toggle("hamburger-opened-menu_active")
//     let hamburgerElement = document.getElementsByClassName("hamburger-opened-menu__element");
//     let accelerator = 0.95
//
//     if(bodyToggle){
//         document.body.style.overflow="hidden"
//         bodyToggle =! bodyToggle
//
//         for( let i =0;i<hamburgerElement.length;i++){
//             accelerator *= 1.02;
//             hamburgerElement[i].style.transition= accelerator + "s";
//             hamburgerElement[i].style.opacity= "1"
//             hamburgerElement[i].style.marginRight= "0"
//
//         }
//
//     }
//     else{
//         document.body.style.overflow="auto"
//         bodyToggle =! bodyToggle
//         for( let i =0;i<hamburgerElement.length;i++){
//             hamburgerElement[i].style.transition=  "0s";
//             hamburgerElement[i].style.opacity= "0"
//             hamburgerElement[i].style.marginRight= "65px"
//
//         }
//
//
//     }
//
//
//
//
// })
