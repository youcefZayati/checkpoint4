function bold() {
  var element = document.getElementById("text1");
  element.classList.toggle("mystyle");
}
function italic() {
  var element = document.getElementById("text1");
  element.classList.toggle("mystyle1");
}
function underline() {
  var element = document.getElementById("text1");
  element.classList.toggle("mystyle3");
}

function change_style() {
  var e = document.getElementById("mySelect");
  var strUser = e.options[e.selectedIndex].text;
  if (strUser == "Arial") {
    document.getElementById("text1").style.fontFamily =
      "Arial, Helvetica, sans-serif";
  } else if (strUser == "courrier") {
    document.getElementById("text1").style.fontFamily = "Courier New";
  } else if (strUser == "franklin") {
    document.getElementById("text1").style.fontFamily =
      "Franklin Gothic Medium";
  } else if (strUser == "Times") {
    document.getElementById("text1").style.fontFamily = "Times New Roman";
  }
}
function change_size() {
  var e = document.getElementById("mySelect2");
  var strUser = e.options[e.selectedIndex].text;
  if (strUser == "15px") {
    document.getElementById("text1").style.fontSize = "15px";
  } else if (strUser == "20px") {
    document.getElementById("text1").style.fontSize = "20px";
  } else if (struser == "1em") {
    document.getElementById("text1").style.fontSize = "1em";
  } else if (struser == "2em") {
    document.getElementById("text1").style.fontSize = "2em";
  }
}

var array = ["black", "green"];
var i = 0;

setInterval(function repeat() {
  i++;
  if (i > 2) {
    i = 0;
  }
  document.getElementById("titre").style.color = array[i];
}, 1000);
