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



