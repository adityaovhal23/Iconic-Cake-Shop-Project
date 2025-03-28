

window.onscroll = () => {



menubar.classList.remove('fa-times');
navbar.classList.remove('active');

}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidePerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
}
);


function calculateBill() {
    var cakePrice = 0;
    var cakeSelection = document.getElementById("cake_selection").value;
    
    // Set cake price based on selection
    switch (cakeSelection) {
        case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;
            case "Rasmalai Cake":
            cakePrice = 399; // Example price
            break;
        case "Choco Lava Cake":
            cakePrice = 350; // Example price
            break;
            case "Creamy Butterscotch Cake":
            cakePrice = 550; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 750; // Example price
            break;
            case "Black Forest Cake":
            cakePrice = 499; // Example price
            break;
        case "Choco Stawberry Delight Cake":
            cakePrice = 650; // Example price
            break;
            case "Choco Fudge Cake":
            cakePrice = 250; // Example price
            break;
        case "Mix Fruit Cake":
            cakePrice = 550; // Example price
            break;
            case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Coffee Cup Cake":
            cakePrice = 150; // Example price
            break;
            case "Choco Oreo Cake":
            cakePrice = 489; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;
            case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;case "Red Velvet Cake":
            cakePrice = 599; // Example price
            break;
        case "Chocolate Truffle Cake":
            cakePrice = 450; // Example price
            break;
        // Add more cases for additional cake options
    }
    
    var quantity = parseInt(document.getElementById("quantity").value);
    var additionalFeatures = document.getElementById("additional_features").value.trim();
    
    // Calculate total bill
    var totalBill = (cakePrice * quantity) + (additionalFeatures.length > 0 ? 5 : 0); // Assuming additional cost for features
    
    document.getElementById("total_bill").value = totalBill.toFixed(2);
}

function validateForm() {
    // JavaScript form validation logic
    return true; // Return true if form is valid, false otherwise
}







// JavaScript for search functionality
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const searchBox = document.getElementById('search-box');
    const searchButton = document.querySelector('.bar');

    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        const searchTerm = searchBox.value.trim().toLowerCase();
        const allItems = document.querySelectorAll('.box');

        allItems.forEach(function (item) {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
