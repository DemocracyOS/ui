'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height:400px;\n  background:#5E98BA;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-end;\n  padding-bottom:20px;\n'], ['\n  width: 100%;\n  height:400px;\n  background:#5E98BA;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-end;\n  padding-bottom:20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n color: rgba(255, 255, 255, 0.5);\n font-size:12px;\n padding:5px;\n margin:0;\n'], ['\n color: rgba(255, 255, 255, 0.5);\n font-size:12px;\n padding:5px;\n margin:0;\n']);

exports.default = footer;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);
var P = _styledComponents2.default.p(_templateObject2);

function footer() {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      P,
      null,
      'Honorable C\xE1mara de diputados de la Naci\xF3n Argentina | Congreso de la Naci\xF3n Argentina | Av. Rivadavia 1864 | Ciudad Aut\xF3noma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100'
    ),
    _react2.default.createElement(
      P,
      null,
      'La informaci\xF3n contenida en este sitio es de dominio p\xFAblico y puede ser utilizada libremente. Se solicita citar la fuente.'
    )
  );
}