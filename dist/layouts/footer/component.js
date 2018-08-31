'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 33.6rem;\n  background-color: var(--white);\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n\n'], ['\n  width: 100%;\n  height: 33.6rem;\n  background-color: var(--white);\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFooter = _styledComponents2.default.footer(_templateObject);

var Footer = function Footer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledFooter,
    null,
    children
  );
};

Footer.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = Footer;