'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 30px;\n  height: 30px;\n  border-radius:50%;\n  background-color: #a4cee8;\n  background-image: url(\'', '\');\n  background-size: cover;\n  background-position: center;\n  margin-right: 2.0rem;\n'], ['\n  width: 30px;\n  height: 30px;\n  border-radius:50%;\n  background-color: #a4cee8;\n  background-image: url(\'', '\');\n  background-size: cover;\n  background-position: center;\n  margin-right: 2.0rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledIcon = _styledComponents2.default.div(_templateObject, function (props) {
  return props.img;
});

var SocialIcon = function SocialIcon(_ref) {
  var img = _ref.img,
      link = _ref.link;
  return _react2.default.createElement(
    'a',
    { href: link },
    _react2.default.createElement(StyledIcon, { img: img })
  );
};

SocialIcon.propTypes = {
  img: _propTypes2.default.string.isRequired,
  link: _propTypes2.default.string.isRequired
};

exports.default = SocialIcon;