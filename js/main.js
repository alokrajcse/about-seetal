document.addEventListener("DOMContentLoaded", function () {
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");

  // Get references to the button and email address elements
  var contactButton = document.getElementById("contactButton");
  var emailContainer = document.getElementById("emailContainer");

  // Add a click event listener to the button
  contactButton.addEventListener("click", function () {
    // Toggle the visibility of the email address container with animation
    if (emailContainer.style.maxHeight) {
      emailContainer.style.maxHeight = null;
      setTimeout(function () {
        emailContainer.style.display = "none";
      }, 300); // Wait for the collapse animation to finish
    } else {
      emailContainer.style.display = "block";
      emailContainer.style.maxHeight = emailContainer.scrollHeight + "px";
    }
  });
});

function loadImage(id, targetId) {
  var el = document.getElementById(id);
  var targetEl = targetId ? document.getElementById(targetId) : el;
  var imageToLoad;

  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function () {
      targetEl.classList.add("is-loaded");
    };
  }
}
