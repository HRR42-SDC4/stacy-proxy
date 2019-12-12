(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app3"],{

/***/ "./service-tom/client/components/App.jsx":
/*!***********************************************!*\
  !*** ./service-tom/client/components/App.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./service-tom/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./service-tom/node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Recommendation_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Recommendation.jsx */ \"./service-tom/client/components/Recommendation.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  border-top: 1px solid black;\\n  padding-top: 15px;\\n  padding-bottom: 15px;\\n  font-size: 20px;\\n  line-height: 20px;\\n  font-family: 'Calibre-Medium';\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar Allrecs = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nvar Recheader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      genre: '',\n      title: '',\n      recs: []\n    };\n    _this.get = _this.get.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.get();\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      var _this2 = this;\n\n      var urlString = window.location.href;\n      var url = new URL(urlString);\n      var restaurantId = url.searchParams.get('restaurantID');\n      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({\n        type: 'GET',\n        url: '/api/recommendations/' + restaurantId,\n        success: function success(data) {\n          _this2.setState({\n            genre: data[0].genre,\n            title: data[0].title,\n            recs: data[0].recs\n          });\n        },\n        failure: function failure(err) {\n          console.log(err);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Recheader, null, \"More \", this.state.genre, \" Near \", this.state.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Allrecs, null, this.state.recs.map(function (rec) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Recommendation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          rec: rec,\n          genre: _this3.state.genre\n        });\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlLXRvbS9jbGllbnQvY29tcG9uZW50cy9BcHAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmljZS10b20vY2xpZW50L2NvbXBvbmVudHMvQXBwLmpzeD8wN2MyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVjb21tZW5kYXRpb24gZnJvbSAnLi9SZWNvbW1lbmRhdGlvbi5qc3gnO1xuXG5jb25zdCBBbGxyZWNzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuYDtcblxuY29uc3QgUmVjaGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnQ2FsaWJyZS1NZWRpdW0nO1xuYDtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBnZW5yZTogJycsXG4gICAgICB0aXRsZTogJycsXG4gICAgICByZWNzOiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmdldCA9IHRoaXMuZ2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldCgpO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIGNvbnN0IHVybFN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodXJsU3RyaW5nKTtcbiAgICBjb25zdCByZXN0YXVyYW50SWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgncmVzdGF1cmFudElEJyk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgdXJsOiAnL2FwaS9yZWNvbW1lbmRhdGlvbnMvJytyZXN0YXVyYW50SWQsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBnZW5yZTogZGF0YVswXS5nZW5yZSxcbiAgICAgICAgICB0aXRsZTogZGF0YVswXS50aXRsZSxcbiAgICAgICAgICByZWNzOiBkYXRhWzBdLnJlY3NcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZmFpbHVyZTogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UmVjaGVhZGVyPk1vcmUge3RoaXMuc3RhdGUuZ2VucmV9IE5lYXIge3RoaXMuc3RhdGUudGl0bGV9PC9SZWNoZWFkZXI+XG4gICAgICAgIDxBbGxyZWNzPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnJlY3MubWFwKHJlYyA9PiA8UmVjb21tZW5kYXRpb24gcmVjPXtyZWN9IGdlbnJlPXt0aGlzLnN0YXRlLmdlbnJlfS8+KX1cbiAgICAgICAgPC9BbGxyZWNzPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQVFBOzs7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQVRBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBL0NBO0FBQ0E7QUErQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service-tom/client/components/App.jsx\n");

/***/ }),

