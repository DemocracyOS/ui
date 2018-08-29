'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']),
    _templateObject2 = _taggedTemplateLiteral(['\ncolor:#192a34;\ndisplay:inline-block;\npadding:10px 20px;\nfont-size:1.6rem;\n'], ['\ncolor:#192a34;\ndisplay:inline-block;\npadding:10px 20px;\nfont-size:1.6rem;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuStyledLink = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject);
var MenuLinkItem = _styledComponents2.default.li(_templateObject2);
var Menulink = function Menulink(_ref) {
  var name = _ref.name,
      url = _ref.url;
  return _react2.default.createElement(
    MenuStyledLink,
    { to: url },
    _react2.default.createElement(
      MenuLinkItem,
      null,
      name
    )
  );
};

Menulink.propTypes = {
  name: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = Menulink;