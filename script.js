const socialLinksBtn1 = document.getElementById("social-links-btn1");
const socialLinksBtn2 = document.getElementById("social-links-btn2");
const sociaLinks = document.getElementById("social-links");
const afterElement = document.getElementById("afterElement");
socialLinksBtn1.addEventListener("click", () => {
  if (sociaLinks.style.display === "none") {
    sociaLinks.style.display = "flex"; // Set to flex if it was hidden
    afterElement.style.display = "block";
  } else {
    sociaLinks.style.display = "none"; // Hide it by setting display to none
    afterElement.style.display = "none";
  }
});
socialLinksBtn2.addEventListener("click", () => {
  sociaLinks.style.display = "none";
});
