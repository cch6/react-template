import React from 'react'
import ReactDOM from 'react-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '$redux/store'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          <Component />
        </LocaleProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
