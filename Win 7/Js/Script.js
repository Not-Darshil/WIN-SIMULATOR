const showButton = document.querySelector("#showSectionButton");
const hiddenSection = document.querySelector("#hiddenSection");

showButton.addEventListener("click", function () {
  if (hiddenSection.style.opacity === "0") {
    hiddenSection.style.opacity = "1";
  } else {
    hiddenSection.style.opacity = "0";
  }
});

function close(){

  const explorer = document.querySelector("#Explorer");
  
  if(explorer.style.opacity === "flex"){
    explorer.style.opacity = "none";
  }
  else{
    explorer.style.opacity = "1";
  }
  
  }