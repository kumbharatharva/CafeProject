const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const menu = [
    {
        id: 1,
        name: "Cappuccino",
        category: "coffee",
        description: "Espresso, steamed milk & silky foam",
        price: 180,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d"
    },
    {
        id: 2,
        name: "Caramel Latte",
        category: "coffee",
        description: "Espresso, creamy milk & caramel",
        price: 220,
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78"
    },
    {
        id: 3,
        name: "Iced Mocha",
        category: "coffee",
        description: "Cold brew, chocolate & fresh cream",
        price: 240,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
    },
    {
        id: 4,
        name: "Spanish Latte",
        category: "coffee",
        description: "Rich espresso with sweet condensed milk",
        price: 230,
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096"
    },
    {
        id: 5,
        name: "Butter Croissant",
        category: "bakery",
        description: "Flaky French-style butter croissant",
        price: 150,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a"
    },
    {
        id: 6,
        name: "Chocolate Cake",
        category: "dessert",
        description: "Dark chocolate cake with ganache",
        price: 260,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
        id: 7,
        name: "Blueberry Cheesecake",
        category: "dessert",
        description: "Creamy cheesecake with blueberry compote",
        price: 280,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad"
    },
    {
        id: 8,
        name: "Avocado Toast",
        category: "food",
        description: "Sourdough, avocado & herbs",
        price: 290,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d"
    }
];

app.get("/api/menu", (req, res) => {
    res.json(menu);
});

app.listen(PORT, () => {
    console.log(`☕ Bean & Brew running at http://localhost:${PORT}`);
});