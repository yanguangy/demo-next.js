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
    className: "jsx-3460817004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3460817004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-3460817004",
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
      className: "jsx-3460817004",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3460817004",
    __self: this
  }, "h1,a{font-family:\"Arial\";font-size:41;color:red;}ul{padding:0;}li{list-style:none;margin:5px 0;}a{-webkit-text-decoration:none;text-decoration:none;color:blue;}a:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxmaWxlXFxkZW1vLW5leHQuanNcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0S3VCLEFBRzZCLEFBS1YsQUFHTSxBQUlLLEFBSVQsVUFWZCxFQVdBLElBUmUsSUFSQSxTQVNmLElBUlcsVUFDWCxPQVVhLFdBQ2IiLCJmaWxlIjoiQzpcXGZpbGVcXGRlbW8tbmV4dC5qc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKVxyXG4gIFxyXG4vLyAgIGV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vICAgLy8gVGhpcyBpcyB0aGUgTGluayBBUElcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbi8vICAgPGRpdj5cclxuLy8gICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuLy8gICAgICAgPGE+QWJvdXQgUGFnZTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XHJcbi8vICAgPC9kaXY+XHJcbi8vIClcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuLy8gICA8ZGl2PlxyXG4vLyAgICAgPEhlYWRlciAvPlxyXG4vLyAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cclxuLy8gICA8L2Rpdj5cclxuLy8gKVxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0LmpzJ1xyXG5cclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuLy8gY29uc3QgUG9zdExpbmsgPSAocHJvcHMpID0+IChcclxuLy8gICA8bGk+XHJcbi8vICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cclxuLy8gICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuLy8gICAgIDwvTGluaz5cclxuLy8gICA8L2xpPlxyXG4vLyApXHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbi8vICAgPExheW91dD5cclxuLy8gICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuLy8gICAgIDx1bD5cclxuLy8gICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiLz5cclxuLy8gICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIvPlxyXG4vLyAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIi8+XHJcbi8vICAgICA8L3VsPlxyXG4vLyAgIDwvTGF5b3V0PlxyXG4vLyApXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXHJcblxyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG4vLyBjb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxyXG4vLyAgIDxsaT5cclxuLy8gICAgIDxMaW5rIGFzPXtgL3AvJHtwcm9wcy5pZH1gfSBcclxuLy8gICAgICAgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XHJcbi8vICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XHJcbi8vICAgICA8L0xpbms+XHJcbi8vICAgPC9saT5cclxuLy8gKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4vLyAgIDxMYXlvdXQ+XHJcbi8vICAgICA8aDE+TXkgQmxvZzwvaDE+XHJcbi8vICAgICA8dWw+XHJcbi8vICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIFxyXG4vLyAgICAgICAgIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiLz5cclxuLy8gICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgXHJcbi8vICAgICAgICAgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIi8+XHJcbi8vICAgICAgIDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiBcclxuLy8gICAgICAgICB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiLz5cclxuLy8gICAgIDwvdWw+XHJcbi8vICAgPC9MYXlvdXQ+XHJcbi8vIClcclxuXHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC5qcydcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuLy8gY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuLy8gICA8TGF5b3V0PlxyXG4vLyAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XHJcbi8vICAgICA8dWw+XHJcbi8vICAgICAgIHtwcm9wcy5zaG93cy5tYXAoKHtzaG93fSkgPT4gKFxyXG4vLyAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxyXG4vLyAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gXHJcbi8vICAgICAgICAgICAgIGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XHJcbi8vICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxyXG4vLyAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICkpfVxyXG4vLyAgICAgPC91bD5cclxuLy8gICA8L0xheW91dD5cclxuLy8gKVxyXG5cclxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuLy8gICBjb25zb2xlLmxvZyhyZXMpXHJcbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgc2hvd3M6IGRhdGFcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQuanMnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiBnZXRQb3N0cyAoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgXHJcbiAgICAgIGlkOiAnaGVsbG8tbmV4dGpzJywgXHJcbiAgICAgIHRpdGxlOiAnSGVsbG8gTmV4dC5qcydcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICBpZDogJ2xlYXJuLW5leHRqcycsIFxyXG4gICAgICB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZSdcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICBpZDogJ2RlcGxveS1uZXh0anMnLCBcclxuICAgICAgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnXHJcbiAgICB9XHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgIDx1bD5cclxuICAgICAge2dldFBvc3RzKCkubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBcclxuICAgICAgICAgICAgaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cclxuICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgIGgxLCBhIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDE7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICB9XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pIl19 */\n/*@ sourceURL=C:\\file\\demo-next.js\\pages\\index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.177271c3aa1dd6cdaf1d.hot-update.js.map