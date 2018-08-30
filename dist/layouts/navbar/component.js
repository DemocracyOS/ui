'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 2.7rem 8.5rem 5.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n'], ['\n  margin: 2.7rem 8.5rem 5.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: baseline;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject);

var Navbar = function Navbar(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledNav,
    null,
    children
  );
};

Navbar.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = Navbar;