import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../../components/card'

const Grid = ({ projects }) => (
  <div>
    {projects.map((project, i) => (
      <Card project={project} key={i} />
    ))}
  </div>
)

Grid.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Grid
