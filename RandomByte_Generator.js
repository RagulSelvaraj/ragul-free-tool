function generateByte() {
  const text = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("outputBox").value=text;

}
