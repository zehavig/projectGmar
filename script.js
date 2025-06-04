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
function Product_display() {
    // שליפת מערך המוצרים מה-LocalStorage
    let product = localStorage.getItem("Products");
    let productj = JSON.parse(product);

    // מציאת אלמנט section להצגת המוצרים
    let sec = document.getElementsByTagName('section');

    // מעבר על כל מוצר ויצירת אלמנטים להצגה
    for (let index = 0; index < productj.length; index++) {
        let NewProduct = document.createElement('div');
        let name = document.createElement('p');
        let price = document.createElement('p');
        let image = document.createElement('img');
        let AddCart = document.createElement('button');
        let moreDetails = document.createElement('button');

        // הוספת האלמנטים ל-DOM
        sec[0].appendChild(NewProduct);
        NewProduct.appendChild(image);
        NewProduct.appendChild(name);
        NewProduct.appendChild(price);
        NewProduct.appendChild(AddCart);
        NewProduct.appendChild(moreDetails);

        // הגדרת תוכן האלמנטים
        image.src = productj[index].img;
        name.innerText = productj[index].name;
        price.innerText = productj[index].price + "₪";
        AddCart.innerText = "הוסף לסל";
        moreDetails.innerText = "לפרטים נוספים";

        // מעבר לעמוד פרטים נוספים בלחיצה
        moreDetails.addEventListener('click', () => {
            sessionStorage.setItem("Id", productj[index].id);
            window.location = './index2.html';
        });

        // הוספת מוצר לעגלה בלחיצה
        AddCart.addEventListener('click', () => {
            addcart(productj[index].id);
        });
    }
}

// // -------------------- מערכת הרשמה והתחברות --------------------
// function initLoginSystem() {
//     // --- פונקציות עזר לניהול משתמשים ---
//     function getUsers() {
//         return JSON.parse(localStorage.getItem('users') || "[]");
//     }
//     function saveUsers(users) {
//         localStorage.setItem('users', JSON.stringify(users));
//     }
//     function setCurrentUser(email) {
//         localStorage.setItem('currentUser', email);
//     }
//     function getCurrentUser() {
//         return localStorage.getItem('currentUser');
//     }
//     function clearCurrentUser() {
//         localStorage.removeItem('currentUser');
//     }
//     function showWelcome() {
//         let welcome = document.getElementById('welcome');
//         let email = getCurrentUser();
//         if (welcome) {
//             welcome.textContent = email ? `שלום, ${email}!` : "";
//         }
//     }

//     // --- קישור לאלמנטים של המודל ---
//     let loginBtn = document.getElementById('login-btn');
//     let modal = document.getElementById('login-modal');
//     let closeModal = document.getElementById('close-modal');
//     let doLogin = document.getElementById('do-login');
//     let doRegister = document.getElementById('do-register');
//     let emailInput = document.getElementById('email');
//     let passwordInput = document.getElementById('password');

//     // עדכון טקסט הכפתור לפי מצב המשתמש
//     function updateLoginBtn() {
//         if (getCurrentUser()) {
//             loginBtn.textContent = 'יציאה';
//         } else {
//             loginBtn.textContent = 'התחברות/הרשמה';
//         }
//     }

//     // לחיצה על כפתור התחברות/הרשמה או יציאה
//     loginBtn.onclick = function() {
//         if (getCurrentUser()) {
//             if (confirm('להתנתק מהחשבון?')) {
//                 clearCurrentUser();
//                 updateLoginBtn();
//                 showWelcome();
//                 alert('התנתקת בהצלחה!');
//             }
//             return;
//         }
//         // הצגת מודל התחברות/הרשמה
//         modal.style.display = 'flex';
//         emailInput.value = '';
//         passwordInput.value = '';
//     };

//     // סגירת המודל בלחיצה על X
//     closeModal.onclick = function() {
//         modal.style.display = 'none';
//         emailInput.value = '';
//         passwordInput.value = '';
//     };

//     // סגירת המודל בלחיצה מחוץ לחלון
//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//             emailInput.value = '';
//             passwordInput.value = '';
//         }
//     };

//     // התחברות משתמש קיים
//     doLogin.onclick = function() {
//         let email = emailInput.value.trim();
//         let pass = passwordInput.value.trim();
//         if (!email || !pass) {
//             alert('יש למלא אימייל וסיסמה');
//             return;
//         }
//         let users = getUsers();
//         let u = users.find(u => u.email === email);
//         if (!u) {
//             alert('משתמש לא קיים. יש להירשם.');
//             return;
//         }
//         if (u.password !== pass) {
//             alert('סיסמה שגויה');
//             return;
//         }
//         setCurrentUser(email);
//         modal.style.display = 'none';
//         updateLoginBtn();
//         showWelcome();
//         alert('התחברת בהצלחה!');
//     };

//     // הרשמת משתמש חדש
//     doRegister.onclick = function() {
//         let email = emailInput.value.trim();
//         let pass = passwordInput.value.trim();
//         if (!email || !pass) {
//             alert('יש למלא אימייל וסיסמה');
//             return;
//         }
//         let users = getUsers();
//         if (users.find(u => u.email === email)) {
//             alert('אימייל זה כבר רשום');
//             return;
//         }
//         if (users.find(u => u.password === pass)) {
//             alert('הסיסמה הזו כבר בשימוש אצל משתמש אחר');
//             return;
//         }
//         users.push({email: email, password: pass});
//         saveUsers(users);
//         setCurrentUser(email);
//         modal.style.display = 'none';
//         updateLoginBtn();
//         showWelcome();
//         alert('נרשמת והתחברת בהצלחה!');
//     };

