function mostrarContrasena() {
    const contrasena = document.getElementById("contrasena");
    const eyeIcon = document.getElementById("eyeIcon");

    if (contrasena.type === "password") {
        contrasena.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        contrasena.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}