function generate(l){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (var i = 0; i < l; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function get_values(){
  let l = document.getElementById("pass_length").value;
  document.getElementById("outputBox").value = generate(l);
}
