let url = "";
let lastName;
let firstName;
let passKey;
console.log("output works!!!!")
document.getElementById("button").onclick = function () {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  document.getElementById("counters").innerHtml = `${firstName}, ${lastName}`;
};

function sendData(firstName, lastName, passKey, url) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstNameOfbullier: firstName,
      lastNameOfbullier: lastName,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
