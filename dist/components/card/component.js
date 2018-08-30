'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nwidth: 370px;\nheight: 340px;\nbox-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\nbackground-color: #ffffff;\nborder: solid 1px #e9e9e9;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\nbackground: #fff;\nbox-sizing: border-box;\n\n'], ['\nwidth: 370px;\nheight: 340px;\nbox-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\nbackground-color: #ffffff;\nborder: solid 1px #e9e9e9;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\nbackground: #fff;\nbox-sizing: border-box;\n\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _component = require('../../elements/card-header/component');

var _component2 = _interopRequireDefault(_component);

var _component3 = require('../../elements/card-content/component');

var _component4 = _interopRequireDefault(_component3);

var _component5 = require('../../elements/card-social/component');

var _component6 = _interopRequireDefault(_component5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardContainer = _styledComponents2.default.div(_templateObject);

var Card = function Card(_ref) {
  var img = _ref.img,
      commentaryItems = _ref.commentaryItems,
      limitDate = _ref.limitDate,
      tagTitle = _ref.tagTitle,
      title = _ref.title,
      avatarImg = _ref.avatarImg,
      name = _ref.name,
      charge = _ref.charge;
  return _react2.default.createElement(
    CardContainer,
    null,
    _react2.default.createElement(_component2.default, { img: img }),
    _react2.default.createElement(_component4.default, { tagTitle: tagTitle, title: title, avatarImg: avatarImg, name: name, charge: charge }),
    _react2.default.createElement(_component6.default, { commentaryItems: commentaryItems, limitDate: limitDate })
  );
};

Card.propTypes = {
  img: _propTypes2.default.string,
  commentaryItems: _propTypes2.default.string.isRequired,
  limitDate: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  tagTitle: _propTypes2.default.string.isRequired,
  avatarImg: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  charge: _propTypes2.default.string.isRequired

};
exports.default = Card;