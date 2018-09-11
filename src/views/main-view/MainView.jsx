import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
// NavLink as Link,
import './MainView.scss'
import Header from '../../components/main-view/header/Header'
import Nav from '../../components/main-view/nav/Nav'

class MainView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='main-view'>
        <Header />
        <Nav />
        <div className='view'>
          {renderRoutes(this.props.route.childRoutes)}
        </div>
      </div>
    )
  }
}
MainView.propTypes = {
  route: PropTypes.object
}

export default withRouter(MainView)
