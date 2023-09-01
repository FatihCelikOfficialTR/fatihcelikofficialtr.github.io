/* (HELPER) - SET BLOCKED/ALLOWED STATUS */
function set (target, blocked) {
  target = document.getElementById(target);
  target.innerHTML = (blocked ? "BLOCKED" : "ALLOWED");
  target.className = (blocked ? "blocked" : "allowed");
}

/* (METHOD 1) - LOAD AD LIBRARY */
function detectA () {
  fetch(
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    // "https://www3.doubleclick.net",
    // "https://static.ads-twitter.com/uwt.js"
    { method: "HEAD", mode: "no-cors", cache: "no-store" }
  )
  .then(res => set("demoA", false))
  .catch(err => set("demoA", true));
}

/* (METHOD 2) - CHECK DUMMY AD */
// DON'T SEEM TO BE QUITE RELIABLE, NOT EFFECTIVE IN IFRAME LIKE CODEPEN
function detectB () {
  setTimeout(() => {
    let test = document.getElementById("adTest");
    if (window.getComputedStyle(test).getPropertyValue("display")=="none") {
      set("demoB", true);
    } else {
      set("demoB", false);
    }
    test.remove();
  }, 2000);
}

/* (RUN) */
window.onload = () => { detectA(); detectB(); };