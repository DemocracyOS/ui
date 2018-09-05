import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.section`
  width: 100%;
  margin-left: 5rem;
  padding: 8.4rem 4.3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  background-size: 60px 60px;
  background-image: linear-gradient(to right, #f2f5f8 1px, transparent 1px);
  }
`

const Participate = ({ children }) => (
  <StyledSection>
    { children }
  </StyledSection>
)

Participate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Participate