/***/ "./service-tom/client/components/Recommendation.jsx":
/*!**********************************************************!*\
  !*** ./service-tom/client/components/Recommendation.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./service-tom/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/material/KeyboardArrowLeft */ \"./service-tom/node_modules/styled-icons/material/KeyboardArrowLeft/KeyboardArrowLeft.esm.js\");\n/* harmony import */ var styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/material/KeyboardArrowRight */ \"./service-tom/node_modules/styled-icons/material/KeyboardArrowRight/KeyboardArrowRight.esm.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _templateObject11() {\n  var data = _taggedTemplateLiteral([\"\\n  font-size: 15px;\\n  padding: 3px;\\n  font-family: 'Calibre-Medium';\\n\"]);\n\n  _templateObject11 = function _templateObject11() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject10() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  align-items: center;\\n  padding: 3px;\\n  font-size: 15px;\\n  font-family: 'Calibre-Medium';\\n\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 20px;\\n  width: 20px;\\n  padding-right: 5px;\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 3px;\\n  color: rgb(96,97,97);\\n  font-size: 15px;\\n  font-family: 'Calibre-Medium';\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 3px;\\n  width: 310px;\\n  font-size: 18px;\\n  line-height: 20px;\\n  border-bottom: 1px solid transparent;\\n  font-family: 'Calibre-Medium';\\n  text-transform: uppercase;\\n  transition-property: border-bottom;\\n  transition-duration: 0.2s;\\n  transition-timing-function: ease-in-out;\\n  transition-delay: 0s;\\n  \", \":hover & {\\n    border-bottom: 1px solid #b70038;\\n  }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding-left: 25px;\\n  background-color: white;\\n  height: 100%;\\n  width: 350px;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 40px;\\n  width: 40px;\\n  margin-left: -40px;\\n  border-radius: 20px;\\n  color: white;\\n  z-index: 2;\\n  &:hover {\\n    background-color: #101820;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 220px;\\n  width: 230px;\\n  overflow: auto;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 40px;\\n  width: 40px;\\n  margin-right: -40px;\\n  border-radius: 20px;\\n  color: white;\\n  z-index: 2;\\n  &:hover {\\n    background-color: #101820;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  height: 220px;\\n  width: 230px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: row;\\n  margin: 20px;\\n  height: 220px;\\n  width: 580px;\\n  background-color: rgb(255,255,255);\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar Rec = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar Picholder = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar Picnavleft = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_2__[\"KeyboardArrowLeft\"])(_templateObject3());\nvar Pic = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nvar Picnavright = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_3__[\"KeyboardArrowRight\"])(_templateObject5());\nvar Recbody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nvar Rectitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7(), Rec);\nvar Recprice = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8());\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9());\nvar Zagatrated = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject10());\nvar Rectext = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject11());\n\nvar Recommendation =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Recommendation, _React$Component);\n\n  function Recommendation(props) {\n    var _this;\n\n    _classCallCheck(this, Recommendation);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Recommendation).call(this, props));\n    _this.state = {\n      imageIndex: 0\n    };\n    _this.onLeftClick = _this.onLeftClick.bind(_assertThisInitialized(_this));\n    _this.onRightClick = _this.onRightClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Recommendation, [{\n    key: \"onLeftClick\",\n    value: function onLeftClick() {\n      var lastIndex = this.props.rec.pics.length - 1;\n      var imageIndex = this.state.imageIndex;\n      var shouldResetIndex = imageIndex === 0;\n      var index = shouldResetIndex ? lastIndex : imageIndex - 1;\n      this.setState({\n        imageIndex: index\n      });\n    }\n  }, {\n    key: \"onRightClick\",\n    value: function onRightClick() {\n      var lastIndex = this.props.rec.pics.length - 1;\n      var imageIndex = this.state.imageIndex;\n      var shouldResetIndex = imageIndex === lastIndex;\n      var index = shouldResetIndex ? 0 : imageIndex + 1;\n      this.setState({\n        imageIndex: index\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rec, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picholder, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picnavleft, {\n        onClick: this.onLeftClick\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pic, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageSlide, {\n        url: this.props.rec.pics[this.state.imageIndex]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picnavright, {\n        onClick: this.onRightClick\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Recbody, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rectitle, null, this.props.rec.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Recprice, null, this.props.genre, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\xB7\"), \"  \", this.props.rec.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Zagatrated, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"assets/logo.svg\"\n      })), \"ZAGAT RATED\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rectext, null, this.props.rec.text)));\n    }\n  }]);\n\n  return Recommendation;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n;\n\nvar ImageSlide = function ImageSlide(_ref) {\n  var url = _ref.url;\n  var styles = {\n    backgroundImage: \"url(\".concat(url, \")\"),\n    height: '220px',\n    backgroundPosition: 'center',\n    backgroundRepeat: 'no-repeat',\n    backgroundSize: 'cover'\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: styles\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Recommendation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlLXRvbS9jbGllbnQvY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlLXRvbS9jbGllbnQvY29tcG9uZW50cy9SZWNvbW1lbmRhdGlvbi5qc3g/NGFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBLZXlib2FyZEFycm93TGVmdCB9IGZyb20gJ3N0eWxlZC1pY29ucy9tYXRlcmlhbC9LZXlib2FyZEFycm93TGVmdCc7XG5pbXBvcnQgeyBLZXlib2FyZEFycm93UmlnaHQgfSBmcm9tICdzdHlsZWQtaWNvbnMvbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1JpZ2h0JztcblxuY29uc3QgUmVjID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAyMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogNTgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG5gO1xuXG5jb25zdCBQaWNob2xkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMjMwcHg7XG5gO1xuXG5jb25zdCBQaWNuYXZsZWZ0ID0gc3R5bGVkKEtleWJvYXJkQXJyb3dMZWZ0KWBcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxODIwO1xuICB9XG5gO1xuXG5jb25zdCBQaWMgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMjMwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgUGljbmF2cmlnaHQgPSBzdHlsZWQoS2V5Ym9hcmRBcnJvd1JpZ2h0KWBcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDI7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDE4MjA7XG4gIH1cbmA7XG5cbmNvbnN0IFJlY2JvZHkgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzUwcHg7XG5gO1xuXG5jb25zdCBSZWN0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDMxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAnQ2FsaWJyZS1NZWRpdW0nO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItYm90dG9tO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAke1JlY306aG92ZXIgJiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNzAwMzg7XG4gIH1cbmA7XG5cbmNvbnN0IFJlY3ByaWNlID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogM3B4O1xuICBjb2xvcjogcmdiKDk2LDk3LDk3KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogJ0NhbGlicmUtTWVkaXVtJztcbmA7XG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5gO1xuXG5jb25zdCBaYWdhdHJhdGVkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiAnQ2FsaWJyZS1NZWRpdW0nO1xuYDtcblxuY29uc3QgUmVjdGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBmb250LWZhbWlseTogJ0NhbGlicmUtTWVkaXVtJztcbmA7XG5cbmNsYXNzIFJlY29tbWVuZGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbWFnZUluZGV4OiAwXG4gICAgfTtcblxuICAgIHRoaXMub25MZWZ0Q2xpY2sgPSB0aGlzLm9uTGVmdENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJpZ2h0Q2xpY2sgPSB0aGlzLm9uUmlnaHRDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25MZWZ0Q2xpY2soKSB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5wcm9wcy5yZWMucGljcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHsgaW1hZ2VJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzaG91bGRSZXNldEluZGV4ID0gaW1hZ2VJbmRleCA9PT0gMDtcbiAgICBjb25zdCBpbmRleCA9ICBzaG91bGRSZXNldEluZGV4ID8gbGFzdEluZGV4IDogaW1hZ2VJbmRleCAtIDE7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltYWdlSW5kZXg6IGluZGV4XG4gICAgfSk7XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soKSB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5wcm9wcy5yZWMucGljcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHsgaW1hZ2VJbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzaG91bGRSZXNldEluZGV4ID0gaW1hZ2VJbmRleCA9PT0gbGFzdEluZGV4O1xuICAgIGNvbnN0IGluZGV4ID0gIHNob3VsZFJlc2V0SW5kZXggPyAwIDogaW1hZ2VJbmRleCArIDE7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltYWdlSW5kZXg6IGluZGV4XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWM+XG4gICAgICAgIDxQaWNob2xkZXI+XG4gICAgICAgICAgPFBpY25hdmxlZnQgb25DbGljaz17dGhpcy5vbkxlZnRDbGlja30+PC9QaWNuYXZsZWZ0PlxuICAgICAgICAgIDxQaWM+XG4gICAgICAgICAgICA8SW1hZ2VTbGlkZSB1cmw9eyB0aGlzLnByb3BzLnJlYy5waWNzW3RoaXMuc3RhdGUuaW1hZ2VJbmRleF0gfS8+XG4gICAgICAgICAgPC9QaWM+XG4gICAgICAgICAgPFBpY25hdnJpZ2h0IG9uQ2xpY2s9e3RoaXMub25SaWdodENsaWNrfT48L1BpY25hdnJpZ2h0PlxuICAgICAgICA8L1BpY2hvbGRlcj5cbiAgICAgICAgPFJlY2JvZHk+XG4gICAgICAgICAgPFJlY3RpdGxlPnt0aGlzLnByb3BzLnJlYy50aXRsZX08L1JlY3RpdGxlPlxuICAgICAgICAgIDxSZWNwcmljZT57dGhpcy5wcm9wcy5nZW5yZX0gPHNwYW4+JiMxODM7PC9zcGFuPiAge3RoaXMucHJvcHMucmVjLnByaWNlfTwvUmVjcHJpY2U+XG4gICAgICAgICAgPFphZ2F0cmF0ZWQ+XG4gICAgICAgICAgICA8TG9nbz48aW1nIHNyYz1cImFzc2V0cy9sb2dvLnN2Z1wiLz48L0xvZ28+WkFHQVQgUkFURURcbiAgICAgICAgICA8L1phZ2F0cmF0ZWQ+XG4gICAgICAgICAgPFJlY3RleHQ+e3RoaXMucHJvcHMucmVjLnRleHR9PC9SZWN0ZXh0PlxuICAgICAgICA8L1JlY2JvZHk+XG4gICAgICA8L1JlYz5cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBJbWFnZVNsaWRlID0gKHsgdXJsIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3VybH0pYCxcbiAgICBoZWlnaHQ6ICcyMjBweCcsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzfT48L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb21tZW5kYXRpb247Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBUUE7QUFZQTtBQU1BO0FBWUE7QUFVQTtBQWlCQTtBQU9BO0FBTUE7QUFRQTtBQUNBO0FBS0E7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVJBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBTUE7Ozs7QUF2REE7QUFDQTtBQXVEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./service-tom/client/components/Recommendation.jsx\n");

/***/ }),

/***/ "./service-tom/client/index.jsx":
/*!**************************************!*\
  !*** ./service-tom/client/index.jsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./service-tom/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./service-tom/node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.jsx */ \"./service-tom/client/components/App.jsx\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById('app3'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlLXRvbS9jbGllbnQvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmljZS10b20vY2xpZW50L2luZGV4LmpzeD8yMWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcDMnKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./service-tom/client/index.jsx\n");

/***/ })

},[["./service-tom/client/index.jsx","vendor"]]]);