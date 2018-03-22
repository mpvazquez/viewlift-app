import React from 'react'
import axios from 'axios'

import FilmList from '../FilmList/FilmList'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      films: []
    }
  }

  componentDidMount() {
    axios.get('http://www.snagfilms.com/apis/films.json?limit=10')
      .then(response => {
        this.setState({
          films: response.data.films.film
        })
      })
  }

  render() {
    return (
      <div className='app-container'>
        <h1 className='app-title'>Films!</h1>
        <FilmList films={this.state.films} />
      </div>
    )
  }
}

export default App
