'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  > div {\n    margin-bottom: 56px;\n  }\n  @media (max-width: 1400px) {\n    justify-content: space-around;\n  }\n'], ['\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  > div {\n    margin-bottom: 56px;\n  }\n  @media (max-width: 1400px) {\n    justify-content: space-around;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _component = require('../../components/card/component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledGrid = _styledComponents2.default.div(_templateObject);

var Grid = function Grid(_ref) {
  var projects = _ref.projects;
  return _react2.default.createElement(
    StyledGrid,
    null,
    projects.map(function (project, i) {
      return _react2.default.createElement(_component2.default, { project: project, key: i });
    })
  );
};

Grid.propTypes = {
  projects: _propTypes2.default.array.isRequired
};

exports.default = Grid;