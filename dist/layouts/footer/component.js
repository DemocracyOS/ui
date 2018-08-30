'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 33.6rem;\n  background-color: var(--white);\n\n'], ['\n  width: 100%;\n  height: 33.6rem;\n  background-color: var(--white);\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import PropTypes from 'prop-types'

var StyledFooter = _styledComponents2.default.footer(_templateObject);

var Footer = function Footer() {
  return _react2.default.createElement(StyledFooter, null);
};

exports.default = Footer;