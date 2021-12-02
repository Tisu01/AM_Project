import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import Home from 'scenes/home'
import { HomeNavigator, StartupNavigator } from '../stacks'
const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Startup')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Startup" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Startup" component={TabNavigator} />
    <Drawer.Screen name="Home" component={HomeNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator
