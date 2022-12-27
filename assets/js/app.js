// Get the header element on the page
var header = document.querySelector("header");
function scrollTop() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 0) {
    header.classList.add("backdrop-blur", "bg-white/60", "shadow-sm");
  } else {
    // Otherwise, remove the background color
    header.classList.remove("backdrop-blur", "bg-white/60", "shadow-sm");
  }
}
scrollTop();
// Listen for scroll events on the page
window.addEventListener("scroll", function () {
  // Get the distance the page has been scrolled
  scrollTop();
});

const aside = document.getElementById("aside");
//Determine whether the element element exists
if (aside) {
  // 监听元素的 scroll 事件
  aside.addEventListener("scroll", function () {
    //Store it in local storage
    localStorage.setItem("scrollTop", aside.scrollTop);
  });

  //When the page reloads, get the scrolltop value stored locally and assign it to the aside element
  window.onload = function () {
    const scrollTop = localStorage.getItem("scrollTop");
    aside.scrollTop = scrollTop;
  };
}

// Select all iframe elements
const iframes = document.querySelectorAll("iframe");

// Add a load event listener to each iframe
iframes.forEach((iframe) => {
  iframe.addEventListener("load", (event) => {
    const e = event;
    const h = e.target.contentWindow.document.body.scrollHeight;
    e.target.style.height = `${h}px`;

    // Get the parent element of the iframe
    const parent = e.target.parentNode;
    // Dispatch a reload event on the parent element
    parent.dispatchEvent && parent.dispatchEvent(new Event("reload"));

    // Select all links in the iframe
    const links = e.target.contentDocument.querySelectorAll("a");
    // Add a click event listener to each link
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    });
  });
});
