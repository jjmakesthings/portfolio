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
  }, 5000);

  var resetTimer = function resetTimer() {
    clearInterval(interval);
    interval = setInterval(function () {
      return scroll();
    }, 5000);
  };

  return {
    getSlider: getSlider,
    resetTimer: resetTimer
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carouselModule);

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

module.exports = __webpack_require__.p + "634f93300e0045687f91.png";

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
/* harmony import */ var _images_sort_script_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/sort-script.png */ "./src/images/sort-script.png");









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

var poolCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_pool_dash_png__WEBPACK_IMPORTED_MODULE_3__, _images_pool_create_png__WEBPACK_IMPORTED_MODULE_4__, _images_pool_manage_png__WEBPACK_IMPORTED_MODULE_5__, _images_pool_chat_png__WEBPACK_IMPORTED_MODULE_6__, _images_pool_rank_png__WEBPACK_IMPORTED_MODULE_7__);
document.getElementById("pool-carousel").appendChild(poolCarousel);
var dropCalcCarousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_drop_calc_dash_png__WEBPACK_IMPORTED_MODULE_1__, _images_drop_calc_run_png__WEBPACK_IMPORTED_MODULE_2__);
document.getElementById("drop-calc-carousel").appendChild(dropCalcCarousel);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY2Fyb3VzZWxNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJvdXNlbE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhcm91c2VsTGlzdCA9IFtdO1xuICBjb25zdCBnZXRTbGlkZXIgPSBmdW5jdGlvbiAoLi4uaW1hZ2VzKSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbFwiKTtcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJhbWUuY2xhc3NMaXN0LmFkZChcImZyYW1lXCIpO1xuICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJmcmFtZV9faW1hZ2VcIik7XG4gICAgICBpbWcuc3JjID0gaW1hZ2VzW2ldO1xuICAgICAgY29uc3QgZnJhbWVTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmcmFtZVNsaWRlLmNsYXNzTGlzdC5hZGQoXCJmcmFtZV9fc2xpZGVcIik7XG4gICAgICBmcmFtZVNsaWRlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBmcmFtZS5hcHBlbmRDaGlsZChmcmFtZVNsaWRlKTtcbiAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwiZG90LWFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICAgIGRvdFtcImRhdGEtdGFyZ2V0XCJdID0gaTtcbiAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwibmF2X19kb3RcIik7XG4gICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2RvdFwiKVxuICAgICAgICApO1xuICAgICAgICBkb3RMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb3QtYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRvdC1hY3RpdmVcIik7XG4gICAgICAgIGxldCBpbWFnZVdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxldCB3aWR0aFN0cmluZyA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mcmFtZVwiKVxuICAgICAgICAgICkud2lkdGg7XG4gICAgICAgICAgbGV0IHdpZHRoVmFsdWUgPSB3aWR0aFN0cmluZy5zbGljZSgwLCAtMik7XG4gICAgICAgICAgcmV0dXJuIHdpZHRoVmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIGZyYW1lLnNjcm9sbExlZnQgPSBpbWFnZVdpZHRoKGUpICogZS50YXJnZXRbXCJkYXRhLXRhcmdldFwiXTtcbiAgICAgICAgcmVzZXRUaW1lcigpO1xuICAgICAgfSk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICB9XG4gICAgY2Fyb3VzZWxMaXN0LnB1c2goY2Fyb3VzZWwpO1xuICAgIHJldHVybiBjYXJvdXNlbDtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGNhcm91c2VsTGlzdC5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgICAgY29uc3QgZWxlbXMgPSBBcnJheS5mcm9tKGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19kb3RcIikpO1xuICAgICAgY29uc3QgYWN0aXZlRWxlbUluZGV4ID1cbiAgICAgICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5kb3QtYWN0aXZlXCIpW1wiZGF0YS10YXJnZXRcIl07XG4gICAgICBjb25zdCBuZXh0SW5kZXggPVxuICAgICAgICBlbGVtcy5sZW5ndGggLSAyID49IGFjdGl2ZUVsZW1JbmRleCA/IGFjdGl2ZUVsZW1JbmRleCArIDEgOiAwO1xuICAgICAgY29uc3QgbmV4dEVsZW0gPSBlbGVtc1tuZXh0SW5kZXhdO1xuICAgICAgbmV4dEVsZW0uY2xpY2soKTtcbiAgICB9KTtcbiAgfTtcbiAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2Nyb2xsKCksIDUwMDApO1xuICBjb25zdCByZXNldFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2Nyb2xsKCksIDUwMDApO1xuICB9O1xuICByZXR1cm4geyBnZXRTbGlkZXIsIHJlc2V0VGltZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNhcm91c2VsTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNhcm91c2VsTW9kdWxlIGZyb20gXCIuL2Nhcm91c2VsTW9kdWxlXCI7XG5pbXBvcnQgZHJvcENhbGNEYXNoIGZyb20gXCIuL2ltYWdlcy9kcm9wLWNhbGMtZGFzaC5wbmdcIjtcbmltcG9ydCBkcm9wQ2FsY1J1biBmcm9tIFwiLi9pbWFnZXMvZHJvcC1jYWxjLXJ1bi5wbmdcIjtcbmltcG9ydCBwb29sRGFzaCBmcm9tIFwiLi9pbWFnZXMvcG9vbC1kYXNoLnBuZ1wiO1xuaW1wb3J0IHBvb2xDcmVhdGUgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtY3JlYXRlLnBuZ1wiO1xuaW1wb3J0IHBvb2xNYW5hZ2UgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtbWFuYWdlLnBuZ1wiO1xuaW1wb3J0IHBvb2xDaGF0IGZyb20gXCIuL2ltYWdlcy9wb29sLWNoYXQucG5nXCI7XG5pbXBvcnQgcG9vbFJhbmsgZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtcmFuay5wbmdcIjtcbmltcG9ydCBzb3J0U2NyaXB0IGZyb20gXCIuL2ltYWdlcy9zb3J0LXNjcmlwdC5wbmdcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbihmdW5jdGlvbiBuYXZpZ2F0aW9uQmFyU2V0dXAoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi13cmFwXCIpO1xuICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB3cmFwcGVyKSB7XG4gICAgICBsZXQgcG9wb3V0TGVuZ3RoID0gd2luZG93LnNjcm9sbFkgPiA0NSA/IDQ1IDogd2luZG93LnNjcm9sbFk7XG4gICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsJHtwb3BvdXRMZW5ndGh9cHgpYDtcbiAgICB9XG4gIH0pO1xuICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB3cmFwcGVyKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgfSk7XG4gIHJldHVybiB7fTtcbn0pKCk7XG5cbmNvbnN0IHBvb2xDYXJvdXNlbCA9IGNhcm91c2VsTW9kdWxlLmdldFNsaWRlcihcbiAgcG9vbERhc2gsXG4gIHBvb2xDcmVhdGUsXG4gIHBvb2xNYW5hZ2UsXG4gIHBvb2xDaGF0LFxuICBwb29sUmFua1xuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9vbC1jYXJvdXNlbFwiKS5hcHBlbmRDaGlsZChwb29sQ2Fyb3VzZWwpO1xuXG5jb25zdCBkcm9wQ2FsY0Nhcm91c2VsID0gY2Fyb3VzZWxNb2R1bGUuZ2V0U2xpZGVyKGRyb3BDYWxjRGFzaCwgZHJvcENhbGNSdW4pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wLWNhbGMtY2Fyb3VzZWxcIikuYXBwZW5kQ2hpbGQoZHJvcENhbGNDYXJvdXNlbCk7XG4iXSwibmFtZXMiOlsiY2Fyb3VzZWxNb2R1bGUiLCJjYXJvdXNlbExpc3QiLCJnZXRTbGlkZXIiLCJjYXJvdXNlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImZyYW1lIiwiYXBwZW5kQ2hpbGQiLCJuYXYiLCJpIiwibGVuZ3RoIiwiaW1nIiwic3JjIiwiZnJhbWVTbGlkZSIsImRvdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZG90TGlzdCIsIkFycmF5IiwiZnJvbSIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJyZW1vdmUiLCJpbWFnZVdpZHRoIiwid2lkdGhTdHJpbmciLCJnZXRDb21wdXRlZFN0eWxlIiwicXVlcnlTZWxlY3RvciIsIndpZHRoIiwid2lkdGhWYWx1ZSIsInNsaWNlIiwic2Nyb2xsTGVmdCIsInJlc2V0VGltZXIiLCJwdXNoIiwic2Nyb2xsIiwiZWxlbXMiLCJhY3RpdmVFbGVtSW5kZXgiLCJuZXh0SW5kZXgiLCJuZXh0RWxlbSIsImNsaWNrIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkcm9wQ2FsY0Rhc2giLCJkcm9wQ2FsY1J1biIsInBvb2xEYXNoIiwicG9vbENyZWF0ZSIsInBvb2xNYW5hZ2UiLCJwb29sQ2hhdCIsInBvb2xSYW5rIiwic29ydFNjcmlwdCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwibmF2aWdhdGlvbkJhclNldHVwIiwid3JhcHBlciIsInBvcG91dExlbmd0aCIsIndpbmRvdyIsInNjcm9sbFkiLCJzdHlsZSIsInRyYW5zZm9ybSIsInBvb2xDYXJvdXNlbCIsImRyb3BDYWxjQ2Fyb3VzZWwiXSwic291cmNlUm9vdCI6IiJ9