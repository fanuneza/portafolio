var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbarSpy",
});

$(".youtube-link").grtyoutube();
