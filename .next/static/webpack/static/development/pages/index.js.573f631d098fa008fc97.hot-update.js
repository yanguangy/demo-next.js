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
    className: "jsx-931891438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-931891438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-931891438",
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
      className: "jsx-931891438",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "931891438",
    __self: this
  }, "h1,a{font-family:\"Arial\";font-size:41px;color:red;}ul{padding:0;}li{list-style:none;margin:5px 0;}a{-webkit-text-decoration:none;text-decoration:none;color:blue;}a:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxmaWxlXFxkZW1vLW5leHQuanNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0S3VCLEFBRzZCLEFBS1YsQUFHTSxBQUlLLEFBSVQsVUFWZCxFQVdBLElBUmUsSUFSRSxTQVNqQixNQVJXLFVBQ1gsS0FVYSxXQUNiIiwiZmlsZSI6IkM6XFxmaWxlXFxkZW1vLW5leHQuanNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIClcclxuICBcclxuLy8gICBleHBvcnQgZGVmYXVsdCBJbmRleFxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLyAgIC8vIFRoaXMgaXMgdGhlIExpbmsgQVBJXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4vLyAgIDxkaXY+XHJcbi8vICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbi8vICAgICAgIDxhPkFib3V0IFBhZ2U8L2E+XHJcbi8vICAgICA8L0xpbms+XHJcbi8vICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyApXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbi8vICAgPGRpdj5cclxuLy8gICAgIDxIZWFkZXIgLz5cclxuLy8gICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XHJcbi8vICAgPC9kaXY+XHJcbi8vIClcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbi8vIGNvbnN0IFBvc3RMaW5rID0gKHByb3BzKSA9PiAoXHJcbi8vICAgPGxpPlxyXG4vLyAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XHJcbi8vICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XHJcbi8vICAgICA8L0xpbms+XHJcbi8vICAgPC9saT5cclxuLy8gKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4vLyAgIDxMYXlvdXQ+XHJcbi8vICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbi8vICAgICA8dWw+XHJcbi8vICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkhlbGxvIE5leHQuanNcIi8+XHJcbi8vICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiLz5cclxuLy8gICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIvPlxyXG4vLyAgICAgPC91bD5cclxuLy8gICA8L0xheW91dD5cclxuLy8gKVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xyXG5cclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuLy8gY29uc3QgUG9zdExpbmsgPSAocHJvcHMpID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBhcz17YC9wLyR7cHJvcHMuaWR9YH0gXHJcbi8vICAgICAgIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxyXG4vLyAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxyXG4vLyAgICAgPC9MaW5rPlxyXG4vLyAgIDwvbGk+XHJcbi8vIClcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuLy8gICA8TGF5b3V0PlxyXG4vLyAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4vLyAgICAgPHVsPlxyXG4vLyAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiBcclxuLy8gICAgICAgICB0aXRsZT1cIkhlbGxvIE5leHQuanNcIi8+XHJcbi8vICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIFxyXG4vLyAgICAgICAgIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIvPlxyXG4vLyAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgXHJcbi8vICAgICAgICAgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIi8+XHJcbi8vICAgICA8L3VsPlxyXG4vLyAgIDwvTGF5b3V0PlxyXG4vLyApXHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbi8vIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXHJcbi8vICAgPExheW91dD5cclxuLy8gICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxyXG4vLyAgICAgPHVsPlxyXG4vLyAgICAgICB7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcclxuLy8gICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cclxuLy8gICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IFxyXG4vLyAgICAgICAgICAgICBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxyXG4vLyAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cclxuLy8gICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICA8L2xpPlxyXG4vLyAgICAgICApKX1cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgPC9MYXlvdXQ+XHJcbi8vIClcclxuXHJcbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbi8vICAgY29uc29sZS5sb2cocmVzKVxyXG4vLyAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHNob3dzOiBkYXRhXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxyXG5cclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gZ2V0UG9zdHMgKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IFxyXG4gICAgICBpZDogJ2hlbGxvLW5leHRqcycsIFxyXG4gICAgICB0aXRsZTogJ0hlbGxvIE5leHQuanMnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgaWQ6ICdsZWFybi1uZXh0anMnLCBcclxuICAgICAgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgaWQ6ICdkZXBsb3ktbmV4dGpzJywgXHJcbiAgICAgIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJ1xyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbiAgICA8dWw+XHJcbiAgICAgIHtnZXRQb3N0cygpLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gXHJcbiAgICAgICAgICAgIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XHJcbiAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICBoMSwgYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICBmb250LXNpemU6IDQxcHg7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pIl19 */\n/*@ sourceURL=C:\\file\\demo-next.js\\pages\\index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.573f631d098fa008fc97.hot-update.js.map