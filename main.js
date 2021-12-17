/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carouselModule.js":
/*!*******************************!*\
  !*** ./src/carouselModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var carouselModule = function () {
  var carouselList = [];

  var getSlider = function getSlider() {
    var carousel = document.createElement("div");
    carousel.classList.add("carousel");
    var frame = document.createElement("div");
    frame.classList.add("frame");
    carousel.appendChild(frame);
    var nav = document.createElement("ol");
    nav.classList.add("nav");
    carousel.appendChild(nav);

    for (var i = 0; i < arguments.length; i++) {
      var img = document.createElement("img");
      img.classList.add("frame__image");
      img.src = i < 0 || arguments.length <= i ? undefined : arguments[i];
      var frameSlide = document.createElement("div");
      frameSlide.classList.add("frame__slide");
      frameSlide.appendChild(img);
      frame.appendChild(frameSlide);
      var dot = document.createElement("li");

      if (i === 0) {
        dot.classList.add("dot-active");
      }

      dot["data-target"] = i;
      dot.classList.add("nav__dot");
      dot.addEventListener("click", function (e) {
        var dotList = Array.from(e.target.parentElement.querySelectorAll(".nav__dot"));
        dotList.forEach(function (element) {
          element.classList.remove("dot-active");
        });
        e.target.classList.add("dot-active");

        var imageWidth = function imageWidth() {
          var widthString = getComputedStyle(e.target.parentElement.parentElement.querySelector(".frame")).width;
          var widthValue = widthString.slice(0, -2);
          return widthValue;
        };

        frame.scrollLeft = imageWidth(e) * e.target["data-target"];
        resetTimer();
      });
      nav.appendChild(dot);
    }

    carouselList.push(carousel);
    return carousel;
  };

  var scroll = function scroll() {
    carouselList.forEach(function (carousel) {
      var elems = Array.from(carousel.querySelectorAll(".nav__dot"));
      var activeElemIndex = carousel.querySelector(".dot-active")["data-target"];
      var nextIndex = elems.length - 2 >= activeElemIndex ? activeElemIndex + 1 : 0;
      var nextElem = elems[nextIndex];
      nextElem.click();
    });
  };

  var interval = setInterval(function () {
    return scroll();
  }, 9000);

  var resetTimer = function resetTimer() {
    clearInterval(interval);
    interval = setInterval(function () {
      return scroll();
    }, 9000);
  };

  return {
    getSlider: getSlider,
    resetTimer: resetTimer
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselModule);

/***/ }),

/***/ "./src/images/carousel-code.png":
/*!**************************************!*\
  !*** ./src/images/carousel-code.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04ab05ecaf5698fe4c8a.png";

/***/ }),

/***/ "./src/images/drop-calc-dash.png":
/*!***************************************!*\
  !*** ./src/images/drop-calc-dash.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f868656c94bb5deaa0e.png";

/***/ }),

/***/ "./src/images/drop-calc-run.png":
/*!**************************************!*\
  !*** ./src/images/drop-calc-run.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b879a947794f27a9eb1.png";

/***/ }),

/***/ "./src/images/pool-chat.png":
/*!**********************************!*\
  !*** ./src/images/pool-chat.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d92b56613d817229989c.png";

/***/ }),

/***/ "./src/images/pool-create.png":
/*!************************************!*\
  !*** ./src/images/pool-create.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd940331f460ebf74ebd.png";

/***/ }),

/***/ "./src/images/pool-dash.png":
/*!**********************************!*\
  !*** ./src/images/pool-dash.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d862c9d1f0fc4932fe99.png";

/***/ }),

/***/ "./src/images/pool-league.png":
/*!************************************!*\
  !*** ./src/images/pool-league.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b5b3a509ebea6346615.png";

/***/ }),

/***/ "./src/images/pool-manage.png":
/*!************************************!*\
  !*** ./src/images/pool-manage.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6826c07e5452f3217bc7.png";

/***/ }),

