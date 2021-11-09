// mobile menu
const menuBtn = document.querySelector(".menu-mobile-btn");
const menuModal = document.querySelector(".menu-mobile-modal-container");
const menuCloseBtn = document.querySelector(".mobile-menu-close-btn");

menuBtn.addEventListener("click", function () {
    menuModal.classList.add("show-menu");
})

menuCloseBtn.addEventListener("click", function () {
    menuModal.classList.remove("show-menu");
})

// mobile gallery
const mobileImgs = document.querySelectorAll(".mobile-img");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
let counter = 0;

function mobileSlide() {
    mobileImgs.forEach((mobileImg, index) => {
        mobileImg.classList.remove("show-mobile-img");
        if (counter === index) {
            mobileImg.classList.add("show-mobile-img");
        }
    });
}

prevBtn.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
        counter = 0;
    }
    mobileSlide();
})

nextBtn.addEventListener("click", function () {
    counter++;
    if (counter > mobileImgs.length - 1) {
        counter = mobileImgs.length - 1;
    }
    mobileSlide();
})

// desktop img
const largeImg = document.querySelector(".large-img");
const thumbNails = document.querySelectorAll(`input[name="thumbnail"]`);

thumbNails.forEach(thumbNail => {
    thumbNail.addEventListener("change", function () {
        largeImg.innerHTML = `<img src="./images/image-${thumbNail.id}.jpg" alt="${thumbNail.id}">`;
        largeImg.classList.add("large-img-animation");
        setTimeout(function () {
            largeImg.classList.remove("large-img-animation");
        }, 500)
    })
});

// lightbox
const lightbox = document.querySelector(".lightbox-container");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightboxBtn = document.querySelector(".lightbox-close-btn");
const lightboxImgs = document.querySelectorAll(".lightbox-img");
const lightboxThumbNails = document.querySelectorAll(`input[name="lightbox-thumbnail"]`);
const lightboxPrevBtn = document.querySelector("#prev-btn");
const lightboxNextBtn = document.querySelector("#next-btn");

let lightboxIndex;

largeImg.addEventListener("click", function () {
    lightbox.style.visibility = "visible";
    lightboxIndex = parseInt(largeImg.children[0].alt.slice(-1) - 1);

    lightboxImgs.forEach((lightboxImg, index) => {
        if (lightboxIndex === index) {
            lightboxImg.classList.add("show-lightbox-img");
        }
    });
    lightboxThumbNails.forEach((lightboxThumbNail, index) => {
        if (lightboxIndex === index) {
            lightboxThumbNail.checked = true;
        }
    });
})

function lightboxSlider() {
    lightboxImgs.forEach((lightboxImg, index) => {
        lightboxImg.classList.remove("show-lightbox-img");
        if (lightboxIndex === index) {
            lightboxImg.classList.add("show-lightbox-img");
        }
    });

    lightboxThumbNails.forEach((lightboxThumbNail, index) => {
        if (lightboxIndex === index) {
            lightboxThumbNail.checked = true;
        }
    });
}

lightboxPrevBtn.addEventListener("click", function () {
    lightboxIndex--;
    if (lightboxIndex < 0) {
        lightboxIndex = 0;
    }
    lightboxSlider();
})

lightboxNextBtn.addEventListener("click", function () {
    lightboxIndex++;
    if (lightboxIndex > lightboxImgs.length - 1) {
        lightboxIndex = lightboxImgs.length - 1;
    }
    lightboxSlider();
})

lightboxThumbNails.forEach((lightboxThumbNail) => {
    lightboxThumbNail.addEventListener("change", function () {
        lightboxIndex = parseInt(lightboxThumbNail.id.slice(-1)) - 1;
        lightboxSlider();
    })
});

closeLightboxBtn.addEventListener("click", function () {
    lightbox.style.visibility = "hidden";
    lightboxImgs.forEach(lightboxImg => {
        lightboxImg.classList.remove("show-lightbox-img");
    });
})

// cart
const cart = document.querySelector(".cart");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const addCartBtn = document.querySelector(".add-cart-btn");
const cartQuantity = document.querySelector(".quantity");
const cartBtn = document.querySelector(".cart-btn");
const cartNum = document.querySelector(".cart-num");
const numSpan = document.querySelector(".num");
const totalSpan = document.querySelector(".total");
const deleteBtn = document.querySelector(".delete-btn");
const cartFull = document.querySelector(".full");
const cartEmpty = document.querySelector(".empty");
const checkoutBtn = document.querySelector(".checkout-btn");

let quantity = 0;
let sum = 0;

if (sum === 0) {
    cartNum.style.display = "none";
}

minusBtn.addEventListener("click", function () {
    quantity--;
    if (quantity < 0) {
        quantity = 0;
    }
    cartQuantity.innerText = quantity;
})

plusBtn.addEventListener("click", function () {
    quantity++;
    cartQuantity.innerText = quantity;
})

addCartBtn.addEventListener("click", function () {
    sum = parseInt(cartNum.innerText) + quantity;
    cartNum.innerText = sum;
    showCart();
    numSpan.innerText = sum;
    totalSpan.innerText = `$${125 * sum}.00`;
})

cartBtn.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
    showCart();
})

checkoutBtn.addEventListener("click", function () {
    cart.classList.remove("show-cart");
})

deleteBtn.addEventListener("click", function () {
    sum = 0;
    quantity = 0;
    cartNum.innerText = quantity;
    cartQuantity.innerText = quantity;
    cartEmpty.style.display = "grid";
    cartFull.style.display = "none"
    cartNum.style.display = "none"
})

function showCart() {
    sum === 0 ?
        (cartEmpty.style.display = "grid", cartFull.style.display = "none", cartNum.style.display = "none") :
        (cartEmpty.style.display = "none", cartFull.style.display = "grid", cartNum.style.display = "block");
    quantity = 0;
    cartQuantity.innerText = 0;
}