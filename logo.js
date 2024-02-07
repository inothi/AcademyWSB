let logoPath = "../../logo_awsb.jpg";
let width = 160; // 160, 300
let height = 60; //60
let mailValue = "marcin.bojarowski@wsb.edu.pl";

let logo = document.getElementById("logo");
logo.setAttribute("src", logoPath);
logo.setAttribute("width", width);
logo.setAttribute("height", height);

let mail = document.getElementById("mail");

mail.innerHTML = mailValue;
