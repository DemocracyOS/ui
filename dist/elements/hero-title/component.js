'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0px;\n  font-family: var(--bold);\n  font-size: 5.0rem;\n  line-height: 1.32;\n  color: #2c4c61;\n'], ['\n  margin-top: 0px;\n  font-family: var(--bold);\n  font-size: 5.0rem;\n  line-height: 1.32;\n  color: #2c4c61;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeroTitle = _styledComponents2.default.h1(_templateObject);

var HeroTitle = function HeroTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledHeroTitle,
    null,
    children
  );
};

HeroTitle.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = HeroTitle;