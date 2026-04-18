import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

window.login = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = "index.html";
    })
    .catch(err => alert(err.message));
};