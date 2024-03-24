var menuDurumlar = {};

function toggleMenu(el, menuClassName) {
  var x = document.querySelector("." + menuClassName);
  if (!menuDurumlar[menuClassName]) {
    x.style.transform = "translate(-50%, 0)";
    menuDurumlar[menuClassName] = true;
    el.querySelector("svg").style.transform = "rotate(180deg)";
    closeOtherMenus(menuClassName);
  } else {
    x.style.transform = "translate(-50%, -700px)";
    menuDurumlar[menuClassName] = false;
    el.querySelector("svg").style.transform = "rotate(0deg)";
  }
  x.addEventListener("mouseleave", function () {
    x.style.transform = "translate(-50%, -700px)";
    menuDurumlar[menuClassName] = false;
    el.querySelector("svg").style.transform = "rotate(0deg)";
  });
}

function closeOtherMenus(openMenu) {
  for (var menu in menuDurumlar) {
    if (menu !== openMenu && menuDurumlar[menu]) {
      var otherMenu = document.querySelector("." + menu);
      otherMenu.style.transform = "translate(-50%, -700px)";
      menuDurumlar[menu] = false;
      document.querySelector("." + menu + " button svg").style.transform =
        "rotate(0deg)";
    }
  }
}

function onSidebar() {
  var mobilNav = document.querySelector(".mobil-nav");
  mobilNav.classList.toggle("open");
}
