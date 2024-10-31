import './index.css'
import {Component} from 'react'

class Message extends Component {
  render() {
    const {isLogin} = this.props
    if (isLogin === false) {
      return <h1 className="message">Please Login</h1>
    }
    return <h1 className="message">Welcome User</h1>
  }
}

export default Message
