function generateget(l){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < l; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function generateword(){
  let l = document.getElementById("pass_length").value;
  document.getElementById("outputBox").value = generateget(l);
}
