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

/***/ "./src/images/cv-form.png":
/*!********************************!*\
  !*** ./src/images/cv-form.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2875c6f7298f9b49be07.png";

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
/* harmony import */ var _images_cv_form_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cv-form.png */ "./src/images/cv-form.png");
/* harmony import */ var _images_drop_calc_dash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/drop-calc-dash.png */ "./src/images/drop-calc-dash.png");
/* harmony import */ var _images_drop_calc_run_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/drop-calc-run.png */ "./src/images/drop-calc-run.png");
/* harmony import */ var _images_pool_dash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pool-dash.png */ "./src/images/pool-dash.png");
/* harmony import */ var _images_pool_create_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pool-create.png */ "./src/images/pool-create.png");
/* harmony import */ var _images_pool_manage_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pool-manage.png */ "./src/images/pool-manage.png");
/* harmony import */ var _images_pool_chat_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/pool-chat.png */ "./src/images/pool-chat.png");
/* harmony import */ var _images_pool_rank_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/pool-rank.png */ "./src/images/pool-rank.png");
/* harmony import */ var _images_pool_league_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/pool-league.png */ "./src/images/pool-league.png");
/* harmony import */ var _images_carousel_code_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/carousel-code.png */ "./src/images/carousel-code.png");
/* harmony import */ var _images_sort_script_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/sort-script.png */ "./src/images/sort-script.png");
/* harmony import */ var _images_shop_blocks_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/shop-blocks.jpeg */ "./src/images/shop-blocks.jpeg");
/* harmony import */ var _images_shop_blocks_assy_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/shop-blocks-assy.jpeg */ "./src/images/shop-blocks-assy.jpeg");
/* harmony import */ var _images_shop_box_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/shop-box.jpeg */ "./src/images/shop-box.jpeg");
/* harmony import */ var _images_shop_cube_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/shop-cube.jpeg */ "./src/images/shop-cube.jpeg");
/* harmony import */ var _images_shop_halves_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/shop-halves.jpeg */ "./src/images/shop-halves.jpeg");
/* harmony import */ var _images_shop_shield_jpeg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/shop-shield.jpeg */ "./src/images/shop-shield.jpeg");

















 // Add image carousels to page

var poolCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_pool_dash_png__WEBPACK_IMPORTED_MODULE_4__, _images_pool_league_png__WEBPACK_IMPORTED_MODULE_9__, _images_pool_chat_png__WEBPACK_IMPORTED_MODULE_7__, _images_pool_create_png__WEBPACK_IMPORTED_MODULE_5__, _images_pool_manage_png__WEBPACK_IMPORTED_MODULE_6__, _images_pool_rank_png__WEBPACK_IMPORTED_MODULE_8__);
document.getElementById("pool-carousel").appendChild(poolCarousel);
var dropCalcCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_drop_calc_dash_png__WEBPACK_IMPORTED_MODULE_2__, _images_drop_calc_run_png__WEBPACK_IMPORTED_MODULE_3__);
document.getElementById("drop-calc-carousel").appendChild(dropCalcCarousel);
var shopCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_shop_shield_jpeg__WEBPACK_IMPORTED_MODULE_17__, _images_shop_blocks_jpeg__WEBPACK_IMPORTED_MODULE_12__, _images_shop_blocks_assy_jpeg__WEBPACK_IMPORTED_MODULE_13__, _images_shop_box_jpeg__WEBPACK_IMPORTED_MODULE_14__, _images_shop_cube_jpeg__WEBPACK_IMPORTED_MODULE_15__, _images_shop_halves_jpeg__WEBPACK_IMPORTED_MODULE_16__);
document.getElementById("hobby-cnc-carousel").appendChild(shopCarousel); // Add static images to page

