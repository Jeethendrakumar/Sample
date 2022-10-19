import React from 'react'
import PropTypes from 'prop-types'

const Content = ({children}) => <div className="content">{children}</div>

export const ContentItem = ({ children, item }) => (
  <div className={`content-${item}`}>{children}</div>
)

Content.propTypes = {
  children: PropTypes.any
}

ContentItem.propTypes = {
  children: PropTypes.any,
  item: PropTypes.string
}

export default Content
