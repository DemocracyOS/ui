'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width:130px;\n  height:50px;\n  margin-right:70px;\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  '], ['\n  width:130px;\n  height:50px;\n  margin-right:70px;\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var SocialBar = function SocialBar(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    Wrapper,
    null,
    children
  );
};

SocialBar.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = SocialBar;