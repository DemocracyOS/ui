'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 200px;\n  height: 50px;\n  background-color: var(--white);\n  font-size: 1.8rem;\n  color: #5c97bc;\n  border-style: none;\n\n  color: ', ';\n  border: ', ';\n  align-self: ', ';\n  '], ['\n  width: 200px;\n  height: 50px;\n  background-color: var(--white);\n  font-size: 1.8rem;\n  color: #5c97bc;\n  border-style: none;\n\n  color: ', ';\n  border: ', ';\n  align-self: ', ';\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.viewmore ? '#2d4b5e' : 'var(--secondary-color)';
}, function (props) {
  return props.viewmore ? '2px solid var(--primary-color)' : 'none';
}, function (props) {
  return props.viewmore ? 'center' : 'auto';
});

var styledButton = function styledButton(props) {
  return _react2.default.createElement(StyledButton, props);
};

exports.default = styledButton;