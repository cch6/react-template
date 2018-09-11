import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import routes from 'routes'
import './App.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '$redux/actions'
// import * as LoginServices from './services/Login'
import ReactLoading from 'react-loading'
// import config from '../config/index'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  /**
   * 获取登录信息
   */
  initLogin () {
    // LoginServices.registerLogin(()=>{
    this.props.login()
    // });
  }

  componentWillMount () {
    this.initLogin()
  }

  render () {
    if (this.props.loginLoading) {
      return (
        <ReactLoading type={'bars'} color={'red'} className='bonc-mung-loadding' />
      )
    }
    return (
      <div className='App'>
        <Router>
          {
            renderRoutes(routes)
          }
        </Router>
      </div>
    )
  }
}

App.propTypes = {
  login: PropTypes.func,
  loginLoading: PropTypes.bool
}

const mapStateToProps = state => ({
  data: state,
  loginLoading: false// state.login.loginLoading
})

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
