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
        frame.scrollLeft = 400 * e.target["data-target"];
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
    this.interval = setInterval(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0ksTUFBRixLQUFhNkIsT0FBakIsRUFBMEI7QUFDeEJqQyxNQUFBQSxDQUFDLENBQUNJLE1BQUYsQ0FBU2lDLEtBQVQsQ0FBZUMsU0FBZixHQUEyQixFQUEzQjtBQUNEO0FBQ0YsR0FKRDtBQUtBcEQsRUFBQUEsUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFNO0FBQ3hDa0MsSUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFDRCxHQUZEO0FBR0EsU0FBTyxFQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJBLElBQU1DLFlBQVksR0FBR3pELGlFQUFBLENBQ25CMEMsa0RBRG1CLEVBRW5CQyxvREFGbUIsRUFHbkJDLG9EQUhtQixFQUluQkMsa0RBSm1CLEVBS25CQyxrREFMbUIsQ0FBckI7QUFPQTFDLFFBQVEsQ0FBQzZDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUN4QyxXQUF6QyxDQUFxRGdELFlBQXJEO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcxRCxpRUFBQSxDQUF5QndDLHVEQUF6QixFQUF1Q0Msc0RBQXZDLENBQXpCO0FBQ0FyQyxRQUFRLENBQUM2QyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q3hDLFdBQTlDLENBQTBEaUQsZ0JBQTFELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY2Fyb3VzZWxNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJvdXNlbE1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhcm91c2VsTGlzdCA9IFtdO1xuICBjb25zdCBnZXRTbGlkZXIgPSBmdW5jdGlvbiAoLi4uaW1hZ2VzKSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbFwiKTtcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJhbWUuY2xhc3NMaXN0LmFkZChcImZyYW1lXCIpO1xuICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJmcmFtZV9faW1hZ2VcIik7XG4gICAgICBpbWcuc3JjID0gaW1hZ2VzW2ldO1xuICAgICAgY29uc3QgZnJhbWVTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmcmFtZVNsaWRlLmNsYXNzTGlzdC5hZGQoXCJmcmFtZV9fc2xpZGVcIik7XG4gICAgICBmcmFtZVNsaWRlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBmcmFtZS5hcHBlbmRDaGlsZChmcmFtZVNsaWRlKTtcbiAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwiZG90LWFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICAgIGRvdFtcImRhdGEtdGFyZ2V0XCJdID0gaTtcbiAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKFwibmF2X19kb3RcIik7XG4gICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2RvdFwiKVxuICAgICAgICApO1xuICAgICAgICBkb3RMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb3QtYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImRvdC1hY3RpdmVcIik7XG4gICAgICAgIGZyYW1lLnNjcm9sbExlZnQgPSA0MDAgKiBlLnRhcmdldFtcImRhdGEtdGFyZ2V0XCJdO1xuICAgICAgfSk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICB9XG4gICAgY2Fyb3VzZWxMaXN0LnB1c2goY2Fyb3VzZWwpO1xuICAgIHJldHVybiBjYXJvdXNlbDtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIGNhcm91c2VsTGlzdC5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgICAgY29uc3QgZWxlbXMgPSBBcnJheS5mcm9tKGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19kb3RcIikpO1xuICAgICAgY29uc3QgYWN0aXZlRWxlbUluZGV4ID1cbiAgICAgICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5kb3QtYWN0aXZlXCIpW1wiZGF0YS10YXJnZXRcIl07XG4gICAgICBjb25zdCBuZXh0SW5kZXggPVxuICAgICAgICBlbGVtcy5sZW5ndGggLSAyID49IGFjdGl2ZUVsZW1JbmRleCA/IGFjdGl2ZUVsZW1JbmRleCArIDEgOiAwO1xuICAgICAgY29uc3QgbmV4dEVsZW0gPSBlbGVtc1tuZXh0SW5kZXhdO1xuICAgICAgbmV4dEVsZW0uY2xpY2soKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY3JvbGwoKSwgNTAwMCk7XG4gIGNvbnN0IHJlc2V0VGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHNjcm9sbCgpLCA1MDAwKTtcbiAgfTtcbiAgcmV0dXJuIHsgZ2V0U2xpZGVyLCByZXNldFRpbWVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjYXJvdXNlbE1vZHVsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjYXJvdXNlbE1vZHVsZSBmcm9tIFwiLi9jYXJvdXNlbE1vZHVsZVwiO1xuaW1wb3J0IGRyb3BDYWxjRGFzaCBmcm9tIFwiLi9pbWFnZXMvZHJvcC1jYWxjLWRhc2gucG5nXCI7XG5pbXBvcnQgZHJvcENhbGNSdW4gZnJvbSBcIi4vaW1hZ2VzL2Ryb3AtY2FsYy1ydW4ucG5nXCI7XG5pbXBvcnQgcG9vbERhc2ggZnJvbSBcIi4vaW1hZ2VzL3Bvb2wtZGFzaC5wbmdcIjtcbmltcG9ydCBwb29sQ3JlYXRlIGZyb20gXCIuL2ltYWdlcy9wb29sLWNyZWF0ZS5wbmdcIjtcbmltcG9ydCBwb29sTWFuYWdlIGZyb20gXCIuL2ltYWdlcy9wb29sLW1hbmFnZS5wbmdcIjtcbmltcG9ydCBwb29sQ2hhdCBmcm9tIFwiLi9pbWFnZXMvcG9vbC1jaGF0LnBuZ1wiO1xuaW1wb3J0IHBvb2xSYW5rIGZyb20gXCIuL2ltYWdlcy9wb29sLXJhbmsucG5nXCI7XG5pbXBvcnQgc29ydFNjcmlwdCBmcm9tIFwiLi9pbWFnZXMvc29ydC1zY3JpcHQucG5nXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG4oZnVuY3Rpb24gbmF2aWdhdGlvbkJhclNldHVwKCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtd3JhcFwiKTtcbiAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gd3JhcHBlcikge1xuICAgICAgbGV0IHBvcG91dExlbmd0aCA9IHdpbmRvdy5zY3JvbGxZID4gNDUgPyA0NSA6IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCR7cG9wb3V0TGVuZ3RofXB4KWA7XG4gICAgfVxuICB9KTtcbiAgd3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gd3JhcHBlcikge1xuICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICB9XG4gIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gIH0pO1xuICByZXR1cm4ge307XG59KSgpO1xuXG5jb25zdCBwb29sQ2Fyb3VzZWwgPSBjYXJvdXNlbE1vZHVsZS5nZXRTbGlkZXIoXG4gIHBvb2xEYXNoLFxuICBwb29sQ3JlYXRlLFxuICBwb29sTWFuYWdlLFxuICBwb29sQ2hhdCxcbiAgcG9vbFJhbmtcbik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvb2wtY2Fyb3VzZWxcIikuYXBwZW5kQ2hpbGQocG9vbENhcm91c2VsKTtcblxuY29uc3QgZHJvcENhbGNDYXJvdXNlbCA9IGNhcm91c2VsTW9kdWxlLmdldFNsaWRlcihkcm9wQ2FsY0Rhc2gsIGRyb3BDYWxjUnVuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcC1jYWxjLWNhcm91c2VsXCIpLmFwcGVuZENoaWxkKGRyb3BDYWxjQ2Fyb3VzZWwpO1xuIl0sIm5hbWVzIjpbImNhcm91c2VsTW9kdWxlIiwiY2Fyb3VzZWxMaXN0IiwiZ2V0U2xpZGVyIiwiY2Fyb3VzZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmcmFtZSIsImFwcGVuZENoaWxkIiwibmF2IiwiaSIsImxlbmd0aCIsImltZyIsInNyYyIsImZyYW1lU2xpZGUiLCJkb3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRvdExpc3QiLCJBcnJheSIsImZyb20iLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlIiwic2Nyb2xsTGVmdCIsInB1c2giLCJzY3JvbGwiLCJlbGVtcyIsImFjdGl2ZUVsZW1JbmRleCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0SW5kZXgiLCJuZXh0RWxlbSIsImNsaWNrIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlc2V0VGltZXIiLCJkcm9wQ2FsY0Rhc2giLCJkcm9wQ2FsY1J1biIsInBvb2xEYXNoIiwicG9vbENyZWF0ZSIsInBvb2xNYW5hZ2UiLCJwb29sQ2hhdCIsInBvb2xSYW5rIiwic29ydFNjcmlwdCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwibmF2aWdhdGlvbkJhclNldHVwIiwid3JhcHBlciIsInBvcG91dExlbmd0aCIsIndpbmRvdyIsInNjcm9sbFkiLCJzdHlsZSIsInRyYW5zZm9ybSIsInBvb2xDYXJvdXNlbCIsImRyb3BDYWxjQ2Fyb3VzZWwiXSwic291cmNlUm9vdCI6IiJ9