const firebaseConfig = {
    apiKey: "AIzaSyDCjQf7T1teVfPtIlpa769c_-SOc-ei0rE",
    authDomain: "coden-373bb.firebaseapp.com",
    databaseURL: "https://coden-373bb-default-rtdb.firebaseio.com",
    projectId: "coden-373bb",
    storageBucket: "coden-373bb.appspot.com",
    messagingSenderId: "668693977770",
    appId: "1:668693977770:web:980771cbb9561c7415ced3",
    measurementId: "G-KTKSN7W7B5"
  };
// initialize firebase
const test = firebase.initializeApp(firebaseConfig);

// reference your database
try {
    var contactFormDB = firebase.database().ref("CertificateForm");
} catch (error) {
    console.log(error)
}

var database = firebase.database();
var ref = database.ref('/CertificateForm');
//var id = '-NVe2vn0RieSe4vkzmZK';
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('certID');
//console.log(id);
var data;
ref.child(id).once('value', function (snapshot) {
    data = snapshot.val();
    console.log(data);
     // Replace in HTML
    document.getElementById("StudentName").innerHTML = data.name;
    document.getElementById("Course").innerHTML = data.CourseName;
    document.getElementById("Duration").innerHTML = data.StartDate + "-" + data.EndDate;
    document.getElementById("Supervisor").innerHTML = data.SupervisorName;
    document.getElementById("certID").innerHTML = "Certification ID: " +id;
});

 

