function logAction(action, metadata = {}) {
  const log = {
    action,
    metadata,
    timestamp: new Date().toISOString()
  };

  console.log("[LOG]", log);

  // Optional Firestore logging
  const user = firebase.auth().currentUser;
  if (user) {
    db.collection("logs").add({
      userId: user.uid,
      ...log
    });
  }
}
