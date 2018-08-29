'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: var(--bold);\n  font-size: 1.6rem;\n  color: #4f81a1;\n  &:first-child {\n    margin-right: 21px;\n  }\n  &:first-child:after {\n    content: \'\xB7\';\n    margin-left: 21px;\n  }\n'], ['\n  font-family: var(--bold);\n  font-size: 1.6rem;\n  color: #4f81a1;\n  &:first-child {\n    margin-right: 21px;\n  }\n  &:first-child:after {\n    content: \'\xB7\';\n    margin-left: 21px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserStyledLink = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject);

var UserLink = function UserLink(_ref) {
  var name = _ref.name,
      url = _ref.url;
  return _react2.default.createElement(
    UserStyledLink,
    { to: url },
    name
  );
};

UserLink.propTypes = {
  name: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string.isRequired
};

exports.default = UserLink;