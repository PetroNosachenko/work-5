function lengBarFunction() {
    document.getElementById("leng-bar").classList.toggle("show");
  }
  
  // Close the lengBar if the user clicks outside of it
  window.onclick = function(event) {
  if (!event.target.matches('.leng-btn')) {
  
    let dropdowns = document.getElementsByClassName("leng_bar");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  }