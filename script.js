document.getElementById("aufgabe2").addEventListener("click", function() {
    window.location.href = "HA74/Aufgabe2/index.html";
  });
  
  document.getElementById("aufgabe3").addEventListener("click", function() {
    window.location.href = "HA74/Aufgabe3/index.html";
  });
  
  document.getElementById("closeBtn").addEventListener("click", function() {
    alert("Bitte schließe das Fenster manuell.");
});

function openOrDownloadPDF() {
  var pdfURL = 'Aufgabe1/aufgabe-01.pdf';
  var fileName = 'aufgabe-01.pdf';

  var a = document.createElement('a');
  a.href = pdfURL;
  a.download = fileName;
  a.target = '_blank';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
