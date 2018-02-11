/*
* @flow
*/
import React from 'react'
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'

import {
  StackNavigator,
  addNavigationHelpers,
  NavigationActions
} from 'react-navigation'

import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'

import routesConfig from './Routes'

export const AppNavigator = StackNavigator(
  routesConfig.routes,
  routesConfig.options
)

class App extends React.Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render () {
    const { dispatch, nav } = this.props
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
      addListener: createReduxBoundAddListener('root')
    })

    return <AppNavigator navigation={navigation} />
  }
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(App)
