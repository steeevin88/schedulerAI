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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst FileUpload = ()=>{\n    _s();\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store file content\n    const [jsonData, setJsonData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to store parsed JSON data\n    const handleFileUpload = (event)=>{\n        if (!event.target.files || event.target.files.length === 0) {\n            return;\n        }\n        const file = event.target.files[0];\n        const reader = new FileReader();\n        reader.onload = ()=>{\n            const fileContentString = reader.result;\n            setFileContent(fileContentString); // Set file content in state\n            // console.log(fileContentString);\n            const lines = fileContentString.split(\"\\n\");\n            const filteredArray = lines.filter((line)=>{\n                return line.includes(\"DTSTART\") && line.includes(\"DTEND\") && line.includes(\"SUMMARY\");\n            });\n            console.log(\"filtered array\");\n            console.log(filteredArray);\n        };\n        // Read the file as text\n        reader.readAsText(file);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Upload File and Convert to JSON\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: handleFileUpload\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"File Content:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: fileContent\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Parsed JSON Data:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: JSON.stringify(jsonData, null, 2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mikie\\\\Documents\\\\Calhacks\\\\schedulerAI\\\\app\\\\calendar\\\\page.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileUpload, \"iQukyH+sNpEIZupqQHFa+78+Imo=\");\n_c = FileUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileUpload);\nvar _c;\n$RefreshReg$(_c, \"FileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jYWxlbmRhci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDcUQ7QUFFckQsTUFBTUUsYUFBdUI7O0lBQzNCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBUyxLQUFLLDhCQUE4QjtJQUMxRixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQU0sT0FBTyxrQ0FBa0M7SUFFdkYsTUFBTU0sbUJBQW1CLENBQUNDO1FBQ3hCLElBQUksQ0FBQ0EsTUFBTUMsTUFBTSxDQUFDQyxLQUFLLElBQUlGLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEtBQUssR0FBRztZQUMxRDtRQUNGO1FBRUEsTUFBTUMsT0FBT0osTUFBTUMsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUNsQyxNQUFNRyxTQUFTLElBQUlDO1FBRW5CRCxPQUFPRSxNQUFNLEdBQUc7WUFDZCxNQUFNQyxvQkFBb0JILE9BQU9JLE1BQU07WUFDdkNiLGVBQWVZLG9CQUFvQiw0QkFBNEI7WUFDL0Qsa0NBQWtDO1lBQ2xDLE1BQU1FLFFBQVFGLGtCQUFrQkcsS0FBSyxDQUFDO1lBQ3RDLE1BQU1DLGdCQUFnQkYsTUFBTUcsTUFBTSxDQUFDQyxDQUFBQTtnQkFDakMsT0FBT0EsS0FBS0MsUUFBUSxDQUFDLGNBQWNELEtBQUtDLFFBQVEsQ0FBQyxZQUFZRCxLQUFLQyxRQUFRLENBQUM7WUFDN0U7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0w7UUFJZDtRQUVBLHdCQUF3QjtRQUN4QlAsT0FBT2EsVUFBVSxDQUFDZDtJQUNwQjtJQUVBLHFCQUNFLDhEQUFDZTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxVQUFVeEI7Ozs7OzswQkFDN0IsOERBQUNvQjs7a0NBQ0MsOERBQUNLO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFLOUI7Ozs7OztrQ0FDTiw4REFBQzZCO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFLQyxLQUFLQyxTQUFTLENBQUM5QixVQUFVLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QztHQTNDTUg7S0FBQUE7QUE2Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NhbGVuZGFyL3BhZ2UudHN4PzVlZDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbZmlsZUNvbnRlbnQsIHNldEZpbGVDb250ZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpOyAvLyBTdGF0ZSB0byBzdG9yZSBmaWxlIGNvbnRlbnRcclxuICBjb25zdCBbanNvbkRhdGEsIHNldEpzb25EYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7IC8vIFN0YXRlIHRvIHN0b3JlIHBhcnNlZCBKU09OIGRhdGFcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZVVwbG9hZCA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGlmICghZXZlbnQudGFyZ2V0LmZpbGVzIHx8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50U3RyaW5nID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgIHNldEZpbGVDb250ZW50KGZpbGVDb250ZW50U3RyaW5nKTsgLy8gU2V0IGZpbGUgY29udGVudCBpbiBzdGF0ZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlQ29udGVudFN0cmluZyk7XHJcbiAgICAgIGNvbnN0IGxpbmVzID0gZmlsZUNvbnRlbnRTdHJpbmcuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gbGluZXMuZmlsdGVyKGxpbmU9PntcclxuICAgICAgICByZXR1cm4gbGluZS5pbmNsdWRlcyhcIkRUU1RBUlRcIikgJiYgbGluZS5pbmNsdWRlcyhcIkRURU5EXCIpICYmIGxpbmUuaW5jbHVkZXMoXCJTVU1NQVJZXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJlZCBhcnJheVwiKTtcclxuICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRBcnJheSk7XHJcblxyXG5cclxuICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFJlYWQgdGhlIGZpbGUgYXMgdGV4dFxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5VcGxvYWQgRmlsZSBhbmQgQ29udmVydCB0byBKU09OPC9oMT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVVcGxvYWR9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkZpbGUgQ29udGVudDo8L2gyPlxyXG4gICAgICAgIDxwcmU+e2ZpbGVDb250ZW50fTwvcHJlPlxyXG4gICAgICAgIDxoMj5QYXJzZWQgSlNPTiBEYXRhOjwvaDI+XHJcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoanNvbkRhdGEsIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZpbGVVcGxvYWQiLCJmaWxlQ29udGVudCIsInNldEZpbGVDb250ZW50IiwianNvbkRhdGEiLCJzZXRKc29uRGF0YSIsImhhbmRsZUZpbGVVcGxvYWQiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJmaWxlQ29udGVudFN0cmluZyIsInJlc3VsdCIsImxpbmVzIiwic3BsaXQiLCJmaWx0ZXJlZEFycmF5IiwiZmlsdGVyIiwibGluZSIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsInJlYWRBc1RleHQiLCJkaXYiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiaDIiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/calendar/page.tsx\n"));

/***/ })

});