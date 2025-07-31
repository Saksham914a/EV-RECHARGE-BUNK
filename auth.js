function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return db.collection("Users").doc(user.uid).set({
        name,
        email,
        role
      });
    })
    .then(() => {
      alert("Registration successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // 🔍 Check role from Firestore
      return db.collection("Users").doc(user.uid).get();
    })
    .then((doc) => {
      if (doc.exists) {
        const role = doc.data().role;

        if (role === "admin") {
          window.location.href = "admin-dashboard.html";
        } else {
          window.location.href = "user-dashboard.html";
        }
      } else {
        alert("No role assigned to this user.");
      }
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}
