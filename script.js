// פונקציה זו מאתחלת את נתוני המוצרים ב-localStorage אם הם עדיין לא קיימים.
function prod() {
    // בודק אם הנתונים כבר קיימים ב-localStorage תחת המפתח "Products".
    if (localStorage.getItem("Products") === null) {
        // אובייקט מוצרים - מערך המכיל את פרטי המוצרים השונים.
        let Products = [
            { name: "אופני הרים Polygon Cascade 3", price: 1690, Brand: "Polygon", img: "./img/אופני הרים Polygon Cascade 3.webp", id: 1, expansion: "./Detail/אופני הרים Polygon Cascade 3.png" },
            { name: "אופני הרים POLYGON XTRADA 6", price: 3800, Brand: "Polygon", img: "./img/אופני הרים POLYGON XTRADA 6.webp", id: 2, expansion: "./Detail/אופני הרים POLYGON XTRADA 6.jpg" },
            { name: "אופני הרים Polygon Xtrada 7", price: 4990, Brand: "Polygon", img: "./img/אופני הרים Polygon Xtrada 7.webp", id: 3, expansion: "./Detail/אופני הרים Polygon Xtrada 7.jpg" },
            { name: "אופני איזון JDBUG TC04", price: 419, Brand: "JD BUG", img: "./img/אופני איזון JDBUG TC04.webp", id: 4, expansion: "./Detail/אופני איזון JDBUG TC04.jpg" },
            { name: "אופני הרים לילדים Marin Hidden Canyon", price: 1690, Brand: "Marin", img: "./img/אופני הרים לילדים Marin Hidden Canyon.webp", id: 5, expansion: "./Detail/אופני הרים לילדים Marin Hidden Canyon.jpg" },
            { name: "אופני ילדים Poligon Relic 20", price: 1400, Brand: "Polygon", img: "./img/אופני ילדים Poligon Relic 20.webp", id: 6, expansion: "./Detail/אופני ילדים Poligon Relic 20.jpg" },
            { name: "אופני ילדים POLYGON SISKIU D24", price: 5490, Brand: "Polygon", img: "./img/אופני ילדים POLYGON SISKIU D24.webp", id: 7, expansion: "./Detail/אופני ילדים POLYGON SISKIU D24.jpg" },
            { name: "אופני ילדים אלומיניום BMX ROCKET 14", price: 750, Brand: "ROCKET", img: "./img/אופני ילדים אלומיניום BMX ROCKET 14.webp", id: 8, expansion: "./Detail/אופני ילדים אלומיניום BMX ROCKET 14.jpg" },
            { name: "סקייטבורד ENUFF DREAMCATCHER", price: 450, Brand: "ENUFF", img: "./img/סקייטבורד ENUFF DREAMCATCHER.webp", id: 9, expansion: "./Detail/סקייטבורד ENUFF DREAMCATCHER.jpg" },
            { name: "סקייטבורד ENUFF FADE", price: 399, Brand: "ENUFF", img: "./img/סקייטבורד ENUFF FADE.webp", id: 10, expansion: "./Detail/סקייטבורד ENUFF FADE.jpg" },
            { name: "סקייטבורד ENUFF SKULLY", price: 349, Brand: "ENUFF", img: "./img/סקייטבורד ENUFF SKULLY.webp", id: 11, expansion: "./Detail/סקייטבורד ENUFF SKULLY.jpg" },
            { name: "קורקינט 3 גלגלים MS201", price: 255, Brand: "JD BUG", img: "./img/קורקינט 3 גלגלים MS201.webp", id: 12, expansion: "./Detail/קורקינט 3 גלגלים MS201.png" },
            { name: "קורקינט פעלולים ASSAULT NEOCHROME", price: 1490, Brand: "SLAMM", img: "./img/קורקינט פעלולים ASSAULT NEOCHROME.webp", id: 13, expansion: "./Detail/קורקינט פעלולים ASSAULT NEOCHROME.jpg" },
            { name: "קורקינט פעלולים MS105 שחור.", price: 450, Brand: "JD BUG", img: "./img/קורקינט פעלולים MS105 שחור.webp", id: 14, expansion: "./Detail/קורקינט פעלולים MS105 שחור..jpg" },
            { name: "קורקינט פעלולים SLAMM STROBE", price: 1490, Brand: "SLAMM", img: "./img/קורקינט פעלולים SLAMM STROBE.webp", id: 15, expansion: "./Detail/קורקינט פעלולים SLAMM STROBE.jpg" },
            { name: "קסדה לאופניים ABUS ADURO 2.0", price: 279, Brand: "ABUS", img: "./img/קסדה לאופניים ABUS ADURO 2.0.webp", id: 16, expansion: "./Detail/קסדה לאופניים ABUS ADURO 2.0.jpg" },
            { name: "קסדה לאופניים ABUS POWERDOME MIPS", price: 799, Brand: "ABUS", img: "./img/קסדה לאופניים ABUS POWERDOME MIPS.webp", id: 17, expansion: "./Detail/קסדה לאופניים ABUS POWERDOME MIPS.jpg" },
            { name: "קסדה לאופניים UVEX FINALE 2.0", price: 699, Brand: "Uvex", img: "./img/קסדה לאופניים UVEX FINALE 2.0.webp", id: 18, expansion: "./Detail/קסדה לאופניים UVEX FINALE 2.0.jpg" },
            { name: "קסדה לאופניים לילדים ABUS SMILEY 3", price: 219, Brand: "ABUS", img: "./img/קסדה לאופניים לילדים ABUS SMILEY 3.webp", id: 19, expansion: "./Detail/קסדה לאופניים לילדים ABUS SMILEY 3.jpg" },
            { name: "קסדה לאופניים UVEX REVOLT", price: 999, Brand: "UVEX", img: "./img/קסדה לאופניים UVEX REVOLT.webp", id: 20, expansion: "./Detail/קסדה לאופניים UVEX REVOLT.jpg" }
        ];

        // ממיר את מערך המוצרים לאובייקט JSON (מחרוזת).
        let prodj = JSON.stringify(Products);
        // שומר את מחרוזת ה-JSON ב-localStorage תחת המפתח "Products".
        localStorage.setItem("Products", prodj);
    }
}

