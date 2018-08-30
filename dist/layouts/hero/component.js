'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin: 105px 80px 55px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n'], ['\n  margin: 105px 80px 55px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHero = _styledComponents2.default.div(_templateObject);

var Hero = function Hero(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledHero,
    null,
    children
  );
};

Hero.PropTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = Hero;