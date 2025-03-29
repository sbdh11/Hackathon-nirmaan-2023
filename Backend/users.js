let database = require("./database");






exports.getUsersByName = (data,uid) => {

   /* let userRef = database.ref('users/' + uid);

    userRef.child(data.uid).set({'email': data.email, 'name':data.nameg})

*/

   database.ref('users').once('value')
.then(function(snapshot) {
    let users = snapshot.val();
    if(data.email.trim().endsWith("@agnus.com")) data.isCollegeAdmin = true;
    users[uid] = data;
    console.log(data);

    database.ref("users").set(users, function(error) {
        if (error) {
          // The write failed...
          console.log("Failed with error: " + error)
        } else {
          // The write was successful...
          console.log("success22")
        }
    })

}).catch((e) => {
    console.log(e);
})

    
}

exports.addUser= (data,uid) => {

  /* let userRef = database.ref('users/' + uid);

   userRef.child(data.uid).set({'email': data.email, 'name':data.nameg})

*/

  database.ref('users').once('value')
.then(function(snapshot) {
   let users = snapshot.val();
   if(data.email.trim().endsWith("@agnus.com")) data.isCollegeAdmin = true;
   users[uid] = data;
   data.isVerifiedAlumni = false;
   console.log(data);

   database.ref("users").set(users, function(error) {
       if (error) {
         // The write failed...
         console.log("Failed with error: " + error)
       } else {
         // The write was successful...
         console.log("success22")
       }
   })

}).catch((e) => {
   console.log(e);
})

   
}

exports.upUser= (data,uid) => {

  /* let userRef = database.ref('users/' + uid);

   userRef.child(data.uid).set({'email': data.email, 'name':data.nameg})

*/

  database.ref('users').once('value')
.then(function(snapshot) {
   let users = snapshot.val();
  
   users[uid] = data;

   console.log(data);

   database.ref("users").set(users, function(error) {
       if (error) {
         // The write failed...
         console.log("Failed with error: " + error)
       } else {
         // The write was successful...
         console.log("success22")
       }
   })

}).catch((e) => {
   console.log(e);
})

   
}


exports.deleteUser = (data,uid) => {

    /* let userRef = database.ref('users/' + uid);
 
     userRef.child(data.uid).set({'email': data.email, 'name':data.nameg})
 
 */
 
    database.ref('users').once('value')
 .then(function(snapshot) {
     let users = snapshot.val();
     delete users[uid];
     console.log(users);
 
     database.ref("users").set(users, function(error) {
         if (error) {
           // The write failed...
           console.log("Failed with error: " + error)
         } else {
           // The write was successful...
           console.log("success23")
         }
     })
 
 }).catch((e) => {
     console.log(e);
 })
 
     
 }


 exports.getUser = (data,uid) => {

  /* let userRef = database.ref('users/' + uid);

   userRef.child(data.uid).set({'email': data.email, 'name':data.nameg})

*/
let u;

  database.ref('users').once('value')
.then(function(snapshot) {
   let users = snapshot.val();

   console.log(users[uid]);
   if(!users[uid]) return false;
  u = users[uid];


}).catch((e) => {
   console.log(e);
})

   return u;
}

exports.getUsersFromClg = (data,uid) => {

  /* let userRef = database.ref('users/' + uid);

   userRef.child(data.uid).set({'email': data.email, 'name':data.nameg})

*/
let u;

  database.ref('users').once('value')
.then(function(snapshot) {
   let users = snapshot.val();

   let clg = Tools.toId(data.clg);
  let results = [];

  let keys = Object.keys(users);

  for(let i = 0;i < keys.length;i++) {
    let user = users[keys[i]]
    if(clg === Tools.toId(user.cname)) results.push(user);

  }



}).catch((e) => {
   console.log(e);
})

   return u;
}