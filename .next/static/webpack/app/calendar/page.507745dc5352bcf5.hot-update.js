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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst IcsUpload = ()=>{\n    _s();\n    const [icsLink, setIcsLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [linkContent, setLinkContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        setIcsLink(event.target.value); // Update the ICS link state as the user types\n    };\n    const handleClick = async ()=>{\n        try {\n            const response = await fetch(icsLink); // Fetch data from the provided link\n            const data = await response.text(); // Read the response as text\n            setLinkContent(data); // Update the link content state with the fetched data\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Provide ICS Link\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter ICS Link\",\n                onChange: handleLinkUpload\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"Fetch Data\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"File Content:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: linkContent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(IcsUpload, \"Bi2ppqDdyPt12S/dXtIYBdtcdMA=\");\n_c = IcsUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IcsUpload);\nvar _c;\n$RefreshReg$(_c, \"IcsUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jYWxlbmRhci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7QUFHeEMsTUFBTUUsWUFBWTs7SUFDZCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDSSxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFTO0lBRXZELE1BQU1NLG9CQUFvQixDQUFDQztRQUN2QkosV0FBV0ksTUFBTUMsTUFBTSxDQUFDQyxLQUFLLEdBQUcsOENBQThDO0lBQ2hGO0lBR0YsTUFBTUMsY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNVixVQUFVLG9DQUFvQztZQUMzRSxNQUFNVyxPQUFPLE1BQU1GLFNBQVNHLElBQUksSUFBSSw0QkFBNEI7WUFDaEVULGVBQWVRLE9BQU8sc0RBQXNEO1FBQzlFLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUYscUJBQ0ksOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLGFBQVk7Z0JBQWlCQyxVQUFVQzs7Ozs7OzBCQUMxRCw4REFBQ0M7Z0JBQU9DLFNBQVNmOzBCQUFhOzs7Ozs7MEJBRTlCLDhEQUFDTzs7a0NBQ0MsOERBQUNTO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFLdkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkO0dBL0JFSDtLQUFBQTtBQWlDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2FsZW5kYXIvcGFnZS50c3g/NWVkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IEljc1VwbG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpY3NMaW5rLCBzZXRJY3NMaW5rXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2xpbmtDb250ZW50LCBzZXRMaW5rQ29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTsgXHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRJY3NMaW5rKGV2ZW50LnRhcmdldC52YWx1ZSk7IC8vIFVwZGF0ZSB0aGUgSUNTIGxpbmsgc3RhdGUgYXMgdGhlIHVzZXIgdHlwZXNcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaWNzTGluayk7IC8vIEZldGNoIGRhdGEgZnJvbSB0aGUgcHJvdmlkZWQgbGlua1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8gUmVhZCB0aGUgcmVzcG9uc2UgYXMgdGV4dFxyXG4gICAgICAgICAgc2V0TGlua0NvbnRlbnQoZGF0YSk7IC8vIFVwZGF0ZSB0aGUgbGluayBjb250ZW50IHN0YXRlIHdpdGggdGhlIGZldGNoZWQgZGF0YVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPlByb3ZpZGUgSUNTIExpbms8L2gxPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBJQ1MgTGlua1wiIG9uQ2hhbmdlPXtoYW5kbGVMaW5rVXBsb2FkfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+RmV0Y2ggRGF0YTwvYnV0dG9uPlxyXG4gICAgICAgICAgey8qIFJlbmRlciBvciB1c2UgbGlua0NvbnRlbnQgc3RhdGUgd2hlcmV2ZXIgbmVlZGVkICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPkZpbGUgQ29udGVudDo8L2gyPlxyXG4gICAgICAgICAgICA8cHJlPntsaW5rQ29udGVudH08L3ByZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljc1VwbG9hZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJY3NVcGxvYWQiLCJpY3NMaW5rIiwic2V0SWNzTGluayIsImxpbmtDb250ZW50Iiwic2V0TGlua0NvbnRlbnQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwidGV4dCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImhhbmRsZUxpbmtVcGxvYWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJwcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/calendar/page.tsx\n"));

/***/ })

});