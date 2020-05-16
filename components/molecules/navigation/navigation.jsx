import React from "react"
import { arrayOf, shape, string } from "prop-types"

import StyledNavigation from "./navigation.styles"

const Navigation = ({ direction, items }) => 
   (
  <StyledNavigation direction={direction} >
        {
          items.map(item => (
            <a href={item.url}>{item.title}</a>
          ))
        }
    </StyledNavigation>
  )





Navigation.propTypes = {
  direction: string.isRequired,
  items: arrayOf(shape({
    title: string.isRequired,
    url: string.isRequired
  }))
}

Navigation.defaultProps = {
  direction: "horizontal",
  items: []
}

export default Navigation;
