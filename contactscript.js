//let a = () => {console.log($(".contactform")[0])};
let errorLabelTelefon = $(".errorLabelTelefon")[0];
let errorLabelEmail = $(".errorLabelEmail")[0];
let submitButton = $(".submitInput")[0];
let contactinput = Array.from($(".contactform")[0]);

function a() {
  //console.log(typeof contactinput);
  contactinput.forEach((element) => {
    element.addEventListener("focusout", Validate);
  });
}

a();

function Validate(element) {
  element = element.target ? element.target : element;

  switch (element.placeholder) {
    case "Telefon":
      if (element.value !== "" && !checkPhone(element.value)) {
        errorLabelTelefon.innerText = " Telefoni number pole korrektne.";
      } else {
        element.classList.add("error");
        errorLabelTelefon.innerText = "";
      }
      break;
    case "Email":
      if (element.value !== "" && !checkEmail(element.value)) {
        errorLabelEmail.innerText = " Email pole korrektne.";
      } else {
        errorLabelEmail.innerText = "";
        element.classList.add("error");
      }
      break;
    default:
      element.classList.add("error");
  }
}
function checkName() {
  var reg = /^\d+$/;
  return reg;
}

function checkPhone(num) {
  var reg = new RegExp(/^\d+$/);
  return reg.test(num);
}
function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$(".submitInput").click((e) => {
  contactinput.pop();
  contactinput.forEach((element) => {
    Validate(element);
  });
  e.preventDefault();
});
