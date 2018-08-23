'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  color:#5e99bc;\n  font-size: 2em;\n  font-weight: 500;\n  margin: 1em;\n  padding: 0.5em 2em;\n  border-radius: 20px;\n  \n  background: ', ';\n  color: ', ';\n  border: 2px solid ', ';\n'], ['\n  display: inline-block;\n  color:#5e99bc;\n  font-size: 2em;\n  font-weight: 500;\n  margin: 1em;\n  padding: 0.5em 2em;\n  border-radius: 20px;\n  \n  background: ', ';\n  color: ', ';\n  border: 2px solid ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonContainer = _styledComponents2.default.button(_templateObject, function (props) {
  return props.primary ? 'var(--primary-color)' : 'white';
}, function (props) {
  return props.primary ? 'white' : 'var(--secondary-color)';
}, function (props) {
  return props.primary ? 'var(--primary-color)' : 'var(--secondary-color)';
});

var Button = function Button(props) {
  return _react2.default.createElement(ButtonContainer, props);
};

exports.default = Button;