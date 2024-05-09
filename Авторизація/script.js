function authenticate() {
    var login = prompt("Будь ласка, введіть свій логін:");

    if (login === "Admin") {
        var password = prompt("Будь ласка, введіть свій пароль:");

        if (password === "12345") {
            alert("Ласкаво просимо!");
        } else if (password === null) {
            alert("Доступ заборонено");
        } else {
            alert("Невірний пароль");
        }
    } else {
        alert("Доступ заборонено");
    }
}
// Function to save login-password pairs in localStorage
function savePairs(login, password) {
    let pairs = JSON.parse(localStorage.getItem('login_password_pairs')) || {};

    pairs[login] = password;

    localStorage.setItem('login_password_pairs', JSON.stringify(pairs));
}

// Example
savePairs('user1', 'password1');
savePairs('user2', 'password2');


