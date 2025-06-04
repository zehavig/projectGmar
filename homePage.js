// --- קרוסלת תמונות ---
let images = [

            "./img/אופני ילדים POLYGON SISKIU D24.webp",
            "./img/קורקינט פעלולים ASSAULT NEOCHROME.webp",
            "./img/אופני הרים POLYGON XTRADA 6.webp",     
            "./img/קסדה לאופניים לילדים ABUS SMILEY 3.webp",
            "./img/סקייטבורד ENUFF SKULLY.webp"
];
let currentImg = 0;
let carouselImg = document.getElementById('carousel-img');
setInterval(() => {
    currentImg = (currentImg + 1) % images.length;
    carouselImg.src = images[currentImg];
}, 2500);

// // --- ניהול משתמשים בלוקל סטורג' ---
// function userManager(action, payload) {
//     // getUsers
//     if (action === 'getUsers') {
//         return JSON.parse(localStorage.getItem('users') || "[]");
//     }
//     // saveUsers
//     if (action === 'saveUsers') {
//         localStorage.setItem('users', JSON.stringify(payload));
//         return;
//     }
//     // setCurrentUser
//     if (action === 'setCurrentUser') {
//         localStorage.setItem('currentUser', payload);
//         return;
//     }
//     // getCurrentUser
//     if (action === 'getCurrentUser') {
//         return localStorage.getItem('currentUser');
//     }
//     // clearCurrentUser
//     if (action === 'clearCurrentUser') {
//         localStorage.removeItem('currentUser');
//         return;
//     }
//     // showWelcome
//     if (action === 'showWelcome') {
//         let welcome = document.getElementById('welcome');
//         let email = userManager('getCurrentUser');
//         if (email) {
//             welcome.textContent = `שלום, ${email}!`;
//         } else {
//             welcome.textContent = "";
//         }
//         return;
//     }
// }

// // --- מודל התחברות/הרשמה ---

// let loginBtn = document.getElementById('login-btn');
// let modal = document.getElementById('login-modal');
// let closeModal = document.getElementById('close-modal');
// let doLogin = document.getElementById('do-login');
// let doRegister = document.getElementById('do-register');
// let emailInput = document.getElementById('email');
// let passwordInput = document.getElementById('password');

// function updateLoginBtn() {
//     if (getCurrentUser()) {
//         loginBtn.textContent = 'יציאה';
//     } else {
//         loginBtn.textContent = 'התחברות/הרשמה';
//     }
// }

// // הצגת מודל או התנתקות
// loginBtn.onclick = function() {
//     if (getCurrentUser()) {
//         if (confirm('להתנתק מהחשבון?')) {
//             clearCurrentUser();
//             updateLoginBtn();
//             showWelcome();
//             alert('התנתקת בהצלחה!');
//         }
//         return;
//     }
//     modal.style.display = 'flex';
//     emailInput.value = '';
//     passwordInput.value = '';
// };

// // סגירת מודל
// closeModal.onclick = function() {
//     modal.style.display = 'none';
//     emailInput.value = '';
//     passwordInput.value = '';
// };
// window.onclick = function(event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//         emailInput.value = '';
//         passwordInput.value = '';
//     }
// };

// // התחברות
// doLogin.onclick = function() {
//     let email = emailInput.value.trim();
//     let pass = passwordInput.value.trim();
//     if (!email || !pass) {
//         alert('יש למלא אימייל וסיסמה');
//         return;
//     }
//     let users = getUsers();
//     let u = users.find(u => u.email === email);
//     if (!u) {
//         alert('משתמש לא קיים. יש להירשם.');
//         return;
//     }
//     if (u.password !== pass) {
//         alert('סיסמה שגויה');
//         return;
//     }
//     setCurrentUser(email);
//     modal.style.display = 'none';
//     updateLoginBtn();
//     showWelcome();
//     alert('התחברת בהצלחה!');
// };

// // הרשמה
// doRegister.onclick = function() {
//     let email = emailInput.value.trim();
//     let pass = passwordInput.value.trim();
//     if (!email || !pass) {
//         alert('יש למלא אימייל וסיסמה');
//         return;
//     }
//     let users = getUsers();
//     if (users.find(u => u.email === email)) {
//         alert('אימייל זה כבר רשום');
//         return;
//     }
//     if (users.find(u => u.password === pass)) {
//         alert('הסיסמה הזו כבר בשימוש אצל משתמש אחר');
//         return;
//     }
//     users.push({email: email, password: pass});
//     saveUsers(users);
//     setCurrentUser(email);
//     modal.style.display = 'none';
//     updateLoginBtn();
//     showWelcome();
//     alert('נרשמת והתחברת בהצלחה!');
// };

// // בטעינת הדף: בדיקת חיבור אוטומטית
// (function(){
//     updateLoginBtn();
//     showWelcome();
//     // אם יש currentUser אך הוא לא קיים ברשימת המשתמשים — להסיר
//     let email = getCurrentUser();
//     if (email) {
//         let users = getUsers();
//         if (!users.find(u => u.email === email)) {
//             clearCurrentUser();
//             updateLoginBtn();
//             showWelcome();
//         }
//     }
// })();

function initLoginSystem() {
    // --- ניהול משתמשים בלוקל סטורג' ---
    function getUsers() {
        return JSON.parse(localStorage.getItem('users') || "[]");
    }
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
    function setCurrentUser(email) {
        localStorage.setItem('currentUser', email);
    }
    function getCurrentUser() {
        return localStorage.getItem('currentUser');
    }
    function clearCurrentUser() {
        localStorage.removeItem('currentUser');
    }
    function showWelcome() {
        let welcome = document.getElementById('welcome');
        let email = getCurrentUser();
        if (welcome) {
            welcome.textContent = email ? `שלום, ${email}!` : "";
        }
    }

    // --- מודל התחברות/הרשמה ---
    let loginBtn = document.getElementById('login-btn');
    let modal = document.getElementById('login-modal');
    let closeModal = document.getElementById('close-modal');
    let doLogin = document.getElementById('do-login');
    let doRegister = document.getElementById('do-register');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    function updateLoginBtn() {
        if (getCurrentUser()) {
            loginBtn.textContent = 'יציאה';
        } else {
            loginBtn.textContent = 'התחברות/הרשמה';
        }
    }

    // הצגת מודל או התנתקות
    loginBtn.onclick = function() {
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
    closeModal.onclick = function() {
        modal.style.display = 'none';
        emailInput.value = '';
        passwordInput.value = '';
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            emailInput.value = '';
            passwordInput.value = '';
        }
    };

    // התחברות
    doLogin.onclick = function() {
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
    doRegister.onclick = function() {
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
        users.push({email: email, password: pass});
        saveUsers(users);
        setCurrentUser(email);
        modal.style.display = 'none';
        updateLoginBtn();
        showWelcome();
        alert('נרשמת והתחברת בהצלחה!');
    };

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

function goToProducts() {
    // בדיקת התחברות לפי localStorage
    let email = localStorage.getItem('currentUser');
    if (email) {
        // אם מחובר – מעבר לדף המוצרים
        location.href = 'index.html'; // שנה לכתובת דף המוצרים שלך
    } else {
        // אם לא מחובר – הצגת מודל התחברות/הרשמה
        let modal = document.getElementById('login-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
}