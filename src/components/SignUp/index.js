import {useState, useRef} from 'react'

import emailjs from '@emailjs/browser'

import './index.css'

const SignUp = props => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const form = useRef()

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const backToLoggingIn = () => {
    const {history} = props
    history.push('/')
  }

  const onSignUp = event => {
    event.preventDefault()
    emailjs
      .sendForm(
        'service_6xiw8wy',
        'template_8omz0qc',
        form.current,
        'SsA2VyYq7EnWJE7U7',
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
  }

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        EMAIL
      </label>
      <input
        type="email"
        id="password"
        className="password-input-field"
        value={email}
        onChange={onChangeEmail}
        placeholder="Password"
      />
    </>
  )

  const renderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        USERNAME
      </label>
      <input
        type="text"
        id="email"
        className="email-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  )

  return (
    <div className="login-container">
      <form ref={form} className="form-container" onSubmit={onSignUp}>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <div className="buttons-container">
          <button type="submit" className="login-button">
            Sign Up
          </button>
          <button
            onClick={backToLoggingIn}
            type="button"
            className="login-button"
          >
            Back to Login In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
