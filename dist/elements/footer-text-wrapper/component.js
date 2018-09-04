'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 3.9rem 17.5rem 3.9rem;\n  background-color: #2c4c61;\n  text-align: center;\n  height: 12.6rem;\n'], ['\n  padding: 3.9rem 17.5rem 3.9rem;\n  background-color: #2c4c61;\n  text-align: center;\n  height: 12.6rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledText = _styledComponents2.default.div(_templateObject);
var FooterText = function FooterText(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledText,
    null,
    children
  );
};

FooterText.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = FooterText;