/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/CartContext.tsx":
/*!*********************************!*\
  !*** ./context/CartContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        \"CartProvider.useState\": ()=>{\n            if (false) {}\n            return [];\n        }\n    }[\"CartProvider.useState\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartProvider.useEffect\": ()=>{\n            localStorage.setItem('cart', JSON.stringify(cart));\n        }\n    }[\"CartProvider.useEffect\"], [\n        cart\n    ]);\n    const addToCart = (product)=>{\n        setCart((prev)=>{\n            const existing = prev.find((item)=>item.id === product.id);\n            if (existing) {\n                return prev.map((item)=>item.id === product.id ? {\n                        ...item,\n                        quantity: item.quantity + 1\n                    } : item);\n            }\n            return [\n                ...prev,\n                {\n                    ...product,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const removeFromCart = (id)=>{\n        setCart((prev)=>prev.filter((item)=>item.id !== id));\n    };\n    const updateQuantity = (id, quantity)=>{\n        setCart((prev)=>prev.map((item)=>item.id === id ? {\n                    ...item,\n                    quantity\n                } : item));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            updateQuantity\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ABCD\\\\lovense\\\\context\\\\CartContext.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) {\n        throw new Error('useCart must be used within a CartProvider');\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQ2FydENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUY7QUFpQnpGLE1BQU1LLDRCQUFjSixvREFBYUEsQ0FBOEJLO0FBRXhELE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQTJCO0lBQ2hFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUE7aUNBQWE7WUFDM0MsSUFBSSxLQUE2QixFQUFFLEVBR2xDO1lBQ0QsT0FBTyxFQUFFO1FBQ1g7O0lBRUFDLGdEQUFTQTtrQ0FBQztZQUNSUSxhQUFhSSxPQUFPLENBQUMsUUFBUUYsS0FBS0csU0FBUyxDQUFDUjtRQUM5QztpQ0FBRztRQUFDQTtLQUFLO0lBRVQsTUFBTVMsWUFBWSxDQUFDQztRQUNqQlQsUUFBUSxDQUFDVTtZQUNQLE1BQU1DLFdBQVdELEtBQUtFLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUU7WUFDM0QsSUFBSUgsVUFBVTtnQkFDWixPQUFPRCxLQUFLSyxHQUFHLENBQUMsQ0FBQ0YsT0FDZkEsS0FBS0MsRUFBRSxLQUFLTCxRQUFRSyxFQUFFLEdBQUc7d0JBQUUsR0FBR0QsSUFBSTt3QkFBRUcsVUFBVUgsS0FBS0csUUFBUSxHQUFHO29CQUFFLElBQUlIO1lBRXhFO1lBQ0EsT0FBTzttQkFBSUg7Z0JBQU07b0JBQUUsR0FBR0QsT0FBTztvQkFBRU8sVUFBVTtnQkFBRTthQUFFO1FBQy9DO0lBQ0Y7SUFFQSxNQUFNQyxpQkFBaUIsQ0FBQ0g7UUFDdEJkLFFBQVEsQ0FBQ1UsT0FBU0EsS0FBS1EsTUFBTSxDQUFDLENBQUNMLE9BQVNBLEtBQUtDLEVBQUUsS0FBS0E7SUFDdEQ7SUFFQSxNQUFNSyxpQkFBaUIsQ0FBQ0wsSUFBWUU7UUFDbENoQixRQUFRLENBQUNVLE9BQ1BBLEtBQUtLLEdBQUcsQ0FBQyxDQUFDRixPQUFVQSxLQUFLQyxFQUFFLEtBQUtBLEtBQUs7b0JBQUUsR0FBR0QsSUFBSTtvQkFBRUc7Z0JBQVMsSUFBSUg7SUFFakU7SUFFQSxxQkFDRSw4REFBQ2xCLFlBQVl5QixRQUFRO1FBQUNDLE9BQU87WUFBRXRCO1lBQU1TO1lBQVdTO1lBQWdCRTtRQUFlO2tCQUM1RXJCOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTXdCLFVBQVU7SUFDckIsTUFBTUMsVUFBVS9CLGlEQUFVQSxDQUFDRztJQUMzQixJQUFJLENBQUM0QixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFCQ0RcXGxvdmVuc2VcXGNvbnRleHRcXENhcnRDb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIENhcnRJdGVtIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRDb250ZXh0VHlwZSB7XHJcbiAgY2FydDogQ2FydEl0ZW1bXTtcclxuICBhZGRUb0NhcnQ6IChwcm9kdWN0OiBDYXJ0SXRlbSkgPT4gdm9pZDtcclxuICByZW1vdmVGcm9tQ2FydDogKGlkOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgdXBkYXRlUXVhbnRpdHk6IChpZDogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q2FydENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8Q2FydEl0ZW1bXT4oKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkQ2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICAgIHJldHVybiBzYXZlZENhcnQgPyBKU09OLnBhcnNlKHNhdmVkQ2FydCkgOiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xyXG4gIH0sIFtjYXJ0XSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OiBDYXJ0SXRlbSkgPT4ge1xyXG4gICAgc2V0Q2FydCgocHJldikgPT4ge1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHByZXYuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIHJldHVybiBwcmV2Lm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9IDogaXRlbVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFsuLi5wcmV2LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH1dO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0Q2FydCgocHJldikgPT4gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUXVhbnRpdHkgPSAoaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0Q2FydCgocHJldikgPT5cclxuICAgICAgcHJldi5tYXAoKGl0ZW0pID0+IChpdGVtLmlkID09PSBpZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHkgfSA6IGl0ZW0pKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNhcnQsIGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQsIHVwZGF0ZVF1YW50aXR5IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgaWYgKCFjb250ZXh0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FydENvbnRleHQiLCJ1bmRlZmluZWQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0Iiwic2F2ZWRDYXJ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicHJldiIsImV4aXN0aW5nIiwiZmluZCIsIml0ZW0iLCJpZCIsIm1hcCIsInF1YW50aXR5IiwicmVtb3ZlRnJvbUNhcnQiLCJmaWx0ZXIiLCJ1cGRhdGVRdWFudGl0eSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY29udGV4dCIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/CartContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/CartContext */ \"(pages-dir-node)/./context/CartContext.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(pages-dir-node)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"App.useEffect\": ()=>{\n            Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! aos */ \"aos\", 23)).then({\n                \"App.useEffect\": (AOS)=>{\n                    AOS.default.init({\n                        duration: 600,\n                        easing: 'ease-out-cubic',\n                        once: true\n                    });\n                }\n            }[\"App.useEffect\"]).catch({\n                \"App.useEffect\": (error)=>console.error('Failed to load AOS:', error)\n            }[\"App.useEffect\"]);\n        }\n    }[\"App.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://unpkg.com/aos@next/dist/aos.css\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ABCD\\\\lovense\\\\pages\\\\_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Lovense - Premium Pleasure Products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ABCD\\\\lovense\\\\pages\\\\_app.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Explore premium sex toys designed for solo or shared pleasure.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ABCD\\\\lovense\\\\pages\\\\_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ABCD\\\\lovense\\\\pages\\\\_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_4__.CartProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ABCD\\\\lovense\\\\pages\\\\_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ABCD\\\\lovense\\\\pages\\\\_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVjtBQUVGO0FBQ3lCO0FBQ1A7QUFFaEMsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1REwsZ0RBQVNBO3lCQUFDO1lBQ1IsNEdBQWEsQ0FDVk0sSUFBSTtpQ0FBQyxDQUFDQztvQkFDTEEsSUFBSUMsT0FBTyxDQUFDQyxJQUFJLENBQUM7d0JBQ2ZDLFVBQVU7d0JBQ1ZDLFFBQVE7d0JBQ1JDLE1BQU07b0JBQ1I7Z0JBQ0Y7Z0NBQ0NDLEtBQUs7aUNBQUMsQ0FBQ0MsUUFBVUMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7O1FBQzNEO3dCQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNiLGtEQUFJQTs7a0NBQ0gsOERBQUNlO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLOzs7Ozs7a0NBRVAsOERBQUNDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNwQiw4REFBWUE7MEJBQ1gsNEVBQUNFO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQUJDRFxcbG92ZW5zZVxccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbXBvcnQoJ2FvcycpXHJcbiAgICAgIC50aGVuKChBT1MpID0+IHtcclxuICAgICAgICBBT1MuZGVmYXVsdC5pbml0KHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA2MDAsXHJcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dC1jdWJpYycsXHJcbiAgICAgICAgICBvbmNlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBBT1M6JywgZXJyb3IpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vYW9zQG5leHQvZGlzdC9hb3MuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT5Mb3ZlbnNlIC0gUHJlbWl1bSBQbGVhc3VyZSBQcm9kdWN0czwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiRXhwbG9yZSBwcmVtaXVtIHNleCB0b3lzIGRlc2lnbmVkIGZvciBzb2xvIG9yIHNoYXJlZCBwbGVhc3VyZS5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiQ2FydFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbiIsIkFPUyIsImRlZmF1bHQiLCJpbml0IiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmNlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();