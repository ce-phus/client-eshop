"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/AccountPage",{

/***/ "./src/pages/AccountPage.js":
/*!**********************************!*\
  !*** ./src/pages/AccountPage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/userActions */ \"./src/actions/userActions.js\");\n/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Message */ \"./src/components/Message.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//import { UPDATE_USER_ACCOUNT_RESET } from '../constants'\n\n\n\nfunction AccountPage() {\n    _s();\n    let history = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    // check token validation reducer\n    const checkTokenValidationReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.checkTokenValidationReducer);\n    const { error: tokenError  } = checkTokenValidationReducer;\n    // login reducer\n    const userLoginReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.userLoginReducer);\n    const { userInfo  } = userLoginReducer;\n    // user details reducer\n    const userDetailsReducer = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.userDetailsReducer);\n    const { user: userAccDetails , loading  } = userDetailsReducer;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!userInfo) {\n            history.push(\"/LoginPage\");\n        } else {\n            try {\n                dispatch((0,_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.checkTokenValidation)());\n                dispatch((0,_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.userDetails)(userInfo.id));\n            } catch (error) {\n                history.push(\"/\");\n            }\n        }\n    }, [\n        history,\n        userInfo,\n        dispatch\n    ]);\n    // logout\n    const logoutHandler = ()=>{\n        dispatch((0,_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.logout)()) // action\n        ;\n    };\n    if (userInfo && tokenError === \"Request failed with status code 401\") {\n        alert(\"Session expired, please login again.\");\n        dispatch((0,_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.logout)());\n        history.push(\"/LoginPage\");\n        window.location.reload();\n    }\n    const renderData = ()=>{\n        try {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Getting User Information\"\n                            }, void 0, false, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 60,\n                                columnNumber: 69\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Spinner, {\n                                    animation: \"border\"\n                                }, void 0, false, {\n                                    fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 127\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 60,\n                                columnNumber: 102\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                        lineNumber: 60,\n                        columnNumber: 33\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                                className: \"mr-6 mb-2 border border-dark\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                        xs: 2,\n                                        className: \"p-3 bg-info text-white\",\n                                        children: \"Name:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                        className: \"p-3\",\n                                        children: userAccDetails.username\n                                    }, void 0, false, {\n                                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                                className: \"mb-2 border border-dark\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                        xs: 2,\n                                        className: \"p-3 bg-info text-white\",\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                        className: \"p-3\",\n                                        children: userAccDetails.email\n                                    }, void 0, false, {\n                                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                                className: \"mb-2 border border-dark\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                        xs: 2,\n                                        className: \"p-3 bg-info text-white\",\n                                        children: \"Admin Privileges:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                                        className: \"p-3\",\n                                        children: userAccDetails.admin ? \"Yes\" : \"No\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/AccountUpdatePage\",\n                                children: \"Update Account details\"\n                            }, void 0, false, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-1 text-primary\",\n                                children: \"| \"\n                            }, void 0, false, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-1\"\n                            }, void 0, false, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/DeleteUserAccount\",\n                                children: \"Delete Account\"\n                            }, void 0, false, {\n                                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, this);\n        } catch (error) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Message__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                variant: \"danger\",\n                children: [\n                    \"Something went wrong, go back to \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        onClick: logoutHandler,\n                        to: \"/LoginPage\",\n                        children: \" Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                        lineNumber: 85,\n                        columnNumber: 79\n                    }, this),\n                    \" page.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/cephus/Documents/e-commerce/client/src/pages/AccountPage.js\",\n                lineNumber: 85,\n                columnNumber: 20\n            }, this);\n        }\n    };\n    return renderData();\n}\n_s(AccountPage, \"Z3StFoetbuLBlTJA4vT5lUT3jzM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = AccountPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountPage);\nvar _c;\n$RefreshReg$(_c, \"AccountPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTswQ0FBc0I7Ozs7OzswQ0FDbEMsOERBQUNaO2dDQUFLSSxXQUFVOzBDQUFvQjs7Ozs7OzBDQUNwQyw4REFBQ0o7Z0NBQUtJLFdBQVU7Ozs7OzswQ0FFaEIsOERBQUNuQyxrREFBSUE7Z0NBQUMyQyxNQUFLOzBDQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSWhELEVBQUUsT0FBTzdCLE9BQU87WUFDWixxQkFBTyw4REFBQ1IsMkRBQU9BO2dCQUFDc0MsU0FBUTs7b0JBQVM7a0NBQWlDLDhEQUFDNUMsa0RBQUlBO3dCQUNuRTZDLFNBQVNyQjt3QkFBZXNCLElBQUs7a0NBQ2hDOzs7Ozs7b0JBQWE7Ozs7Ozs7UUFDbEI7SUFDSjtJQUdBLE9BQU9qQjtBQUVYO0dBbEZTcEI7O1FBR1NELGtEQUFTQTtRQUNOUCxvREFBV0E7UUFHUUMsb0RBQVdBO1FBSXRCQSxvREFBV0E7UUFJVEEsb0RBQVdBOzs7S0FmakNPO0FBb0ZULCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9BY2NvdW50UGFnZS5qcz83ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZXJEZXRhaWxzLCBsb2dvdXQsIGNoZWNrVG9rZW5WYWxpZGF0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyQWN0aW9ucydcbi8vaW1wb3J0IHsgVVBEQVRFX1VTRVJfQUNDT1VOVF9SRVNFVCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZSdcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcicgXG5cblxuZnVuY3Rpb24gQWNjb3VudFBhZ2UoKSB7XG5cblxuICAgIGxldCBoaXN0b3J5ID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICAgIC8vIGNoZWNrIHRva2VuIHZhbGlkYXRpb24gcmVkdWNlclxuICAgIGNvbnN0IGNoZWNrVG9rZW5WYWxpZGF0aW9uUmVkdWNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNoZWNrVG9rZW5WYWxpZGF0aW9uUmVkdWNlcilcbiAgICBjb25zdCB7IGVycm9yOiB0b2tlbkVycm9yIH0gPSBjaGVja1Rva2VuVmFsaWRhdGlvblJlZHVjZXJcblxuICAgIC8vIGxvZ2luIHJlZHVjZXJcbiAgICBjb25zdCB1c2VyTG9naW5SZWR1Y2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlckxvZ2luUmVkdWNlcilcbiAgICBjb25zdCB7IHVzZXJJbmZvIH0gPSB1c2VyTG9naW5SZWR1Y2VyXG5cbiAgICAvLyB1c2VyIGRldGFpbHMgcmVkdWNlclxuICAgIGNvbnN0IHVzZXJEZXRhaWxzUmVkdWNlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJEZXRhaWxzUmVkdWNlcilcbiAgICBjb25zdCB7IHVzZXI6IHVzZXJBY2NEZXRhaWxzLCBsb2FkaW5nIH0gPSB1c2VyRGV0YWlsc1JlZHVjZXJcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdXNlckluZm8pIHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9Mb2dpblBhZ2VcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY2hlY2tUb2tlblZhbGlkYXRpb24oKSlcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyRGV0YWlscyh1c2VySW5mby5pZCkpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtoaXN0b3J5LCB1c2VySW5mbywgZGlzcGF0Y2hdKVxuXG4gICAgLy8gbG9nb3V0XG4gICAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpIC8vIGFjdGlvblxuICAgIH1cblxuICAgIGlmICh1c2VySW5mbyAmJiB0b2tlbkVycm9yID09PSBcIlJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDAxXCIpIHtcbiAgICAgICAgYWxlcnQoXCJTZXNzaW9uIGV4cGlyZWQsIHBsZWFzZSBsb2dpbiBhZ2Fpbi5cIilcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0KCkpXG4gICAgICAgIGhpc3RvcnkucHVzaChcIi9Mb2dpblBhZ2VcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICB9XG5cbiAgICBjb25zdCByZW5kZXJEYXRhID0gKCkgPT4ge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxzcGFuIHN0eWxlID0ge3sgZGlzcGxheTogXCJmbGV4XCIgfX0+PGg1PkdldHRpbmcgVXNlciBJbmZvcm1hdGlvbjwvaDU+PHNwYW4gY2xhc3NOYW1lID0gXCJtbC0yXCI+PFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgLz48L3NwYW4+PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXItNiBtYi0yIGJvcmRlciBib3JkZXItZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezJ9IGNsYXNzTmFtZT1cInAtMyBiZy1pbmZvIHRleHQtd2hpdGVcIj5OYW1lOjwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicC0zXCI+e3VzZXJBY2NEZXRhaWxzLnVzZXJuYW1lfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1iLTIgYm9yZGVyIGJvcmRlci1kYXJrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Mn0gY2xhc3NOYW1lPVwicC0zIGJnLWluZm8gdGV4dC13aGl0ZVwiPkVtYWlsOjwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicC0zXCI+e3VzZXJBY2NEZXRhaWxzLmVtYWlsfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm1iLTIgYm9yZGVyIGJvcmRlci1kYXJrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Mn0gY2xhc3NOYW1lPVwicC0zIGJnLWluZm8gdGV4dC13aGl0ZVwiPkFkbWluIFByaXZpbGVnZXM6PC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwLTNcIj57dXNlckFjY0RldGFpbHMuYWRtaW4gPyBcIlllc1wiIDogXCJOb1wifTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL0FjY291bnRVcGRhdGVQYWdlJ30+VXBkYXRlIEFjY291bnQgZGV0YWlsczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgdGV4dC1wcmltYXJ5XCI+fCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvRGVsZXRlVXNlckFjY291bnQnPkRlbGV0ZSBBY2NvdW50PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gPE1lc3NhZ2UgdmFyaWFudD0nZGFuZ2VyJz5Tb21ldGhpbmcgd2VudCB3cm9uZywgZ28gYmFjayB0byA8TGlua1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9IHRvPXtgL0xvZ2luUGFnZWB9XG4gICAgICAgICAgICA+IExvZ2luPC9MaW5rPiBwYWdlLjwvTWVzc2FnZT5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHJlbmRlckRhdGEoKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJMaW5rIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZXJEZXRhaWxzIiwibG9nb3V0IiwiY2hlY2tUb2tlblZhbGlkYXRpb24iLCJNZXNzYWdlIiwiU3Bpbm5lciIsInVzZVJvdXRlciIsIkFjY291bnRQYWdlIiwiaGlzdG9yeSIsImRpc3BhdGNoIiwiY2hlY2tUb2tlblZhbGlkYXRpb25SZWR1Y2VyIiwic3RhdGUiLCJlcnJvciIsInRva2VuRXJyb3IiLCJ1c2VyTG9naW5SZWR1Y2VyIiwidXNlckluZm8iLCJ1c2VyRGV0YWlsc1JlZHVjZXIiLCJ1c2VyIiwidXNlckFjY0RldGFpbHMiLCJsb2FkaW5nIiwicHVzaCIsImlkIiwibG9nb3V0SGFuZGxlciIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZW5kZXJEYXRhIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwiZGlzcGxheSIsImg1IiwiY2xhc3NOYW1lIiwiYW5pbWF0aW9uIiwieHMiLCJ1c2VybmFtZSIsImVtYWlsIiwiYWRtaW4iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJocmVmIiwidmFyaWFudCIsIm9uQ2xpY2siLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/AccountPage.js\n"));

/***/ })

});