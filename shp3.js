var redirectUrl = "https://atid.me/go/l97sRDzO";
var COOLDOWN = 120000; // 2 menit (langsung dibaca)

document.addEventListener("click", function () {
  var now = Date.now();
  var last = localStorage.getItem("last_redirect_time");

  if (last && now - last < COOLDOWN) {
    return; // masih jeda
  }

  localStorage.setItem("last_redirect_time", now);

  var a = document.createElement("a");
  a.href = redirectUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
});

//direct jeda 2 menit
