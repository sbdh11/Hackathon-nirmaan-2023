let firebase =  require("./firebase-init");

let database = firebase.database();

database.ref("customPath").set({obj:"testt"}, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("success")
    }
})

module.exports = database;