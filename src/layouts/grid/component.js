import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../../components/card/component'

const StyledGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    margin-bottom: 56px;
  }
  @media (max-width: 1400px) {
    justify-content: space-around;
  }
`

const Grid = ({ projects }) => (
  <StyledGrid>
    {projects.map((project, i) => (
      <Card project={project} key={i} />
    ))}
  </StyledGrid>
)

Grid.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Grid
