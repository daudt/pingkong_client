import React from 'react'
import ReactDOM from 'react-dom'

import Leaderboard from './leaderboard'

import './app.less'

class App extends React.Component {
  render() {
    return (
      <section>
        <h1>King of Pong Mountain</h1>
        <Leaderboard />
      </section>
    )
  }
}

ReactDOM.render((
  <App />
), document.querySelector('main'))
