import React from "react"
import {
  connect
} from "react-redux"
import * as Act from "actions"

class Login extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hideLogin: false
      }
    }
    login = () => {
      this.props.dispatch({
        type: Act.LOGIN,
        params: {
          account: "grf"
        }
      })
      this.setState({
        hideLogin: true
      },()=>{
        location.hash="/home"
      })
    }
    render() {
      const {
        app
      } = this.props
      const {
        hideLogin
      } = this.state
      return (
        <div className = "login">
          {!hideLogin && <div onClick = {this.login} > 登录 </div>}
          {hideLogin && <div> 欢迎登录 {app.account} </div>}
        </div>
        )
      }
    }

    const mapStateToProps = state => {
      return {
        app: state.app
      }
    }

    function mapDispatchToProps(dispatch) {
      return {
        dispatch: action => {
          dispatch(action)
        }
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Login)