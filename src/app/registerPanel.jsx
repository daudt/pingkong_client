import React from 'react'

import Api from './api/'
import FacebookLoginControl from './facebookLoginControl'
import state from './state/'

class RegisterPanel extends React.Component {

  componentDidMount() {
    this._panelElement.classList.remove('hidden')
  }

  render() {
    return (
      <div className="panel hidden" ref={(el) => this._panelElement = el}>
        <div className="panel-section">
          LOGIN WITH FACEBOOK
          <FacebookLoginControl />
        </div>
        <div className="panel-section">
          REGISTER WITH EMAIL
          <div className="vertical-form">
            <label>
              Real Name
              <input className="name" ref={(el) => this._nameInput = el} />
            </label>
            <label>
              Nickname
              <input className="nickname" ref={(el) => this._nicknameInput = el} />
            </label>
            <label>
              Email
              <input className="email" ref={(el) => this._emailInput = el} />
            </label>
            <label>
              Password
              <input className="password" type="password" ref={(el) => this._passwordInput = el} />
            </label>
            <span>
              <button onClick={this._handleRegister.bind(this)}>
                REGISTER
              </button>
            </span>
          </div>
        </div>
        <span>
          <button onClick={this._handleCancel.bind(this)}>
            CANCEL
          </button>
        </span>
      </div>
    )
  }

  _handleRegister() {
    const email     = this._emailInput.value
    const password  = this._passwordInput.value
    const name      = this._nameInput.value
    const nickname  = this._nicknameInput.value
    Api.createUser(email, password, name, nickname).then(() => {
      state.page = 'leaderboard'
    })
  }

  _handleCancel() {
    state.page = 'leaderboard'
  }

}

export default RegisterPanel
