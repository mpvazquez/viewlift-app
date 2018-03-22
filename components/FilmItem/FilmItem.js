import React from 'react'
import PropTypes from 'prop-types'

const FilmItem = ({ film }) => {
  console.log(film)
  return (
    <div className='filmitem-container'>
      {film.title}
    </div>
  )
}
FilmItem.proptypes = {
  film: PropTypes.object.isRequired
}

export default FilmItem
