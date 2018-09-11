import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import * as loginServices from '../../../services/Login'
import config from '../../../config/index'
import './Header.scss'

const {LOGOUT_URL} = config

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
      time: ''
    }
    this.setDate = this.setDate.bind(this)
    this.logout = this.logout.bind(this)
    this.timer = null
  }
  setDate () {
    const date = moment().format('YYYY年M月D日')
    const time = moment().format('HH:mm:ss')
    this.setState({ date, time })
  }
  // 登出
  logout () {
    loginServices.logout().then(res => {
      console.log(res)
      if (res.data.logout) {
        // 如果成功退出，则退出门户登录
        window.location.href = LOGOUT_URL
      }
    }, e => {
      console.log(e)
    })
  }

  componentDidMount () {
    this.setDate()
    this.timer = window.setInterval(this.setDate, 1000)
  }
  componentWillUnmount () {
    window.clearImmediate(this.timer)
  }
  render () {
    return (
      <div className='header' >
        <h1 className='title'>xxxxxxx平台</h1>
        <div className='right'>
          <div className='option'>
            {
              this.props.isRootRole ? <a href={window.Config.CONFIG_URL} target='_Blank'>
                <Icon className='btn-icon' type='setting' />
              </a> : ''
            }
            <a onClick={this.logout}>
              <Icon className='btn-icon' type='logout' />
            </a>
            <span className='user-name'>
              用户：{this.props.loginUserName || ''}
            </span>
          </div>
          <div className='date-time'>
            <div className='date'>{this.state.date}</div>
            <div className='time'>{this.state.time}</div>
          </div>
        </div>

      </div>
    )
  }
}

Header.propTypes = {
  isRootRole: PropTypes.bool,
  loginUserName: PropTypes.string
}

const mapStateToProps = state => ({
  s: state,
  loginUserName: state.login.loginUserName,
  isRootRole: state.login.isRootRole
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