// קורא לפונקציה prod כדי לוודא שנתוני המוצרים קיימים ב-localStorage.
// אם הנתונים לא קיימים, הפונקציה תיצור אותם.
prod();

//קרוסלת תמונות של עמוד הבית
let images = [
    "./img/אופני ילדים POLYGON SISKIU D24.webp",
    "./img/קורקינט פעלולים ASSAULT NEOCHROME.webp",
    "./img/אופני הרים POLYGON XTRADA 6.webp",
    "./img/קסדה לאופניים לילדים ABUS SMILEY 3.webp",
    "./img/סקייטבורד ENUFF SKULLY.webp"
];
let currentImg = 0;
let carouselImg;




//הצגת כל המוצרים בדף הראשי
function Product_display() {
    // מושך את נתוני המוצרים מ-localStorage וממיר אותם בחזרה לאובייקט JavaScript.
    let productj = JSON.parse(localStorage.getItem("Products"));
    // בוחר את אלמנט ה-section ב-HTML שאליו יוצגו המוצרים.
    let sec = document.querySelector('section');

    // עובר בלולאה על כל מוצר במערך המוצרים.
    productj.forEach(product => {
        // יוצר אלמנט div חדש עבור כל מוצר.
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

// פונקציה להצגת פרטי מוצר בודד בדף פרטים.
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

// פונקציה להוספת מוצר לעגלת הקניות.
function addcart(id) {

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(id);
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

// פונקציה להצגת תכולת עגלת הקניות.
function myCart() {

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let products = JSON.parse(localStorage.getItem("Products")) || [];
    let cartSection = document.getElementById('cartDisplay');
    cartSection.innerHTML = '';

    // אובייקט לאחסון כמויות של כל מוצר בעגלה.
    let quantities = {};
    // עובר על כל פריט בעגלה וסופר את הכמויות של כל מוצר.
    cart.forEach(id => {
        quantities[id] = (quantities[id] || 0) + 1;
    });

    // משתנה לשמירת סך כל המחיר.
    let totalPrice = 0;

    // עובר בלולאה על ה-ID של כל מוצר ייחודי בעגלה (מתוך אובייקט הכמויות).
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
            let quantityDiv = document.createElement('div')

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

            // מחשב את סך כל המחיר של המוצר לפי הכמות.
            totalPrice += selectedProduct.price * quantities[itemId];
        }
    });

    let totalElement = document.createElement('p');
    totalElement.innerText = "סה''כ לתשלום: " + totalPrice + "₪";
    cartSection.appendChild(totalElement);

    let payBtn = document.createElement('button');
    payBtn.innerText = "לתשלום עכשיו";
    payBtn.className = "pay-btn";
    payBtn.addEventListener('click', function () {
        alert("תודה על הרכישה!");
        //מחיקת כל הפרטים מעגלת הקניות.
        sessionStorage.removeItem("cart");
        myCart();
    });
    cartSection.appendChild(payBtn);
}

// פונקציה לעדכון כמות מוצר בעגלה.
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

// פונקציה להסרת מוצר מהעגלה.
function removeProduct(itemId) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart = cart.filter(id => id != itemId);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    myCart();
}


