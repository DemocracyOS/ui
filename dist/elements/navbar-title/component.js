'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: var(--bold);\n  font-size: 3rem;\n  color: #192a34;\n  text-decoration: none;\n'], ['\n  font-family: var(--bold);\n  font-size: 3rem;\n  color: #192a34;\n  text-decoration: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.a(_templateObject);

var NavBarTitle = function NavBarTitle(props) {
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: '/' },
    _react2.default.createElement(
      Title,
      null,
      props.children
    )
  );
};

NavBarTitle.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = NavBarTitle;