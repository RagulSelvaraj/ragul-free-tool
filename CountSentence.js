
  function SentenceCount() {
    let word = document.getElementById("outputBox").value;
    let l=word.split(/[.!?]+/).filter(Boolean).length;
    document.getElementById("Decoder").value=l;
  }
