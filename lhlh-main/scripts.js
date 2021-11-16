function login() {
    const element = document.getElementById("name").value;
    const password = document.getElementById("pass").value;
    if (element == "Timur" && password == "1234") {
        window.location.href = "https://lopl-html.herokuapp.com/"
    } else {
        alert("Wrong")
    }
}
