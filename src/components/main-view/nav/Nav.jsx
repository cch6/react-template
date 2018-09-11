import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import './Nav.scss'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const navs = [{
  name: 'sync页面',
  key: '/sync'
}, {
  name: 'async页面',
  key: '/async'
}]

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: '/sync'
    }
  }
  handleClick = ({key}) => {
    console.log('click ', key)
    console.log(this.props.location.pathname)
    this.setState({
      current: key
    })
    const oldPath = this.props.location.pathname
    if (oldPath !== key) {
      this.props.history.push(key)
    }
  }
  // 修复刷新后显示异常的bug
  fixCurrent () {
    const currentPath = this.props.location.pathname
    this.setState({current: currentPath})
  }
  componentDidMount () {
    this.fixCurrent()
  }
  render () {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode='horizontal'
      >
        {
          navs.map(el => {
            return (
              <Menu.Item key={el.key}>
                <Icon type='mail' />{el.name}
              </Menu.Item>
            )
          })
        }
        <SubMenu title={<span><Icon type='setting' />react 文档</span>}>
          <MenuItemGroup title='英文'>
            <Menu.Item key='redux'>
              <a href='http://redux.js.org/' target='_blank' rel='noopener noreferrer'>redux</a>
            </Menu.Item>
            <Menu.Item key='react-router'>
              <a href='https://reacttraining.com/react-router/web/example/basic' target='_blank' rel='noopener noreferrer'>react-router</a>
            </Menu.Item>
            <Menu.Item key='ant-design'>
              <a href='https://ant.design/docs/react/introduce' target='_blank' rel='noopener noreferrer'>ant-design</a>
            </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title='中文'>
            <Menu.Item key='redux-cn'>
              <a href='http://cn.redux.js.org/' target='_blank' rel='noopener noreferrer'>redux</a>
            </Menu.Item>
            <Menu.Item key='react-router-cn'>
              <a href='https://reacttraining.cn/web/guides/quick-start' target='_blank' rel='noopener noreferrer'>react-router</a>
            </Menu.Item>
            <Menu.Item key='ant-design-cn'>
              <a href='https://ant.design/docs/react/introduce-cn' target='_blank' rel='noopener noreferrer'>ant-design</a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}

Nav.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(Nav)
