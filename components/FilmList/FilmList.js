import React from 'react'
import PropTypes from 'prop-types'

import FilmItem from '../FilmItem/FilmItem'

const FilmList = ({ films }) => {
  if (!films.length) return null;

  return (
    <div className='filmlist-container'>
      {
        films.map(film => <FilmItem film={film} key={film.id} />)
      }
    </div>
  )
}
FilmList.proptypes = {
  films: PropTypes.array.isRequired
}

export default FilmList
