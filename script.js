var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


const scriptURL = "https://script.google.com/macros/s/AKfycbzceKVj4Zpt-lhHXv5l73SHy3Gy18D2R5Ydnrizn6lYkfi4J85QYCOTOpSKp0YDAQS2/exec";
const form = document.forms["submit-to-google-sheet"];
const responseEl = document.getElementById("response");

form.addEventListener("submit", e => {
  e.preventDefault();
  responseEl.textContent = "Sending...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(res => res.json())
    .then(data => {
      console.log("Server response:", data);
      if (data && data.result === "success") {
        responseEl.textContent = "Message sent!";
        form.reset();
      } else {
        responseEl.textContent = "Failed to send (see console).";
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      responseEl.textContent = "Failed to send (network).";
    });
});



