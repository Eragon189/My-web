let url = "";
let lastName;
let firstName;
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
      passKey: passKey
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}


sendData(firstName, lastName, process.env.passKey, url)