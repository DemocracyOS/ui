'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\ndisplay:flex;\nalign-items:flex-start;\ntext-align:left;\nwidth:296px;\nmargin-bottom:2rem;\n'], ['\ndisplay:flex;\nalign-items:flex-start;\ntext-align:left;\nwidth:296px;\nmargin-bottom:2rem;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 40px;\n  height: 40px;\n  border-radius:50%;\n  background-image: url(\'', '\');\n  background-size: cover;\n  background-position: center;\n'], ['\n  width: 40px;\n  height: 40px;\n  border-radius:50%;\n  background-image: url(\'', '\');\n  background-size: cover;\n  background-position: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\ncolor: #2d4b5e;\nfont-size: 1.4rem;\n'], ['\ncolor: #2d4b5e;\nfont-size: 1.4rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\nfont-size:1.2rem;\ncolor: #2d4b5e;\ntext-transform:uppercase;\n'], ['\nfont-size:1.2rem;\ncolor: #2d4b5e;\ntext-transform:uppercase;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\nheight:40px;\npadding-left:10px;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\n'], ['\nheight:40px;\npadding-left:10px;\ndisplay:flex;\nflex-direction:column;\njustify-content:space-between;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);
var Avatar = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.avatarImg;
});
var Name = _styledComponents2.default.div(_templateObject3);
var Charge = _styledComponents2.default.div(_templateObject4);
var TextWrapper = _styledComponents2.default.div(_templateObject5);
var UserAvatar = function UserAvatar(_ref) {
  var avatarImg = _ref.avatarImg,
      name = _ref.name,
      charge = _ref.charge;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(Avatar, { avatarImg: avatarImg }),
    _react2.default.createElement(
      TextWrapper,
      null,
      _react2.default.createElement(
        Name,
        null,
        name,
        ' '
      ),
      _react2.default.createElement(
        Charge,
        null,
        charge
      )
    )
  );
};

UserAvatar.propTypes = {
  name: _propTypes2.default.string.isRequired,
  avatarImg: _propTypes2.default.string.isRequired,
  charge: _propTypes2.default.string.isRequired
};

exports.default = UserAvatar;