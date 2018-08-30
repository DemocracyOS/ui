'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nwidth: 368px;\nheight: 126px;\nbackground-color: #a4cee8;\nbackground-image: url(\'', '\');\noverflow:hidden;\nbackground-size: cover;\nbackground-position: center;\n'], ['\nwidth: 368px;\nheight: 126px;\nbackground-color: #a4cee8;\nbackground-image: url(\'', '\');\noverflow:hidden;\nbackground-size: cover;\nbackground-position: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.img;
});
var CardHeader = function CardHeader(_ref) {
  var img = _ref.img;
  return _react2.default.createElement(Wrapper, { img: img });
};

CardHeader.propTypes = {
  img: _propTypes2.default.string
};
exports.default = CardHeader;