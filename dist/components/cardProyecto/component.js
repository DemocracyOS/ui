'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 330px;\n  height:250px;\n  border-radius: 9px;\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);\n  transition: 0.3s;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  box-sizing:border-box;\n'], ['\n  width: 330px;\n  height:250px;\n  border-radius: 9px;\n  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);\n  transition: 0.3s;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  box-sizing:border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height:170px;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  align-items:flex-start;\n  box-sizing:border-box;\n  padding-left:20px;\n'], ['\n  width: 100%;\n  height:170px;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  align-items:flex-start;\n  box-sizing:border-box;\n  padding-left:20px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background:var(--primary-color);\n  height:40px;\n  width:100%;\n  border-top-left-radius:9px;\n  border-top-right-radius:9px;\n  font-size:1.3em;\n  color: #fff;\n  display:flex;\n  align-items:center;\n  text-transform:uppercase;\n  padding-left:20px;\n  box-sizing:border-box;\n'], ['\n  background:var(--primary-color);\n  height:40px;\n  width:100%;\n  border-top-left-radius:9px;\n  border-top-right-radius:9px;\n  font-size:1.3em;\n  color: #fff;\n  display:flex;\n  align-items:center;\n  text-transform:uppercase;\n  padding-left:20px;\n  box-sizing:border-box;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size:2em;\n  font-weight:900;\n  padding-top:1.5em;\n  padding-bottom:.5em;\n'], ['\n  font-size:2em;\n  font-weight:900;\n  padding-top:1.5em;\n  padding-bottom:.5em;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width:100%;\n  font-size:1.3em;\n  text-align:left;\n  color:var(--gray);\n\n'], ['\n  width:100%;\n  font-size:1.3em;\n  text-align:left;\n  color:var(--gray);\n\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  width:100%;\n  height:50px;\n  border-bottom-left-radius:9px;\n  border-bottom-right-radius:9px;\n  border-top: 1px solid var(--gray);\n  font-size:1.3em;\n  font-weight:100;\n  display:flex;\n  align-items:center;\n  box-sizing:border-box;\n  padding-left:20px;\n  color: var(--primary-color);\n  font-size:1.6em;\n'], ['\n  width:100%;\n  height:50px;\n  border-bottom-left-radius:9px;\n  border-bottom-right-radius:9px;\n  border-top: 1px solid var(--gray);\n  font-size:1.3em;\n  font-weight:100;\n  display:flex;\n  align-items:center;\n  box-sizing:border-box;\n  padding-left:20px;\n  color: var(--primary-color);\n  font-size:1.6em;\n']);

exports.default = cardProyecto;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardProyecto = _styledComponents2.default.div(_templateObject);

var CardContent = _styledComponents2.default.div(_templateObject2);
var TagTitle = _styledComponents2.default.div(_templateObject3);

var Title = _styledComponents2.default.div(_templateObject4);
var DateCreated = _styledComponents2.default.div(_templateObject5);
var SocialFooter = _styledComponents2.default.div(_templateObject6);

function cardProyecto(props) {
  return _react2.default.createElement(
    CardProyecto,
    null,
    _react2.default.createElement(
      TagTitle,
      null,
      props.tagTitle
    ),
    _react2.default.createElement(
      CardContent,
      null,
      _react2.default.createElement(
        Title,
        null,
        props.title
      ),
      _react2.default.createElement(
        DateCreated,
        null,
        props.dateCreated
      )
    ),
    _react2.default.createElement(
      SocialFooter,
      null,
      props.commentaryItems,
      ' ',
      props.commentaryItems === 1 ? ' Comentario' : ' Comentarios'
    )
  );
}