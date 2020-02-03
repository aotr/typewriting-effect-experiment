const texts = ["Dip", "Dipanwita", "Developer", "Web Developer", "Designer"];
let count = 0,
  index = 0,
  letter = "",
  currentText = "";

(function type() {
  if (count === texts.length) {
    count = 0;
    index = 0;
    console.log("hi");
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();