//     // בדיקת מצב התחברות בטעינת הדף
//     updateLoginBtn();
//     showWelcome();
//     let email = getCurrentUser();
//     if (email) {
//         let users = getUsers();
//         if (!users.find(u => u.email === email)) {
//             clearCurrentUser();
//             updateLoginBtn();
//             showWelcome();
//         }
//     }
// }

// -------------------- הצגת פרטי מוצר בעמוד פרטים --------------------
function moreDetail() {
    let product = localStorage.getItem("Products");
    let productjs = JSON.parse(product);
    let id = sessionStorage.getItem("Id");
    let article = document.getElementById('art');
    let selectedProduct = productjs.find(product => product.id == id);

    // יצירת אלמנטים להצגת פרטי המוצר
    let aside = document.createElement('aside');
    let name = document.createElement('p');
    let price = document.createElement('p');
    let image = document.createElement('img');
    let expansion = document.createElement('img');
    let AddCart = document.createElement('button');

    name.innerText = selectedProduct.name;
    price.innerText = selectedProduct.price + '₪';
    image.src = selectedProduct.img;
    expansion.src = selectedProduct.expansion;
    AddCart.innerText = "הוסף לסל";

    // הוספת המוצר לעגלה ומעבר לעמוד עגלה
    AddCart.addEventListener('click', () => {
        window.location = './index3.html';
        myCart();
    });

    // הוספת האלמנטים ל-DOM
    article.appendChild(aside);
    aside.appendChild(name);
    aside.appendChild(image);
    aside.appendChild(expansion);
    aside.appendChild(price);
    aside.appendChild(AddCart);
    // (כפתורי מידה - קוד מוסתר)
}

// -------------------- עגלת קניות --------------------

// פונקציה להוספת מוצר לעגלה
function addcart(id) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(id);
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

// הצגת עגלת קניות עם שליטה בכמות ומחיקה
function myCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let products = JSON.parse(localStorage.getItem("Products")) || [];
    let cartSection = document.getElementById('cartDisplay');
    cartSection.innerHTML = '';

    // חישוב כמויות לכל מוצר
    let quantities = {};
    cart.forEach(id => {
        quantities[id] = (quantities[id] || 0) + 1;
    });

    let totalPrice = 0;

    // מעבר על כל מוצר בעגלה
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

            // שליטה בכמות
            let quantityDiv = document.createElement('div');
            quantityDiv.style.display = "flex";
            quantityDiv.style.alignItems = "center";
            quantityDiv.style.gap = "5px";

            let minusBtn = document.createElement('button');
            minusBtn.innerText = "-";
            minusBtn.onclick = () => updateQuantity(itemId, -1);

            let qtySpan = document.createElement('span');
            qtySpan.innerText = quantities[itemId];
            qtySpan.className = "qty-span";

            let plusBtn = document.createElement('button');
            plusBtn.innerText = "+";
            plusBtn.onclick = () => updateQuantity(itemId, 1);

            // כפתור מחיקה
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = "🗑️";
            deleteBtn.title = "מחק מוצר מהסל";
            deleteBtn.className = "delete-btn";
            deleteBtn.onclick = () => removeProduct(itemId);

            // הוספת כפתורי כמות ומחיקה
            quantityDiv.appendChild(minusBtn);
            quantityDiv.appendChild(qtySpan);
            quantityDiv.appendChild(plusBtn);
            quantityDiv.appendChild(deleteBtn);

            // הוספת כל האלמנטים לשורה
            productDiv.appendChild(image);
            productDiv.appendChild(name);
            productDiv.appendChild(price);
            productDiv.appendChild(quantityDiv);

            cartSection.appendChild(productDiv);

            totalPrice += selectedProduct.price * quantities[itemId];
        }
    });

    // הצגת סכום סופי
    let totalElement = document.createElement('p');
    totalElement.innerText = "סה''כ לתשלום: " + totalPrice + "₪";
    cartSection.appendChild(totalElement);

    // כפתור תשלום
    let payBtn = document.createElement('button');
    payBtn.innerText = "לתשלום עכשיו";
    payBtn.className = "pay-btn";
    payBtn.onclick = function() {
        alert("תודה על הרכישה!");
        sessionStorage.removeItem("cart");
        myCart();
    };
    cartSection.appendChild(payBtn);

    // פונקציה פנימית לעדכון כמויות
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

    // פונקציה פנימית למחיקת מוצר מהעגלה
    function removeProduct(itemId) {
        let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cart = cart.filter(id => id != itemId);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        myCart();
    }
}

// -------------------- יצירת header ו-footer דינמיים --------------------
document.addEventListener("DOMContentLoaded", function () {
    // יצירת header
    let header = document.createElement("header");

    let logo = document.createElement("img");
    logo.src = "./img/logo.png";
    logo.alt = "לוגו החנות";
    logo.style.height = "90px"; // להגדלת הלוגו
    logo.style.cursor = "pointer";
    logo.onclick = function () {
        location.href = 'homePage.html';
    };

    let nav = document.createElement("nav");

    // // כפתור הרשמה / התחברות
    // let loginBtn = document.createElement("button");
    // loginBtn.textContent = "הרשמה / התחברות";
    // loginBtn.onclick = function () {
    //     location.href = 'signup.html';
    // };

    // nav.appendChild(loginBtn);
    header.appendChild(logo);
    header.appendChild(nav);

    // הוספת header לראש הדף
    document.body.prepend(header);

    // יצירת footer
    let footer = document.createElement("footer");

    let phoneP = document.createElement("p");
    phoneP.textContent = "📞 טלפון: 03-1234567";

    let mailP = document.createElement("p");
    mailP.textContent = "📧 מייל: store@example.com";

    footer.appendChild(phoneP);
    footer.appendChild(mailP);

    // הוספת footer לסוף הדף
    document.body.appendChild(footer);

    // הפעלת המפה של גוגל (אם צריך)
});

