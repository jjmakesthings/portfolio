import carouselModule from "./carouselModule";
import drop from "./images/drop-calc.png";
import pool from "./images/pool-party.png";
import sort from "./images/sort-script.png";

const container = document.getElementById("container");

(function navigationBarSetup() {
  const wrapper = document.getElementById("nav-wrap");
  wrapper.addEventListener("mouseenter", (e) => {
    if (e.target === wrapper) {
      let popoutLength = window.scrollY > 45 ? 45 : window.scrollY;
      e.target.style.transform = `translate(0,${popoutLength}px)`;
    }
  });
  wrapper.addEventListener("mouseleave", (e) => {
    if (e.target === wrapper) {
      e.target.style.transform = "";
    }
  });
  document.addEventListener("scroll", () => {
    wrapper.style.transform = "";
  });
  return {};
})();
console.log(drop);

const carousel = carouselModule.getSlider(drop, pool, sort);
document.getElementById("pool-party-carousel").appendChild(carousel);