// --- הוספת פונקציות ניהול משתמשים (מה-JS של עמוד הבית) ---

// פונקציה לקבלת רשימת המשתמשים מ-localStorage.
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || "[]");
}

// פונקציה לשמירת רשימת המשתמשים ב-localStorage.
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// פונקציה להגדרת המשתמש הנוכחי ב-localStorage.
function setCurrentUser(email) {
    localStorage.setItem('currentUser', email);
}

// פונקציה לקבלת המשתמש הנוכחי מ-localStorage.
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

// פונקציה למחיקת המשתמש הנוכחי מ-localStorage.
function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

// פונקציה להצגת הודעת ברוכים הבאים למשתמש מחובר.
function showWelcome() {
    let welcome = document.getElementById('welcome');
    let email = getCurrentUser();
    if (welcome) {
        welcome.textContent = email ? `שלום, ${email}!` : "";
    }
}

// פונקציה לעדכון טקסט כפתור ההתחברות/יציאה.
function updateLoginBtn() {
    let loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        if (getCurrentUser()) {
            loginBtn.textContent = 'יציאה';
        } else {
            loginBtn.textContent = 'התחברות/הרשמה';
        }
    }
}

// פונקציה למעבר לדף המוצרים.
function goToProducts() {
    let email = localStorage.getItem('currentUser');
    if (email) {
        location.href = 'index.html'; 
    } else {
        let modal = document.getElementById('login-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
}

// פונקציה לאתחול מערכת הלוגין.
function initLoginSystem() {
    let loginBtn = document.getElementById('login-btn');
    let modal = document.getElementById('login-modal');
    let closeModal = document.getElementById('close-modal');
    let doLogin = document.getElementById('do-login');
    let doRegister = document.getElementById('do-register');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    if (loginBtn && modal && closeModal && doLogin && doRegister && emailInput && passwordInput) {
        // הצגת מודל או התנתקות
        loginBtn.onclick = function () {
            if (getCurrentUser()) {
                if (confirm('להתנתק מהחשבון?')) {
                    clearCurrentUser();
                    updateLoginBtn();
                    showWelcome();
                    alert('התנתקת בהצלחה!');
                }
                return;
            }
            modal.style.display = 'flex';
            emailInput.value = '';
            passwordInput.value = '';
        };

        // סגירת מודל
        closeModal.onclick = function () {
            modal.style.display = 'none';
            emailInput.value = '';
            passwordInput.value = '';
        };
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                emailInput.value = '';
                passwordInput.value = '';
            }
        };

        // התחברות
        doLogin.onclick = function () {
            let email = emailInput.value.trim();
            let pass = passwordInput.value.trim();
            if (!email || !pass) {
                alert('יש למלא אימייל וסיסמה');
                return;
            }
            let users = getUsers();
            let u = users.find(u => u.email === email);
            if (!u) {
                alert('משתמש לא קיים. יש להירשם.');
                return;
            }
            if (u.password !== pass) {
                alert('סיסמה שגויה');
                return;
            }
            setCurrentUser(email);
            modal.style.display = 'none';
            updateLoginBtn();
            showWelcome();
            alert('התחברת בהצלחה!');
        };

        // הרשמה
        doRegister.onclick = function () {
            let email = emailInput.value.trim();
            let pass = passwordInput.value.trim();
            if (!email || !pass) {
                alert('יש למלא אימייל וסיסמה');
                return;
            }
            let users = getUsers();
            if (users.find(u => u.email === email)) {
                alert('אימייל זה כבר רשום');
                return;
            }
            if (users.find(u => u.password === pass)) {
                alert('הסיסמה הזו כבר בשימוש אצל משתמש אחר');
                return;
            }
            users.push({ email: email, password: pass });
            saveUsers(users);
            setCurrentUser(email);
            modal.style.display = 'none';
            updateLoginBtn();
            showWelcome();
            alert('נרשמת והתחברת בהצלחה!');
        };
    }

    // בטעינת הדף: בדיקת חיבור אוטומטית
    updateLoginBtn();
    showWelcome();
    let email = getCurrentUser();
    if (email) {
        let users = getUsers();
        if (!users.find(u => u.email === email)) {
            clearCurrentUser();
            updateLoginBtn();
            showWelcome();
        }
    }
}

