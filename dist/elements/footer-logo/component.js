'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 102px;\n  height: 36px;\n  background-image: url(\'', '\');\n  background-size: cover;\n  background-position: center;\n'], ['\n  width: 102px;\n  height: 36px;\n  background-image: url(\'', '\');\n  background-size: cover;\n  background-position: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterLogo = _styledComponents2.default.div(_templateObject, function (props) {
  return props.img;
});

FooterLogo.propTypes = {
  img: _propTypes2.default.string.isRequired
};

exports.default = FooterLogo;