import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {onClick} = this.props
    return (
      <button onClick={onClick} className="btn" type="button">
        Logout
      </button>
    )
  }
}

export default Logout
