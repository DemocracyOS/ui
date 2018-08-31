'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nheight:85px;\nborder-top: 1px solid #e9e9e9;\nfont-size:1.4rem;\ndisplay:flex;\nflex-direction:column;\nalign-items:flex-start;\njustify-content:center;\nbox-sizing:border-box;\ncolor: #2d4b5e;\nfont-size:1.6em;\nbox-sizing:border-box;\nmargin:0px 20px 0px 20px;\nbox-sizing:border-box;\n'], ['\nheight:85px;\nborder-top: 1px solid #e9e9e9;\nfont-size:1.4rem;\ndisplay:flex;\nflex-direction:column;\nalign-items:flex-start;\njustify-content:center;\nbox-sizing:border-box;\ncolor: #2d4b5e;\nfont-size:1.6em;\nbox-sizing:border-box;\nmargin:0px 20px 0px 20px;\nbox-sizing:border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\npadding-bottom:1.3rem;\ntext-transform:uppercase;\n'], ['\npadding-bottom:1.3rem;\ntext-transform:uppercase;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\nfont-size:1.2rem;\n'], ['\nfont-size:1.2rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-family: var(--bold);\n'], ['\n  font-family: var(--bold);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);
var CommentaryItems = _styledComponents2.default.div(_templateObject2);

var LimitDate = _styledComponents2.default.div(_templateObject3);
var Span = _styledComponents2.default.span(_templateObject4);
var Social = function Social(_ref) {
  var commentaries = _ref.commentaries,
      limitDate = _ref.limitDate;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      CommentaryItems,
      null,
      _react2.default.createElement(
        Span,
        null,
        ' ',
        commentaries
      ),
      ' ',
      commentaries === 1 ? ' Comentario' : ' Comentarios'
    ),
    limitDate && _react2.default.createElement(
      LimitDate,
      null,
      _react2.default.createElement(
        'span',
        null,
        'Aportes habilitados hasta: '
      ),
      limitDate
    )
  );
};

Social.propTypes = {
  commentaries: _propTypes2.default.number.isRequired,
  limitDate: _propTypes2.default.string
};

exports.default = Social;