let d = new Date();
let fulldate = new Intl.DateTimeFormat("es-MX", { dateStyle: "full" }).format(
  d
);
document.getElementById("currentdate").textContent = fulldate;
