"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Kevin/Desktop/EthereumWorkspace/kickstart/pages/index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "renderCampaigns",

    // iterate through the list of campaign addresses, and for every address, we'll
    // create a different object. Each object will represent a different card.
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description:
          // Use backticks to use the ES6 template string. We need a dynamic
          // address that is the current campaign we are iterating over
          _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, "View Campaign")),
          // fluid stretches each card to the side of the page (far left to far right)
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }

    /*
    async componentDidMount() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      console.log(campaigns);
    }*/

    // renders text onto the screen for jsx

  }, {
    key: "render",
    value: function render() {
      return (
        // b/c of the Layout component, every page will have the layout component
        // in the page, in this case, a header.
        _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, "Open Campaigns"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, _react2.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement(_semanticUiReact.Button, {
          floated: "right",
          content: "Create Campaign",
          icon: "add circle"
          // primary is the same as primary={true}, primary adds a blue styling
          // to the button
          , primary: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }))), this.renderCampaigns()))
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7OztTQW9CSjs7QUFDQTs7c0NBQ2tCLEFBQ2hCO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDaEQ7O2tCQUFPLEFBQ0csQUFDUjtBQUNFO0FBQ0E7QUFDQTswQkFBQSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3dCQUEzQjswQkFBQSxBQUNFO0FBREY7NkJBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBTkMsQUFLSCxBQUNFLEFBR0o7QUFDQTtpQkFWRixBQUFPLEFBVUUsQUFFVjtBQVpRLEFBQ0w7QUFGSixBQUFjLEFBZWQsT0FmYzs7MkNBZVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTtBQUdUOztBQU1BOzs7Ozs7Ozs7OzZCQUNTLEFBQ1A7QUFDRTtBQUNBO0FBQ0E7d0JBQUEsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBREYsQUFDRSxBQUVBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO3NCQUFaO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRSxBQUFDO21CQUFELEFBQ1UsQUFDUjttQkFGRixBQUVVLEFBQ1I7Z0JBQUssQUFDTDtBQUNBO0FBTEY7QUFDRSxZQUtBLFNBTkY7O3NCQUFBO3dCQUxOLEFBR0UsQUFDRSxBQUNFLEFBVUg7QUFWRzttQkFUVixBQUdFLEFBQ0UsQUFlRyxBQUFLLEFBSWI7Ozs7U0F2RUQ7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUswQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBO2lEQUtDLEVBQUUsV0FBRixBQUFhLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQWpCSTs7QUEyRTVCLEFBQ0E7OztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9LZXZpbi9EZXNrdG9wL0V0aGVyZXVtV29ya3NwYWNlL2tpY2tzdGFydCJ9