/***/ "./src/images/pool-rank.png":
/*!**********************************!*\
  !*** ./src/images/pool-rank.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea560f6680c569a688cd.png";

/***/ }),

/***/ "./src/images/sort-script.png":
/*!************************************!*\
  !*** ./src/images/sort-script.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea5f9a8f2cbf74840be0.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carouselModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carouselModule */ "./src/carouselModule.js");
/* harmony import */ var _images_drop_calc_dash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/drop-calc-dash.png */ "./src/images/drop-calc-dash.png");
/* harmony import */ var _images_drop_calc_run_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/drop-calc-run.png */ "./src/images/drop-calc-run.png");
/* harmony import */ var _images_pool_dash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pool-dash.png */ "./src/images/pool-dash.png");
/* harmony import */ var _images_pool_create_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pool-create.png */ "./src/images/pool-create.png");
/* harmony import */ var _images_pool_manage_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pool-manage.png */ "./src/images/pool-manage.png");
/* harmony import */ var _images_pool_chat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pool-chat.png */ "./src/images/pool-chat.png");
/* harmony import */ var _images_pool_rank_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/pool-rank.png */ "./src/images/pool-rank.png");
/* harmony import */ var _images_pool_league_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/pool-league.png */ "./src/images/pool-league.png");
/* harmony import */ var _images_carousel_code_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/carousel-code.png */ "./src/images/carousel-code.png");
/* harmony import */ var _images_sort_script_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/sort-script.png */ "./src/images/sort-script.png");











var poolCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_pool_dash_png__WEBPACK_IMPORTED_MODULE_3__, _images_pool_league_png__WEBPACK_IMPORTED_MODULE_8__, _images_pool_chat_png__WEBPACK_IMPORTED_MODULE_6__, _images_pool_create_png__WEBPACK_IMPORTED_MODULE_4__, _images_pool_manage_png__WEBPACK_IMPORTED_MODULE_5__, _images_pool_rank_png__WEBPACK_IMPORTED_MODULE_7__);
document.getElementById("pool-carousel").appendChild(poolCarousel);
var dropCalcCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_drop_calc_dash_png__WEBPACK_IMPORTED_MODULE_1__, _images_drop_calc_run_png__WEBPACK_IMPORTED_MODULE_2__);
document.getElementById("drop-calc-carousel").appendChild(dropCalcCarousel);
var sortScriptImage = document.createElement("img");
sortScriptImage.src = _images_sort_script_png__WEBPACK_IMPORTED_MODULE_10__;
sortScriptImage.classList.add("one-image");
document.getElementById("sort-script-carousel").appendChild(sortScriptImage);
var carouselCodeImage = document.createElement("img");
carouselCodeImage.src = _images_carousel_code_png__WEBPACK_IMPORTED_MODULE_9__;
carouselCodeImage.classList.add("one-image");
document.getElementById("portfolio-site-carousel").appendChild(carouselCodeImage);
var container = document.getElementById("container");

