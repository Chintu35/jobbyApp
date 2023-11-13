import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {inputUserName: '', inputPassword: ''}

  submitForm = async event => {
    event.preventDefault()
    const {inputUserName, inputPassword} = this.state
    const userDetails = {inputUserName, inputPassword}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    if (response.ok) {
      console.log('Login Successful')
    } else {
      console.log('Login Fail')
    }
  }

  onChangeUserName = event => {
    this.setState({inputUserName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  renderLoginForm = () => {
    const {inputUserName, inputPassword} = this.state

    return (
      <form className="login-form">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
        />
        <div className="user-input-field">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input
            onChange={this.onChangeUserName}
            id="username"
            type="text"
            className="user-input"
            placeholder="Username"
          />
          <br />
          <label className="password-label" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            onChange={this.onChangePassword}
            id="password"
            type="password"
            className="user-password"
            placeholder="Password"
          />
        </div>
        <button
          className="login-button"
          type="submit"
          onClick={this.submitForm}
        >
          Login
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="login-form-bg-container">{this.renderLoginForm()}</div>
    )
  }
}

export default Login
