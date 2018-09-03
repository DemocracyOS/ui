'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 600px;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  list-style:none;\n  padding-left:0;\n  > a {\n    color: #203340;\n    display: inline-block;\n    padding: 10px 20px;\n    font-size: 1.6rem;\n  }\n'], ['\n  width: 600px;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n  list-style:none;\n  padding-left:0;\n  > a {\n    color: #203340;\n    display: inline-block;\n    padding: 10px 20px;\n    font-size: 1.6rem;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);
var Linkbar = function Linkbar(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    Wrapper,
    null,
    children
  );
};

Linkbar.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};

exports.default = Linkbar;