(function navigationBarSetup() {
  var wrapper = document.getElementById("nav-wrap");
  wrapper.addEventListener("mouseenter", function (e) {
    if (e.target === wrapper) {
      var popoutLength = window.scrollY > 45 ? 45 : window.scrollY;
      e.target.style.transform = "translate(0,".concat(popoutLength, "px)");
    }
  });
  wrapper.addEventListener("mouseleave", function (e) {
    if (e.target === wrapper) {
      e.target.style.transform = "";
    }
  });
  document.addEventListener("scroll", function () {
    wrapper.style.transform = "";
  });
  return {};
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGNBQWMsR0FBSSxZQUFZO0FBQ2xDLE1BQU1DLFlBQVksR0FBRyxFQUFyQjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFxQjtBQUNyQyxRQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQXZCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBRyxJQUFBQSxLQUFLLENBQUNGLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO0FBQ0FKLElBQUFBLFFBQVEsQ0FBQ00sV0FBVCxDQUFxQkQsS0FBckI7QUFDQSxRQUFNRSxHQUFHLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFaO0FBQ0FLLElBQUFBLEdBQUcsQ0FBQ0osU0FBSixDQUFjQyxHQUFkLENBQWtCLEtBQWxCO0FBQ0FKLElBQUFBLFFBQVEsQ0FBQ00sV0FBVCxDQUFxQkMsR0FBckI7O0FBRUEsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLFVBQU9DLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFVBQU1FLEdBQUcsR0FBR1QsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQVEsTUFBQUEsR0FBRyxDQUFDUCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsY0FBbEI7QUFDQU0sTUFBQUEsR0FBRyxDQUFDQyxHQUFKLEdBQWlCSCxDQUFqQiw0QkFBaUJBLENBQWpCLHlCQUFpQkEsQ0FBakI7QUFDQSxVQUFNSSxVQUFVLEdBQUdYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBVSxNQUFBQSxVQUFVLENBQUNULFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGNBQXpCO0FBQ0FRLE1BQUFBLFVBQVUsQ0FBQ04sV0FBWCxDQUF1QkksR0FBdkI7QUFDQUwsTUFBQUEsS0FBSyxDQUFDQyxXQUFOLENBQWtCTSxVQUFsQjtBQUNBLFVBQU1DLEdBQUcsR0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVo7O0FBQ0EsVUFBSU0sQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNYSyxRQUFBQSxHQUFHLENBQUNWLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixZQUFsQjtBQUNEOztBQUNEUyxNQUFBQSxHQUFHLENBQUMsYUFBRCxDQUFILEdBQXFCTCxDQUFyQjtBQUNBSyxNQUFBQSxHQUFHLENBQUNWLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixVQUFsQjtBQUNBUyxNQUFBQSxHQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFVBQUNDLENBQUQsRUFBTztBQUNuQyxZQUFNQyxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUNkSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsYUFBVCxDQUF1QkMsZ0JBQXZCLENBQXdDLFdBQXhDLENBRGMsQ0FBaEI7QUFHQUwsUUFBQUEsT0FBTyxDQUFDTSxPQUFSLENBQWdCLFVBQUNDLE9BQUQsRUFBYTtBQUMzQkEsVUFBQUEsT0FBTyxDQUFDcEIsU0FBUixDQUFrQnFCLE1BQWxCLENBQXlCLFlBQXpCO0FBQ0QsU0FGRDtBQUdBVCxRQUFBQSxDQUFDLENBQUNJLE1BQUYsQ0FBU2hCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFlBQXZCOztBQUNBLFlBQUlxQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQzNCLGNBQUlDLFdBQVcsR0FBR0MsZ0JBQWdCLENBQ2hDWixDQUFDLENBQUNJLE1BQUYsQ0FBU0MsYUFBVCxDQUF1QkEsYUFBdkIsQ0FBcUNRLGFBQXJDLENBQW1ELFFBQW5ELENBRGdDLENBQWhCLENBRWhCQyxLQUZGO0FBR0EsY0FBSUMsVUFBVSxHQUFHSixXQUFXLENBQUNLLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBQyxDQUF0QixDQUFqQjtBQUNBLGlCQUFPRCxVQUFQO0FBQ0QsU0FORDs7QUFPQXpCLFFBQUFBLEtBQUssQ0FBQzJCLFVBQU4sR0FBbUJQLFVBQVUsQ0FBQ1YsQ0FBRCxDQUFWLEdBQWdCQSxDQUFDLENBQUNJLE1BQUYsQ0FBUyxhQUFULENBQW5DO0FBQ0FjLFFBQUFBLFVBQVU7QUFDWCxPQWpCRDtBQWtCQTFCLE1BQUFBLEdBQUcsQ0FBQ0QsV0FBSixDQUFnQk8sR0FBaEI7QUFDRDs7QUFDRGYsSUFBQUEsWUFBWSxDQUFDb0MsSUFBYixDQUFrQmxDLFFBQWxCO0FBQ0EsV0FBT0EsUUFBUDtBQUNELEdBOUNEOztBQStDQSxNQUFNbUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBWTtBQUN6QnJDLElBQUFBLFlBQVksQ0FBQ3dCLE9BQWIsQ0FBcUIsVUFBQ3RCLFFBQUQsRUFBYztBQUNqQyxVQUFNb0MsS0FBSyxHQUFHbkIsS0FBSyxDQUFDQyxJQUFOLENBQVdsQixRQUFRLENBQUNxQixnQkFBVCxDQUEwQixXQUExQixDQUFYLENBQWQ7QUFDQSxVQUFNZ0IsZUFBZSxHQUNuQnJDLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0MsYUFBdEMsQ0FERjtBQUVBLFVBQU1VLFNBQVMsR0FDYkYsS0FBSyxDQUFDM0IsTUFBTixHQUFlLENBQWYsSUFBb0I0QixlQUFwQixHQUFzQ0EsZUFBZSxHQUFHLENBQXhELEdBQTRELENBRDlEO0FBRUEsVUFBTUUsUUFBUSxHQUFHSCxLQUFLLENBQUNFLFNBQUQsQ0FBdEI7QUFDQUMsTUFBQUEsUUFBUSxDQUFDQyxLQUFUO0FBQ0QsS0FSRDtBQVNELEdBVkQ7O0FBV0EsTUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUM7QUFBQSxXQUFNUCxNQUFNLEVBQVo7QUFBQSxHQUFELEVBQWlCLElBQWpCLENBQTFCOztBQUNBLE1BQU1GLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDN0JVLElBQUFBLGFBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0FBLElBQUFBLFFBQVEsR0FBR0MsV0FBVyxDQUFDO0FBQUEsYUFBTVAsTUFBTSxFQUFaO0FBQUEsS0FBRCxFQUFpQixJQUFqQixDQUF0QjtBQUNELEdBSEQ7O0FBSUEsU0FBTztBQUFFcEMsSUFBQUEsU0FBUyxFQUFUQSxTQUFGO0FBQWFrQyxJQUFBQSxVQUFVLEVBQVZBO0FBQWIsR0FBUDtBQUNELENBbEVzQixFQUF2Qjs7QUFvRUEsaUVBQWVwQyxjQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU15RCxZQUFZLEdBQUd6RCxpRUFBQSxDQUNuQmlELGtEQURtQixFQUVuQkssb0RBRm1CLEVBR25CRixrREFIbUIsRUFJbkJGLG9EQUptQixFQUtuQkMsb0RBTG1CLEVBTW5CRSxrREFObUIsQ0FBckI7QUFRQWpELFFBQVEsQ0FBQ3NELGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNqRCxXQUF6QyxDQUFxRGdELFlBQXJEO0FBRUEsSUFBTUUsZ0JBQWdCLEdBQUczRCxpRUFBQSxDQUF5QitDLHVEQUF6QixFQUF1Q0Msc0RBQXZDLENBQXpCO0FBQ0E1QyxRQUFRLENBQUNzRCxjQUFULENBQXdCLG9CQUF4QixFQUE4Q2pELFdBQTlDLENBQTBEa0QsZ0JBQTFEO0FBRUEsSUFBTUMsZUFBZSxHQUFHeEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXhCO0FBQ0F1RCxlQUFlLENBQUM5QyxHQUFoQixHQUFzQjBDLHFEQUF0QjtBQUNBSSxlQUFlLENBQUN0RCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsV0FBOUI7QUFDQUgsUUFBUSxDQUFDc0QsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0RqRCxXQUFoRCxDQUE0RG1ELGVBQTVEO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUd6RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUI7QUFDQXdELGlCQUFpQixDQUFDL0MsR0FBbEIsR0FBd0J5QyxzREFBeEI7QUFDQU0saUJBQWlCLENBQUN2RCxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsV0FBaEM7QUFDQUgsUUFBUSxDQUNMc0QsY0FESCxDQUNrQix5QkFEbEIsRUFFR2pELFdBRkgsQ0FFZW9ELGlCQUZmO0FBSUEsSUFBTUMsU0FBUyxHQUFHMUQsUUFBUSxDQUFDc0QsY0FBVCxDQUF3QixXQUF4QixDQUFsQjs7QUFFQSxDQUFDLFNBQVNLLGtCQUFULEdBQThCO0FBQzdCLE1BQU1DLE9BQU8sR0FBRzVELFFBQVEsQ0FBQ3NELGNBQVQsQ0FBd0IsVUFBeEIsQ0FBaEI7QUFDQU0sRUFBQUEsT0FBTyxDQUFDL0MsZ0JBQVIsQ0FBeUIsWUFBekIsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzVDLFFBQUlBLENBQUMsQ0FBQ0ksTUFBRixLQUFhMEMsT0FBakIsRUFBMEI7QUFDeEIsVUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBakIsR0FBc0IsRUFBdEIsR0FBMkJELE1BQU0sQ0FBQ0MsT0FBckQ7QUFDQWpELE1BQUFBLENBQUMsQ0FBQ0ksTUFBRixDQUFTOEMsS0FBVCxDQUFlQyxTQUFmLHlCQUEwQ0osWUFBMUM7QUFDRDtBQUNGLEdBTEQ7QUFNQUQsRUFBQUEsT0FBTyxDQUFDL0MsZ0JBQVIsQ0FBeUIsWUFBekIsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzVDLFFBQUlBLENBQUMsQ0FBQ0ksTUFBRixLQUFhMEMsT0FBakIsRUFBMEI7QUFDeEI5QyxNQUFBQSxDQUFDLENBQUNJLE1BQUYsQ0FBUzhDLEtBQVQsQ0FBZUMsU0FBZixHQUEyQixFQUEzQjtBQUNEO0FBQ0YsR0FKRDtBQUtBakUsRUFBQUEsUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFNO0FBQ3hDK0MsSUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFDRCxHQUZEO0FBR0EsU0FBTyxFQUFQO0FBQ0QsQ0FqQkQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9jYXJvdXNlbE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcm91c2VsTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2Fyb3VzZWxMaXN0ID0gW107XG4gIGNvbnN0IGdldFNsaWRlciA9IGZ1bmN0aW9uICguLi5pbWFnZXMpIHtcbiAgICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2Fyb3VzZWwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmFtZS5jbGFzc0xpc3QuYWRkKFwiZnJhbWVcIik7XG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImZyYW1lX19pbWFnZVwiKTtcbiAgICAgIGltZy5zcmMgPSBpbWFnZXNbaV07XG4gICAgICBjb25zdCBmcmFtZVNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZyYW1lU2xpZGUuY2xhc3NMaXN0LmFkZChcImZyYW1lX19zbGlkZVwiKTtcbiAgICAgIGZyYW1lU2xpZGUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGZyYW1lU2xpZGUpO1xuICAgICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoXCJkb3QtYWN0aXZlXCIpO1xuICAgICAgfVxuICAgICAgZG90W1wiZGF0YS10YXJnZXRcIl0gPSBpO1xuICAgICAgZG90LmNsYXNzTGlzdC5hZGQoXCJuYXZfX2RvdFwiKTtcbiAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZG90TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fZG90XCIpXG4gICAgICAgICk7XG4gICAgICAgIGRvdExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRvdC1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZG90LWFjdGl2ZVwiKTtcbiAgICAgICAgbGV0IGltYWdlV2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGV0IHdpZHRoU3RyaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lXCIpXG4gICAgICAgICAgKS53aWR0aDtcbiAgICAgICAgICBsZXQgd2lkdGhWYWx1ZSA9IHdpZHRoU3RyaW5nLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICByZXR1cm4gd2lkdGhWYWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgZnJhbWUuc2Nyb2xsTGVmdCA9IGltYWdlV2lkdGgoZSkgKiBlLnRhcmdldFtcImRhdGEtdGFyZ2V0XCJdO1xuICAgICAgICByZXNldFRpbWVyKCk7XG4gICAgICB9KTtcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChkb3QpO1xuICAgIH1cbiAgICBjYXJvdXNlbExpc3QucHVzaChjYXJvdXNlbCk7XG4gICAgcmV0dXJuIGNhcm91c2VsO1xuICB9O1xuICBjb25zdCBzY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2Fyb3VzZWxMaXN0LmZvckVhY2goKGNhcm91c2VsKSA9PiB7XG4gICAgICBjb25zdCBlbGVtcyA9IEFycmF5LmZyb20oY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2RvdFwiKSk7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtSW5kZXggPVxuICAgICAgICBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmRvdC1hY3RpdmVcIilbXCJkYXRhLXRhcmdldFwiXTtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9XG4gICAgICAgIGVsZW1zLmxlbmd0aCAtIDIgPj0gYWN0aXZlRWxlbUluZGV4ID8gYWN0aXZlRWxlbUluZGV4ICsgMSA6IDA7XG4gICAgICBjb25zdCBuZXh0RWxlbSA9IGVsZW1zW25leHRJbmRleF07XG4gICAgICBuZXh0RWxlbS5jbGljaygpO1xuICAgIH0pO1xuICB9O1xuICBsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY3JvbGwoKSwgOTAwMCk7XG4gIGNvbnN0IHJlc2V0VGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY3JvbGwoKSwgOTAwMCk7XG4gIH07XG4gIHJldHVybiB7IGdldFNsaWRlciwgcmVzZXRUaW1lciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2Fyb3VzZWxNb2R1bGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY2Fyb3VzZWxNb2R1bGUgZnJvbSBcIi4vY2Fyb3VzZWxNb2R1bGVcIjtcbmltcG9ydCBkcm9wQ2FsY0Rhc2ggZnJvbSBcIi4vaW1hZ2VzL2Ryb3AtY2FsYy1kYXNoLnBuZ1wiO1xuaW1wb3J0IGRyb3BDYWxjUnVuIGZyb20gXCIuL2ltYWdlcy9kcm9wLWNhbGMtcnVuLnBuZ1wiO1xuaW1wb3J0IHBvb2xEYXNoIGZyb20gXCIuL2ltYWdlcy9wb29sLWRhc2gucG5nXCI7XG5pbXBvcnQgcG9vbENyZWF0ZSBmcm9tIFwiLi9pbWFnZXMvcG9vbC1jcmVhdGUucG5nXCI7XG5pbXBvcnQgcG9vbE1hbmFnZSBmcm9tIFwiLi9pbWFnZXMvcG9vbC1tYW5hZ2UucG5nXCI7XG5pbXBvcnQgcG9vbENoYXQgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtY2hhdC5wbmdcIjtcbmltcG9ydCBwb29sUmFuayBmcm9tIFwiLi9pbWFnZXMvcG9vbC1yYW5rLnBuZ1wiO1xuaW1wb3J0IHBvb2xMZWFndWUgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtbGVhZ3VlLnBuZ1wiO1xuaW1wb3J0IGNhcm91c2VsQ29kZSBmcm9tIFwiLi9pbWFnZXMvY2Fyb3VzZWwtY29kZS5wbmdcIjtcbmltcG9ydCBzb3J0U2NyaXB0IGZyb20gXCIuL2ltYWdlcy9zb3J0LXNjcmlwdC5wbmdcIjtcblxuY29uc3QgcG9vbENhcm91c2VsID0gY2Fyb3VzZWxNb2R1bGUuZ2V0U2xpZGVyKFxuICBwb29sRGFzaCxcbiAgcG9vbExlYWd1ZSxcbiAgcG9vbENoYXQsXG4gIHBvb2xDcmVhdGUsXG4gIHBvb2xNYW5hZ2UsXG4gIHBvb2xSYW5rXG4pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb29sLWNhcm91c2VsXCIpLmFwcGVuZENoaWxkKHBvb2xDYXJvdXNlbCk7XG5cbmNvbnN0IGRyb3BDYWxjQ2Fyb3VzZWwgPSBjYXJvdXNlbE1vZHVsZS5nZXRTbGlkZXIoZHJvcENhbGNEYXNoLCBkcm9wQ2FsY1J1bik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyb3AtY2FsYy1jYXJvdXNlbFwiKS5hcHBlbmRDaGlsZChkcm9wQ2FsY0Nhcm91c2VsKTtcblxuY29uc3Qgc29ydFNjcmlwdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbnNvcnRTY3JpcHRJbWFnZS5zcmMgPSBzb3J0U2NyaXB0O1xuc29ydFNjcmlwdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJvbmUtaW1hZ2VcIik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnQtc2NyaXB0LWNhcm91c2VsXCIpLmFwcGVuZENoaWxkKHNvcnRTY3JpcHRJbWFnZSk7XG5cbmNvbnN0IGNhcm91c2VsQ29kZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmNhcm91c2VsQ29kZUltYWdlLnNyYyA9IGNhcm91c2VsQ29kZTtcbmNhcm91c2VsQ29kZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJvbmUtaW1hZ2VcIik7XG5kb2N1bWVudFxuICAuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW8tc2l0ZS1jYXJvdXNlbFwiKVxuICAuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxDb2RlSW1hZ2UpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuKGZ1bmN0aW9uIG5hdmlnYXRpb25CYXJTZXR1cCgpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LXdyYXBcIik7XG4gIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHdyYXBwZXIpIHtcbiAgICAgIGxldCBwb3BvdXRMZW5ndGggPSB3aW5kb3cuc2Nyb2xsWSA+IDQ1ID8gNDUgOiB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwke3BvcG91dExlbmd0aH1weClgO1xuICAgIH1cbiAgfSk7XG4gIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHdyYXBwZXIpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICB9KTtcbiAgcmV0dXJuIHt9O1xufSkoKTtcbiJdLCJuYW1lcyI6WyJjYXJvdXNlbE1vZHVsZSIsImNhcm91c2VsTGlzdCIsImdldFNsaWRlciIsImNhcm91c2VsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZnJhbWUiLCJhcHBlbmRDaGlsZCIsIm5hdiIsImkiLCJsZW5ndGgiLCJpbWciLCJzcmMiLCJmcmFtZVNsaWRlIiwiZG90IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkb3RMaXN0IiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZSIsImltYWdlV2lkdGgiLCJ3aWR0aFN0cmluZyIsImdldENvbXB1dGVkU3R5bGUiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJ3aWR0aFZhbHVlIiwic2xpY2UiLCJzY3JvbGxMZWZ0IiwicmVzZXRUaW1lciIsInB1c2giLCJzY3JvbGwiLCJlbGVtcyIsImFjdGl2ZUVsZW1JbmRleCIsIm5leHRJbmRleCIsIm5leHRFbGVtIiwiY2xpY2siLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRyb3BDYWxjRGFzaCIsImRyb3BDYWxjUnVuIiwicG9vbERhc2giLCJwb29sQ3JlYXRlIiwicG9vbE1hbmFnZSIsInBvb2xDaGF0IiwicG9vbFJhbmsiLCJwb29sTGVhZ3VlIiwiY2Fyb3VzZWxDb2RlIiwic29ydFNjcmlwdCIsInBvb2xDYXJvdXNlbCIsImdldEVsZW1lbnRCeUlkIiwiZHJvcENhbGNDYXJvdXNlbCIsInNvcnRTY3JpcHRJbWFnZSIsImNhcm91c2VsQ29kZUltYWdlIiwiY29udGFpbmVyIiwibmF2aWdhdGlvbkJhclNldHVwIiwid3JhcHBlciIsInBvcG91dExlbmd0aCIsIndpbmRvdyIsInNjcm9sbFkiLCJzdHlsZSIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=