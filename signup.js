function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var showPasswordIcon = document.getElementById("showPasswordIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordIcon.src = "images/hide.svg";
  } else {
    passwordInput.type = "password";
    showPasswordIcon.src = "images/show.svg";
  }
}
