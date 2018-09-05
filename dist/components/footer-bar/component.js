'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  min-width:800px;  \n  margin-left:auto;\n  margin-right:auto;\n  height: 110px;\n  display: flex;\n  flex-wrap:wrap;\n  flex-direction:column;\n  box-sizing:border-box;\n  margin-bottom: 8.5rem;\n  > a {\n    color: #2c4c61;\n    display: inline-block;\n    font-family: var(--medium);\n    padding: 10px 10px;\n    font-size: 1.6rem;\n    width:200px;\n\n    box-sizing:border-box;\n  }\n'], ['\n  min-width:800px;  \n  margin-left:auto;\n  margin-right:auto;\n  height: 110px;\n  display: flex;\n  flex-wrap:wrap;\n  flex-direction:column;\n  box-sizing:border-box;\n  margin-bottom: 8.5rem;\n  > a {\n    color: #2c4c61;\n    display: inline-block;\n    font-family: var(--medium);\n    padding: 10px 10px;\n    font-size: 1.6rem;\n    width:200px;\n\n    box-sizing:border-box;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterBar = _styledComponents2.default.div(_templateObject);

FooterBar.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = FooterBar;