const admin = require('firebase-admin');

// Fetch the service account key JSON file contents
var serviceAccount = require("./cpig-firebase-adminsdk.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cpig-5b148.firebaseio.com",
});

module.exports = function(){
  return admin.database();
};
