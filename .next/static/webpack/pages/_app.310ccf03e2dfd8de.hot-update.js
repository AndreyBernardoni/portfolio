"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navData\": function() { return /* binding */ navData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/hi2 */ \"./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n// icons\n\nvar _s = $RefreshSig$();\n\n// nav data\nconst navData = [\n    {\n        name: \"home\",\n        path: \"/\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiHome, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 13,\n            columnNumber: 36\n        }, undefined)\n    },\n    {\n        name: \"about\",\n        path: \"/about\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiUser, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 14,\n            columnNumber: 42\n        }, undefined)\n    },\n    {\n        name: \"services\",\n        path: \"/services\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiRectangleGroup, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 15,\n            columnNumber: 48\n        }, undefined)\n    },\n    {\n        name: \"work\",\n        path: \"/work\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiViewColumns, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 16,\n            columnNumber: 40\n        }, undefined)\n    },\n    {\n        name: \"testimonials\",\n        path: \"/testimonials\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiChatBubbleBottomCenterText, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        name: \"contact\",\n        path: \"/contact\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi2__WEBPACK_IMPORTED_MODULE_1__.HiEnvelope, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 25,\n            columnNumber: 11\n        }, undefined)\n    }\n];\n\n\nconst Nav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const pathname = router.pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex flex-col items-center  gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screnn p-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 mmd:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full\",\n            children: navData.map((link, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"\".concat(link.path === pathname && \"text-accent\", \" relative flex items-center group hover:text-accent\"),\n                    href: link.path,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: link.icon\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fialh\\\\Downloads\\\\Portfolio\\\\components\\\\Nav.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFFBQVE7OztBQVFpQjtBQUV6QixXQUFXO0FBQ0osTUFBTU0sVUFBVTtJQUNyQjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07UUFBS0Msb0JBQU0sOERBQUNULG1EQUFNQTs7Ozs7SUFBSTtJQUM1QztRQUFFTyxNQUFNO1FBQVNDLE1BQU07UUFBVUMsb0JBQU0sOERBQUNSLG1EQUFNQTs7Ozs7SUFBSTtJQUNsRDtRQUFFTSxNQUFNO1FBQVlDLE1BQU07UUFBYUMsb0JBQU0sOERBQUNOLDZEQUFnQkE7Ozs7O0lBQUk7SUFDbEU7UUFBRUksTUFBTTtRQUFRQyxNQUFNO1FBQVNDLG9CQUFNLDhEQUFDUCwwREFBYUE7Ozs7O0lBQUk7SUFDdkQ7UUFDRUssTUFBTTtRQUNOQyxNQUFNO1FBQ05DLG9CQUFNLDhEQUFDTCx5RUFBNEJBOzs7OztJQUNyQztJQUNBO1FBQ0VHLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxvQkFBTSw4REFBQ0osdURBQVVBOzs7OztJQUNuQjtDQUNELENBQUM7QUFFMkI7QUFFbUI7QUFFaEQsTUFBTVEsTUFBTSxJQUFNOztJQUNoQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTUcsV0FBV0QsT0FBT0MsUUFBUTtJQUNoQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDWlgsUUFBUWEsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7Z0JBQzVCLHFCQUNFLDhEQUFDWCxrREFBSUE7b0JBQ0hPLFdBQVcsR0FFVixPQURDRyxLQUFLWixJQUFJLEtBQUtPLFlBQVksZUFDM0I7b0JBQ0RPLE1BQU1GLEtBQUtaLElBQUk7OEJBR2YsNEVBQUNVO3dCQUFJRCxXQUFVO2tDQUFJRyxLQUFLWCxJQUFJOzs7Ozs7bUJBRnZCWTs7Ozs7WUFLWDs7Ozs7Ozs7Ozs7QUFJUjtHQXZCTVI7O1FBQ1dELGtEQUFTQTs7O0tBRHBCQztBQXlCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGljb25zXHJcbmltcG9ydCB7XHJcbiAgSGlIb21lLFxyXG4gIEhpVXNlcixcclxuICBIaVZpZXdDb2x1bW5zLFxyXG4gIEhpUmVjdGFuZ2xlR3JvdXAsXHJcbiAgSGlDaGF0QnViYmxlQm90dG9tQ2VudGVyVGV4dCxcclxuICBIaUVudmVsb3BlLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9oaTJcIjtcclxuXHJcbi8vIG5hdiBkYXRhXHJcbmV4cG9ydCBjb25zdCBuYXZEYXRhID0gW1xyXG4gIHsgbmFtZTogXCJob21lXCIsIHBhdGg6IFwiL1wiLCBpY29uOiA8SGlIb21lIC8+IH0sXHJcbiAgeyBuYW1lOiBcImFib3V0XCIsIHBhdGg6IFwiL2Fib3V0XCIsIGljb246IDxIaVVzZXIgLz4gfSxcclxuICB7IG5hbWU6IFwic2VydmljZXNcIiwgcGF0aDogXCIvc2VydmljZXNcIiwgaWNvbjogPEhpUmVjdGFuZ2xlR3JvdXAgLz4gfSxcclxuICB7IG5hbWU6IFwid29ya1wiLCBwYXRoOiBcIi93b3JrXCIsIGljb246IDxIaVZpZXdDb2x1bW5zIC8+IH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJ0ZXN0aW1vbmlhbHNcIixcclxuICAgIHBhdGg6IFwiL3Rlc3RpbW9uaWFsc1wiLFxyXG4gICAgaWNvbjogPEhpQ2hhdEJ1YmJsZUJvdHRvbUNlbnRlclRleHQgLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImNvbnRhY3RcIixcclxuICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcclxuICAgIGljb246IDxIaUVudmVsb3BlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICBnYXAteS00IGZpeGVkIGgtbWF4IGJvdHRvbS0wIG10LWF1dG8geGw6cmlnaHQtWzIlXSB6LTUwIHRvcC0wIHctZnVsbCB4bDp3LTE2IHhsOm1heC13LW1kIHhsOmgtc2NyZW5uIHAtMjBcIj5cclxuICAgICAge31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCB4bDpmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHhsOmp1c3RpZnktY2VudGVyIGdhcC15LTEwIHB4LTQgbW1kOnB4LTQwIHhsOnB4LTAgaC1bODBweF0geGw6aC1tYXggcHktOCBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLXNtIHRleHQtM3hsIHhsOnRleHQteGwgeGw6cm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAge25hdkRhdGEubWFwKChsaW5rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgbGluay5wYXRoID09PSBwYXRobmFtZSAmJiBcInRleHQtYWNjZW50XCJcclxuICAgICAgICAgICAgICB9IHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGdyb3VwIGhvdmVyOnRleHQtYWNjZW50YH1cclxuICAgICAgICAgICAgICBocmVmPXtsaW5rLnBhdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+e2xpbmsuaWNvbn08L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwibmFtZXMiOlsiSGlIb21lIiwiSGlVc2VyIiwiSGlWaWV3Q29sdW1ucyIsIkhpUmVjdGFuZ2xlR3JvdXAiLCJIaUNoYXRCdWJibGVCb3R0b21DZW50ZXJUZXh0IiwiSGlFbnZlbG9wZSIsIm5hdkRhdGEiLCJuYW1lIiwicGF0aCIsImljb24iLCJMaW5rIiwiUm91dGVyIiwidXNlUm91dGVyIiwiTmF2Iiwicm91dGVyIiwicGF0aG5hbWUiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});