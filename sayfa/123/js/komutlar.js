function searchCommand() {
    commandFnc();
    var tabs = document.querySelectorAll(".tab-pane");
  
    tabs.forEach(function (tab) {
      var cards = tab.querySelectorAll(".accordion .card");
      var visibleCount = 0;
  
      cards.forEach(function (card) {
        var computedStyle = window.getComputedStyle(card);
        if (computedStyle.display !== "none") {
          visibleCount++;
        }
      });
  
      var cmdCountElement = tab.querySelector("#cmdcount");
      if (cmdCountElement) {
        cmdCountElement.textContent = "(" + visibleCount + ")";
      }
    });
  }
  
  function commandFnc() {
    var input, filter, cards, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.trim().toUpperCase();
    cards = document.getElementsByClassName("card");
  
    for (i = 0; i < cards.length; i++) {
      var card = cards[i].getElementsByClassName("card-header")[0];
      var commandName = card.querySelector("#command-name");
      if (commandName) {
        txtValue = commandName.textContent.trim().toUpperCase();
        if (txtValue.includes(filter)) {
          cards[i].style.display = "";
        } else {
          cards[i].style.display = "none";
        }
      }
    }
  }
  
  function tanitimgonder(link) {
    Swal.fire({
      title: "Tanıtıma gitmek istiyor musunuz?",
      footer:
        '<div style="text-align: center">Yeni bir sayfaya yönlendirileceksiniz.</a>',
      showCancelButton: true,
      confirmButtonText: "Evet",
      cancelButtonText: "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(link, "_blank");
      }
    });
  }
  
  function handleTabChange() {
    var urlHash = window.location.hash;
    var tabLink = document.querySelector(`[href="${urlHash}"]`);
  
    if (tabLink) {
      tabLink.click();
      tabLink.classList.add("active");
      var tabContentId = tabLink.getAttribute("href");
      var tabContent = document.querySelector(tabContentId);
      if (tabContent) {
        tabContent.classList.add("show", "active");
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", handleTabChange);
  window.addEventListener("hashchange", handleTabChange);
  
  /*function changeCategory(cat) {
      var currentURL = window.location.href;
      var newURL = `https://marpel.net/yenisite/komutlar.php/${cat}`;
      window.history.pushState({}, "", newURL);
      let categori = "";
      if (cat == "ayarlar") {
          categori = "(Ayarlar)"
      } else if (cat == "mod") {
          categori = "(Moderasyon)"
      } else if (cat == "extra") {
          categori = "(Extra)"
      } else if (cat == "rank") {
          categori = "(Rank)"
      } else if (cat == "fun") {
          categori = "(Eğlence)"
      }
      document.getElementById("WebTitle").innerText = `Marpel - Komutlar ${categori}`
      NumberUpdate()
  }*/
  