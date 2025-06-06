// function prod(){
// //אובייקט מוצרים
//     let Products=[
//         {name:"אופני הרים Polygon Cascade 3",price:1690,Brand:"Polygon",img:"./img/אופני הרים Polygon Cascade 3.webp", id:1 ,expansion:"./Detail/אופני הרים Polygon Cascade 3.png" },
//         {name:"אופני הרים POLYGON XTRADA 6",price:3800,Brand:"Polygon",img:"./img/אופני הרים POLYGON XTRADA 6.webp", id:2 ,expansion:"./Detail/אופני הרים POLYGON XTRADA 6.jpg"},
//         {name:"אופני הרים Polygon Xtrada 7",price:4990,Brand:"Polygon",img:"./img/אופני הרים Polygon Xtrada 7.webp", id: 3 ,expansion:"./Detail/אופני הרים Polygon Xtrada 7.jpg"},
//         {name:"אופני איזון JDBUG TC04",price:419,Brand:"JD BUG",img:"./img/אופני איזון JDBUG TC04.webp", id: 4 ,expansion:"./Detail/אופני איזון JDBUG TC04.jpg"},
//         {name:"אופני הרים לילדים Marin Hidden Canyon",price:1690,Brand:"Marin",img:"./img/אופני הרים לילדים Marin Hidden Canyon.webp", id:5 ,expansion:"./Detail/אופני הרים לילדים Marin Hidden Canyon.jpg"},
//         {name:"אופני ילדים Poligon Relic 20",price:1400,Brand:"Polygon",img:"./img/אופני ילדים Poligon Relic 20.webp", id: 6 ,expansion:"./Detail/אופני ילדים Poligon Relic 20.jpg"},
//         {name:"אופני ילדים POLYGON SISKIU D24",price:5490,Brand:"Polygon",img:"./img/אופני ילדים POLYGON SISKIU D24.webp", id:7 ,expansion:"./Detail/אופני ילדים POLYGON SISKIU D24.jpg"},
//         {name:"אופני ילדים אלומיניום BMX ROCKET 14",price:750,Brand:"ROCKET",img:"./img/אופני ילדים אלומיניום BMX ROCKET 14.webp", id:8 ,expansion:"./Detail/אופני ילדים אלומיניום BMX ROCKET 14.jpg"},
//         {name:"סקייטבורד ENUFF DREAMCATCHER",price:450,Brand:"ENUFF",img:"./img/סקייטבורד ENUFF DREAMCATCHER.webp", id:9 ,expansion:"./Detail/סקייטבורד ENUFF DREAMCATCHER.jpg"},
//         {name:"סקייטבורד ENUFF FADE",price:399,Brand:"ENUFF",img:"./img/סקייטבורד ENUFF FADE.webp", id:10 ,expansion:"./Detail/סקייטבורד ENUFF FADE.jpg"},
//         {name:"סקייטבורד ENUFF SKULLY",price:349,Brand:"ENUFF",img:"./img/סקייטבורד ENUFF SKULLY.webp", id:11 ,expansion:"./Detail/סקייטבורד ENUFF SKULLY.jpg"},
//         {name:"קורקינט 3 גלגלים MS201",price:255,Brand:"JD BUG",img:"./img/קורקינט 3 גלגלים MS201.webp", id:12 ,expansion:"./Detail/קורקינט 3 גלגלים MS201.png"},
//         {name:"קורקינט פעלולים ASSAULT NEOCHROME",price:1490,Brand:"SLAMM",img:"./img/קורקינט פעלולים ASSAULT NEOCHROME.webp", id:13 ,expansion:"./Detail/קורקינט פעלולים ASSAULT NEOCHROME.jpg"},
//         {name:"קורקינט פעלולים MS105 שחור.",price:450,Brand:"JD BUG",img:"./img/קורקינט פעלולים MS105 שחור.webp", id:14 ,expansion:"./Detail/קורקינט פעלולים MS105 שחור..jpg"},
//         {name:"קורקינט פעלולים SLAMM STROBE",price:1490,Brand:"SLAMM",img:"./img/קורקינט פעלולים SLAMM STROBE.webp", id:15 ,expansion:"./Detail/קורקינט פעלולים SLAMM STROBE.jpg"},
//         {name:"קסדה לאופניים ABUS ADURO 2.0",price:279,Brand:"ABUS",img:"./img/קסדה לאופניים ABUS ADURO 2.0.webp", id:16 ,expansion:"./Detail/קסדה לאופניים ABUS ADURO 2.0.jpg"},
//         {name:"קסדה לאופניים ABUS POWERDOME MIPS",price:799,Brand:"ABUS",img:"./img/קסדה לאופניים ABUS POWERDOME MIPS.webp", id:17 ,expansion:"./Detail/קסדה לאופניים ABUS POWERDOME MIPS.jpg"},
//         {name:"קסדה לאופניים UVEX FINALE 2.0",price:699,Brand:"Uvex",img:"./img/קסדה לאופניים UVEX FINALE 2.0.webp", id:18 ,expansion:"./Detail/קסדה לאופניים UVEX FINALE 2.0.jpg"},
//         {name:"קסדה לאופניים לילדים ABUS SMILEY 3",price:219,Brand:"ABUS",img:"./img/קסדה לאופניים לילדים ABUS SMILEY 3.webp", id:19 ,expansion:"./Detail/קסדה לאופניים לילדים ABUS SMILEY 3.jpg"},
//         {name:"קסדה לאופניים UVEX REVOLT",price:999,Brand:"UVEX",img:"./img/קסדה לאופניים UVEX REVOLT.webp", id:20 ,expansion:"./Detail/קסדה לאופניים UVEX REVOLT.jpg"}
//     ]

