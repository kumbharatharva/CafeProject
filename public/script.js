let menu = [];

let cart = [];


// ================= LOAD MENU =================

async function loadMenu() {

    try {

        const response = await fetch("/api/menu");

        menu = await response.json();

        displayMenu(menu);

    } catch (error) {

        console.error("Menu loading failed:", error);

    }

}


// ================= DISPLAY MENU =================

function displayMenu(items) {

    const container =
        document.getElementById("menuContainer");

    container.innerHTML = "";


    items.forEach(item => {

        const card =
            document.createElement("article");

        card.className = "menu-card";


        card.innerHTML = `

            <div class="menu-card-image">

                <img
                    src="${item.image}?auto=format&fit=crop&w=700&q=85"
                    alt="${item.name}"
                >

                <span class="menu-category">
                    ${getCategoryName(item.category)}
                </span>

            </div>


            <div class="menu-card-content">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>


                <div class="menu-bottom">

                    <span class="price">
                        ₹${item.price}
                    </span>


                    <button
                        class="add-button"
                        onclick="addToCart(${item.id})"
                    >
                        +
                    </button>

                </div>

            </div>
        `;


        container.appendChild(card);

    });

}


// ================= CATEGORY NAME =================

function getCategoryName(category) {

    const names = {

        coffee: "Coffee",

        bakery: "Bakery",

        food: "Breakfast",

        dessert: "Dessert"

    };

    return names[category] || category;

}


// ================= FILTER =================

function filterMenu(category, button) {

    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    button.classList.add("active");


    if (category === "all") {

        displayMenu(menu);

        return;

    }


    const filtered =
        menu.filter(item =>
            item.category === category
        );


    displayMenu(filtered);

}


// ================= ADD TO CART =================

function addToCart(id) {

    const product =
        menu.find(item => item.id === id);


    if (!product) return;


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

}


// ================= REMOVE =================

function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);


    updateCart();

}


// ================= UPDATE CART =================

function updateCart() {

    const container =
        document.getElementById("cartItems");


    const countElement =
        document.getElementById("cartCount");


    const totalElement =
        document.getElementById("cartTotal");


    container.innerHTML = "";


    let total = 0;

    let count = 0;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div style="font-size:50px">
                    ☕
                </div>

                <p>
                    Your cart is empty.
                </p>

                <small>
                    Add something delicious!
                </small>

            </div>

        `;

    }


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count +=
            item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                src="${item.image}?auto=format&fit=crop&w=200&q=80"
                alt="${item.name}"
            >


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <span>
                    Quantity: ${item.quantity}
                </span>

                <strong>
                    ₹${item.price * item.quantity}
                </strong>

            </div>


            <button
                class="remove-item"
                onclick="removeFromCart(${item.id})"
            >
                Remove
            </button>

        `;


        container.appendChild(cartItem);

    });


    countElement.innerText = count;

    totalElement.innerText = `₹${total}`;

}


// ================= OPEN CART =================

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("open");


    document
        .getElementById("cartOverlay")
        .classList.add("open");


    document.body.style.overflow = "hidden";

}


// ================= CLOSE CART =================

function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("open");


    document
        .getElementById("cartOverlay")
        .classList.remove("open");


    document.body.style.overflow = "";

}


// ================= CHECKOUT =================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty ☕");

        return;

    }


    alert(
        "Thank you for choosing Bean & Brew! ☕\n\n" +
        "This is a demo checkout."
    );

}


// ================= START =================

loadMenu();

updateCart();