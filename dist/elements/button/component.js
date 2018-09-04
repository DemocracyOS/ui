'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  min-width: 125px;\n  height: 39px;\n  background-color: var(--white);\n  font-size: 1.4rem;\n  color: #5c97bc;\n  border-style: none;\n  border-radius: 3px;\n\n/* primary = blue background, secondary = white background */\n  background-color: ', ';\n  color: ', ';\n  border: ', ';\n /* align-self: ', ' */;\n  '], ['\n  min-width: 125px;\n  height: 39px;\n  background-color: var(--white);\n  font-size: 1.4rem;\n  color: #5c97bc;\n  border-style: none;\n  border-radius: 3px;\n\n/* primary = blue background, secondary = white background */\n  background-color: ', ';\n  color: ', ';\n  border: ', ';\n /* align-self: ', ' */;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? '#5c97bc' : 'var(--white)';
}, function (props) {
  return props.primary ? 'var(--white)' : '#2c4c61';
}, function (props) {
  return props.withborder ? 'solid 2px #5c97bc' : 'none';
}, function (props) {
  return props.primary ? 'center' : 'auto';
});

var styledButton = function styledButton(props) {
  return _react2.default.createElement(StyledButton, props);
};

exports.default = styledButton;