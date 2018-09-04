'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.8rem;\n  line-height: 1.67;\n  color: #5c97bc;\n  max-width: 516px;\n'], ['\n  font-size: 1.8rem;\n  line-height: 1.67;\n  color: #5c97bc;\n  max-width: 516px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeroSubtitle = _styledComponents2.default.h2(_templateObject);

var HeroSubtitle = function HeroSubtitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledHeroSubtitle,
    null,
    children
  );
};

HeroSubtitle.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = HeroSubtitle;