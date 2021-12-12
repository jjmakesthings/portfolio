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

/***/ "./src/images/drop-calc.png":
/*!**********************************!*\
  !*** ./src/images/drop-calc.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40dff74c4b91b27241f3.png";

/***/ }),

/***/ "./src/images/pool-party.png":
/*!***********************************!*\
  !*** ./src/images/pool-party.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb8654560d1e58d66f16.png";

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
/* harmony import */ var _images_drop_calc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/drop-calc.png */ "./src/images/drop-calc.png");
/* harmony import */ var _images_pool_party_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pool-party.png */ "./src/images/pool-party.png");
/* harmony import */ var _images_sort_script_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sort-script.png */ "./src/images/sort-script.png");




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

console.log(_images_drop_calc_png__WEBPACK_IMPORTED_MODULE_1__);
var carousel = _carouselModule__WEBPACK_IMPORTED_MODULE_0__["default"].getSlider(_images_drop_calc_png__WEBPACK_IMPORTED_MODULE_1__, _images_pool_party_png__WEBPACK_IMPORTED_MODULE_2__, _images_sort_script_png__WEBPACK_IMPORTED_MODULE_3__);
document.getElementById("pool-party-carousel").appendChild(carousel);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWYsR0FBMkIsRUFBM0I7QUFDRDtBQUNGLEdBSkQ7QUFLQS9DLEVBQUFBLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBTTtBQUN4QzZCLElBQUFBLE9BQU8sQ0FBQ0ksS0FBUixDQUFjQyxTQUFkLEdBQTBCLEVBQTFCO0FBQ0QsR0FGRDtBQUdBLFNBQU8sRUFBUDtBQUNELENBakJEOztBQWtCQUMsT0FBTyxDQUFDQyxHQUFSLENBQVliLGtEQUFaO0FBRUEsSUFBTXJDLFFBQVEsR0FBR0gsaUVBQUEsQ0FBeUJ3QyxrREFBekIsRUFBK0JDLG1EQUEvQixFQUFxQ0Msb0RBQXJDLENBQWpCO0FBQ0F0QyxRQUFRLENBQUN3QyxjQUFULENBQXdCLHFCQUF4QixFQUErQ25DLFdBQS9DLENBQTJETixRQUEzRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2Nhcm91c2VsTW9kdWxlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2Fyb3VzZWxNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYXJvdXNlbExpc3QgPSBbXTtcbiAgY29uc3QgZ2V0U2xpZGVyID0gZnVuY3Rpb24gKC4uLmltYWdlcykge1xuICAgIGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyYW1lLmNsYXNzTGlzdC5hZGQoXCJmcmFtZVwiKTtcbiAgICBjYXJvdXNlbC5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiZnJhbWVfX2ltYWdlXCIpO1xuICAgICAgaW1nLnNyYyA9IGltYWdlc1tpXTtcbiAgICAgIGNvbnN0IGZyYW1lU2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZnJhbWVTbGlkZS5jbGFzc0xpc3QuYWRkKFwiZnJhbWVfX3NsaWRlXCIpO1xuICAgICAgZnJhbWVTbGlkZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoZnJhbWVTbGlkZSk7XG4gICAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZChcImRvdC1hY3RpdmVcIik7XG4gICAgICB9XG4gICAgICBkb3RbXCJkYXRhLXRhcmdldFwiXSA9IGk7XG4gICAgICBkb3QuY2xhc3NMaXN0LmFkZChcIm5hdl9fZG90XCIpO1xuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkb3RMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19kb3RcIilcbiAgICAgICAgKTtcbiAgICAgICAgZG90TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZG90LWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkb3QtYWN0aXZlXCIpO1xuICAgICAgICBmcmFtZS5zY3JvbGxMZWZ0ID0gNDAwICogZS50YXJnZXRbXCJkYXRhLXRhcmdldFwiXTtcbiAgICAgIH0pO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGRvdCk7XG4gICAgfVxuICAgIGNhcm91c2VsTGlzdC5wdXNoKGNhcm91c2VsKTtcbiAgICByZXR1cm4gY2Fyb3VzZWw7XG4gIH07XG4gIGNvbnN0IHNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYXJvdXNlbExpc3QuZm9yRWFjaCgoY2Fyb3VzZWwpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1zID0gQXJyYXkuZnJvbShjYXJvdXNlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fZG90XCIpKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1JbmRleCA9XG4gICAgICAgIGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuZG90LWFjdGl2ZVwiKVtcImRhdGEtdGFyZ2V0XCJdO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID1cbiAgICAgICAgZWxlbXMubGVuZ3RoIC0gMiA+PSBhY3RpdmVFbGVtSW5kZXggPyBhY3RpdmVFbGVtSW5kZXggKyAxIDogMDtcbiAgICAgIGNvbnN0IG5leHRFbGVtID0gZWxlbXNbbmV4dEluZGV4XTtcbiAgICAgIG5leHRFbGVtLmNsaWNrKCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2Nyb2xsKCksIDUwMDApO1xuICBjb25zdCByZXNldFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY3JvbGwoKSwgNTAwMCk7XG4gIH07XG4gIHJldHVybiB7IGdldFNsaWRlciwgcmVzZXRUaW1lciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2Fyb3VzZWxNb2R1bGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY2Fyb3VzZWxNb2R1bGUgZnJvbSBcIi4vY2Fyb3VzZWxNb2R1bGVcIjtcbmltcG9ydCBkcm9wIGZyb20gXCIuL2ltYWdlcy9kcm9wLWNhbGMucG5nXCI7XG5pbXBvcnQgcG9vbCBmcm9tIFwiLi9pbWFnZXMvcG9vbC1wYXJ0eS5wbmdcIjtcbmltcG9ydCBzb3J0IGZyb20gXCIuL2ltYWdlcy9zb3J0LXNjcmlwdC5wbmdcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbihmdW5jdGlvbiBuYXZpZ2F0aW9uQmFyU2V0dXAoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi13cmFwXCIpO1xuICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB3cmFwcGVyKSB7XG4gICAgICBsZXQgcG9wb3V0TGVuZ3RoID0gd2luZG93LnNjcm9sbFkgPiA0NSA/IDQ1IDogd2luZG93LnNjcm9sbFk7XG4gICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKDAsJHtwb3BvdXRMZW5ndGh9cHgpYDtcbiAgICB9XG4gIH0pO1xuICB3cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB3cmFwcGVyKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgfSk7XG4gIHJldHVybiB7fTtcbn0pKCk7XG5jb25zb2xlLmxvZyhkcm9wKTtcblxuY29uc3QgY2Fyb3VzZWwgPSBjYXJvdXNlbE1vZHVsZS5nZXRTbGlkZXIoZHJvcCwgcG9vbCwgc29ydCk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvb2wtcGFydHktY2Fyb3VzZWxcIikuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuIl0sIm5hbWVzIjpbImNhcm91c2VsTW9kdWxlIiwiY2Fyb3VzZWxMaXN0IiwiZ2V0U2xpZGVyIiwiY2Fyb3VzZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmcmFtZSIsImFwcGVuZENoaWxkIiwibmF2IiwiaSIsImxlbmd0aCIsImltZyIsInNyYyIsImZyYW1lU2xpZGUiLCJkb3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImRvdExpc3QiLCJBcnJheSIsImZyb20iLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlIiwic2Nyb2xsTGVmdCIsInB1c2giLCJzY3JvbGwiLCJlbGVtcyIsImFjdGl2ZUVsZW1JbmRleCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0SW5kZXgiLCJuZXh0RWxlbSIsImNsaWNrIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlc2V0VGltZXIiLCJkcm9wIiwicG9vbCIsInNvcnQiLCJjb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRpb25CYXJTZXR1cCIsIndyYXBwZXIiLCJwb3BvdXRMZW5ndGgiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==