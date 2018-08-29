'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: var(--bold);\n  font-size: 3rem;\n  color: #000;\n  padding:10 10 10 0;\n'], ['\n  font-family: var(--bold);\n  font-size: 3rem;\n  color: #000;\n  padding:10 10 10 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.h2(_templateObject);

var TitleH2 = function TitleH2(props) {
  return _react2.default.createElement(
    Title,
    null,
    props.children
  );
};

TitleH2.propTypes = {
  children: _propTypes2.default.string.isRequired
};

exports.default = TitleH2;