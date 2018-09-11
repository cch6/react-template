import Imported from 'react-imported-component'
import MainView from 'views/main-view/MainView'
import SyncView from 'views/sync-view/SyncView'

// To see more options in https://github.com/theKashey/react-imported-component
const AsyncView = Imported(() =>
  import('views/async-view/AsyncView'))

export default [{
  path: '/',
  component: MainView,
  childRoutes: [{
    path: '/sync',
    component: SyncView
  },
  {
    path: '/async',
    component: AsyncView
  }
  ]
}]
