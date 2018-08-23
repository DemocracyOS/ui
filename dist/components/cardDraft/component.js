'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 80%;\n  height:135px;\n  border-radius: 9px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  display:flex;\n  flex-direction:row;\n  justify-content:space-between;\n  box-sizing:border-box;\n'], ['\n  width: 80%;\n  height:135px;\n  border-radius: 9px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  display:flex;\n  flex-direction:row;\n  justify-content:space-between;\n  box-sizing:border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 70%;\n  height:100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  align-items:flex-start;\n  box-sizing:border-box;\n  padding-left:20px;\n  padding-top:20px;\n'], ['\n  width: 70%;\n  height:100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  align-items:flex-start;\n  box-sizing:border-box;\n  padding-left:20px;\n  padding-top:20px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 30%;\n  height:100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  box-sizing:border-box;\n  padding-left:20px;\n'], ['\n  width: 30%;\n  height:100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n  box-sizing:border-box;\n  padding-left:20px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color:var(--primary-color);\n  font-size:1.3em;\n  text-align:left;\n  text-transform:uppercase;\n'], ['\n  color:var(--primary-color);\n  font-size:1.3em;\n  text-align:left;\n  text-transform:uppercase;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size:2.3em;\n  font-weight:900;\n  padding-bottom:.5em;\n  padding-top:.3em;\n'], ['\n  font-size:2.3em;\n  font-weight:900;\n  padding-bottom:.5em;\n  padding-top:.3em;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size:1.3em;\n  text-align:left;\n  color:var(--gray);\n\n'], ['\n  font-size:1.3em;\n  text-align:left;\n  color:var(--gray);\n\n']);

exports.default = cardDraft;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var LeftContainer = _styledComponents2.default.div(_templateObject2);
var RightContainer = _styledComponents2.default.div(_templateObject3);
var TagTitle = _styledComponents2.default.div(_templateObject4);

var Title = _styledComponents2.default.div(_templateObject5);

var DateCreated = _styledComponents2.default.div(_templateObject6);

function cardDraft(props) {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      LeftContainer,
      null,
      _react2.default.createElement(
        TagTitle,
        null,
        props.tagTitle
      ),
      _react2.default.createElement(
        Title,
        null,
        props.title
      ),
      _react2.default.createElement(
        DateCreated,
        null,
        'Creado el ',
        props.dateCreated
      )
    ),
    _react2.default.createElement(RightContainer, null)
  );
}