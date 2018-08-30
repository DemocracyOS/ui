'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nwidth:320px;\nmargin-top:-70px;\nbackground-color:#fff;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\nheight:177px;\npadding:12px;\nbox-sizing: border-box;\n'], ['\nwidth:320px;\nmargin-top:-70px;\nbackground-color:#fff;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\nheight:177px;\npadding:12px;\nbox-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nfont-size:1.2rem;\ntext-transform:uppercase;\ntext-align:left;\ncolor:var(--primary-color);\npadding-bottom:1rem;\n'], ['\nfont-size:1.2rem;\ntext-transform:uppercase;\ntext-align:left;\ncolor:var(--primary-color);\npadding-bottom:1rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nfont-size:2.4rem;\ncolor:#000;\ntext-align:left;\nfont-family: var(--bold);\npadding-bottom:2rem;\n'], ['\nfont-size:2.4rem;\ncolor:#000;\ntext-align:left;\nfont-family: var(--bold);\npadding-bottom:2rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _component = require('../user-avatar/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);
var TagTitle = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.div(_templateObject3);
var TextWrapper = _styledComponents2.default.div(_templateObject4);

var CardContent = function CardContent(_ref) {
  var tagTitle = _ref.tagTitle,
      title = _ref.title,
      avatarImg = _ref.avatarImg,
      name = _ref.name,
      charge = _ref.charge;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      TextWrapper,
      null,
      _react2.default.createElement(
        TagTitle,
        null,
        tagTitle
      ),
      _react2.default.createElement(
        Title,
        null,
        title,
        ' '
      )
    ),
    _react2.default.createElement(_component2.default, { avatarImg: avatarImg, name: name, charge: charge })
  );
};

CardContent.propTypes = {
  title: _propTypes2.default.string.isRequired,
  tagTitle: _propTypes2.default.string.isRequired,
  avatarImg: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  charge: _propTypes2.default.string.isRequired
};

exports.default = CardContent;