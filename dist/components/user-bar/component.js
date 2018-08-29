'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  > a {\n    font-family: var(--bold);\n    font-size: 1.6rem;\n    color: #4f81a1;\n    &:first-child {\n      margin-right: 21px;\n    }\n    &:first-child:after {\n      content: \'\xB7\';\n      margin-left: 21px;\n    }\n  }\n'], ['\n  > a {\n    font-family: var(--bold);\n    font-size: 1.6rem;\n    color: #4f81a1;\n    &:first-child {\n      margin-right: 21px;\n    }\n    &:first-child:after {\n      content: \'\xB7\';\n      margin-left: 21px;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import UserLink from '../../elements/user-link/component'

var Bar = _styledComponents2.default.div(_templateObject);

var UserBar = function UserBar(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    Bar,
    null,
    children
  );
};

UserBar.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = UserBar;