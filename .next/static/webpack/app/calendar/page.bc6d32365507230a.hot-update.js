"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/calendar/page",{

/***/ "(app-pages-browser)/./app/calendar/page.tsx":
/*!*******************************!*\
  !*** ./app/calendar/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst IcsUpload = ()=>{\n    _s();\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store file content\n    const handleFileUpload = (event)=>{\n        if (!event.target.files) return;\n        const file = event.target.files[0];\n        const reader = new FileReader();\n        reader.onload = ()=>{\n            const fileContentString = reader.result;\n            setFileContent(fileContentString); // Set file content in state\n        };\n        // Read the file as text\n        reader.readAsText(file);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Upload ICS File\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                accept: \".ics\",\n                onChange: handleFileUpload\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"File Content:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: fileContent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IcsUpload, \"+XNw8NdYZU8ilyTJtLuEa8u+pkk=\");\n_c = IcsUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IcsUpload);\nvar _c;\n$RefreshReg$(_c, \"IcsUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jYWxlbmRhci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7QUFHeEMsTUFBTUUsWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILCtDQUFRQSxDQUFTLEtBQUssOEJBQThCO0lBRTFGLE1BQU1JLG1CQUFtQixDQUFDQztRQUN4QixJQUFJLENBQUNBLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1FBQ3pCLE1BQU1DLE9BQU9ILE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7UUFDbEMsTUFBTUUsU0FBUyxJQUFJQztRQUVuQkQsT0FBT0UsTUFBTSxHQUFHO1lBQ2QsTUFBTUMsb0JBQW9CSCxPQUFPSSxNQUFNO1lBQ3ZDVixlQUFlUyxvQkFBb0IsNEJBQTRCO1FBQ2pFO1FBRUEsd0JBQXdCO1FBQ3hCSCxPQUFPSyxVQUFVLENBQUNOO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLFFBQU87Z0JBQU9DLFVBQVVoQjs7Ozs7OzBCQUUzQyw4REFBQ1c7O2tDQUNDLDhEQUFDTTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FBS3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZDtHQTVCTUQ7S0FBQUE7QUE4Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NhbGVuZGFyL3BhZ2UudHN4PzVlZDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBJY3NVcGxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTsgLy8gU3RhdGUgdG8gc3RvcmUgZmlsZSBjb250ZW50XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVVcGxvYWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5maWxlcykgcmV0dXJuO1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZmlsZUNvbnRlbnRTdHJpbmcgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgc2V0RmlsZUNvbnRlbnQoZmlsZUNvbnRlbnRTdHJpbmcpOyAvLyBTZXQgZmlsZSBjb250ZW50IGluIHN0YXRlXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJlYWQgdGhlIGZpbGUgYXMgdGV4dFxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5VcGxvYWQgSUNTIEZpbGU8L2gxPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCIuaWNzXCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9IC8+XHJcbiAgICAgIHsvKiBSZW5kZXIgb3IgdXNlIGZpbGVDb250ZW50IHN0YXRlIHdoZXJldmVyIG5lZWRlZCAqL31cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+RmlsZSBDb250ZW50OjwvaDI+XHJcbiAgICAgICAgPHByZT57ZmlsZUNvbnRlbnR9PC9wcmU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljc1VwbG9hZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJY3NVcGxvYWQiLCJmaWxlQ29udGVudCIsInNldEZpbGVDb250ZW50IiwiaGFuZGxlRmlsZVVwbG9hZCIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJmaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZpbGVDb250ZW50U3RyaW5nIiwicmVzdWx0IiwicmVhZEFzVGV4dCIsImRpdiIsImgxIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJoMiIsInByZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/calendar/page.tsx\n"));

/***/ })

});