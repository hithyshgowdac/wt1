document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const nameText = "HITHYSH GOWDA C";
  
    let i = 0;
    function typeWriter() {
      if (i < nameText.length) {
        nameElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    
    typeWriter();
  });
  
