import {useState} from 'react'

import './index.css'

const masterCredentials = {
  username: 'master',
  password: 'master123',
}

const studentCredentials = {
  username: 'student',
  password: 'student123',
}

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const loggingIn = () => {
    if (
      (username === masterCredentials.username &&
        password === masterCredentials.password) ||
      (username === studentCredentials.username &&
        password === studentCredentials.password)
    ) {
      const {history} = props
      history.push('/master')
      setErrMsg('')
    } else {
      setErrMsg('Please enter the correct credentials')
    }
  }

  const submitForm = event => {
    event.preventDefault()
    const {history} = props
    history.push('/SignUp')
  }

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        password
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  )

  const renderEmailField = () => (
    <>
      <label className="input-label" htmlFor="email">
        username
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
      <form className="form-container" onSubmit={submitForm}>
        <div className="input-container">{renderEmailField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <div className="buttons-container">
          <p className="err-msg">{errMsg}</p>
          <button onClick={loggingIn} type="button" className="login-button">
            Login
          </button>
          <button type="submit" className="login-button">
            Sign Up
          </button>
          <p className="signup">Not a user yet? Sign Up.</p>
        </div>
      </form>
    </div>
  )
}

export default Login
