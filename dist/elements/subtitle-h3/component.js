'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.6rem;\n  color: var(--secondary-color);\n  padding:0 10 10 0;\n'], ['\n  font-size: 1.6rem;\n  color: var(--secondary-color);\n  padding:0 10 10 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.h3(_templateObject);

var SubtitleH3 = function SubtitleH3(props) {
  return _react2.default.createElement(
    Title,
    null,
    props.children
  );
};

SubtitleH3.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = SubtitleH3;