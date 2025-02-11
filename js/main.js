(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    

    // Product data for jewelry items
    const jewelryProducts = [
        {
            id: 1,
            name: "Diamond Solitaire Ring",
            price: 1999.99,
            oldPrice: 2499.99,
            image: "img/product-1.jpg",
            category: "rings"
        },
        {
            id: 2,
            name: "Pearl Necklace",
            price: 899.99,
            oldPrice: 1099.99,
            image: "img/product-2.jpg",
            category: "necklaces"
        },
        {
            id: 3,
            name: "Sapphire Earrings",
            price: 799.99,
            oldPrice: 999.99,
            image: "img/product-3.jpg",
            category: "earrings"
        },
        {
            id: 4,
            name: "Gold Bracelet",
            price: 599.99,
            oldPrice: 749.99,
            image: "img/product-4.jpg",
            category: "bracelets"
        },
        {
            id: 5,
            name: "Diamond Tennis Bracelet",
            price: 2999.99,
            oldPrice: 3499.99,
            image: "img/product-5.jpg",
            category: "bracelets"
        },
        {
            id: 6,
            name: "Emerald Ring",
            price: 1499.99,
            oldPrice: 1899.99,
            image: "img/product-6.jpg",
            category: "rings"
        },
        {
            id: 7,
            name: "Ruby Pendant",
            price: 899.99,
            oldPrice: 1199.99,
            image: "img/product-7.jpg",
            category: "necklaces"
        },
        {
            id: 8,
            name: "Diamond Stud Earrings",
            price: 1299.99,
            oldPrice: 1599.99,
            image: "img/product-8.jpg",
            category: "earrings"
        }
    ];

    // Update category counts
    const categoryCount = {
        rings: 15,
        necklaces: 12,
        earrings: 18,
        bracelets: 10,
        pendants: 8,
        watches: 20
    };

})(jQuery);

