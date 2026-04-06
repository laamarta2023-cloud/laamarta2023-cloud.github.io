fetch("/header.html")
  .then(res => res.text())
  .then(data => {
    const el = document.getElementById("header");
    if (el) el.innerHTML = data;
  });

fetch("/footer.html")
  .then(res => res.text())
  .then(data => {
    const el = document.getElementById("footer");
    if (el) el.innerHTML = data;
  });