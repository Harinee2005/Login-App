import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {onClick} = this.props
    return (
      <button onClick={onClick} className="btn" type="button">
        Login
      </button>
    )
  }
}

export default Login
