'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 200px;\n  height: 50px;\n  background-color: var(--white);\n  font-size: 1.8rem;\n  color: #5c97bc;\n  border-style: none;\n'], ['\n  width: 200px;\n  height: 50px;\n  background-color: var(--white);\n  font-size: 1.8rem;\n  color: #5c97bc;\n  border-style: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject);

exports.default = StyledButton;