import React from 'react'
import PropTypes from 'prop-types'

const getPage = (size, current_page, limit, changePage) => {
  const max_pages = Math.ceil(size / limit)
  let pages = [],
    page
  const prev = (
    <li
      className={`page-item ${current_page == 1 ? 'disabled' : ''}`}
      key="page_prev"
    >
      <div
        className="page-link"
        onClick={() => changePage(current_page - 1)}
      >
        &laquo;
      </div>
    </li>
  )
  const next = (
    <li
      className={`page-item ${current_page == max_pages ? 'disabled' : ''}`}
      key="page_next"
    >
      <div
        className="page-link"
        onClick={() => changePage(current_page + 1)}
      >
        &raquo;
      </div>
    </li>
  )

  pages.push(prev)
  for (let i = 1; i <= max_pages; i++) {
    page = (
      <li
        className={`page-item ${current_page == i ? 'active' : ''}`}
        key={`page_${i}`}
      >
        <div className="page-link" onClick={() => changePage(i)}>
          {i}
        </div>
      </li>
    )
    pages.push(page)
  }
  pages.push(next)

  return pages
}

const Pagination = ({ size, current_page, limit, changePage }) => {
  if (size <= limit) return ''
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {getPage(size, current_page, limit, changePage)}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  size: PropTypes.number,
  current_page: PropTypes.number,
  limit: PropTypes.number,
  changePage: PropTypes.func
}

export default Pagination
