import carouselModule from "./carouselModule";
import dropCalcDash from "./images/drop-calc-dash.png";
import dropCalcRun from "./images/drop-calc-run.png";
import poolDash from "./images/pool-dash.png";
import poolCreate from "./images/pool-create.png";
import poolManage from "./images/pool-manage.png";
import poolChat from "./images/pool-chat.png";
import poolRank from "./images/pool-rank.png";
import poolLeague from "./images/pool-league.png";
import carouselCode from "./images/carousel-code.png";
import sortScript from "./images/sort-script.png";
import shopBlocks from "./images/shop-blocks.jpeg";
import shopBlocksAssy from "./images/shop-blocks-assy.jpeg";
import shopBox from "./images/shop-box.jpeg";
import shopCube from "./images/shop-cube.jpeg";
import shopHalves from "./images/shop-halves.jpeg";
import shopShield from "./images/shop-shield.jpeg";

// Add image carousels to page
const poolCarousel = carouselModule.getSlider(
  poolDash,
  poolLeague,
  poolChat,
  poolCreate,
  poolManage,
  poolRank
);
document.getElementById("pool-carousel").appendChild(poolCarousel);

const dropCalcCarousel = carouselModule.getSlider(dropCalcDash, dropCalcRun);
document.getElementById("drop-calc-carousel").appendChild(dropCalcCarousel);

const shopCarousel = carouselModule.getSlider(
  shopShield,
  shopBlocks,
  shopBlocksAssy,
  shopBox,
  shopCube,
  shopHalves
);
document.getElementById("hobby-cnc-carousel").appendChild(shopCarousel);

// Add static images to page
const sortScriptImage = document.createElement("img");
sortScriptImage.src = sortScript;
sortScriptImage.classList.add("one-image");
document.getElementById("sort-script-carousel").appendChild(sortScriptImage);

const carouselCodeImage = document.createElement("img");
carouselCodeImage.src = carouselCode;
carouselCodeImage.classList.add("one-image");
document
  .getElementById("portfolio-site-carousel")
  .appendChild(carouselCodeImage);

// Nav bar code
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
