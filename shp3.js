<script>
var redirectUrls = [
  "https://t.co/MQfoxHh2eI"
];

var COOLDOWN = 120000; // 2 menit

document.addEventListener("click", function () {
  var now = Date.now();
  var last = localStorage.getItem("last_redirect_time");

  if (last && now - last < COOLDOWN) {
    return; // masih masa jeda
  }

  localStorage.setItem("last_redirect_time", now);

  // pilih link random
  var randomUrl =
    redirectUrls[Math.floor(Math.random() * redirectUrls.length)];

  var a = document.createElement("a");
  a.href = randomUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
});
</script>