//     let prodj=JSON.stringify(Products)
//     localStorage.setItem("Products", prodj)
// }

// -------------------- הצגת כל המוצרים בדף הראשי --------------------

/**
 * הצגת כל המוצרים בדף הראשי
 */
// ...existing code...

function Product_display() {
    let productj = JSON.parse(localStorage.getItem("Products"));
    let sec = document.querySelector('section');

    productj.forEach(product => {
        let NewProduct = document.createElement('div');
        let name = document.createElement('p');
        let price = document.createElement('p');
        let image = document.createElement('img');
        let AddCart = document.createElement('button');
        let moreDetails = document.createElement('button');

        image.src = product.img;
        name.innerText = product.name;
        price.innerText = product.price + "₪";
        AddCart.innerText = "הוסף לסל";
        moreDetails.innerText = "לפרטים נוספים";

        NewProduct.append(image, name, price, AddCart, moreDetails);
        sec.appendChild(NewProduct);

        moreDetails.addEventListener('click', () => {
            sessionStorage.setItem("Id", product.id);
            window.location = './index2.html';
        });

        AddCart.addEventListener('click', () => {
            addcart(product.id);
            showToast('המוצר נוסף לסל בהצלחה!');
        });
    });
}

function moreDetail() {
    let productj = JSON.parse(localStorage.getItem("Products"));
    let id = sessionStorage.getItem("Id");
    let article = document.getElementById('art');
    let selectedProduct = productj.find(product => product.id == id);

    let aside = document.createElement('aside');
    let name = document.createElement('p');
    let price = document.createElement('p');
    let image = document.createElement('img');
    let expansion = document.createElement('img');
    let AddCart = document.createElement('button');
    let goToCartBtn = document.createElement('button');

    name.innerText = selectedProduct.name;
    price.innerText = selectedProduct.price + '₪';
    image.src = selectedProduct.img;
    expansion.src = selectedProduct.expansion;
    AddCart.innerText = "הוסף לסל";
    goToCartBtn.innerText = "למעבר לעגלה";

    AddCart.addEventListener('click', () => {
        addcart(selectedProduct.id);
        showToast('המוצר נוסף לסל בהצלחה!');
    });

    goToCartBtn.addEventListener('click', () => {
        window.location = './index3.html';
    });

    aside.append(name, image, expansion, price, AddCart, goToCartBtn);
    article.appendChild(aside);
}

