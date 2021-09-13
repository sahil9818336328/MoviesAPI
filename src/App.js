import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Movie from './Singlemovie'
import $ from 'jquery'

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    $(function () {
      $('.loader').delay(2000).fadeOut('slow')
      $('#overlayer').delay(2000).fadeOut('slow')
      setLoading(false)
    })
  }, [])
  // REACT-ROUTER FUNCTIONALITY
  return (
    <>
      <div id='overlayer'>
        <span className='loader'>
          <span className='loader-inner'></span>
        </span>
      </div>
      {!loading && (
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/movies/:id' children={<Movie />} />
          </Switch>
        </Router>
      )}
    </>
  )
}

export default App
