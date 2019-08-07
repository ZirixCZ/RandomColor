function changeBackground(color) {
   document.body.style.background = color;
}

function RandomColor() {

   let RandomNumber = Math.floor((Math.random() * 16777216));
   let RandomColor = `#${RandomNumber.toString(16)}`;
   changeBackground(RandomColor);
}
//document.getElementById("Randomize_button").addEventListener("click", RandomColor())

