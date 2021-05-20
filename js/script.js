const menuBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')
const shadow = document.querySelector('#menu-shadow')

menuBtn.onclick = function() {
    menu.classList.toggle('show')
    shadow.classList.toggle('show')
}

shadow.onclick = function() {
    menu.classList.remove('show')
    shadow.classList.remove('show')
}

$('.carousel').owlCarousel({
    margin:16,
    responsiveClass:true,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        },
        1400: {
            items: 6
        }
    }
})

$('.carousel-2').owlCarousel({
    margin:16,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        1000: {
            items: 3
        },
    }
})