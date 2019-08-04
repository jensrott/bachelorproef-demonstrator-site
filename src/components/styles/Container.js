import React from "react"
import styled from "styled-components"

import "./helpers/bootstrap-grid.css"

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
`

const Container = props => {
  return (
    <Wrapper>
      <div className="container"> {props.children}</div>
    </Wrapper>
  )
}

export default Container
