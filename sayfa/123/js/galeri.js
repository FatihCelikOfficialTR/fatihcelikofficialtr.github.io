function changeImage(containerId, step) {
    var container = document.querySelector(
      '[data-gallery="' + containerId + '"] .gallery-container',
    );
  
    if (container === null) {
      console.error("container is null for containerId: " + containerId);
      return;
    }
  
    var images = container.querySelectorAll(".gallery-image");
  
    if (images.length === 0) {
      console.error(
        "No images found in container for containerId: " + containerId,
      );
      return;
    }
  
    var dots = document.querySelectorAll(
      '[data-gallery="' + containerId + '"] .dots-container .dot',
    );
  
    container.currentImageIndex =
      (container.currentImageIndex + step + images.length) % images.length;
  
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      dots[i].classList.remove("active");
    }
  
    images[container.currentImageIndex].style.display = "block";
    dots[container.currentImageIndex].classList.add("active");
  }
  function setupGallery(containerId) {
    var container = document.querySelector(
      '[data-gallery="' + containerId + '"] .gallery-container',
    );
    var dotsContainer = document.querySelector(
      '[data-gallery="' + containerId + '"] .dots-container',
    );
    var buttons = document.querySelectorAll(
      '[data-gallery="' + containerId + '"] .buttons .arrow-button',
    );
  
    var images = container.querySelectorAll(".gallery-image");
  
    container.currentImageIndex = 0;
  
    for (var i = 0; i < images.length; i++) {
      var dot = document.createElement("span");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
  
      dot.addEventListener(
        "click",
        (function (index) {
          return function () {
            changeImage(containerId, index - container.currentImageIndex);
          };
        })(i),
      );
    }
  
    images[container.currentImageIndex].style.display = "block";
    dotsContainer.querySelector(".dot").classList.add("active");
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var step = parseInt(button.getAttribute("data-step"), 10);
        changeImage(containerId, step);
      });
    });
  }
  
  function openPopup(imageSrc, containerId, currentImageIndex) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
  
    if (!modal || !modalImage) {
      console.error("Modal or modal image element not found");
      return;
    }
  
    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalImage.setAttribute("data-container", containerId);
    modalImage.setAttribute("data-index", currentImageIndex);
  
    document.querySelector(".prev").style.display = "block";
    document.querySelector(".next").style.display = "block";
  }
  
  function changeModalImage(event, step) {
    event.stopPropagation();
    var modalImage = document.getElementById("modalImage");
    var currentImageSrc = modalImage.src;
    var containers = document.querySelectorAll(".gallery-container");
  
    containers.forEach(function (container) {
      var images = container.querySelectorAll(".gallery-image");
      for (var i = 0; i < images.length; i++) {
        if (images[i].src === currentImageSrc) {
          var newIndex = (i + step + images.length) % images.length;
          modalImage.src = images[newIndex].src;
          break;
        }
      }
    });
  }
  
  function closePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  