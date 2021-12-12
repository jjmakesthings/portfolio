const carouselModule = (function () {
  const carouselList = [];
  const getSlider = function (...images) {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    const frame = document.createElement("div");
    frame.classList.add("frame");
    carousel.appendChild(frame);
    const nav = document.createElement("ol");
    nav.classList.add("nav");
    carousel.appendChild(nav);

    for (let i = 0; i < images.length; i++) {
      const img = document.createElement("img");
      img.classList.add("frame__image");
      img.src = images[i];
      const frameSlide = document.createElement("div");
      frameSlide.classList.add("frame__slide");
      frameSlide.appendChild(img);
      frame.appendChild(frameSlide);
      const dot = document.createElement("li");
      if (i === 0) {
        dot.classList.add("dot-active");
      }
      dot["data-target"] = i;
      dot.classList.add("nav__dot");
      dot.addEventListener("click", (e) => {
        const dotList = Array.from(
          e.target.parentElement.querySelectorAll(".nav__dot")
        );
        dotList.forEach((element) => {
          element.classList.remove("dot-active");
        });
        e.target.classList.add("dot-active");
        frame.scrollLeft = 400 * e.target["data-target"];
      });
      nav.appendChild(dot);
    }
    carouselList.push(carousel);
    return carousel;
  };
  const scroll = function () {
    carouselList.forEach((carousel) => {
      const elems = Array.from(carousel.querySelectorAll(".nav__dot"));
      const activeElemIndex =
        carousel.querySelector(".dot-active")["data-target"];
      const nextIndex =
        elems.length - 2 >= activeElemIndex ? activeElemIndex + 1 : 0;
      const nextElem = elems[nextIndex];
      nextElem.click();
    });
  };
  const interval = setInterval(() => scroll(), 5000);
  const resetTimer = function () {
    this.interval = setInterval(() => scroll(), 5000);
  };
  return { getSlider, resetTimer };
})();

export default carouselModule;
