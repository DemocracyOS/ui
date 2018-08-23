'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height:100px;\n  background: #5E98BA;\n  display:flex;\n  flex-direction:row;\n  justify-content:space-between;\n  align-items:center;\n  color:#fff;\n  z-index: 1;\n  font-size:15px;\n  margin-bottom:30px;\n'], ['\n  width: 100%;\n  height:100px;\n  background: #5E98BA;\n  display:flex;\n  flex-direction:row;\n  justify-content:space-between;\n  align-items:center;\n  color:#fff;\n  z-index: 1;\n  font-size:15px;\n  margin-bottom:30px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width:180px;\n  height:100%;\n  display:flex;\n  align-items:center;\n  padding-left:20px;\n  font-weight:900;\n'], ['\n  width:180px;\n  height:100%;\n  display:flex;\n  align-items:center;\n  padding-left:20px;\n  font-weight:900;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 600px;\n  height:100%;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n\n'], ['\n  width: 600px;\n  height:100%;\n  display:flex;\n  flex-direction:row;\n  align-items:center;\n\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  list-style:none;\n  padding-left:0;\n'], ['\n  list-style:none;\n  padding-left:0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\ncolor:#fff;\ndisplay:inline-block;\npadding:10px 20px;\n'], ['\ncolor:#fff;\ndisplay:inline-block;\npadding:10px 20px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\ncolor:#fff;\n'], ['\ncolor:#fff;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\nwidth:230px;\nheight:100%;\nborder-left:1px solid #5182A0;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\njustify-content:center;\n'], ['\nwidth:230px;\nheight:100%;\nborder-left:1px solid #5182A0;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\njustify-content:center;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\nbackground:#fff;\n'], ['\nbackground:#fff;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\ncolor:#fff;\nfont-weight:bold;\nfont-size:12px;\n'], ['\ncolor:#fff;\nfont-weight:bold;\nfont-size:12px;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\ncolor:#fff;\nfont-size:10px;\nfont-weight:100;\n'], ['\ncolor:#fff;\nfont-size:10px;\nfont-weight:100;\n']);

exports.default = navBar;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);
var Logo = _styledComponents2.default.div(_templateObject2);
var Links = _styledComponents2.default.div(_templateObject3);
var UL = _styledComponents2.default.ul(_templateObject4);
var MenuLink = _styledComponents2.default.li(_templateObject5);
var Notifications = _styledComponents2.default.div(_templateObject6);
var User = _styledComponents2.default.div(_templateObject7);
var ProfilePicture = _styledComponents2.default.img(_templateObject8);
var Name = _styledComponents2.default.div(_templateObject9);
var Charge = _styledComponents2.default.div(_templateObject10);

function navBar() {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(
      Logo,
      null,
      'Proyectos de ley abiertos'
    ),
    _react2.default.createElement(
      Links,
      null,
      _react2.default.createElement(
        UL,
        null,
        _react2.default.createElement(
          MenuLink,
          null,
          'Inicio'
        ),
        _react2.default.createElement(
          MenuLink,
          null,
          'Crear nuevo documento'
        ),
        _react2.default.createElement(
          MenuLink,
          null,
          'Borradores'
        ),
        _react2.default.createElement(
          MenuLink,
          null,
          'Proyectos en debate'
        )
      )
    ),
    _react2.default.createElement(
      Notifications,
      null,
      ' 1 notificacion'
    ),
    _react2.default.createElement(
      User,
      null,
      _react2.default.createElement(ProfilePicture, null),
      _react2.default.createElement(
        Name,
        null,
        'Jorge Garc\xEDa'
      ),
      _react2.default.createElement(
        Charge,
        null,
        'Asesor'
      )
    )
  );
}