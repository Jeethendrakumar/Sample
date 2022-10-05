import React from 'react'
import PropTypes from 'prop-types'

const Column = ({ children, span }) => (
  <div className={`col-sm-${span}`}>{children}</div>
)

Column.propTypes = {
  children: PropTypes.object,
  span: PropTypes.number
}

export default Column