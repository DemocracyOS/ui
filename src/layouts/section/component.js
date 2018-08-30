import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.section`
    margin-left: 5.5rem;
    padding: 7rem 3.5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--white);
    &:nth-child(even) {
    background-color: #5c97bc;
    > h2 {
      color: var(--white);
    }
  }
`

const Section = ({ children }) => (
  <StyledSection>
    { children }
  </StyledSection>
)

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Section
