const product1 = {
    id: 1,
    name: "Rose Eau De Parfum",
    price: 2500,
    category: "Perfume",
    rating: 4.8,
    image: "./images/perfume.png"
};


const product2 = {
    id: 2,
    name: "Nude Lip Gloss",
    price: 1200,
    category: "Makeup",
    rating: 4.6,
    image: "./images/lipgloss.avif"
};


const product3 = {
    id: 3,
    name: "Silk Skin Foundation",
    price: 2100,
    category: "Makeup",
    rating: 4.7,
    image: "images/foundation.jpg"
};


const product4 = {
    id: 4,
    name: "Golden Glow Serum",
    price: 1850,
    category: "Skincare",
    rating: 4.9,
    image: "./images/face serum.webp"
};

const products = [
    product1,
    product2,
    product3,
    product4
];

const cart = [];

const productsContainer =
    document.querySelector("#products-container");

const cartCount =
    document.querySelector(".cart-count");

const cartButton =
    document.querySelector(".cart-btn");


function displayProducts() {

    productsContainer.innerHTML = "";

    for (let i = 0; i < products.length; i++) {

        productsContainer.innerHTML += `

            <article class="product-card">

                <!-- PRODUCT IMAGE -->

                <div class="product-image">

                    <span class="product-badge">
                        BEAUTY
                    </span>

                    <button 
                        class="wishlist"
                        onclick="addToWishlist(${products[i].id})"
                    >
                        ♡
                    </button>

                    <img
                        src="${products[i].image}"
                        alt="${products[i].name}"
                    >

                    <button class="quick-view">
                        Quick View
                    </button>

                </div>


                <!-- PRODUCT INFORMATION -->

                <div class="product-info">

                    <p class="product-category">
                        ${products[i].category}
                    </p>

                    <h3>
                        ${products[i].name}
                    </h3>


                    <div class="rating">

                        ★★★★★

                        <span>
                            (${products[i].rating})
                        </span>

                    </div>


                    <div class="product-bottom">

                        <strong>
                            Rs. ${products[i].price}
                        </strong>


                        <button
                            class="add-cart"
                            onclick="addToCart(${products[i].id})"
                        >
                            Add to Cart
                        </button>

                    </div>

                </div>

            </article>

        `;
    }
}

function addToCart(productId) {
    let selectedProduct = null;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            selectedProduct = products[i];

        }
    }

    if (selectedProduct !== null) {

        cart.push(selectedProduct);

        updateCartCount();

        alert(
            selectedProduct.name +
            " added to cart!"
        );
    }
}


function updateCartCount() {

    cartCount.innerText = cart.length;

}

function addToWishlist(productId) {

    let selectedProduct = null;


    for (let i = 0; i < products.length; i++) {

        if (products[i].id === productId) {

            selectedProduct = products[i];

        }
    }


    if (selectedProduct !== null) {

        alert(
            selectedProduct.name +
            " added to wishlist ♡"
        );

    }
}


const categoryButtons =
    document.querySelectorAll(".category");


for (let i = 0; i < categoryButtons.length; i++) {

    categoryButtons[i].addEventListener(
        "click",
        function () {


            for (
                let j = 0;
                j < categoryButtons.length;
                j++
            ) {

                categoryButtons[j]
                    .classList
                    .remove("active");

            }

            this.classList.add("active");

            const selectedCategory =
                this.innerText;

            if (selectedCategory === "All") {

                showAllProducts();

            }


            else {

                showCategoryProducts(
                    selectedCategory
                );

            }

        }
    );

}


function showAllProducts() {

    productsContainer.innerHTML = "";


    for (let i = 0; i < products.length; i++) {

        createProductCard(products[i]);

    }

}


function showCategoryProducts(category) {

    productsContainer.innerHTML = "";


    for (let i = 0; i < products.length; i++) {

        if (
            products[i].category === category
        ) {

            createProductCard(products[i]);

        }

    }

}

function createProductCard(product) {

    productsContainer.innerHTML += `

        <article class="product-card">

            <div class="product-image">

                <span class="product-badge">
                    BEAUTY
                </span>

                <button
                    class="wishlist"
                    onclick="addToWishlist(${product.id})"
                >
                    ♡
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <button class="quick-view">
                    Quick View
                </button>

            </div>


            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>
                    ${product.name}
                </h3>


                <div class="rating">

                    ★★★★★

                    <span>
                        (${product.rating})
                    </span>

                </div>


                <div class="product-bottom">

                    <strong>
                        Rs. ${product.price}
                    </strong>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </article>

    `;
}


cartButton.addEventListener(
    "click",
    function () {

        if (cart.length === 0) {

            alert("Your cart is empty 🛒");

        }

        else {

            let total = 0;

            let message =
                "Your Cart:\n\n";


            for (let i = 0; i < cart.length; i++) {

                message +=
                    cart[i].name +
                    " - Rs. " +
                    cart[i].price +
                    "\n";

                total =
                    total +
                    cart[i].price;

            }


            message +=
                "\n----------------\n";

            message +=
                "Total: Rs. " +
                total;


            alert(message);

        }

    }
);


displayProducts();


updateCartCount();