function addcart(id) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(id);
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function myCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let products = JSON.parse(localStorage.getItem("Products")) || [];
    let cartSection = document.getElementById('cartDisplay');
    cartSection.innerHTML = '';

    let quantities = {};
    cart.forEach(id => {
        quantities[id] = (quantities[id] || 0) + 1;
    });

    let totalPrice = 0;

    Object.keys(quantities).forEach(itemId => {
        let selectedProduct = products.find(product => product.id == itemId);
        if (selectedProduct) {
            let productDiv = document.createElement('div');
            productDiv.className = "cart-row";

            let image = document.createElement('img');
            image.src = selectedProduct.img;

            let name = document.createElement('p');
            name.innerText = selectedProduct.name;

            let price = document.createElement('p');
            price.innerText = selectedProduct.price + "₪";

            let quantityDiv = document.createElement('div');
            quantityDiv.style.display = "flex";
            quantityDiv.style.alignItems = "center";
            quantityDiv.style.gap = "5px";

            let minusBtn = document.createElement('button');
            minusBtn.innerText = "-";
            minusBtn.addEventListener('click', () => updateQuantity(itemId, -1));

            let qtySpan = document.createElement('span');
            qtySpan.innerText = quantities[itemId];
            qtySpan.className = "qty-span";

            let plusBtn = document.createElement('button');
            plusBtn.innerText = "+";
            plusBtn.addEventListener('click', () => updateQuantity(itemId, 1));

            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = "🗑️";
            deleteBtn.title = "מחק מוצר מהסל";
            deleteBtn.className = "delete-btn";
            deleteBtn.addEventListener('click', () => removeProduct(itemId));

            quantityDiv.append(minusBtn, qtySpan, plusBtn, deleteBtn);

            productDiv.append(image, name, price, quantityDiv);
            cartSection.appendChild(productDiv);

            totalPrice += selectedProduct.price * quantities[itemId];
        }
    });

    let totalElement = document.createElement('p');
    totalElement.innerText = "סה''כ לתשלום: " + totalPrice + "₪";
    cartSection.appendChild(totalElement);

    let payBtn = document.createElement('button');
    payBtn.innerText = "לתשלום עכשיו";
    payBtn.className = "pay-btn";
    payBtn.addEventListener('click', function() {
        alert("תודה על הרכישה!");
        sessionStorage.removeItem("cart");
        myCart();
    });
    cartSection.appendChild(payBtn);

    function updateQuantity(itemId, change) {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        if (change === 1) {
            cart.push(Number(itemId));
        } else if (change === -1) {
            let idx = cart.indexOf(Number(itemId));
            if (idx !== -1) cart.splice(idx, 1);
        }
        sessionStorage.setItem("cart", JSON.stringify(cart));
        myCart();
    }

    function removeProduct(itemId) {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cart = cart.filter(id => id != itemId);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        myCart();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let header = document.createElement("header");

    let logo = document.createElement("img");
    logo.src = "./img/logo.png";
    logo.alt = "לוגו החנות";
    logo.onclick = function () {
        location.href = 'homePage.html';
    };

    let nav = document.createElement("nav");

    let cartBtn = document.createElement("button");
    cartBtn.textContent = "מעבר לעגלה";
    cartBtn.onclick = function () {
        location.href = "index3.html";
    };
    nav.appendChild(cartBtn);

header.appendChild(nav);
header.appendChild(logo);



    document.body.prepend(header);

    let footer = document.createElement("footer");

    let phoneP = document.createElement("p");
    phoneP.textContent = "📞 טלפון: 03-1234567";

    let mailP = document.createElement("p");
    mailP.textContent = "📧 מייל: store@example.com";

    footer.append(phoneP, mailP);

    document.body.appendChild(footer);
});

function showToast(message) {
    let oldToast = document.getElementById('toast-message');
    if (oldToast) oldToast.remove();

    let toast = document.createElement('div');
    toast.id = 'toast-message';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => { toast.classList.add('show'); }, 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 1800);
}