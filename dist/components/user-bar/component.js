'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _component = require('../../elements/user-link/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Bar = _styledComponents2.default.div(_templateObject);

var UserBar = function UserBar(_ref) {
  var links = _ref.links;
  return _react2.default.createElement(
    Bar,
    null,
    links.map(function (_ref2, i) {
      var name = _ref2.name,
          url = _ref2.url;
      return _react2.default.createElement(_component2.default, { name: name, url: url });
    })
  );
};

UserBar.propTypes = {
  links: _propTypes2.default.array.isRequired
};

exports.default = UserBar;