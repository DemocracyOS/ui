'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n > a {\n   font-size: 3rem;\n   color: #203340;\n   text-decoration: none; \n }\n &&& span {\n   font-family: var(--bold);\n }\n'], ['\n > a {\n   font-size: 3rem;\n   color: #203340;\n   text-decoration: none; \n }\n &&& span {\n   font-family: var(--bold);\n }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBarTitle = _styledComponents2.default.div(_templateObject);

exports.default = NavBarTitle;