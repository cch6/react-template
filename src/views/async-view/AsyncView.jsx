import React, { Component } from 'react'
import classnames from 'classnames'
import { Spin } from 'antd'
import Echarts from 'components/common/echarts/Echarts'
import { getEchartsOptions } from 'utils'
import * as demoDataServices from '../../services/DemoData'
import './AsyncView.scss'
import img from 'assets/images/logo.svg'

class AsyncView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      red: false,
      options: null
    }
  }
  handelClick = () => {
    this.setState({
      red: !this.state.red
    })
  }
  getCharts (data) {
    let options = getEchartsOptions(data, 'bar')
    this.setState({ options })
  }
  renderData () {
    this.setState({ data: demoDataServices.queryData() })
  }
  componentDidMount () {
    this.getCharts()
    this.timer = window.setInterval(() => {
      this.renderData()
    }, 1000)
  }
  componentWillUnmount () {
    window.clearInterval(this.timer)
  }

  render () {
    return (
      <div className='async-view'>
        <p>
          <img className='logo' src={img} alt='logo' />
          <span className='red'> I'm Async View.</span>
        </p>
        <div>
          <h1>classNames demo</h1>
          <button onClick={this.handelClick}>click me!</button>
          <p className={classnames('demo', { red: this.state.red })}>
            look my color
          </p>
        </div>
        <div className='echarts-box'>
          {
            this.state.options
              ? <Echarts options={this.state.options} data={this.state.data} />
              : <Spin />
          }
        </div>
      </div>

    )
  }
}

export default AsyncView