var cvImage = document.createElement("img");
cvImage.src = _images_cv_form_png__WEBPACK_IMPORTED_MODULE_1__;
cvImage.classList.add("one-image");
document.getElementById("cv-site-carousel").appendChild(cvImage);
var carouselCodeImage = document.createElement("img");
carouselCodeImage.src = _images_carousel_code_png__WEBPACK_IMPORTED_MODULE_10__;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWU0RCxpQkFGZixHQUlBOztBQUNBLENBQUMsU0FBU0Msa0JBQVQsR0FBOEI7QUFDN0IsTUFBTUMsT0FBTyxHQUFHbkUsUUFBUSxDQUFDNkQsY0FBVCxDQUF3QixVQUF4QixDQUFoQjtBQUNBTSxFQUFBQSxPQUFPLENBQUN0RCxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxVQUFDQyxDQUFELEVBQU87QUFDNUMsUUFBSUEsQ0FBQyxDQUFDSSxNQUFGLEtBQWFpRCxPQUFqQixFQUEwQjtBQUN4QixVQUFJQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFqQixHQUFzQixFQUF0QixHQUEyQkQsTUFBTSxDQUFDQyxPQUFyRDtBQUNBeEQsTUFBQUEsQ0FBQyxDQUFDSSxNQUFGLENBQVNxRCxLQUFULENBQWVDLFNBQWYseUJBQTBDSixZQUExQztBQUNEO0FBQ0YsR0FMRDtBQU1BRCxFQUFBQSxPQUFPLENBQUN0RCxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxVQUFDQyxDQUFELEVBQU87QUFDNUMsUUFBSUEsQ0FBQyxDQUFDSSxNQUFGLEtBQWFpRCxPQUFqQixFQUEwQjtBQUN4QnJELE1BQUFBLENBQUMsQ0FBQ0ksTUFBRixDQUFTcUQsS0FBVCxDQUFlQyxTQUFmLEdBQTJCLEVBQTNCO0FBQ0Q7QUFDRixHQUpEO0FBS0F4RSxFQUFBQSxRQUFRLENBQUNhLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFlBQU07QUFDeENzRCxJQUFBQSxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixFQUExQjtBQUNELEdBRkQ7QUFHQSxTQUFPLEVBQVA7QUFDRCxDQWpCRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Nhcm91c2VsTW9kdWxlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2Fyb3VzZWxNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYXJvdXNlbExpc3QgPSBbXTtcbiAgY29uc3QgZ2V0U2xpZGVyID0gZnVuY3Rpb24gKC4uLmltYWdlcykge1xuICAgIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoXCJmcmFtZVwiKTtcbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiZnJhbWVfX2ltYWdlXCIpO1xuICAgICAgaW1nLnNyYyA9IGltYWdlc1tpXTtcbiAgICAgIGNvbnN0IGZyYW1lU2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZnJhbWVTbGlkZS5jbGFzc0xpc3QuYWRkKFwiZnJhbWVfX3NsaWRlXCIpO1xuICAgICAgZnJhbWVTbGlkZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZnJhbWVTbGlkZSk7XG4gICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZChcImRvdC1hY3RpdmVcIik7XG4gICAgICB9XG4gICAgICBkb3RbXCJkYXRhLXRhcmdldFwiXSA9IGk7XG4gICAgICBkb3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fZG90XCIpO1xuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkb3RMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19kb3RcIilcbiAgICAgICAgKTtcbiAgICAgICAgZG90TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZG90LWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkb3QtYWN0aXZlXCIpO1xuICAgICAgICBsZXQgaW1hZ2VXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsZXQgd2lkdGhTdHJpbmcgPSBnZXRDb21wdXRlZFN0eWxlKFxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJhbWVcIilcbiAgICAgICAgICApLndpZHRoO1xuICAgICAgICAgIGxldCB3aWR0aFZhbHVlID0gd2lkdGhTdHJpbmcuc2xpY2UoMCwgLTIpO1xuICAgICAgICAgIHJldHVybiB3aWR0aFZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBmcmFtZS5zY3JvbGxMZWZ0ID0gaW1hZ2VXaWR0aChlKSAqIGUudGFyZ2V0W1wiZGF0YS10YXJnZXRcIl07XG4gICAgICAgIHJlc2V0VGltZXIoKTtcbiAgICAgIH0pO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGRvdCk7XG4gICAgfVxuICAgIGNhcm91c2VsTGlzdC5wdXNoKGNhcm91c2VsKTtcbiAgICByZXR1cm4gY2Fyb3VzZWw7XG4gIH07XG4gIGNvbnN0IHNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYXJvdXNlbExpc3QuZm9yRWFjaCgoY2Fyb3VzZWwpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1zID0gQXJyYXkuZnJvbShjYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fZG90XCIpKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1JbmRleCA9XG4gICAgICAgIGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuZG90LWFjdGl2ZVwiKVtcImRhdGEtdGFyZ2V0XCJdO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID1cbiAgICAgICAgZWxlbXMubGVuZ3RoIC0gMiA+PSBhY3RpdmVFbGVtSW5kZXggPyBhY3RpdmVFbGVtSW5kZXggKyAxIDogMDtcbiAgICAgIGNvbnN0IG5leHRFbGVtID0gZWxlbXNbbmV4dEluZGV4XTtcbiAgICAgIG5leHRFbGVtLmNsaWNrKCk7XG4gICAgfSk7XG4gIH07XG4gIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHNjcm9sbCgpLCA5MDAwKTtcbiAgY29uc3QgcmVzZXRUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHNjcm9sbCgpLCA5MDAwKTtcbiAgfTtcbiAgcmV0dXJuIHsgZ2V0U2xpZGVyLCByZXNldFRpbWVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjYXJvdXNlbE1vZHVsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjYXJvdXNlbE1vZHVsZSBmcm9tIFwiLi9jYXJvdXNlbE1vZHVsZVwiO1xuaW1wb3J0IGN2Rm9ybSBmcm9tIFwiLi9pbWFnZXMvY3YtZm9ybS5wbmdcIjtcbmltcG9ydCBkcm9wQ2FsY0Rhc2ggZnJvbSBcIi4vaW1hZ2VzL2Ryb3AtY2FsYy1kYXNoLnBuZ1wiO1xuaW1wb3J0IGRyb3BDYWxjUnVuIGZyb20gXCIuL2ltYWdlcy9kcm9wLWNhbGMtcnVuLnBuZ1wiO1xuaW1wb3J0IHBvb2xEYXNoIGZyb20gXCIuL2ltYWdlcy9wb29sLWRhc2gucG5nXCI7XG5pbXBvcnQgcG9vbENyZWF0ZSBmcm9tIFwiLi9pbWFnZXMvcG9vbC1jcmVhdGUucG5nXCI7XG5pbXBvcnQgcG9vbE1hbmFnZSBmcm9tIFwiLi9pbWFnZXMvcG9vbC1tYW5hZ2UucG5nXCI7XG5pbXBvcnQgcG9vbENoYXQgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtY2hhdC5wbmdcIjtcbmltcG9ydCBwb29sUmFuayBmcm9tIFwiLi9pbWFnZXMvcG9vbC1yYW5rLnBuZ1wiO1xuaW1wb3J0IHBvb2xMZWFndWUgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtbGVhZ3VlLnBuZ1wiO1xuaW1wb3J0IGNhcm91c2VsQ29kZSBmcm9tIFwiLi9pbWFnZXMvY2Fyb3VzZWwtY29kZS5wbmdcIjtcbmltcG9ydCBzb3J0U2NyaXB0IGZyb20gXCIuL2ltYWdlcy9zb3J0LXNjcmlwdC5wbmdcIjtcbmltcG9ydCBzaG9wQmxvY2tzIGZyb20gXCIuL2ltYWdlcy9zaG9wLWJsb2Nrcy5qcGVnXCI7XG5pbXBvcnQgc2hvcEJsb2Nrc0Fzc3kgZnJvbSBcIi4vaW1hZ2VzL3Nob3AtYmxvY2tzLWFzc3kuanBlZ1wiO1xuaW1wb3J0IHNob3BCb3ggZnJvbSBcIi4vaW1hZ2VzL3Nob3AtYm94LmpwZWdcIjtcbmltcG9ydCBzaG9wQ3ViZSBmcm9tIFwiLi9pbWFnZXMvc2hvcC1jdWJlLmpwZWdcIjtcbmltcG9ydCBzaG9wSGFsdmVzIGZyb20gXCIuL2ltYWdlcy9zaG9wLWhhbHZlcy5qcGVnXCI7XG5pbXBvcnQgc2hvcFNoaWVsZCBmcm9tIFwiLi9pbWFnZXMvc2hvcC1zaGllbGQuanBlZ1wiO1xuXG4vLyBBZGQgaW1hZ2UgY2Fyb3VzZWxzIHRvIHBhZ2VcbmNvbnN0IHBvb2xDYXJvdXNlbCA9IGNhcm91c2VsTW9kdWxlLmdldFNsaWRlcihcbiAgcG9vbERhc2gsXG4gIHBvb2xMZWFndWUsXG4gIHBvb2xDaGF0LFxuICBwb29sQ3JlYXRlLFxuICBwb29sTWFuYWdlLFxuICBwb29sUmFua1xuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9vbC1jYXJvdXNlbFwiKS5hcHBlbmRDaGlsZChwb29sQ2Fyb3VzZWwpO1xuXG5jb25zdCBkcm9wQ2FsY0Nhcm91c2VsID0gY2Fyb3VzZWxNb2R1bGUuZ2V0U2xpZGVyKGRyb3BDYWxjRGFzaCwgZHJvcENhbGNSdW4pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWNhbGMtY2Fyb3VzZWxcIikuYXBwZW5kQ2hpbGQoZHJvcENhbGNDYXJvdXNlbCk7XG5cbmNvbnN0IHNob3BDYXJvdXNlbCA9IGNhcm91c2VsTW9kdWxlLmdldFNsaWRlcihcbiAgc2hvcFNoaWVsZCxcbiAgc2hvcEJsb2NrcyxcbiAgc2hvcEJsb2Nrc0Fzc3ksXG4gIHNob3BCb3gsXG4gIHNob3BDdWJlLFxuICBzaG9wSGFsdmVzXG4pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob2JieS1jbmMtY2Fyb3VzZWxcIikuYXBwZW5kQ2hpbGQoc2hvcENhcm91c2VsKTtcblxuLy8gQWRkIHN0YXRpYyBpbWFnZXMgdG8gcGFnZVxuY29uc3QgY3ZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5jdkltYWdlLnNyYyA9IGN2Rm9ybTtcbmN2SW1hZ2UuY2xhc3NMaXN0LmFkZChcIm9uZS1pbWFnZVwiKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3Ytc2l0ZS1jYXJvdXNlbFwiKS5hcHBlbmRDaGlsZChjdkltYWdlKTtcblxuY29uc3QgY2Fyb3VzZWxDb2RlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuY2Fyb3VzZWxDb2RlSW1hZ2Uuc3JjID0gY2Fyb3VzZWxDb2RlO1xuY2Fyb3VzZWxDb2RlSW1hZ2UuY2xhc3NMaXN0LmFkZChcIm9uZS1pbWFnZVwiKTtcbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcInBvcnRmb2xpby1zaXRlLWNhcm91c2VsXCIpXG4gIC5hcHBlbmRDaGlsZChjYXJvdXNlbENvZGVJbWFnZSk7XG5cbi8vIE5hdiBiYXIgY29kZVxuKGZ1bmN0aW9uIG5hdmlnYXRpb25CYXJTZXR1cCgpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LXdyYXBcIik7XG4gIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHdyYXBwZXIpIHtcbiAgICAgIGxldCBwb3BvdXRMZW5ndGggPSB3aW5kb3cuc2Nyb2xsWSA+IDQ1ID8gNDUgOiB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwke3BvcG91dExlbmd0aH1weClgO1xuICAgIH1cbiAgfSk7XG4gIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHdyYXBwZXIpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICB9KTtcbiAgcmV0dXJuIHt9O1xufSkoKTtcbiJdLCJuYW1lcyI6WyJjYXJvdXNlbE1vZHVsZSIsImNhcm91c2VsTGlzdCIsImdldFNsaWRlciIsImNhcm91c2VsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZnJhbWUiLCJhcHBlbmRDaGlsZCIsIm5hdiIsImkiLCJsZW5ndGgiLCJpbWciLCJzcmMiLCJmcmFtZVNsaWRlIiwiZG90IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkb3RMaXN0IiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZSIsImltYWdlV2lkdGgiLCJ3aWR0aFN0cmluZyIsImdldENvbXB1dGVkU3R5bGUiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJ3aWR0aFZhbHVlIiwic2xpY2UiLCJzY3JvbGxMZWZ0IiwicmVzZXRUaW1lciIsInB1c2giLCJzY3JvbGwiLCJlbGVtcyIsImFjdGl2ZUVsZW1JbmRleCIsIm5leHRJbmRleCIsIm5leHRFbGVtIiwiY2xpY2siLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImN2Rm9ybSIsImRyb3BDYWxjRGFzaCIsImRyb3BDYWxjUnVuIiwicG9vbERhc2giLCJwb29sQ3JlYXRlIiwicG9vbE1hbmFnZSIsInBvb2xDaGF0IiwicG9vbFJhbmsiLCJwb29sTGVhZ3VlIiwiY2Fyb3VzZWxDb2RlIiwic29ydFNjcmlwdCIsInNob3BCbG9ja3MiLCJzaG9wQmxvY2tzQXNzeSIsInNob3BCb3giLCJzaG9wQ3ViZSIsInNob3BIYWx2ZXMiLCJzaG9wU2hpZWxkIiwicG9vbENhcm91c2VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJkcm9wQ2FsY0Nhcm91c2VsIiwic2hvcENhcm91c2VsIiwiY3ZJbWFnZSIsImNhcm91c2VsQ29kZUltYWdlIiwibmF2aWdhdGlvbkJhclNldHVwIiwid3JhcHBlciIsInBvcG91dExlbmd0aCIsIndpbmRvdyIsInNjcm9sbFkiLCJzdHlsZSIsInRyYW5zZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=