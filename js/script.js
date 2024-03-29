document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (regPassword !== confirmPassword) {
        alert("Password Tidak Sama!");
        return;
    }

    localStorage.setItem(regUsername, regPassword);
    alert("Pendaftaran Akun Berhasil!");
    document.getElementById("registerForm").reset();

    var registerButton = document.getElementById("registerButton");
    if (registerButton) {
        registerButton.style.display = "none";
    }

    window.location.href = "index.html";
});
