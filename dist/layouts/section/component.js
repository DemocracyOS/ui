'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    margin-left: 5.5rem;\n    padding: 7rem 3.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: flex-start;\n    background-color: var(--white);\n    &:nth-child(even) {\n    background-color: #5c97bc;\n    > h2 {\n      color: var(--white);\n    }\n  }\n'], ['\n    margin-left: 5.5rem;\n    padding: 7rem 3.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: flex-start;\n    background-color: var(--white);\n    &:nth-child(even) {\n    background-color: #5c97bc;\n    > h2 {\n      color: var(--white);\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSection = _styledComponents2.default.section(_templateObject);

var Section = function Section(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    StyledSection,
    null,
    children
  );
};

Section.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = Section;