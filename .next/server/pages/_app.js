"use strict";
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

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"https://your-api-url.com\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxNQUFNRCxtREFBWSxDQUFDO0lBQ3ZCRyxTQUFTO0FBQ1g7QUFFQSxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lvdXItcHJvamVjdC1uYW1lLy4vbGliL2FwaS50cz82OGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6ICdodHRwczovL3lvdXItYXBpLXVybC5jb20nLCAvLyBSZXBsYWNlIHdpdGggeW91ciBBUEkgYmFzZSBVUkxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7ICJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.ts\n");

/***/ }),

/***/ "./lib/auth.tsx":
/*!**********************!*\
  !*** ./lib/auth.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./lib/api.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Check if user is authenticated on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkAuth = async ()=>{\n            try {\n                const token = localStorage.getItem(\"accessToken\");\n                if (token) {\n                    _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${token}`;\n                    const { data } = await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/users/me\");\n                    setUser(data);\n                }\n            } catch (error) {\n                localStorage.removeItem(\"accessToken\");\n            } finally{\n                setLoading(false);\n            }\n        };\n        checkAuth();\n    }, []);\n    const loginMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)({\n        mutationFn: async ({ emailOrUsername, password })=>{\n            const { data } = await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/auth/login\", {\n                emailOrUsername,\n                password\n            });\n            return data;\n        }\n    });\n    const login = async (emailOrUsername, password)=>{\n        try {\n            const data = await loginMutation.mutateAsync({\n                emailOrUsername,\n                password\n            });\n            localStorage.setItem(\"accessToken\", data.accessToken);\n            _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${data.accessToken}`;\n            const userResponse = await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/users/me\");\n            setUser(userResponse.data);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            throw error;\n        }\n    };\n    const register = async (email, username, password)=>{\n        try {\n            const { data } = await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/auth/register\", {\n                email,\n                username,\n                password\n            });\n            localStorage.setItem(\"accessToken\", data.accessToken);\n            _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${data.accessToken}`;\n            const userResponse = await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/users/me\");\n            setUser(userResponse.data);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            throw error;\n        }\n    };\n    const logout = async ()=>{\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/auth/logout\");\n            localStorage.removeItem(\"accessToken\");\n            setUser(null);\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Logout error:\", error);\n        }\n    };\n    // Fetch user data\n    const { data: userData, isLoading } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)({\n        queryKey: [\n            \"user\"\n        ],\n        queryFn: async ()=>{\n            const { data } = await _api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/users/me\");\n            return data;\n        }\n    });\n    // Return the context provider instead of an object\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            loading,\n            login,\n            register,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lemoisson\\\\Desktop\\\\projects\\\\Muchachu\\\\frontend\\\\lib\\\\auth.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVFqQixLQUFLLENBQUMsaUJBQWlCQTtRQUNqQztJQUNGO0lBRUEsa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRUYsTUFBTW9CLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUd0QywrREFBUUEsQ0FBQztRQUM3Q3VDLFVBQVU7WUFBQztTQUFPO1FBQ2xCQyxTQUFTO1lBQ1AsTUFBTSxFQUFFdkIsSUFBSSxFQUFFLEdBQUcsTUFBTW5CLDRDQUFHQSxDQUFDb0IsR0FBRyxDQUFDO1lBQy9CLE9BQU9EO1FBQ1Q7SUFDRjtJQUVBLG1EQUFtRDtJQUNuRCxxQkFDRSw4REFBQ2hCLFlBQVl3QyxRQUFRO1FBQUNDLE9BQU87WUFBRXJDO1lBQU1FO1lBQVNtQjtZQUFPTTtZQUFVRztRQUFPO2tCQUNuRS9COzs7Ozs7QUFHUDtBQUVPLFNBQVN1QztJQUNkLE1BQU1DLFVBQVVsRCxpREFBVUEsQ0FBQ087SUFDM0IsSUFBSTJDLFlBQVkxQyxXQUFXO1FBQ3pCLE1BQU0sSUFBSTJDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW91ci1wcm9qZWN0LW5hbWUvLi9saWIvYXV0aC50c3g/ZjU0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xyXG4gIHVzZXI6IFVzZXIgfCBudWxsO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgbG9naW46IChlbWFpbE9yVXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcclxuICByZWdpc3RlcjogKGVtYWlsOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XHJcbiAgbG9nb3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59O1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIENoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCBvbiBtb3VudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja0F1dGggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJy91c2Vycy9tZScpO1xyXG4gICAgICAgICAgc2V0VXNlcihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tBdXRoKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2dpbk11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xyXG4gICAgbXV0YXRpb25GbjogYXN5bmMgKHsgZW1haWxPclVzZXJuYW1lLCBwYXNzd29yZCB9OiB7IGVtYWlsT3JVc2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdCgnL2F1dGgvbG9naW4nLCB7IGVtYWlsT3JVc2VybmFtZSwgcGFzc3dvcmQgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWxPclVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2dpbk11dGF0aW9uLm11dGF0ZUFzeW5jKHsgZW1haWxPclVzZXJuYW1lLCBwYXNzd29yZCB9KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgZGF0YS5hY2Nlc3NUb2tlbik7XHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2RhdGEuYWNjZXNzVG9rZW59YDtcclxuICAgICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnL3VzZXJzL21lJyk7XHJcbiAgICAgIHNldFVzZXIodXNlclJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoZW1haWw6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdCgnL2F1dGgvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgZGF0YS5hY2Nlc3NUb2tlbik7XHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke2RhdGEuYWNjZXNzVG9rZW59YDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy91c2Vycy9tZScpO1xyXG4gICAgICBzZXRVc2VyKHVzZXJSZXNwb25zZS5kYXRhKTtcclxuICAgICAgXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGkucG9zdCgnL2F1dGgvbG9nb3V0Jyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpO1xyXG4gICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTG9nb3V0IGVycm9yOicsIGVycm9yKTtcclxuICAgIH0gXHJcbiAgfTtcclxuXHJcbiAgLy8gRmV0Y2ggdXNlciBkYXRhXHJcbiAgY29uc3QgeyBkYXRhOiB1c2VyRGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeSh7XHJcbiAgICBxdWVyeUtleTogWyd1c2VyJ10sXHJcbiAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnL3VzZXJzL21lJyk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gUmV0dXJuIHRoZSBjb250ZXh0IHByb3ZpZGVyIGluc3RlYWQgb2YgYW4gb2JqZWN0XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2FkaW5nLCBsb2dpbiwgcmVnaXN0ZXIsIGxvZ291dCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59ICJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXBpIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiY2hlY2tBdXRoIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZGF0YSIsImdldCIsImVycm9yIiwicmVtb3ZlSXRlbSIsImxvZ2luTXV0YXRpb24iLCJtdXRhdGlvbkZuIiwiZW1haWxPclVzZXJuYW1lIiwicGFzc3dvcmQiLCJwb3N0IiwibG9naW4iLCJtdXRhdGVBc3luYyIsInNldEl0ZW0iLCJhY2Nlc3NUb2tlbiIsInVzZXJSZXNwb25zZSIsInB1c2giLCJyZWdpc3RlciIsImVtYWlsIiwidXNlcm5hbWUiLCJsb2dvdXQiLCJjb25zb2xlIiwidXNlckRhdGEiLCJpc0xvYWRpbmciLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"./lib/auth.tsx\");\n\n\n // Ensure you import your AuthProvider\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lemoisson\\\\Desktop\\\\projects\\\\Muchachu\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lemoisson\\\\Desktop\\\\projects\\\\Muchachu\\\\frontend\\\\pages\\\\_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lemoisson\\\\Desktop\\\\projects\\\\Muchachu\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlFO0FBQy9CLENBQUMsc0NBQXNDO0FBRWpGLE1BQU1HLGNBQWMsSUFBSUgsOERBQVdBO0FBRW5DLFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNMLHNFQUFtQkE7UUFBQ00sUUFBUUo7a0JBQzNCLDRFQUFDRCxtREFBWUE7c0JBQ1gsNEVBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lvdXItcHJvamVjdC1uYW1lLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvbGliL2F1dGgnOyAvLyBFbnN1cmUgeW91IGltcG9ydCB5b3VyIEF1dGhQcm92aWRlclxyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyAiXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwicXVlcnlDbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();