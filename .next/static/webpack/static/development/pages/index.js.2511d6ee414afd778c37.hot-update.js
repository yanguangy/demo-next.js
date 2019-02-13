webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout.js */ "./components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\file\\demo-next.js\\pages\\index.js";


// const Index = () => (
//     <div>
//       <p>Hello Next.js</p>
//     </div>
//   )
//   export default Index
//========================================================================
//   // This is the Link API
// import Link from 'next/link'
// const Index = () => (
//   <div>
//     <Link href="/about">
//       <a>About Page</a>
//     </Link>
//     <p>Hello Next.js</p>
//   </div>
// )
// export default Index
//========================================================================
// import Header from '../components/header'
// export default () => (
//   <div>
//     <Header />
//     <p>Hello Next.js</p>
//   </div>
// )
//========================================================================
// import Layout from '../components/layout.js'
// import Link from 'next/link'
// const PostLink = (props) => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )
// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink title="Hello Next.js"/>
//       <PostLink title="Learn Next.js is awesome"/>
//       <PostLink title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )
//========================================================================
// import Layout from '../components/layout.js'
// import Link from 'next/link'
// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.id}`} 
//       href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )
// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink id="hello-nextjs" 
//         title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" 
//         title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" 
//         title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )
//========================================================================
// import Layout from '../components/layout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} 
//             href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//   console.log(res)
//   console.log(`Show data fetched. Count: ${data.length}`)
//   return {
//     shows: data
//   }
// }
// export default Index
//========================================================================



function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-366526180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-366526180",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-366526180",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/p/".concat(post.id),
      href: "/post?title=".concat(post.title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-366526180",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "366526180",
    __self: this
  }, "h1.jsx-366526180,a.jsx-366526180{font-family:\"Arial\";font-size:41;}ul.jsx-366526180{padding:0;}li.jsx-366526180{list-style:none;margin:5px 0;}a.jsx-366526180{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-366526180:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxmaWxlXFxkZW1vLW5leHQuanNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0S2dCLEFBRzZCLEFBSVYsQUFHTSxBQUlLLEFBSVQsVUFWZCxFQVdBLElBUmUsSUFQQSxTQVFmLElBUEEsaUJBVWEsV0FDYiIsImZpbGUiOiJDOlxcZmlsZVxcZGVtby1uZXh0LmpzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApXHJcbiAgXHJcbi8vICAgZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy8gICAvLyBUaGlzIGlzIHRoZSBMaW5rIEFQSVxyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICA8ZGl2PlxyXG4vLyAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4vLyAgICAgICA8YT5BYm91dCBQYWdlPC9hPlxyXG4vLyAgICAgPC9MaW5rPlxyXG4vLyAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cclxuLy8gICA8L2Rpdj5cclxuLy8gKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4vLyAgIDxkaXY+XHJcbi8vICAgICA8SGVhZGVyIC8+XHJcbi8vICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyApXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXHJcblxyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyBjb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxyXG4vLyAgIDxsaT5cclxuLy8gICAgIDxMaW5rIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxyXG4vLyAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxyXG4vLyAgICAgPC9MaW5rPlxyXG4vLyAgIDwvbGk+XHJcbi8vIClcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuLy8gICA8TGF5b3V0PlxyXG4vLyAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4vLyAgICAgPHVsPlxyXG4vLyAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIvPlxyXG4vLyAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIi8+XHJcbi8vICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiLz5cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgPC9MYXlvdXQ+XHJcbi8vIClcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8vIGNvbnN0IFBvc3RMaW5rID0gKHByb3BzKSA9PiAoXHJcbi8vICAgPGxpPlxyXG4vLyAgICAgPExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IFxyXG4vLyAgICAgICBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cclxuLy8gICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICA8L2xpPlxyXG4vLyApXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbi8vICAgPExheW91dD5cclxuLy8gICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuLy8gICAgIDx1bD5cclxuLy8gICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgXHJcbi8vICAgICAgICAgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIvPlxyXG4vLyAgICAgICA8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiBcclxuLy8gICAgICAgICB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiLz5cclxuLy8gICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIFxyXG4vLyAgICAgICAgIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIvPlxyXG4vLyAgICAgPC91bD5cclxuLy8gICA8L0xheW91dD5cclxuLy8gKVxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG4vLyBjb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxyXG4vLyAgIDxMYXlvdXQ+XHJcbi8vICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cclxuLy8gICAgIDx1bD5cclxuLy8gICAgICAge3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoXHJcbi8vICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XHJcbi8vICAgICAgICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBcclxuLy8gICAgICAgICAgICAgaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cclxuLy8gICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XHJcbi8vICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L3VsPlxyXG4vLyAgIDwvTGF5b3V0PlxyXG4vLyApXHJcblxyXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKHJlcylcclxuLy8gICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBzaG93czogZGF0YVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIGdldFBvc3RzICgpIHtcclxuICByZXR1cm4gW1xyXG4gICAgeyBcclxuICAgICAgaWQ6ICdoZWxsby1uZXh0anMnLCBcclxuICAgICAgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgIGlkOiAnbGVhcm4tbmV4dGpzJywgXHJcbiAgICAgIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgIGlkOiAnZGVwbG95LW5leHRqcycsIFxyXG4gICAgICB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCdcclxuICAgIH1cclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGgxPk15IEJsb2c8L2gxPlxyXG4gICAgPHVsPlxyXG4gICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IFxyXG4gICAgICAgICAgICBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxyXG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBoMSwgYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICBmb250LXNpemU6IDQxO1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pIl19 */\n/*@ sourceURL=C:\\file\\demo-next.js\\pages\\index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.2511d6ee414afd778c37.hot-update.js.map