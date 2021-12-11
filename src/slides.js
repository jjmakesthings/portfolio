const getSlider = function (...images) {
  const frame = document.createElement("div");
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    frame.appendChild(img);
  }
  return frame;
};

export default getSlider;
