firebase.auth().onAuthStateChanged(async (user) => {
  if (user) {
    const userDoc = await db.collection("Users").doc(user.uid).get();
    const userData = userDoc.data();
    document.getElementById("welcome").textContent = `Welcome, ${userData.name}`;
    logAction("Dashboard loaded", { userId: user.uid });
  } else {
    window.location.href = "login.html";
  }
});

function logoutUser() {
  firebase.auth().signOut().then(() => {
    logAction("User logged out");
    window.location.href = "index.html";
  });
}
