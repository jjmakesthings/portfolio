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

/***/ "./src/images/shop-blocks-assy.jpeg":
/*!******************************************!*\
  !*** ./src/images/shop-blocks-assy.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bff257c6c14c696ea98.jpeg";

/***/ }),

/***/ "./src/images/shop-blocks.jpeg":
/*!*************************************!*\
  !*** ./src/images/shop-blocks.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d22f0af2d42403b81667.jpeg";

/***/ }),

/***/ "./src/images/shop-box.jpeg":
/*!**********************************!*\
  !*** ./src/images/shop-box.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a37e8583571bbc567a00.jpeg";

/***/ }),

/***/ "./src/images/shop-cube.jpeg":
/*!***********************************!*\
  !*** ./src/images/shop-cube.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f126bc08cbf3409acd0.jpeg";

/***/ }),

/***/ "./src/images/shop-halves.jpeg":
/*!*************************************!*\
  !*** ./src/images/shop-halves.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caef7edfd913979eea2c.jpeg";

/***/ }),

/***/ "./src/images/shop-shield.jpeg":
/*!*************************************!*\
  !*** ./src/images/shop-shield.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d7d6aef043c7652e5ce.jpeg";

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
/* harmony import */ var _images_shop_blocks_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/shop-blocks.jpeg */ "./src/images/shop-blocks.jpeg");
/* harmony import */ var _images_shop_blocks_assy_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/shop-blocks-assy.jpeg */ "./src/images/shop-blocks-assy.jpeg");
/* harmony import */ var _images_shop_box_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/shop-box.jpeg */ "./src/images/shop-box.jpeg");
/* harmony import */ var _images_shop_cube_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/shop-cube.jpeg */ "./src/images/shop-cube.jpeg");
/* harmony import */ var _images_shop_halves_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/shop-halves.jpeg */ "./src/images/shop-halves.jpeg");
/* harmony import */ var _images_shop_shield_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/shop-shield.jpeg */ "./src/images/shop-shield.jpeg");
















 // Add image carousels to page

var poolCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_pool_dash_png__WEBPACK_IMPORTED_MODULE_3__, _images_pool_league_png__WEBPACK_IMPORTED_MODULE_8__, _images_pool_chat_png__WEBPACK_IMPORTED_MODULE_6__, _images_pool_create_png__WEBPACK_IMPORTED_MODULE_4__, _images_pool_manage_png__WEBPACK_IMPORTED_MODULE_5__, _images_pool_rank_png__WEBPACK_IMPORTED_MODULE_7__);
document.getElementById("pool-carousel").appendChild(poolCarousel);
var dropCalcCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_drop_calc_dash_png__WEBPACK_IMPORTED_MODULE_1__, _images_drop_calc_run_png__WEBPACK_IMPORTED_MODULE_2__);
document.getElementById("drop-calc-carousel").appendChild(dropCalcCarousel);
var shopCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_shop_shield_jpeg__WEBPACK_IMPORTED_MODULE_16__, _images_shop_blocks_jpeg__WEBPACK_IMPORTED_MODULE_11__, _images_shop_blocks_assy_jpeg__WEBPACK_IMPORTED_MODULE_12__, _images_shop_box_jpeg__WEBPACK_IMPORTED_MODULE_13__, _images_shop_cube_jpeg__WEBPACK_IMPORTED_MODULE_14__, _images_shop_halves_jpeg__WEBPACK_IMPORTED_MODULE_15__);
document.getElementById("hobby-cnc-carousel").appendChild(shopCarousel); // Add static images to page