//יצירת ה-header וה-footer של הדף
document.addEventListener("DOMContentLoaded", function () {

    let header = document.createElement("header");
    let nav = document.createElement("nav");

    let loginBtn = document.createElement("button");
    loginBtn.id = "login-btn";
    nav.appendChild(loginBtn);

    let productsBtn = document.createElement("button");
    productsBtn.id = "products-btn";
    productsBtn.textContent = "מוצרים";
    productsBtn.onclick = goToProducts; 
    nav.appendChild(productsBtn);

    let cartBtn = document.createElement("button");
    cartBtn.textContent = "מעבר לעגלה";
    cartBtn.onclick = function () {
        location.href = "index3.html";
    };
    nav.appendChild(cartBtn);

    header.appendChild(nav);
    let logo = document.createElement("img");
    logo.src = "./img/logo.png";
    logo.alt = "לוגו החנות";
    logo.className = "logo";
    logo.onclick = function () {
        location.href = 'homePage.html';
    };
    header.appendChild(logo);

    let spacerDiv = document.createElement("div");
    spacerDiv.style.width = "180px";
    spacerDiv.style.backgroundColor = "#007bff"
    spacerDiv.style.border = "0px"; 
    header.appendChild(spacerDiv);

    document.body.prepend(header);

    carouselImg = document.getElementById('carousel-img');
    if (carouselImg) {
        setInterval(() => {
            currentImg = (currentImg + 1) % images.length;
            carouselImg.src = images[currentImg];
        }, 2500);
    }
    initLoginSystem();


    let footer = document.createElement("footer");
    let contactP = document.createElement("p");
    contactP.innerHTML = `יצירת קשר: <a href="mailto:info@bikestore.co.il">info@bikestore.co.il</a> | טלפון: <a href="tel:03-9876543">03-9876543</a>`;
    footer.appendChild(contactP);
    document.body.appendChild(footer); 
});

// פונקציה להצגת הודעת טוסט (הודעה קופצת).
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