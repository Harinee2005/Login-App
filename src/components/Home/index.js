import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  change = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="background">
        <div className="container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout onClick={this.change} />
          ) : (
            <Login onClick={this.change} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
