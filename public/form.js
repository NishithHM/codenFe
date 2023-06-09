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

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var CourseName = getElementVal("CourseName");
  var StartDate = getElementVal("StartDate");
  var EndDate = getElementVal("EndDate");
  var SupervisorName = getElementVal("SupervisorName");
  saveMessages(name, emailid, CourseName, StartDate, EndDate, SupervisorName);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, CourseName, StartDate, EndDate, SupervisorName) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    CourseName: CourseName,
    StartDate: StartDate,
    EndDate: EndDate,
    SupervisorName: SupervisorName,
    // CertificationName: CertificationName
  });
  console.log("www.codentechnologies.com/codenFe/public/MyCertificate.html?certID=" + newContactForm.key);
  document.querySelector(".alert").style.display = "block";
  document.getElementById("alertMsg").innerHTML = " www.codentechnologies.com/MyCertificate.html?certID=" + newContactForm.key;

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 8000);
};

const getElementVal = (id) => {
  debugger;
  return document.getElementById(id).value;
};
