function showHints() {
    event.preventDefault();
    
    var hints = document.getElementById("hints");
  
   if (hints.style.display === "none" || hints.style.display === "") {
      hints.style.display = "block";
    } else {
      hints.style.display = "none";
    }
  }