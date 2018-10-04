webpackHotUpdate(5,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(493);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Kevin/Desktop/EthereumWorkspace/kickstart/pages/index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "render",

    /*
    async componentDidMount() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      console.log(campaigns);
    }*/

    // renders text onto the screen for jsx
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, this.props.campaigns[0]);
    }
  }], [{
    key: "getInitialProps",

    // componentDidMount is 100% appropriate in React, but in next.js, there
    // is an extra requirement for data loading. Server side rendering attempts to
    // render our component on the server and then take the HTML and send it to
    // the browser. The catch is if we want to do our data fetching ( having our
    // Next server reach out to the ethereum network to get some initial data,
    // Next does not execute the componentDidMount). So to make sure that the data
    // fetching occurs, we have to use getInitialProps (very specific to Next.js)
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

// next NEEDS to see that a component has been exported in pages


exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhbXBhaWduSW5kZXgiLCJwcm9wcyIsImNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVkOzs7Ozs7Ozs7O1NBb0JKOztBQU1BOzs7Ozs7OzZCQUNTLEFBQ1A7NkJBQU8sY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsT0FBQSxPQUFNLEFBQUssTUFBTCxBQUFXLFVBQXhCLEFBQU8sQUFBTSxBQUFxQixBQUNuQzs7O1NBNUJEOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozt1QkFLMEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBLEFBQXVDOzttQkFBekQ7QTtpREFLQyxFQUFFLFdBQUYsQUFBYSxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJJLEE7O0FBZ0M1QixBQUNBOzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvS2V2aW4vRGVza3RvcC9FdGhlcmV1bVdvcmtzcGFjZS9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Kevin/Desktop/EthereumWorkspace/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Kevin/Desktop/EthereumWorkspace/kickstart/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wMTc2MGJlNWQ4Zjg0YzE5MTRlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ODc2NTg5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuXG5jbGFzcyBDYW1wYWlnbkluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gY29tcG9uZW50RGlkTW91bnQgaXMgMTAwJSBhcHByb3ByaWF0ZSBpbiBSZWFjdCwgYnV0IGluIG5leHQuanMsIHRoZXJlXG4gIC8vIGlzIGFuIGV4dHJhIHJlcXVpcmVtZW50IGZvciBkYXRhIGxvYWRpbmcuIFNlcnZlciBzaWRlIHJlbmRlcmluZyBhdHRlbXB0cyB0b1xuICAvLyByZW5kZXIgb3VyIGNvbXBvbmVudCBvbiB0aGUgc2VydmVyIGFuZCB0aGVuIHRha2UgdGhlIEhUTUwgYW5kIHNlbmQgaXQgdG9cbiAgLy8gdGhlIGJyb3dzZXIuIFRoZSBjYXRjaCBpcyBpZiB3ZSB3YW50IHRvIGRvIG91ciBkYXRhIGZldGNoaW5nICggaGF2aW5nIG91clxuICAvLyBOZXh0IHNlcnZlciByZWFjaCBvdXQgdG8gdGhlIGV0aGVyZXVtIG5ldHdvcmsgdG8gZ2V0IHNvbWUgaW5pdGlhbCBkYXRhLFxuICAvLyBOZXh0IGRvZXMgbm90IGV4ZWN1dGUgdGhlIGNvbXBvbmVudERpZE1vdW50KS4gU28gdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGRhdGFcbiAgLy8gZmV0Y2hpbmcgb2NjdXJzLCB3ZSBoYXZlIHRvIHVzZSBnZXRJbml0aWFsUHJvcHMgKHZlcnkgc3BlY2lmaWMgdG8gTmV4dC5qcylcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyB3ZSB1c2Ugc3RhdGljIGIvYyBpdCBpcyBkZWZpbmVzIGEgY2xhc3MgZnVuY3Rpb24uIFdpdGggYSBzdGF0aWMga2V5d29yZFxuICAgIC8vIHRoaXMgZnVuY3Rpb24gaXMgbm90IGFzc2lnbmVkIHRvIGluc3RhbmNlcyBvZiB0aGUgY2xhc3MsIGluc3RlYWQgdGhlIGZ1bmN0aW9uXG4gICAgLy8gaXMgYXNzaWduZWQgdG8gdGhlIGNsYXNzIGl0c2VsZi5cbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG5cbiAgICAvLyB7IGNhbXBhaWduczogY2FtcGFpZ25zIH0gY2FuIGJlIHNob3J0ZW5lZCB0byB7IGNhbXBhaWducyB9IGFuZCBpc1xuICAgIC8vIHByb3ZpZGVkIHRvIG91ciBDb21wb25lbnQgYXMgXCJwcm9wc1wiIGFuZCBub3cgd2UgY2FuIGZyZWVseSByZWZlcmVuY2VcbiAgICAvLyB0aGlzLnByb3BzLmNhbXBhaWduc1xuICAgIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zIH07XG4gIH1cblxuICAvKlxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XG4gICAgY29uc29sZS5sb2coY2FtcGFpZ25zKTtcbiAgfSovXG5cbiAgLy8gcmVuZGVycyB0ZXh0IG9udG8gdGhlIHNjcmVlbiBmb3IganN4XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdj57dGhpcy5wcm9wcy5jYW1wYWlnbnNbMF19PC9kaXY+O1xuICB9XG59XG5cbi8vIG5leHQgTkVFRFMgdG8gc2VlIHRoYXQgYSBjb21wb25lbnQgaGFzIGJlZW4gZXhwb3J0ZWQgaW4gcGFnZXNcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBS0E7Ozs7Ozs7QUFFQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUEzQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFEQTs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=