import React from 'react'

import Api from './api/'
import FacebookLoginControl from './facebookLoginControl'
import Session from './session'
import state from './state/'

class LoginPanel extends React.Component {

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
          LOGIN WITH EMAIL
          <div className="vertical-form">
            <label>
              Email
              <input className="login-email" ref={(el) => this._emailInput = el} />
            </label>
            <label>
              Password
              <input className="login-password" ref={(el) => this._passwordInput = el} />
            </label>
            <span>
              <button onClick={this._handleLogin.bind(this)}>
                LOGIN
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

  _handleLogin() {
    const email     = this._emailInput.value
    const password  = this._passwordInput.value
    Api.loginUser(email, password).then((sessionData) => {
      Session.set(sessionData)
      window.location.reload(true)
    })
  }

  _handleCancel() {
    state.page = 'leaderboard'
  }

}

export default LoginPanel