var sortScriptImage = document.createElement("img");
sortScriptImage.src = _images_sort_script_png__WEBPACK_IMPORTED_MODULE_10__;
sortScriptImage.classList.add("one-image");
document.getElementById("sort-script-carousel").appendChild(sortScriptImage);
var carouselCodeImage = document.createElement("img");
carouselCodeImage.src = _images_carousel_code_png__WEBPACK_IMPORTED_MODULE_9__;
carouselCodeImage.classList.add("one-image");
document.getElementById("portfolio-site-carousel").appendChild(carouselCodeImage); // Nav bar code

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUE7O0FBQ0EsQ0FBQyxTQUFTQyxrQkFBVCxHQUE4QjtBQUM3QixNQUFNQyxPQUFPLEdBQUdsRSxRQUFRLENBQUM0RCxjQUFULENBQXdCLFVBQXhCLENBQWhCO0FBQ0FNLEVBQUFBLE9BQU8sQ0FBQ3JELGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFVBQUNDLENBQUQsRUFBTztBQUM1QyxRQUFJQSxDQUFDLENBQUNJLE1BQUYsS0FBYWdELE9BQWpCLEVBQTBCO0FBQ3hCLFVBQUlDLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEVBQWpCLEdBQXNCLEVBQXRCLEdBQTJCRCxNQUFNLENBQUNDLE9BQXJEO0FBQ0F2RCxNQUFBQSxDQUFDLENBQUNJLE1BQUYsQ0FBU29ELEtBQVQsQ0FBZUMsU0FBZix5QkFBMENKLFlBQTFDO0FBQ0Q7QUFDRixHQUxEO0FBTUFELEVBQUFBLE9BQU8sQ0FBQ3JELGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFVBQUNDLENBQUQsRUFBTztBQUM1QyxRQUFJQSxDQUFDLENBQUNJLE1BQUYsS0FBYWdELE9BQWpCLEVBQTBCO0FBQ3hCcEQsTUFBQUEsQ0FBQyxDQUFDSSxNQUFGLENBQVNvRCxLQUFULENBQWVDLFNBQWYsR0FBMkIsRUFBM0I7QUFDRDtBQUNGLEdBSkQ7QUFLQXZFLEVBQUFBLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBTTtBQUN4Q3FELElBQUFBLE9BQU8sQ0FBQ0ksS0FBUixDQUFjQyxTQUFkLEdBQTBCLEVBQTFCO0FBQ0QsR0FGRDtBQUdBLFNBQU8sRUFBUDtBQUNELENBakJELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY2Fyb3VzZWxNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJvdXNlbE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhcm91c2VsTGlzdCA9IFtdO1xuICBjb25zdCBnZXRTbGlkZXIgPSBmdW5jdGlvbiAoLi4uaW1hZ2VzKSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbFwiKTtcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJhbWUuY2xhc3NMaXN0LmFkZChcImZyYW1lXCIpO1xuICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJmcmFtZV9faW1hZ2VcIik7XG4gICAgICBpbWcuc3JjID0gaW1hZ2VzW2ldO1xuICAgICAgY29uc3QgZnJhbWVTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmcmFtZVNsaWRlLmNsYXNzTGlzdC5hZGQoXCJmcmFtZV9fc2xpZGVcIik7XG4gICAgICBmcmFtZVNsaWRlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBmcmFtZS5hcHBlbmRDaGlsZChmcmFtZVNsaWRlKTtcbiAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwiZG90LWFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICAgIGRvdFtcImRhdGEtdGFyZ2V0XCJdID0gaTtcbiAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwibmF2X19kb3RcIik7XG4gICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2RvdFwiKVxuICAgICAgICApO1xuICAgICAgICBkb3RMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb3QtYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRvdC1hY3RpdmVcIik7XG4gICAgICAgIGxldCBpbWFnZVdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCB3aWR0aFN0cmluZyA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mcmFtZVwiKVxuICAgICAgICAgICkud2lkdGg7XG4gICAgICAgICAgbGV0IHdpZHRoVmFsdWUgPSB3aWR0aFN0cmluZy5zbGljZSgwLCAtMik7XG4gICAgICAgICAgcmV0dXJuIHdpZHRoVmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIGZyYW1lLnNjcm9sbExlZnQgPSBpbWFnZVdpZHRoKGUpICogZS50YXJnZXRbXCJkYXRhLXRhcmdldFwiXTtcbiAgICAgICAgcmVzZXRUaW1lcigpO1xuICAgICAgfSk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICB9XG4gICAgY2Fyb3VzZWxMaXN0LnB1c2goY2Fyb3VzZWwpO1xuICAgIHJldHVybiBjYXJvdXNlbDtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGNhcm91c2VsTGlzdC5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgICAgY29uc3QgZWxlbXMgPSBBcnJheS5mcm9tKGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19kb3RcIikpO1xuICAgICAgY29uc3QgYWN0aXZlRWxlbUluZGV4ID1cbiAgICAgICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5kb3QtYWN0aXZlXCIpW1wiZGF0YS10YXJnZXRcIl07XG4gICAgICBjb25zdCBuZXh0SW5kZXggPVxuICAgICAgICBlbGVtcy5sZW5ndGggLSAyID49IGFjdGl2ZUVsZW1JbmRleCA/IGFjdGl2ZUVsZW1JbmRleCArIDEgOiAwO1xuICAgICAgY29uc3QgbmV4dEVsZW0gPSBlbGVtc1tuZXh0SW5kZXhdO1xuICAgICAgbmV4dEVsZW0uY2xpY2soKTtcbiAgICB9KTtcbiAgfTtcbiAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2Nyb2xsKCksIDkwMDApO1xuICBjb25zdCByZXNldFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2Nyb2xsKCksIDkwMDApO1xuICB9O1xuICByZXR1cm4geyBnZXRTbGlkZXIsIHJlc2V0VGltZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhcm91c2VsTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNhcm91c2VsTW9kdWxlIGZyb20gXCIuL2Nhcm91c2VsTW9kdWxlXCI7XG5pbXBvcnQgZHJvcENhbGNEYXNoIGZyb20gXCIuL2ltYWdlcy9kcm9wLWNhbGMtZGFzaC5wbmdcIjtcbmltcG9ydCBkcm9wQ2FsY1J1biBmcm9tIFwiLi9pbWFnZXMvZHJvcC1jYWxjLXJ1bi5wbmdcIjtcbmltcG9ydCBwb29sRGFzaCBmcm9tIFwiLi9pbWFnZXMvcG9vbC1kYXNoLnBuZ1wiO1xuaW1wb3J0IHBvb2xDcmVhdGUgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtY3JlYXRlLnBuZ1wiO1xuaW1wb3J0IHBvb2xNYW5hZ2UgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtbWFuYWdlLnBuZ1wiO1xuaW1wb3J0IHBvb2xDaGF0IGZyb20gXCIuL2ltYWdlcy9wb29sLWNoYXQucG5nXCI7XG5pbXBvcnQgcG9vbFJhbmsgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtcmFuay5wbmdcIjtcbmltcG9ydCBwb29sTGVhZ3VlIGZyb20gXCIuL2ltYWdlcy9wb29sLWxlYWd1ZS5wbmdcIjtcbmltcG9ydCBjYXJvdXNlbENvZGUgZnJvbSBcIi4vaW1hZ2VzL2Nhcm91c2VsLWNvZGUucG5nXCI7XG5pbXBvcnQgc29ydFNjcmlwdCBmcm9tIFwiLi9pbWFnZXMvc29ydC1zY3JpcHQucG5nXCI7XG5pbXBvcnQgc2hvcEJsb2NrcyBmcm9tIFwiLi9pbWFnZXMvc2hvcC1ibG9ja3MuanBlZ1wiO1xuaW1wb3J0IHNob3BCbG9ja3NBc3N5IGZyb20gXCIuL2ltYWdlcy9zaG9wLWJsb2Nrcy1hc3N5LmpwZWdcIjtcbmltcG9ydCBzaG9wQm94IGZyb20gXCIuL2ltYWdlcy9zaG9wLWJveC5qcGVnXCI7XG5pbXBvcnQgc2hvcEN1YmUgZnJvbSBcIi4vaW1hZ2VzL3Nob3AtY3ViZS5qcGVnXCI7XG5pbXBvcnQgc2hvcEhhbHZlcyBmcm9tIFwiLi9pbWFnZXMvc2hvcC1oYWx2ZXMuanBlZ1wiO1xuaW1wb3J0IHNob3BTaGllbGQgZnJvbSBcIi4vaW1hZ2VzL3Nob3Atc2hpZWxkLmpwZWdcIjtcblxuLy8gQWRkIGltYWdlIGNhcm91c2VscyB0byBwYWdlXG5jb25zdCBwb29sQ2Fyb3VzZWwgPSBjYXJvdXNlbE1vZHVsZS5nZXRTbGlkZXIoXG4gIHBvb2xEYXNoLFxuICBwb29sTGVhZ3VlLFxuICBwb29sQ2hhdCxcbiAgcG9vbENyZWF0ZSxcbiAgcG9vbE1hbmFnZSxcbiAgcG9vbFJhbmtcbik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvb2wtY2Fyb3VzZWxcIikuYXBwZW5kQ2hpbGQocG9vbENhcm91c2VsKTtcblxuY29uc3QgZHJvcENhbGNDYXJvdXNlbCA9IGNhcm91c2VsTW9kdWxlLmdldFNsaWRlcihkcm9wQ2FsY0Rhc2gsIGRyb3BDYWxjUnVuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1jYWxjLWNhcm91c2VsXCIpLmFwcGVuZENoaWxkKGRyb3BDYWxjQ2Fyb3VzZWwpO1xuXG5jb25zdCBzaG9wQ2Fyb3VzZWwgPSBjYXJvdXNlbE1vZHVsZS5nZXRTbGlkZXIoXG4gIHNob3BTaGllbGQsXG4gIHNob3BCbG9ja3MsXG4gIHNob3BCbG9ja3NBc3N5LFxuICBzaG9wQm94LFxuICBzaG9wQ3ViZSxcbiAgc2hvcEhhbHZlc1xuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9iYnktY25jLWNhcm91c2VsXCIpLmFwcGVuZENoaWxkKHNob3BDYXJvdXNlbCk7XG5cbi8vIEFkZCBzdGF0aWMgaW1hZ2VzIHRvIHBhZ2VcbmNvbnN0IHNvcnRTY3JpcHRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5zb3J0U2NyaXB0SW1hZ2Uuc3JjID0gc29ydFNjcmlwdDtcbnNvcnRTY3JpcHRJbWFnZS5jbGFzc0xpc3QuYWRkKFwib25lLWltYWdlXCIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0LXNjcmlwdC1jYXJvdXNlbFwiKS5hcHBlbmRDaGlsZChzb3J0U2NyaXB0SW1hZ2UpO1xuXG5jb25zdCBjYXJvdXNlbENvZGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5jYXJvdXNlbENvZGVJbWFnZS5zcmMgPSBjYXJvdXNlbENvZGU7XG5jYXJvdXNlbENvZGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwib25lLWltYWdlXCIpO1xuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvLXNpdGUtY2Fyb3VzZWxcIilcbiAgLmFwcGVuZENoaWxkKGNhcm91c2VsQ29kZUltYWdlKTtcblxuLy8gTmF2IGJhciBjb2RlXG4oZnVuY3Rpb24gbmF2aWdhdGlvbkJhclNldHVwKCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtd3JhcFwiKTtcbiAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gd3JhcHBlcikge1xuICAgICAgbGV0IHBvcG91dExlbmd0aCA9IHdpbmRvdy5zY3JvbGxZID4gNDUgPyA0NSA6IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCR7cG9wb3V0TGVuZ3RofXB4KWA7XG4gICAgfVxuICB9KTtcbiAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gd3JhcHBlcikge1xuICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gIH0pO1xuICByZXR1cm4ge307XG59KSgpO1xuIl0sIm5hbWVzIjpbImNhcm91c2VsTW9kdWxlIiwiY2Fyb3VzZWxMaXN0IiwiZ2V0U2xpZGVyIiwiY2Fyb3VzZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmcmFtZSIsImFwcGVuZENoaWxkIiwibmF2IiwiaSIsImxlbmd0aCIsImltZyIsInNyYyIsImZyYW1lU2xpZGUiLCJkb3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRvdExpc3QiLCJBcnJheSIsImZyb20iLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlIiwiaW1hZ2VXaWR0aCIsIndpZHRoU3RyaW5nIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aCIsIndpZHRoVmFsdWUiLCJzbGljZSIsInNjcm9sbExlZnQiLCJyZXNldFRpbWVyIiwicHVzaCIsInNjcm9sbCIsImVsZW1zIiwiYWN0aXZlRWxlbUluZGV4IiwibmV4dEluZGV4IiwibmV4dEVsZW0iLCJjbGljayIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZHJvcENhbGNEYXNoIiwiZHJvcENhbGNSdW4iLCJwb29sRGFzaCIsInBvb2xDcmVhdGUiLCJwb29sTWFuYWdlIiwicG9vbENoYXQiLCJwb29sUmFuayIsInBvb2xMZWFndWUiLCJjYXJvdXNlbENvZGUiLCJzb3J0U2NyaXB0Iiwic2hvcEJsb2NrcyIsInNob3BCbG9ja3NBc3N5Iiwic2hvcEJveCIsInNob3BDdWJlIiwic2hvcEhhbHZlcyIsInNob3BTaGllbGQiLCJwb29sQ2Fyb3VzZWwiLCJnZXRFbGVtZW50QnlJZCIsImRyb3BDYWxjQ2Fyb3VzZWwiLCJzaG9wQ2Fyb3VzZWwiLCJzb3J0U2NyaXB0SW1hZ2UiLCJjYXJvdXNlbENvZGVJbWFnZSIsIm5hdmlnYXRpb25CYXJTZXR1cCIsIndyYXBwZXIiLCJwb3BvdXRMZW5ndGgiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9