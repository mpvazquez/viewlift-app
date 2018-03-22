import React from 'react'
import PropTypes from 'prop-types'

const FilmItem = ({ film }) => {
  return (
    <div className='filmitem-container'>
      <a className='filmitem-link'
        href={film.permaLink}
        target="_blank"
      >
        <img className='filmitem-image'
          src={film.images.image[0].src}
        />
        <div>{film.title}</div>
      </a>
    </div>
  )
}
FilmItem.proptypes = {
  film: PropTypes.object.isRequired
}

export default FilmItem
